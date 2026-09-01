import { NextResponse } from 'next/server'
import { isCloudflareImagesHashConfigured } from '@/lib/cloudflare-images'
import { CLOUDFLARE_IMAGE_PUBLIC_PATHS } from '@/lib/cloudflare-image-manifest'
import {
  CLOUDFLARE_IMAGES_ACCOUNT_ID,
  uploadCloudflareImageFromUrl,
} from '@/lib/cloudflare-images-upload'
import { absoluteUrl } from '@/lib/site-url'
import { upsertCloudflareImagesHash } from '@/lib/upsert-cloudflare-images-hash'

export const runtime = 'nodejs'
export const maxDuration = 60

const CONCURRENCY = 4

function cloudflareToken(): string | undefined {
  return process.env.CLOUDFLARE_API_TOKEN?.trim() || undefined
}

function cronSecret(): string | undefined {
  return process.env.CRON_SECRET?.trim() || undefined
}

function publicStatus() {
  const token = Boolean(cloudflareToken())
  const secret = Boolean(cronSecret())
  return {
    ok: true as const,
    configured: token && secret,
    cloudflareToken: token,
    cronSecret: secret,
    deliveryHash: isCloudflareImagesHashConfigured(),
  }
}

function isAuthorized(request: Request): boolean {
  const secret = cronSecret()
  const auth = request.headers.get('authorization')
  if (secret) {
    return auth === `Bearer ${secret}`
  }
  // Vercel Cron sends this header. Allow it only when CRON_SECRET is unset
  // so Images:Edit token alone can complete the first upload.
  return request.headers.get('x-vercel-cron') === '1'
}

async function syncImages() {
  const token = cloudflareToken()
  if (!token) {
    return { uploaded: 0, exists: 0, failed: CLOUDFLARE_IMAGE_PUBLIC_PATHS.length }
  }

  let uploaded = 0
  let exists = 0
  let failed = 0
  let hash: string | undefined

  for (let i = 0; i < CLOUDFLARE_IMAGE_PUBLIC_PATHS.length; i += CONCURRENCY) {
    const batch = CLOUDFLARE_IMAGE_PUBLIC_PATHS.slice(i, i + CONCURRENCY)
    const results = await Promise.all(
      batch.map((localPath) =>
        uploadCloudflareImageFromUrl({
          token,
          accountId: CLOUDFLARE_IMAGES_ACCOUNT_ID,
          localPath,
          sourceUrl: absoluteUrl(localPath),
        }),
      ),
    )
    for (const result of results) {
      if (result.hash && !hash) {
        hash = result.hash
      }
      if (result.exists) {
        exists += 1
        continue
      }
      if (result.ok) {
        uploaded += 1
        continue
      }
      failed += 1
    }
  }

  return { uploaded, exists, failed, hash }
}

export async function GET(request: Request) {
  if (!cloudflareToken() || !isAuthorized(request)) {
    return NextResponse.json(publicStatus())
  }

  const summary = await syncImages()
  if (summary.hash) {
    try {
      await upsertCloudflareImagesHash(summary.hash)
    } catch {
      // Hash is public; delivery still works from the generated build file.
    }
  }
  const status = summary.failed > 0 ? 500 : 200
  return NextResponse.json({ ...publicStatus(), ...summary }, { status })
}

export async function POST(request: Request) {
  return GET(request)
}

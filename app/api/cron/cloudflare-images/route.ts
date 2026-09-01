import { NextResponse } from 'next/server'
import { CLOUDFLARE_IMAGE_PUBLIC_PATHS } from '@/lib/cloudflare-image-manifest'
import {
  CLOUDFLARE_IMAGES_ACCOUNT_ID,
  uploadCloudflareImageFromUrl,
} from '@/lib/cloudflare-images-upload'
import { absoluteUrl } from '@/lib/site-url'

export const runtime = 'nodejs'
export const maxDuration = 60

const CONCURRENCY = 4

async function authorize(request: Request): Promise<NextResponse | null> {
  const cronSecret = process.env.CRON_SECRET?.trim()
  const token = process.env.CLOUDFLARE_API_TOKEN?.trim()
  if (!cronSecret || !token) {
    return NextResponse.json({ error: 'Not configured' }, { status: 503 })
  }
  const auth = request.headers.get('authorization')
  if (auth !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return null
}

async function syncImages() {
  const token = process.env.CLOUDFLARE_API_TOKEN?.trim()
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
  const denied = await authorize(request)
  if (denied) {
    return denied
  }
  const summary = await syncImages()
  const status = summary.failed > 0 ? 500 : 200
  return NextResponse.json(summary, { status })
}

export async function POST(request: Request) {
  return GET(request)
}

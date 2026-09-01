import { NextResponse } from 'next/server'
import { isCloudflareImagesHashConfigured } from '@/lib/cloudflare-images'
import { CLOUDFLARE_IMAGE_PUBLIC_PATHS } from '@/lib/cloudflare-image-manifest'
import {
  CLOUDFLARE_IMAGES_ACCOUNT_ID,
  fetchCloudflareImagesHash,
  uploadCloudflareImageFromUrl,
} from '@/lib/cloudflare-images-upload'
import { absoluteUrl } from '@/lib/site-url'
import { upsertCloudflareImagesHash } from '@/lib/upsert-cloudflare-images-hash'

/** Edge egress is a different IP space than iad1 Lambda (401/10000 / 9109). */
export const runtime = 'edge'

const CONCURRENCY = 4

function cloudflareToken(): string | undefined {
  return process.env.CLOUDFLARE_API_TOKEN?.trim() || undefined
}

function cronSecret(): string | undefined {
  return process.env.CRON_SECRET?.trim() || undefined
}

function imagesWorkerUrl(): string | undefined {
  return process.env.CLOUDFLARE_IMAGES_WORKER_URL?.trim() || undefined
}

function publicStatus() {
  const token = Boolean(cloudflareToken())
  const secret = Boolean(cronSecret())
  const worker = Boolean(imagesWorkerUrl())
  return {
    ok: true as const,
    configured: (token || worker) && secret,
    cloudflareToken: token,
    imagesWorker: worker,
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

type WorkerSyncSummary = {
  uploaded: number
  exists: number
  failed: number
  hash?: string
  via?: 'worker'
}

async function syncViaImagesWorker(): Promise<WorkerSyncSummary | null> {
  const workerUrl = imagesWorkerUrl()
  const secret = cronSecret()
  if (!workerUrl || !secret) {
    return null
  }
  try {
    const res = await fetch(new URL('/sync', workerUrl).toString(), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secret}`,
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(60000),
    })
    const body: unknown = await res.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return null
    }
    const record = body as {
      uploaded?: unknown
      exists?: unknown
      failed?: unknown
      hash?: unknown
    }
    if (typeof record.uploaded !== 'number' || typeof record.failed !== 'number') {
      return null
    }
    return {
      uploaded: record.uploaded,
      exists: typeof record.exists === 'number' ? record.exists : 0,
      failed: record.failed,
      hash: typeof record.hash === 'string' ? record.hash : undefined,
      via: 'worker',
    }
  } catch {
    return null
  }
}

async function syncImages() {
  const workerSummary = await syncViaImagesWorker()
  if (workerSummary) {
    return workerSummary
  }

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

async function syncImagesWithHash() {
  const summary = await syncImages()
  const token = cloudflareToken()
  if (summary.hash || !token) {
    return summary
  }
  const listedHash = await fetchCloudflareImagesHash(
    token,
    CLOUDFLARE_IMAGES_ACCOUNT_ID,
  )
  return { ...summary, hash: listedHash }
}

export async function GET(request: Request) {
  if ((!cloudflareToken() && !imagesWorkerUrl()) || !isAuthorized(request)) {
    return NextResponse.json(publicStatus())
  }

  const summary = await syncImagesWithHash()
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

/**
 * Hosted Cloudflare Images ingest for arroyoskyeview.com.
 *
 * Uses env.IMAGES.hosted (no REST API token, so Vercel/GitHub IP
 * allowlists on CLOUDFLARE_API_TOKEN do not apply). Deploy with:
 *   npx wrangler deploy --config workers/hosted-images/wrangler.jsonc
 *
 * Keep IMAGE_PATHS in sync with lib/cloudflare-image-manifest.ts.
 */

const IMAGE_PATHS = [
  '/images/brand/dr-jan-duffy.png',
  '/images/floor-plans/beverly-floorplan.jpg',
  '/images/floor-plans/beverly-model.jpg',
  '/images/floor-plans/captiva-floorplan.jpg',
  '/images/floor-plans/captiva-model.jpg',
  '/images/floor-plans/delray-floorplan.jpg',
  '/images/floor-plans/delray-model.jpg',
  '/images/floor-plans/floor-plans-1.jpg',
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-5.jpg',
  '/images/hero/hero-6.jpg',
  '/images/hero/hero-7.jpg',
  '/images/hero/hero-8.jpg',
  '/images/hero/hero-9.jpg',
  '/images/hero/luxury-hero-skye-canyon.jpg',
  '/images/homes/homes-1.jpg',
  '/images/homes/homes-2.jpg',
  '/images/homes/homes-3.jpg',
  '/images/homes/homes-4.jpg',
  '/images/homes/homes-5.jpg',
  '/images/homes/homes-6.jpg',
  '/images/homes/homes-7.jpg',
  '/images/homes/homes-8.jpg',
  '/images/homes/homes-9.jpg',
  '/images/homes/homes-10.jpg',
  '/images/homes/homes-11.jpg',
  '/images/homes/homes-12.jpg',
  '/images/homes/homes-13.jpg',
  '/images/homes/homes-14.jpg',
  '/images/homes/homes-15.jpg',
  '/images/homes/homes-16.jpg',
  '/images/homes/homes-17.jpg',
  '/images/homes/homes-18.jpg',
  '/images/homes/homes-19.jpg',
  '/images/homes/homes-20.jpg',
] as const

const CONCURRENCY = 4

type ImageMetadata = {
  id: string
  variants: string[]
}

type HostedImages = {
  upload: (
    image: ReadableStream | ArrayBuffer,
    options: {
      id?: string
      filename?: string
      requireSignedURLs?: boolean
      metadata?: Record<string, string>
      creator?: string
    },
  ) => Promise<ImageMetadata>
  image: (imageId: string) => {
    details: () => Promise<ImageMetadata | null>
  }
}

type WorkerEnv = {
  IMAGES: { hosted: HostedImages }
  ORIGIN: string
  CREATOR: string
  UPLOAD_SECRET?: string
}

type IngestResult = {
  id: string
  ok: boolean
  exists: boolean
  hash?: string
  status?: number
  error?: string
}

function customId(localPath: string): string {
  return localPath.replace(/^\/+/, '').replace(/\.[^.]+$/, '')
}

function parseDeliveryHash(variant: string | undefined): string | undefined {
  if (!variant) {
    return undefined
  }
  const match = /imagedelivery\.net\/([^/]+)\//.exec(variant)
  return match?.[1]
}

function filenameOf(localPath: string): string {
  const parts = localPath.split('/')
  return parts[parts.length - 1] ?? 'image.jpg'
}

function json(data: unknown, status = 200): Response {
  return Response.json(data, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })
}

function isAuthorized(request: Request, env: WorkerEnv): boolean {
  const secret = env.UPLOAD_SECRET?.trim()
  if (!secret) {
    return false
  }
  return request.headers.get('authorization') === `Bearer ${secret}`
}

async function ingestOne(
  env: WorkerEnv,
  localPath: string,
): Promise<IngestResult> {
  const id = customId(localPath)
  const existing = await env.IMAGES.hosted.image(id).details()
  if (existing?.variants?.[0]) {
    return {
      id,
      ok: true,
      exists: true,
      hash: parseDeliveryHash(existing.variants[0]),
    }
  }

  const sourceUrl = `${env.ORIGIN.replace(/\/$/, '')}${localPath}`
  const upstream = await fetch(sourceUrl, {
    signal: AbortSignal.timeout(20000),
  })
  if (!upstream.ok || !upstream.body) {
    return {
      id,
      ok: false,
      exists: false,
      status: upstream.status,
      error: `origin HTTP ${upstream.status}`,
    }
  }

  try {
    const uploaded = await env.IMAGES.hosted.upload(upstream.body, {
      id,
      filename: filenameOf(localPath),
      requireSignedURLs: false,
      creator: env.CREATOR,
      metadata: { git: id, site: env.CREATOR },
    })
    return {
      id,
      ok: true,
      exists: false,
      hash: parseDeliveryHash(uploaded.variants[0]),
    }
  } catch (error) {
    const after = await env.IMAGES.hosted.image(id).details()
    if (after?.variants?.[0]) {
      return {
        id,
        ok: true,
        exists: true,
        hash: parseDeliveryHash(after.variants[0]),
      }
    }
    const message = error instanceof Error ? error.message : 'upload failed'
    return { id, ok: false, exists: false, error: message }
  }
}

async function ingestAll(env: WorkerEnv): Promise<{
  uploaded: number
  exists: number
  failed: number
  hash?: string
  results: IngestResult[]
}> {
  const results: IngestResult[] = []
  for (let i = 0; i < IMAGE_PATHS.length; i += CONCURRENCY) {
    const batch = IMAGE_PATHS.slice(i, i + CONCURRENCY)
    const batchResults = await Promise.all(
      batch.map((localPath) => ingestOne(env, localPath)),
    )
    results.push(...batchResults)
  }

  let uploaded = 0
  let exists = 0
  let failed = 0
  let hash: string | undefined
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
  return { uploaded, exists, failed, hash, results }
}

const worker = {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const url = new URL(request.url)
    if (request.method === 'GET' && url.pathname === '/') {
      return json({
        ok: true,
        service: 'arroyoskyeview-hosted-images',
        paths: IMAGE_PATHS.length,
      })
    }

    if (request.method === 'POST' && (url.pathname === '/' || url.pathname === '/sync')) {
      if (!isAuthorized(request, env)) {
        return json(
          {
            ok: false,
            error: 'unauthorized',
            hint: 'Set wrangler secret UPLOAD_SECRET, or rely on the hourly cron trigger.',
          },
          401,
        )
      }
      const summary = await ingestAll(env)
      const status = summary.failed > 0 ? 500 : 200
      return json({ ok: summary.failed === 0, ...summary }, status)
    }

    return json({ ok: false, error: 'not found' }, 404)
  },

  async scheduled(_controller: unknown, env: WorkerEnv): Promise<void> {
    await ingestAll(env)
  },
}

export default worker

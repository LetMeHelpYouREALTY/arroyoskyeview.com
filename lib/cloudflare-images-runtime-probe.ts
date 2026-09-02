import { probeCloudflareImagesToken } from '@/lib/cloudflare-images-list'
import {
  CLOUDFLARE_IMAGES_ACCOUNT_ID,
  uploadCloudflareImageFromUrl,
} from '@/lib/cloudflare-images-upload'
import { absoluteUrl } from '@/lib/site-url'
import { upsertCloudflareImagesHash } from '@/lib/upsert-cloudflare-images-hash'

export const HERO_PUBLIC_PATH = '/images/hero/luxury-hero-skye-canyon.jpg'

export type CloudflareImagesRuntimeName = 'edge' | 'nodejs-sfo1'

export type CloudflareEgressTrace = {
  loc?: string
  colo?: string
  ip?: string
}

export type CloudflareImagesRuntimeProbe = {
  runtime: CloudflareImagesRuntimeName
  cloudflareToken: boolean
  egress: CloudflareEgressTrace | null
  api: Awaited<ReturnType<typeof probeCloudflareImagesToken>> | null
  upload: Awaited<ReturnType<typeof uploadCloudflareImageFromUrl>> | null
  upserted: boolean
}

export function isCronAuthorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET?.trim()
  const auth = request.headers.get('authorization')
  if (secret) {
    return auth === `Bearer ${secret}`
  }
  return request.headers.get('x-vercel-cron') === '1'
}

export async function fetchCloudflareEgressTrace(): Promise<CloudflareEgressTrace | null> {
  try {
    const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace', {
      signal: AbortSignal.timeout(4000),
    })
    const text = await res.text()
    return {
      loc: /(?:^|\n)loc=(\w+)/.exec(text)?.[1],
      colo: /(?:^|\n)colo=(\w+)/.exec(text)?.[1],
      ip: /(?:^|\n)ip=([^\n]+)/.exec(text)?.[1],
    }
  } catch {
    return null
  }
}

export async function probeCloudflareImagesRuntime(options: {
  runtime: CloudflareImagesRuntimeName
  tryUpload: boolean
}): Promise<CloudflareImagesRuntimeProbe> {
  const egress = await fetchCloudflareEgressTrace()
  const token = process.env.CLOUDFLARE_API_TOKEN?.trim()
  if (!token) {
    return {
      runtime: options.runtime,
      cloudflareToken: false,
      egress,
      api: null,
      upload: null,
      upserted: false,
    }
  }

  const api = await probeCloudflareImagesToken(
    token,
    CLOUDFLARE_IMAGES_ACCOUNT_ID,
  )
  if (!options.tryUpload) {
    return {
      runtime: options.runtime,
      cloudflareToken: true,
      egress,
      api,
      upload: null,
      upserted: false,
    }
  }

  const upload = await uploadCloudflareImageFromUrl({
    token,
    accountId: CLOUDFLARE_IMAGES_ACCOUNT_ID,
    localPath: HERO_PUBLIC_PATH,
    sourceUrl: absoluteUrl(HERO_PUBLIC_PATH),
  })
  const hash = upload.hash || api.hash
  const upserted = hash ? await upsertCloudflareImagesHash(hash) : false
  return {
    runtime: options.runtime,
    cloudflareToken: true,
    egress,
    api,
    upload,
    upserted,
  }
}

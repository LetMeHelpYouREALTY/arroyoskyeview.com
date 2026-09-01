/**
 * Cloudflare Images list (REST).
 *
 * Prefer GET /accounts/{account_id}/images/v2 (continuation_token).
 * GET /accounts/{account_id}/images/v1 is deprecated and used only as fallback.
 * Both require per_page between 10 and 10000.
 */

export const CLOUDFLARE_IMAGES_CREATOR = 'arroyoskyeview.com'

const LIST_PER_PAGE_MIN = 10
const LIST_PER_PAGE_MAX = 10000
const LIST_PER_PAGE_V2 = 1000

export type CloudflareListedImage = {
  id?: string
  creator?: string
  filename?: string
  meta?: unknown
  requireSignedURLs?: boolean
  uploaded?: string
  variants?: string[]
}

type ListJson = {
  success?: boolean
  errors?: Array<{ code?: number; message?: string }>
  result?: {
    images?: CloudflareListedImage[]
    continuation_token?: string | null
  }
}

export type CloudflareImagesListResult = {
  ok: boolean
  status: number
  api: 'v2' | 'v1'
  images: CloudflareListedImage[]
  continuationToken?: string
  hash?: string
  code?: number
  message?: string
}

function clampPerPage(value: number | undefined): number {
  const n =
    typeof value === 'number' && Number.isFinite(value)
      ? Math.round(value)
      : LIST_PER_PAGE_MIN
  return Math.min(LIST_PER_PAGE_MAX, Math.max(LIST_PER_PAGE_MIN, n))
}

function apiError(json: ListJson | null): { code?: number; message?: string } {
  const error = json?.errors?.[0]
  return {
    code: error?.code,
    message: typeof error?.message === 'string' ? error.message.slice(0, 120) : '',
  }
}

export function parseCloudflareDeliveryHash(variant: unknown): string | undefined {
  if (typeof variant !== 'string') {
    return undefined
  }
  const match = variant.match(/imagedelivery\.net\/([^/]+)\//)
  return match?.[1]
}

export function hashFromCloudflareImages(
  images: CloudflareListedImage[] | undefined,
): string | undefined {
  if (!Array.isArray(images)) {
    return undefined
  }
  for (const image of images) {
    const variants = Array.isArray(image.variants) ? image.variants : []
    for (const variant of variants) {
      const hash = parseCloudflareDeliveryHash(variant)
      if (hash) {
        return hash
      }
    }
  }
  return undefined
}

function shouldFallbackToV1(status: number): boolean {
  return (
    status === 400 ||
    status === 404 ||
    status === 405 ||
    status === 410 ||
    status === 501
  )
}

async function listV2(
  headers: HeadersInit,
  accountId: string,
  options: {
    perPage?: number
    continuationToken?: string
    creator?: string
  } = {},
): Promise<CloudflareImagesListResult> {
  const url = new URL(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v2`,
  )
  url.searchParams.set('per_page', String(clampPerPage(options.perPage)))
  if (options.continuationToken) {
    url.searchParams.set('continuation_token', options.continuationToken)
  }
  if (options.creator !== undefined) {
    url.searchParams.set('creator', options.creator)
  }
  const res = await fetch(url, { headers })
  const json = (await res.json().catch(() => null)) as ListJson | null
  const images = Array.isArray(json?.result?.images) ? json.result.images : []
  const token = json?.result?.continuation_token
  return {
    ok: res.ok,
    status: res.status,
    api: 'v2',
    images,
    continuationToken: typeof token === 'string' && token ? token : undefined,
    hash: hashFromCloudflareImages(images),
    ...apiError(json),
  }
}

async function listV1(
  headers: HeadersInit,
  accountId: string,
  options: { perPage?: number; page?: number; creator?: string } = {},
): Promise<CloudflareImagesListResult> {
  const url = new URL(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
  )
  const page =
    typeof options.page === 'number' && options.page >= 1
      ? Math.round(options.page)
      : 1
  url.searchParams.set('page', String(page))
  url.searchParams.set('per_page', String(clampPerPage(options.perPage)))
  if (options.creator !== undefined) {
    url.searchParams.set('creator', options.creator)
  }
  const res = await fetch(url, { headers })
  const json = (await res.json().catch(() => null)) as ListJson | null
  const images = Array.isArray(json?.result?.images) ? json.result.images : []
  return {
    ok: res.ok,
    status: res.status,
    api: 'v1',
    images,
    hash: hashFromCloudflareImages(images),
    ...apiError(json),
  }
}

export async function listCloudflareImages(
  token: string,
  accountId: string,
  options: { perPage?: number; creator?: string } = {},
): Promise<CloudflareImagesListResult> {
  const headers = { Authorization: `Bearer ${token}` }
  const v2 = await listV2(headers, accountId, {
    perPage: options.perPage ?? LIST_PER_PAGE_V2,
    creator: options.creator,
  })
  if (v2.ok || !shouldFallbackToV1(v2.status)) {
    return v2
  }
  return listV1(headers, accountId, {
    page: 1,
    perPage: options.perPage,
    creator: options.creator,
  })
}

export async function fetchCloudflareImagesHash(
  token: string,
  accountId: string,
): Promise<string | undefined> {
  const listed = await listCloudflareImages(token, accountId, {
    perPage: LIST_PER_PAGE_MIN,
  })
  return listed.hash
}

export type CloudflareImagesTokenProbe = {
  ok: boolean
  status: number
  api: 'v2' | 'v1'
  code?: number
  message?: string
  hash?: string
  imageCount: number
  locationRestricted: boolean
}

/** One Images list call from the current runtime IP (Vercel serverless vs build). */
export async function probeCloudflareImagesToken(
  token: string,
  accountId: string,
): Promise<CloudflareImagesTokenProbe> {
  const listed = await listCloudflareImages(token, accountId, {
    perPage: LIST_PER_PAGE_MIN,
  })
  const message = listed.message || ''
  return {
    ok: listed.ok,
    status: listed.status,
    api: listed.api,
    code: listed.code,
    message,
    hash: listed.hash,
    imageCount: listed.images.length,
    locationRestricted:
      listed.code === 9109 || /from location/i.test(message),
  }
}

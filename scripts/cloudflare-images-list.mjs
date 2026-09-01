/**
 * Cloudflare Images list helpers.
 *
 * Prefer List V2 (continuation_token). List V1 is deprecated
 * (GET /accounts/{account_id}/images/v1) and is only a fallback.
 *
 * Official query floors (both v1 and v2): per_page minimum 10, maximum 10000.
 * Do not probe with per_page=1 — that is below the documented minimum.
 *
 * V2: https://developers.cloudflare.com/api/resources/images/subresources/v2/methods/list/
 * V1 (deprecated): https://developers.cloudflare.com/api/resources/images/subresources/v1/methods/list/
 */
export const LIST_PER_PAGE_MIN = 10
export const LIST_PER_PAGE_MAX = 10000
export const LIST_PER_PAGE_V2 = 1000
export const IMAGES_CREATOR = 'arroyoskyeview.com'

function apiError(json) {
  const error = json?.errors?.[0]
  return {
    code: error?.code,
    message: typeof error?.message === 'string' ? error.message.slice(0, 120) : '',
  }
}

export function clampImagesPerPage(value) {
  const n = typeof value === 'number' && Number.isFinite(value) ? Math.round(value) : LIST_PER_PAGE_MIN
  return Math.min(LIST_PER_PAGE_MAX, Math.max(LIST_PER_PAGE_MIN, n))
}

/** Parse the public account hash from an imagedelivery.net variant URL. */
export function parseDeliveryHash(variant) {
  if (typeof variant !== 'string') {
    return undefined
  }
  const match = variant.match(/imagedelivery\.net\/([^/]+)\//)
  return match?.[1]
}

export function hashFromImages(images) {
  if (!Array.isArray(images)) {
    return undefined
  }
  for (const image of images) {
    const variants = Array.isArray(image?.variants) ? image.variants : []
    for (const variant of variants) {
      const hash = parseDeliveryHash(variant)
      if (hash) {
        return hash
      }
    }
  }
  return undefined
}

export function imagesFromListJson(json) {
  return Array.isArray(json?.result?.images) ? json.result.images : []
}

function shouldFallbackToV1(status) {
  return status === 400 || status === 404 || status === 405 || status === 410 || status === 501
}

/**
 * GET /accounts/{account_id}/images/v2
 * Query: continuation_token, creator, per_page (10–10000), sort_order, meta.[]=
 */
export async function listImagesV2(headers, accountId, options = {}) {
  const url = new URL(`https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v2`)
  url.searchParams.set('per_page', String(clampImagesPerPage(options.perPage)))
  if (options.continuationToken) {
    url.searchParams.set('continuation_token', options.continuationToken)
  }
  if (options.creator !== undefined) {
    url.searchParams.set('creator', options.creator)
  }
  if (options.sortOrder === 'asc' || options.sortOrder === 'desc') {
    url.searchParams.set('sort_order', options.sortOrder)
  }
  if (options.metaSite) {
    url.searchParams.set('meta.site[eq]', options.metaSite)
  }
  const res = await fetch(url, { headers })
  const json = await res.json().catch(() => null)
  const images = imagesFromListJson(json)
  const continuationToken =
    typeof json?.result?.continuation_token === 'string' && json.result.continuation_token
      ? json.result.continuation_token
      : undefined
  return {
    ok: res.ok,
    status: res.status,
    api: 'v2',
    json,
    images,
    continuationToken,
    hash: hashFromImages(images),
    ...apiError(json),
  }
}

/**
 * Deprecated: GET /accounts/{account_id}/images/v1
 * Query: creator, page (min 1), per_page (10–10000)
 */
export async function listImagesV1(headers, accountId, options = {}) {
  const url = new URL(`https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`)
  const page = typeof options.page === 'number' && options.page >= 1 ? Math.round(options.page) : 1
  url.searchParams.set('page', String(page))
  url.searchParams.set('per_page', String(clampImagesPerPage(options.perPage)))
  if (options.creator !== undefined) {
    url.searchParams.set('creator', options.creator)
  }
  const res = await fetch(url, { headers })
  const json = await res.json().catch(() => null)
  const images = imagesFromListJson(json)
  return {
    ok: res.ok,
    status: res.status,
    api: 'v1',
    json,
    images,
    continuationToken: undefined,
    hash: hashFromImages(images),
    ...apiError(json),
  }
}

/** One page: v2 first, deprecated v1 if v2 is missing/invalid. */
export async function listImages(headers, accountId, options = {}) {
  const v2 = await listImagesV2(headers, accountId, options)
  if (v2.ok || !shouldFallbackToV1(v2.status)) {
    return v2
  }
  const v1 = await listImagesV1(headers, accountId, {
    page: options.page || 1,
    perPage: options.perPage,
    creator: options.creator,
  })
  return { ...v1, v2Status: v2.status }
}

/** Auth probe: one page at the documented per_page minimum. Empty accounts still 200. */
export async function probeImages(headers, accountId) {
  const listed = await listImages(headers, accountId, { perPage: LIST_PER_PAGE_MIN })
  return {
    ok: listed.ok,
    status: listed.status,
    json: listed.json,
    api: listed.api,
    hash: listed.hash,
    code: listed.code,
    message: listed.message,
  }
}

export async function listAllImages(headers, accountId, options = {}) {
  const perPage = clampImagesPerPage(options.perPage || LIST_PER_PAGE_V2)
  const images = []
  const first = await listImagesV2(headers, accountId, { ...options, perPage })
  if (!first.ok && shouldFallbackToV1(first.status)) {
    let page = 1
    while (page <= 20) {
      const listed = await listImagesV1(headers, accountId, {
        page,
        perPage,
        creator: options.creator,
      })
      if (!listed.ok) {
        return { ...listed, images, hash: hashFromImages(images), v2Status: first.status }
      }
      images.push(...listed.images)
      if (listed.images.length < perPage) {
        break
      }
      page += 1
    }
    return {
      ok: true,
      status: 200,
      api: 'v1',
      images,
      hash: hashFromImages(images),
      v2Status: first.status,
    }
  }
  if (!first.ok) {
    return { ...first, images: [] }
  }
  images.push(...first.images)
  let continuationToken = first.continuationToken
  let pages = 1
  while (continuationToken && pages < 20) {
    const next = await listImagesV2(headers, accountId, {
      ...options,
      perPage,
      continuationToken,
    })
    if (!next.ok) {
      break
    }
    images.push(...next.images)
    continuationToken = next.continuationToken
    pages += 1
  }
  return {
    ok: true,
    status: 200,
    api: 'v2',
    images,
    hash: hashFromImages(images),
    continuationToken,
  }
}

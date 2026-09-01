/**
 * Cloudflare Images delivery for this site.
 *
 * Hosting stays on Vercel. DNS can stay on Cloudflare (gray cloud).
 * Image binaries belong on Cloudflare Images (imagedelivery.net) or a
 * custom Images host — never orange-cloud the Vercel apex.
 *
 * Set CLOUDFLARE_IMAGES_HASH (server), NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH,
 * or let `npm run build` write lib/cloudflare-images-hash.generated.ts after
 * CLOUDFLARE_API_TOKEN uploads. Optional custom host:
 * NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOST (no trailing slash).
 *
 * Team Images account (public): 2cc579c1ec9e426ed585e933ebf4753b
 * Team hash on sienalasvegas.com: byE6BTe9lNqo21V57n4aPQ
 * Do not default that hash here until custom IDs are uploaded — they 404
 * (probed from production 2026-09-01).
 *
 * next/image: pass site paths to SiteImage (app/components/site-image.tsx).
 * Do not set a global images.loaderFile — RealScout listing photos must keep
 * the Vercel optimizer. Cloudflare flexible variants are applied per image.
 *
 * Flexible variants (Cloudflare Images, 2026):
 * https://imagedelivery.net/<HASH>/<IMAGE_ID>/w=<WIDTH>,q=<QUALITY>
 */

import { GENERATED_CLOUDFLARE_IMAGES_HASH } from '@/lib/cloudflare-images-hash.generated'

const DEFAULT_VARIANT = 'public'
const DEFAULT_HOST = 'https://imagedelivery.net'

function readEnv(name: string): string | undefined {
  // Bracket access so Next.js does not inline an empty string at build time.
  const value = process.env[name]
  return typeof value === 'string' && value.trim() ? value.trim() : undefined
}

function imagesHost(): string {
  const host = readEnv('NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOST')
  if (host) {
    return host.replace(/\/$/, '')
  }
  return DEFAULT_HOST
}

export function isCloudflareImagesHashConfigured(): boolean {
  return Boolean(accountHash())
}

function accountHash(): string | undefined {
  // Static NEXT_PUBLIC read so the client bundle inlines the hash at build
  // (bracket access is not inlined). After CI upserts the hash and
  // production-deploys, SiteImage SSR/HTML can point at imagedelivery.net
  // instead of only middleware-rewriting /_next/image.
  const inlinedPublic = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH
  return (
    (typeof inlinedPublic === 'string' && inlinedPublic.trim()
      ? inlinedPublic.trim()
      : undefined) ||
    readEnv('CLOUDFLARE_IMAGES_HASH') ||
    readEnv('NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH') ||
    GENERATED_CLOUDFLARE_IMAGES_HASH
  )
}

/** Public/runtime hash — middleware reads this on each request (no rebuild). */
export function cloudflareImagesAccountHash(): string | undefined {
  return accountHash()
}

function localImagesPath(value: string): string | undefined {
  const withoutQuery = value.split('?')[0] ?? value
  if (withoutQuery.startsWith('/images/')) {
    return withoutQuery
  }
  try {
    const url = new URL(withoutQuery)
    if (
      (url.hostname === 'www.arroyoskyeview.com' ||
        url.hostname === 'arroyoskyeview.com') &&
      url.pathname.startsWith('/images/')
    ) {
      return url.pathname
    }
  } catch {
    return undefined
  }
  return undefined
}

/**
 * imagedelivery.net flexible-variant URL for a local /images path.
 * Undefined when the account hash is not configured or the path is not a site image.
 */
export function cloudflareFlexibleDeliveryUrl(
  localPath: string,
  width: number,
  quality = 75,
): string | undefined {
  const path = localImagesPath(localPath)
  if (!path) {
    return undefined
  }
  const safeWidth =
    Number.isFinite(width) && width > 0 ? Math.round(width) : 1920
  const safeQuality =
    Number.isFinite(quality) && quality > 0
      ? Math.min(100, Math.round(quality))
      : 75
  return cloudflareImageUrl(
    cloudflareCustomId(path),
    cloudflareFlexibleVariant(safeWidth, safeQuality),
  )
}

/** Custom ID derived from a local public path, e.g. images/hero/hero-5 */
export function cloudflareCustomId(localPath: string): string {
  return localPath.replace(/^\/+/, '').replace(/\.[^.]+$/, '')
}

export function cloudflareFlexibleVariant(width: number, quality = 75): string {
  return `w=${width},q=${quality},format=auto`
}

export function isSiteImageSrc(src: string): boolean {
  if (src.startsWith('/images/')) {
    return true
  }
  if (src.includes('imagedelivery.net/')) {
    return true
  }
  const customHost = readEnv('NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOST')
  if (customHost && src.startsWith(customHost)) {
    return true
  }
  return src.includes('images.arroyoskyeview.com/')
}

/**
 * Recover the Cloudflare custom ID from a local path or delivery URL.
 */
export function imageIdFromSrc(src: string): string {
  const withoutQuery = src.split('?')[0] ?? src
  try {
    const url = new URL(withoutQuery, 'https://www.arroyoskyeview.com')
    const parts = url.pathname.replace(/^\//, '').split('/').filter(Boolean)
    if (url.hostname === 'imagedelivery.net' && parts.length >= 3) {
      return parts.slice(1, -1).join('/')
    }
    if (url.hostname === 'images.arroyoskyeview.com' && parts.length >= 2) {
      return parts.slice(0, -1).join('/')
    }
    const customHost = readEnv('NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOST')
    if (customHost) {
      const host = customHost.replace(/^https?:\/\//, '').replace(/\/$/, '')
      if (url.host === host && parts.length >= 2) {
        return parts.slice(0, -1).join('/')
      }
    }
  } catch {
    // fall through to local-path handling
  }
  return cloudflareCustomId(withoutQuery)
}

export function cloudflareImageUrl(
  imageId: string,
  variant: string = DEFAULT_VARIANT,
): string | undefined {
  const hash = accountHash()
  if (!hash) {
    return undefined
  }
  return `${imagesHost()}/${hash}/${imageId}/${variant}`
}

/**
 * Prefer Cloudflare Images when the account hash is configured.
 * Falls back to the local /public path so production still renders
 * if Images is not connected yet.
 */
export function siteImage(
  localPath: string,
  imageId: string = cloudflareCustomId(localPath),
  variant: string = DEFAULT_VARIANT,
): string {
  return cloudflareImageUrl(imageId, variant) ?? localPath
}

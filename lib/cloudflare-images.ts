/**
 * Cloudflare Images delivery for this site.
 *
 * Hosting stays on Vercel. DNS can stay on Cloudflare (gray cloud).
 * Image binaries belong on Cloudflare Images (imagedelivery.net) or a
 * custom Images host — never orange-cloud the Vercel apex.
 *
 * Set CLOUDFLARE_IMAGES_HASH (server) or NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH
 * to the account hash from Cloudflare → Images → Developer Resources.
 * Optional custom host: NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOST (no trailing slash).
 *
 * Team Images account (public): 2cc579c1ec9e426ed585e933ebf4753b
 * Team hash on sienalasvegas.com: byE6BTe9lNqo21V57n4aPQ
 * Do not default that hash here until custom IDs are uploaded — they 404.
 *
 * next/image: pass site paths to SiteImage (app/components/site-image.tsx).
 * Do not set a global images.loaderFile — RealScout listing photos must keep
 * the Vercel optimizer. Cloudflare flexible variants are applied per image.
 *
 * Flexible variants (Cloudflare Images, 2026):
 * https://imagedelivery.net/<HASH>/<IMAGE_ID>/w=<WIDTH>,q=<QUALITY>
 */

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
  return readEnv('CLOUDFLARE_IMAGES_HASH') || readEnv('NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH')
}

/** Custom ID derived from a local public path, e.g. images/hero/hero-5 */
export function cloudflareCustomId(localPath: string): string {
  return localPath.replace(/^\/+/, '').replace(/\.[^.]+$/, '')
}

export function cloudflareFlexibleVariant(width: number, quality = 75): string {
  return `w=${width},q=${quality}`
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

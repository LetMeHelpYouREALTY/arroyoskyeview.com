/**
 * Cloudflare Images delivery for this site.
 *
 * Hosting stays on Vercel. DNS can stay on Cloudflare (gray cloud).
 * Image binaries belong on Cloudflare Images (imagedelivery.net) or a
 * custom Images host — never orange-cloud the Vercel apex.
 *
 * Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH to the account hash from
 * Cloudflare → Images → Developer Resources. Optional custom host:
 * NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOST (no trailing slash).
 */

const DEFAULT_VARIANT = 'public'
const DEFAULT_HOST = 'https://imagedelivery.net'

function imagesHost(): string {
  const host = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOST?.trim()
  if (host) {
    return host.replace(/\/$/, '')
  }
  return DEFAULT_HOST
}

function accountHash(): string | undefined {
  const hash = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim()
  return hash || undefined
}

/** Custom ID derived from a local public path, e.g. images/hero/hero-5 */
export function cloudflareCustomId(localPath: string): string {
  return localPath.replace(/^\/+/, '').replace(/\.[^.]+$/, '')
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

import type { ImageLoaderProps } from 'next/image'
import {
  cloudflareFlexibleVariant,
  cloudflareImageUrl,
  imageIdFromSrc,
} from '@/lib/cloudflare-images'

/**
 * Per-image next/image loader for Cloudflare Images hosted storage.
 * Do not register this as images.loaderFile — that would bypass Vercel
 * optimization for RealScout and other remote listing photos.
 *
 * Cloudflare Images flexible variants (imagedelivery.net):
 * /<ACCOUNT_HASH>/<IMAGE_ID>/w=<WIDTH>,q=<QUALITY>
 */
export function cloudflareImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const variant = cloudflareFlexibleVariant(width, quality ?? 75)
  return cloudflareImageUrl(imageIdFromSrc(src), variant) ?? src
}

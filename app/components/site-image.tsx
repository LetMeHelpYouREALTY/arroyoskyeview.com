'use client'

import Image, { type ImageProps } from 'next/image'
import { cloudflareImageLoader } from '@/lib/cloudflare-image-loader'
import {
  isCloudflareImagesHashConfigured,
  isSiteImageSrc,
} from '@/lib/cloudflare-images'

/**
 * next/image wrapper that serves /images/* from Cloudflare Images when the
 * public hash is inlined at build. Middleware also rewrites /_next/image
 * (and /images/*) to imagedelivery.net when CLOUDFLARE_IMAGES_HASH is set
 * at runtime, so site photos do not need a rebuild after the hash is added.
 */
export default function SiteImage({ loader, src, ...rest }: ImageProps) {
  const useCloudflare =
    isCloudflareImagesHashConfigured() &&
    typeof src === 'string' &&
    isSiteImageSrc(src)

  if (useCloudflare) {
    return <Image {...rest} src={src} loader={cloudflareImageLoader} />
  }

  return <Image {...rest} src={src} loader={loader} />
}

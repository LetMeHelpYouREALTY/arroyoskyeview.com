'use client'

import Image, { type ImageProps } from 'next/image'
import { cloudflareImageLoader } from '@/lib/cloudflare-image-loader'
import {
  isCloudflareImagesHashConfigured,
  isSiteImageSrc,
} from '@/lib/cloudflare-images'

/**
 * next/image wrapper that serves /images/* from Cloudflare Images when the
 * public or server hash is set, and otherwise uses the Vercel optimizer.
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

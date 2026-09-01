'use client'

import { useMemo } from 'react'
import Image, { type ImageProps } from 'next/image'
import { createCloudflareImageLoader } from '@/lib/cloudflare-image-loader'
import {
  isCloudflareImagesHashConfigured,
  isSiteImageSrc,
} from '@/lib/cloudflare-images'
import { useCloudflareImagesHash } from './cloudflare-images-provider'

/**
 * next/image wrapper that serves /images/* from Cloudflare Images when the
 * public hash is inlined at build, or when layout probed every custom ID
 * as HTTP 200 (hosted-images Worker ingest). Custom loader emits
 * imagedelivery.net in the img src — not a /_next/image rewrite.
 */
export default function SiteImage({ loader, src, ...rest }: ImageProps) {
  const runtimeHash = useCloudflareImagesHash()
  const cloudflareLoader = useMemo(
    () => createCloudflareImageLoader(runtimeHash),
    [runtimeHash],
  )
  const useCloudflare =
    (isCloudflareImagesHashConfigured() || Boolean(runtimeHash)) &&
    typeof src === 'string' &&
    isSiteImageSrc(src)

  if (useCloudflare) {
    return <Image {...rest} src={src} loader={cloudflareLoader} />
  }

  return <Image {...rest} src={src} loader={loader} />
}

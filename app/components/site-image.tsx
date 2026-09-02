'use client'

import { useMemo } from 'react'
import Image, { type ImageProps } from 'next/image'
import { createCloudflareImageLoader } from '@/lib/cloudflare-image-loader'
import {
  imageIdFromSrc,
  isCloudflareImagesHashConfigured,
  isSiteImageSrc,
} from '@/lib/cloudflare-images'
import { useCloudflareImagesRuntime } from './cloudflare-images-provider'

/**
 * next/image wrapper that serves /images/* from Cloudflare Images when the
 * public hash is inlined at build, or when layout probed that custom ID
 * as HTTP 200 (hosted-images Worker ingest). Custom loader emits
 * imagedelivery.net in the img src — not a /_next/image rewrite.
 * Runtime probes are per-ID so the hero can flip before all 35 exist.
 */
export default function SiteImage({ loader, src, ...rest }: ImageProps) {
  const { hash: runtimeHash, readyIds } = useCloudflareImagesRuntime()
  const cloudflareLoader = useMemo(
    () => createCloudflareImageLoader(runtimeHash),
    [runtimeHash],
  )
  const configuredHash = isCloudflareImagesHashConfigured()
  const srcId = typeof src === 'string' ? imageIdFromSrc(src) : ''
  const runtimeReady = Boolean(runtimeHash) && readyIds.includes(srcId)
  const useCloudflare =
    (configuredHash || runtimeReady) &&
    typeof src === 'string' &&
    isSiteImageSrc(src)

  if (useCloudflare) {
    return <Image {...rest} src={src} loader={cloudflareLoader} />
  }

  return <Image {...rest} src={src} loader={loader} />
}

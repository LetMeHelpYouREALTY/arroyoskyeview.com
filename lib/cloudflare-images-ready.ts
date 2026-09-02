import { unstable_cache } from 'next/cache'
import {
  HERO_CUSTOM_ID,
  probeManifestCustomIds,
} from '@/lib/cloudflare-images-list'

export type ArroyoHostedImagesRuntime = {
  hash?: string
  readyIds: string[]
}

/**
 * After the hosted-images Worker uploads any custom ID, SiteImage can emit
 * imagedelivery.net src for that ID on the next request — no extra Vercel
 * production deploy. Hash is returned as soon as one ID is 200; the loader
 * still only runs for readyIds so 404 IDs stay on /_next/image.
 */
export const getCachedArroyoHostedImages = unstable_cache(
  async (): Promise<ArroyoHostedImagesRuntime> => {
    const probe = await probeManifestCustomIds()
    if (probe.ready === 0) {
      return { readyIds: [] }
    }
    return { hash: probe.hash, readyIds: probe.readyIds }
  },
  ['arroyo-hosted-images-runtime'],
  { revalidate: 60 },
)

/** Hash only when the homepage hero custom ID already returns HTTP 200. */
export async function getCachedArroyoHostedImagesHash(): Promise<
  string | undefined
> {
  const runtime = await getCachedArroyoHostedImages()
  return runtime.readyIds.includes(HERO_CUSTOM_ID) ? runtime.hash : undefined
}

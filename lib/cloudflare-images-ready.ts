import { unstable_cache } from 'next/cache'
import { probeManifestCustomIds } from '@/lib/cloudflare-images-list'

/**
 * After the hosted-images Worker uploads custom IDs, SiteImage can emit
 * imagedelivery.net src on the next request — no extra Vercel production
 * deploy. Do not return the team hash while any manifest ID is still 404.
 */
export const getCachedArroyoHostedImagesHash = unstable_cache(
  async (): Promise<string | undefined> => {
    const probe = await probeManifestCustomIds()
    return probe.ok ? probe.hash : undefined
  },
  ['arroyo-hosted-images-hash'],
  { revalidate: 60 },
)

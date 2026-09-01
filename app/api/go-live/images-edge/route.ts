import { NextResponse } from 'next/server'
import {
  isCronAuthorized,
  probeCloudflareImagesRuntime,
} from '@/lib/cloudflare-images-runtime-probe'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

/**
 * Probe Cloudflare Images from Vercel Edge (not iad1 Lambda).
 * POST a hero upload only with ?tryUpload=1 and cron auth.
 */
export async function GET(request: Request) {
  const tryUpload =
    new URL(request.url).searchParams.get('tryUpload') === '1' &&
    isCronAuthorized(request)
  const probe = await probeCloudflareImagesRuntime({
    runtime: 'edge',
    tryUpload,
  })
  return NextResponse.json(probe, {
    headers: { 'Cache-Control': 'no-store' },
  })
}

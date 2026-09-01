import { NextResponse } from 'next/server'
import {
  isCronAuthorized,
  probeCloudflareImagesRuntime,
} from '@/lib/cloudflare-images-runtime-probe'

export const runtime = 'nodejs'
export const preferredRegion = ['sfo1']
export const dynamic = 'force-dynamic'
export const maxDuration = 30

/**
 * Probe Cloudflare Images from Vercel sfo1 instead of iad1.
 * POST a hero upload only with ?tryUpload=1 and cron auth.
 */
export async function GET(request: Request) {
  const tryUpload =
    new URL(request.url).searchParams.get('tryUpload') === '1' &&
    isCronAuthorized(request)
  const probe = await probeCloudflareImagesRuntime({
    runtime: 'nodejs-sfo1',
    tryUpload,
  })
  return NextResponse.json(probe, {
    headers: { 'Cache-Control': 'no-store' },
  })
}

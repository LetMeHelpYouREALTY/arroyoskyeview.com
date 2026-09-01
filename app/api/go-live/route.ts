import { NextResponse } from 'next/server'
import {
  CALENDLY_CONFIRMATION_URL,
  CALENDLY_URL,
  fetchCalendlyHostedConfirmation,
} from '@/lib/calendly'
import { isCalendlyApiConfigured } from '@/lib/calendly-invitee'
import { isCloudflareImagesHashConfigured } from '@/lib/cloudflare-images'
import { CLOUDFLARE_IMAGES_ACCOUNT_ID } from '@/lib/cloudflare-images-upload'
import {
  probeArroyoCustomIds,
  probeCloudflareImagesToken,
  probeManifestCustomIds,
} from '@/lib/cloudflare-images-list'
import {
  isFollowUpBossConfigured,
  probeFollowUpBossCalendlySource,
} from '@/lib/fub-client'
import { getFubPixelId } from '@/lib/fub-pixel-config'
import { SITE_URL } from '@/lib/site-url'

export const dynamic = 'force-dynamic'
export const revalidate = 0

function hasEnv(
  name: 'CALENDLY_WEBHOOK_SIGNING_KEY' | 'CLOUDFLARE_API_TOKEN' | 'CRON_SECRET',
): boolean {
  let value: string | undefined
  switch (name) {
    case 'CALENDLY_WEBHOOK_SIGNING_KEY':
      value = process.env.CALENDLY_WEBHOOK_SIGNING_KEY
      break
    case 'CLOUDFLARE_API_TOKEN':
      value = process.env.CLOUDFLARE_API_TOKEN
      break
    case 'CRON_SECRET':
      value = process.env.CRON_SECRET
      break
    default: {
      const _exhaustive: never = name
      return _exhaustive
    }
  }
  return typeof value === 'string' && value.trim().length > 0
}

const HOSTED_IMAGES_WORKER_URL =
  'https://arroyoskyeview-hosted-images.drduffy.workers.dev/'

async function probeHostedImagesWorker(): Promise<{
  url: string
  status: number
  ok: boolean
}> {
  try {
    const res = await fetch(HOSTED_IMAGES_WORKER_URL, {
      signal: AbortSignal.timeout(4000),
      cache: 'no-store',
    })
    const body: unknown = await res.json().catch(() => null)
    const service =
      body &&
      typeof body === 'object' &&
      'service' in body &&
      typeof body.service === 'string'
        ? body.service
        : null
    return {
      url: HOSTED_IMAGES_WORKER_URL,
      status: res.status,
      ok: res.ok && service === 'arroyoskyeview-hosted-images',
    }
  } catch {
    return { url: HOSTED_IMAGES_WORKER_URL, status: 0, ok: false }
  }
}

/**
 * Public go-live flags only — never include secret values.
 * Embed/webhook Calendly → FUB needs FUB plus a signing key or PAT.
 * Hosted Calendly + dashboard “Pass event details” only needs FUB.
 * hostedConfirmation is read from Calendly’s public booking lookup.
 */
export async function GET() {
  const calendlySigningKey = hasEnv('CALENDLY_WEBHOOK_SIGNING_KEY')
  const calendlyApiToken = isCalendlyApiConfigured()
  const followUpBoss = isFollowUpBossConfigured()
  const cloudflareToken = hasEnv('CLOUDFLARE_API_TOKEN')
  const cronSecret = hasEnv('CRON_SECRET')
  const deliveryHash = isCloudflareImagesHashConfigured()
  const imagesToken = process.env.CLOUDFLARE_API_TOKEN?.trim()
  const [
    hostedConfirmation,
    imagesApi,
    customIds,
    manifestIds,
    fubCalendlySource,
    hostedWorker,
  ] = await Promise.all([
    fetchCalendlyHostedConfirmation(),
    imagesToken
      ? probeCloudflareImagesToken(imagesToken, CLOUDFLARE_IMAGES_ACCOUNT_ID)
      : Promise.resolve(null),
    probeArroyoCustomIds(),
    probeManifestCustomIds(),
    probeFollowUpBossCalendlySource(),
    probeHostedImagesWorker(),
  ])
  const hostedRedirectReady =
    followUpBoss &&
    hostedConfirmation?.pointsAtSite === true &&
    hostedConfirmation.passEventDetails !== false
  const embedOrWebhookReady =
    followUpBoss && (calendlySigningKey || calendlyApiToken)
  const nativeFromThisSite = Boolean(fubCalendlySource?.fromThisSite)
  const calendlyConfigured =
    embedOrWebhookReady || hostedRedirectReady || nativeFromThisSite
  const imagesHtmlReady =
    deliveryHash || customIds.hero === 200 || manifestIds.heroReady
  const blockers: string[] = []
  if (!imagesHtmlReady) {
    blockers.push('cloudflare-images-hash')
  }
  if (!cloudflareToken) {
    blockers.push('cloudflare-images-token')
  }
  if (imagesApi?.locationRestricted) {
    blockers.push('cloudflare-images-token-ip-allowlist')
  }
  if (!calendlyConfigured) {
    blockers.push('calendly-pat-or-signing-key')
  }

  const nextHumanActions: string[] = []
  if (!imagesHtmlReady) {
    nextHumanActions.push(
      'Laptop is the reliable path: `npx wrangler deploy --config workers/hosted-images/wrangler.jsonc` from cursor/go-live-stack-f7eb while logged in as Duffy (keeps the Images binding). Dashboard Import a repository can use repo root (wrangler.jsonc at /) or subdirectory workers/hosted-images. One-click https://deploy.workers.cloudflare.com/?url=https://github.com/LetMeHelpYouREALTY/arroyoskyeview.com/tree/cursor/go-live-stack-f7eb/workers/hosted-images does not auto-provision hosted Images. Keep Worker name arroyoskyeview-hosted-images. Cron ingest every 5 minutes; homepage hero <img src> flips to imagedelivery.net within ~60s once images/hero/luxury-hero-skye-canyon returns HTTP 200 (other IDs stay on /_next/image until they exist). Token alternative: mint Account permissions Cloudflare Images:Edit + Workers Scripts:Edit with Client IP Filtering empty (not the geneboyle allowlist; sister Zone.Read tokens on summerlinwest/pewtervalley cannot upload or deploy). Do not default the Siena hash or copy Siena UUIDs.',
    )
  }
  if (!calendlyConfigured) {
    nextHumanActions.push(
      'Embed bookings already send the parent page to /schedule-confirmed (URIs only). The details form there POSTs to Follow Up Boss as source arroyoskyeview.com without a Calendly PAT. Hosted Calendly (calendly.com) still needs Buyer Consultation 30 min → Confirmation → Redirect to https://www.arroyoskyeview.com/schedule-confirmed with Pass event details, or CALENDLY_API_TOKEN / CALENDLY_WEBHOOK_SIGNING_KEY on Vercel. Action plan 4 (Buyer New Lead Website Registration) is already Active.',
    )
  }

  return NextResponse.json({
    ok: true,
    domain: SITE_URL,
    calendlyToFub: {
      configured: calendlyConfigured,
      calendlySigningKey,
      followUpBoss,
      calendlyApiToken,
      confirmationPathReady: followUpBoss,
      hostedConfirmation,
      hostedRedirectReady,
      nativeFromThisSite,
      webhookUrl: `${SITE_URL}/api/calendly/webhook`,
      scheduledUrl: `${SITE_URL}/api/calendly/scheduled`,
      confirmedUrl: `${SITE_URL}/api/calendly/confirmed`,
      embedFormCaptureReady: followUpBoss,
      confirmationUrl: CALENDLY_CONFIRMATION_URL,
      eventTypeUrl: CALENDLY_URL,
    },
    cloudflareImages: {
      configured: imagesHtmlReady,
      cloudflareToken,
      cronSecret,
      deliveryHash,
      api: imagesApi,
      teamCustomIds: customIds,
      manifestCustomIds: manifestIds,
      runtimeSrcReady: customIds.hero === 200 || manifestIds.heroReady,
      hostedWorker,
      edgeProbeUrl: `${SITE_URL}/api/go-live/images-edge`,
      sfoProbeUrl: `${SITE_URL}/api/go-live/images-sfo`,
    },
    fubPixel: {
      enabled: Boolean(getFubPixelId()),
    },
    fubNativeCalendly: fubCalendlySource,
    blockers,
    nextHumanActions,
  })
}

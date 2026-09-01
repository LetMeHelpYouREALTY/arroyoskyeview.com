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
  const [hostedConfirmation, imagesApi, customIds, fubCalendlySource] =
    await Promise.all([
      fetchCalendlyHostedConfirmation(),
      imagesToken
        ? probeCloudflareImagesToken(imagesToken, CLOUDFLARE_IMAGES_ACCOUNT_ID)
        : Promise.resolve(null),
      probeArroyoCustomIds(),
      probeFollowUpBossCalendlySource(),
    ])
  const hostedRedirectReady =
    followUpBoss &&
    hostedConfirmation?.pointsAtSite === true &&
    hostedConfirmation.passEventDetails !== false
  const embedOrWebhookReady =
    followUpBoss && (calendlySigningKey || calendlyApiToken)
  const calendlyConfigured = embedOrWebhookReady || hostedRedirectReady
  const blockers: string[] = []
  if (!deliveryHash) {
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
  if (!deliveryHash) {
    nextHumanActions.push(
      'Mint a Cloudflare Account API token with Account.Cloudflare Images.Edit and no IP allowlist on account 2cc579c1ec9e426ed585e933ebf4753b. Set it as CLOUDFLARE_API_TOKEN on Vercel project prj_4cKj3PWQYacJOBsrmSeWfkONU6Wm. The geneboyle token is 9109 on GitHub and 401/10000 on Vercel iad1 (list and POST /images/v1). Do not default the Siena hash until Arroyo custom IDs return 200.',
    )
  }
  if (!calendlyConfigured) {
    nextHumanActions.push(
      'In Calendly, open Buyer Consultation 30 min → Confirmation page → Redirect to https://www.arroyoskyeview.com/schedule-confirmed and enable Pass event details. Or add CALENDLY_API_TOKEN or CALENDLY_WEBHOOK_SIGNING_KEY on the Vercel project. Follow Up Boss action plan 4 (Buyer New Lead Website Registration) is already Active.',
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
      webhookUrl: `${SITE_URL}/api/calendly/webhook`,
      scheduledUrl: `${SITE_URL}/api/calendly/scheduled`,
      confirmationUrl: CALENDLY_CONFIRMATION_URL,
      eventTypeUrl: CALENDLY_URL,
    },
    cloudflareImages: {
      configured: deliveryHash,
      cloudflareToken,
      cronSecret,
      deliveryHash,
      api: imagesApi,
      teamCustomIds: customIds,
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

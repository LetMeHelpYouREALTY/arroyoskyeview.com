import { NextResponse } from 'next/server'
import { CALENDLY_CONFIRMATION_URL, CALENDLY_URL } from '@/lib/calendly'
import { isCalendlyApiConfigured } from '@/lib/calendly-invitee'
import { isCloudflareImagesHashConfigured } from '@/lib/cloudflare-images'
import { isFollowUpBossConfigured } from '@/lib/fub-client'
import { getFubPixelId } from '@/lib/fub-pixel-config'
import { SITE_URL } from '@/lib/site-url'

export const dynamic = 'force-dynamic'
export const revalidate = 0

function hasEnv(
  name:
    | 'CALENDLY_WEBHOOK_SIGNING_KEY'
    | 'CLOUDFLARE_API_TOKEN'
    | 'CRON_SECRET',
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
 * Hosted Calendly + dashboard “Pass event details” only needs FUB
 * (confirmationPathReady) — that dashboard switch is not readable here.
 */
export async function GET() {
  const calendlySigningKey = hasEnv('CALENDLY_WEBHOOK_SIGNING_KEY')
  const calendlyApiToken = isCalendlyApiConfigured()
  const followUpBoss = isFollowUpBossConfigured()
  const cloudflareToken = hasEnv('CLOUDFLARE_API_TOKEN')
  const cronSecret = hasEnv('CRON_SECRET')
  const deliveryHash = isCloudflareImagesHashConfigured()
  const embedOrWebhookReady = followUpBoss && (calendlySigningKey || calendlyApiToken)
  const blockers: string[] = []
  if (!deliveryHash) {
    blockers.push('cloudflare-images-hash')
  }
  if (!cloudflareToken) {
    blockers.push('cloudflare-images-token')
  }
  if (!embedOrWebhookReady) {
    blockers.push('calendly-pat-or-signing-key')
  }

  return NextResponse.json({
    ok: true,
    domain: SITE_URL,
    calendlyToFub: {
      configured: embedOrWebhookReady,
      calendlySigningKey,
      followUpBoss,
      calendlyApiToken,
      confirmationPathReady: followUpBoss,
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
    },
    fubPixel: {
      enabled: Boolean(getFubPixelId()),
    },
    blockers,
  })
}

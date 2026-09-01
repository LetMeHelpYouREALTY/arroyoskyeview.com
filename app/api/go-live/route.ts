import { NextResponse } from 'next/server'
import { CALENDLY_CONFIRMATION_URL, CALENDLY_URL } from '@/lib/calendly'
import { isCalendlyApiConfigured } from '@/lib/calendly-invitee'
import { isCloudflareImagesHashConfigured } from '@/lib/cloudflare-images'
import { isFollowUpBossConfigured } from '@/lib/fub-client'
import { SITE_URL } from '@/lib/site-url'

function hasEnv(name: string): boolean {
  const value = process.env[name]
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Public go-live flags only — never include secret values.
 * Calendly → FUB is ready when FUB is set and either the webhook signing key
 * or a Calendly PAT (invitee URI lookup) is set.
 */
export async function GET() {
  const calendlySigningKey = hasEnv('CALENDLY_WEBHOOK_SIGNING_KEY')
  const calendlyApiToken = isCalendlyApiConfigured()
  const followUpBoss = isFollowUpBossConfigured()
  const cloudflareToken = hasEnv('CLOUDFLARE_API_TOKEN')
  const cronSecret = hasEnv('CRON_SECRET')
  const deliveryHash = isCloudflareImagesHashConfigured()

  return NextResponse.json({
    ok: true,
    domain: SITE_URL,
    calendlyToFub: {
      configured: followUpBoss && (calendlySigningKey || calendlyApiToken),
      calendlySigningKey,
      followUpBoss,
      calendlyApiToken,
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
  })
}

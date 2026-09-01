import { NextResponse } from 'next/server'
import { isCloudflareImagesHashConfigured } from '@/lib/cloudflare-images'
import { isFollowUpBossConfigured } from '@/lib/fub-client'
import { SITE_URL } from '@/lib/site-url'

function hasEnv(name: string): boolean {
  const value = process.env[name]
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Public go-live flags only — never include secret values.
 * Calendly webhook is ready when both signing key and FUB key are set.
 */
export async function GET() {
  const calendlySigningKey = hasEnv('CALENDLY_WEBHOOK_SIGNING_KEY')
  const followUpBoss = isFollowUpBossConfigured()
  const cloudflareToken = hasEnv('CLOUDFLARE_API_TOKEN')
  const cronSecret = hasEnv('CRON_SECRET')
  const deliveryHash = isCloudflareImagesHashConfigured()

  return NextResponse.json({
    ok: true,
    domain: SITE_URL,
    calendlyToFub: {
      configured: calendlySigningKey && followUpBoss,
      calendlySigningKey,
      followUpBoss,
    },
    cloudflareImages: {
      configured: cloudflareToken && deliveryHash,
      cloudflareToken,
      cronSecret,
      deliveryHash,
    },
  })
}

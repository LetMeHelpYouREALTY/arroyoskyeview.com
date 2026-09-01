import { buildCalendlyFubEvent, type CalendlyLeadInput } from '@/lib/fub-events'

export type FollowUpBossSyncResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'upstream'; status?: number }

export function isFollowUpBossConfigured(): boolean {
  return Boolean(process.env.FOLLOW_UP_BOSS_API_KEY?.trim())
}

/**
 * POST a Calendly booking to the Follow Up Boss Events API as a Registration.
 * Matches action plan 4 “Buyer New Lead Website Registration”.
 */
export async function sendCalendlyLeadToFollowUpBoss(
  input: CalendlyLeadInput,
): Promise<FollowUpBossSyncResult> {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY?.trim()
  if (!apiKey) {
    return { ok: false, reason: 'not-configured' }
  }

  const payload = buildCalendlyFubEvent(input)
  const auth = Buffer.from(`${apiKey}:`).toString('base64')
  const response = await fetch('https://api.followupboss.com/v1/events', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    return { ok: false, reason: 'upstream', status: response.status }
  }

  return { ok: true }
}

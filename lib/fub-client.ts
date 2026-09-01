import {
  buildCalendlyFubEvent,
  FUB_BUYER_WEBSITE_REGISTRATION_PLAN_ID,
  type CalendlyLeadInput,
} from '@/lib/fub-events'

export type FollowUpBossSyncResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'upstream'; status?: number }

export function isFollowUpBossConfigured(): boolean {
  return Boolean(process.env.FOLLOW_UP_BOSS_API_KEY?.trim())
}

function fubAuthHeader(apiKey: string): string {
  return `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`
}

function personIdFromEventResponse(body: unknown): number | undefined {
  if (!body || typeof body !== 'object') {
    return undefined
  }
  const record = body as { person?: { id?: unknown }; personId?: unknown }
  if (typeof record.personId === 'number') {
    return record.personId
  }
  if (typeof record.person?.id === 'number') {
    return record.person.id
  }
  return undefined
}

async function applyBuyerRegistrationPlan(
  apiKey: string,
  personId: number,
): Promise<void> {
  await fetch('https://api.followupboss.com/v1/actionPlansPeople', {
    method: 'POST',
    headers: {
      Authorization: fubAuthHeader(apiKey),
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      personId,
      actionPlanId: FUB_BUYER_WEBSITE_REGISTRATION_PLAN_ID,
    }),
  })
}

/**
 * POST a Calendly booking to the Follow Up Boss Events API as a Registration,
 * assign Dr. Jan Duffy, then start action plan 4
 * (“Buyer New Lead Website Registration”).
 */
export async function sendCalendlyLeadToFollowUpBoss(
  input: CalendlyLeadInput,
): Promise<FollowUpBossSyncResult> {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY?.trim()
  if (!apiKey) {
    return { ok: false, reason: 'not-configured' }
  }

  const payload = buildCalendlyFubEvent(input)
  const response = await fetch('https://api.followupboss.com/v1/events', {
    method: 'POST',
    headers: {
      Authorization: fubAuthHeader(apiKey),
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    return { ok: false, reason: 'upstream', status: response.status }
  }

  const body: unknown = await response.json().catch(() => null)
  const personId = personIdFromEventResponse(body)
  if (personId && payload.type === 'Registration') {
    try {
      await applyBuyerRegistrationPlan(apiKey, personId)
    } catch {
      // Registration is already in FUB; Lead Flow may still start the plan.
    }
  }

  return { ok: true }
}

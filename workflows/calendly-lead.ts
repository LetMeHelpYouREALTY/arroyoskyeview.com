import { FatalError } from 'workflow'
import { buildCalendlyFubEvent } from '@/lib/fub-events'

export type CalendlyLeadInput = {
  event: string
  inviteeEmail: string
  inviteeName: string
  scheduledAt?: string
  eventType?: string
  questionsAndAnswers?: Array<{ question: string; answer: string }>
}

export async function processCalendlyLead(input: CalendlyLeadInput) {
  'use workflow'

  await syncLeadToFollowUpBoss(input)

  return { ok: true, email: input.inviteeEmail }
}

async function syncLeadToFollowUpBoss(input: CalendlyLeadInput) {
  'use step'

  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY?.trim()
  if (!apiKey) {
    throw new FatalError('FOLLOW_UP_BOSS_API_KEY is not configured')
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
    const body = await response.text().catch(() => '')
    throw new Error(`Follow Up Boss API error ${response.status}: ${body.slice(0, 500)}`)
  }
}

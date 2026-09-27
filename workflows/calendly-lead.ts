import { FatalError } from 'workflow'
import { buildCalendlyFubEvent, sendFollowUpBossEvent } from '@/lib/follow-up-boss'

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

  const payload = buildCalendlyFubEvent({
    inviteeEmail: input.inviteeEmail,
    inviteeName: input.inviteeName,
    scheduledAt: input.scheduledAt,
    eventType: input.eventType,
    questionsAndAnswers: input.questionsAndAnswers,
  })

  const result = await sendFollowUpBossEvent(payload)

  if (!result.ok && result.reason === 'not-configured') {
    throw new FatalError('FOLLOW_UP_BOSS_API_KEY is not configured')
  }

  if (!result.ok) {
    throw new Error(
      `Follow Up Boss API error${result.status ? ` ${result.status}` : ''}`,
    )
  }
}

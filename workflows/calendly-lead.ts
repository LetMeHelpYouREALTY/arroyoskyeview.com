import { FatalError } from 'workflow'
import {
  sendCalendlyLeadToFollowUpBoss,
} from '@/lib/fub-client'
import type { CalendlyLeadInput } from '@/lib/fub-events'

export type { CalendlyLeadInput }

export async function processCalendlyLead(input: CalendlyLeadInput) {
  'use workflow'

  await syncLeadToFollowUpBoss(input)

  return { ok: true, email: input.inviteeEmail }
}

async function syncLeadToFollowUpBoss(input: CalendlyLeadInput) {
  'use step'

  const result = await sendCalendlyLeadToFollowUpBoss(input)
  if (result.ok) {
    return
  }

  if (result.reason === 'not-configured') {
    throw new FatalError('FOLLOW_UP_BOSS_API_KEY is not configured')
  }

  throw new Error(`Follow Up Boss API error ${result.status ?? 'unknown'}`)
}

type CalendlyLeadInput = {
  event: string
  inviteeEmail: string
  inviteeName: string
  scheduledAt?: string
  eventType?: string
  questionsAndAnswers?: Array<{ question: string; answer: string }>
}

/**
 * Official Follow Up Boss website event types.
 * @see https://docs.followupboss.com/docs/start-here-brand-new-integration
 * Registration matches FUB action plan "Buyer New Lead Website Registration".
 */
export const FUB_WEBSITE_EVENT_TYPES = [
  'Registration',
  'Property Inquiry',
  'General Inquiry',
  'Viewed Property',
  'Saved Property',
  'Visited Website',
] as const

export type FubWebsiteEventType = (typeof FUB_WEBSITE_EVENT_TYPES)[number]

export type FubPersonEmail = { value: string }

export type FubCalendlyEventPayload = {
  source: 'arroyoskyeview.com'
  system: 'Calendly'
  type: FubWebsiteEventType
  message: string
  person: {
    firstName: string
    lastName?: string
    emails: FubPersonEmail[]
    tags: string[]
  }
  occurred?: string
  campaign: {
    source: string
    medium: string
    campaign: string
  }
}

type CalendlyInviteeEvent = 'invitee.created' | 'invitee.canceled'

function isCalendlyInviteeEvent(event: string): event is CalendlyInviteeEvent {
  return event === 'invitee.created' || event === 'invitee.canceled'
}

export function fubEventTypeForCalendly(event: string): FubWebsiteEventType {
  if (!isCalendlyInviteeEvent(event)) {
    return 'Registration'
  }

  switch (event) {
    case 'invitee.created':
      return 'Registration'
    case 'invitee.canceled':
      return 'General Inquiry'
    default: {
      const _never: never = event
      return _never
    }
  }
}

export function buildCalendlyFubEvent(input: CalendlyLeadInput): FubCalendlyEventPayload {
  const parts = input.inviteeName.trim().split(/\s+/).filter(Boolean)
  const firstName = parts[0] ?? 'Calendly'
  const lastName = parts.length > 1 ? parts.slice(1).join(' ') : undefined

  const messageLines = [
    `Calendly booking: ${input.eventType ?? 'Buyer consultation'}`,
    input.scheduledAt ? `Scheduled: ${input.scheduledAt}` : null,
    ...(input.questionsAndAnswers?.map((qa) => `${qa.question}: ${qa.answer}`) ?? []),
  ].filter((line): line is string => Boolean(line))

  return {
    source: 'arroyoskyeview.com',
    system: 'Calendly',
    type: fubEventTypeForCalendly(input.event),
    message: messageLines.join('\n'),
    person: {
      firstName,
      lastName,
      emails: [{ value: input.inviteeEmail }],
      tags: ['Arroyo at Skyeview', 'Calendly', 'Website'],
    },
    occurred: input.scheduledAt,
    campaign: {
      source: 'arroyoskyeview.com',
      medium: 'website',
      campaign: 'calendly-buyer-consultation',
    },
  }
}

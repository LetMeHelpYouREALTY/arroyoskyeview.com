export const FUB_SITE_SOURCE = 'arroyoskyeview.com'

export type FubInquiryType =
  | 'General Inquiry'
  | 'Seller Inquiry'
  | 'Property Inquiry'
  | 'Registration'

export type FubPersonPayload = {
  firstName: string
  lastName?: string
  emails: Array<{ value: string }>
  phones?: Array<{ value: string }>
  tags: string[]
}

export type FubEventPayload = {
  source: typeof FUB_SITE_SOURCE
  system: typeof FUB_SITE_SOURCE
  type: FubInquiryType
  message: string
  description?: string
  sourceUrl?: string
  person: FubPersonPayload
  occurred?: string
}

export function getFollowUpBossApiKey(): string | undefined {
  const key = process.env.FOLLOW_UP_BOSS_API_KEY?.trim()
  return key || undefined
}

export function followUpBossAuthHeader(apiKey: string): string {
  return `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`
}

export function followUpBossRequestHeaders(apiKey: string): Record<string, string> {
  const headers: Record<string, string> = {
    Authorization: followUpBossAuthHeader(apiKey),
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-System': FUB_SITE_SOURCE,
  }
  const systemKey = process.env.FUB_X_SYSTEM_KEY?.trim()
  if (systemKey) {
    headers['X-System-Key'] = systemKey
  }
  return headers
}

export type ContactFormInput = {
  firstName: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  formName: string
  sourceUrl?: string
  inquiryType?: FubInquiryType
}

export function buildContactFubEvent(input: ContactFormInput): FubEventPayload {
  const firstName = input.firstName.trim()
  const lastName = input.lastName?.trim() || undefined
  const email = input.email?.trim()
  const phone = input.phone?.trim()
  const visitorMessage = input.message?.trim() ?? ''

  const summaryParts = [
    lastName ? `Last name: ${lastName}` : null,
    email ? `Email: ${email}` : null,
    phone ? `Phone: ${phone}` : null,
  ].filter(Boolean)

  const messageBody = [visitorMessage, summaryParts.length ? summaryParts.join('\n') : null]
    .filter(Boolean)
    .join('\n\n')

  const inquiryType = input.inquiryType ?? 'General Inquiry'

  return {
    source: FUB_SITE_SOURCE,
    system: FUB_SITE_SOURCE,
    type: inquiryType,
    message: messageBody || `Inquiry from ${input.formName}`,
    description: input.formName,
    sourceUrl: input.sourceUrl,
    person: {
      firstName,
      lastName,
      emails: email ? [{ value: email }] : [],
      phones: phone ? [{ value: phone }] : [],
      tags: [FUB_SITE_SOURCE, input.formName],
    },
  }
}

export type CalendlyFubInput = {
  inviteeEmail: string
  inviteeName: string
  scheduledAt?: string
  eventType?: string
  questionsAndAnswers?: Array<{ question: string; answer: string }>
}

export function buildCalendlyFubEvent(input: CalendlyFubInput): FubEventPayload {
  const parts = input.inviteeName.trim().split(/\s+/).filter(Boolean)
  const firstName = parts[0] ?? 'Calendly'
  const lastName = parts.length > 1 ? parts.slice(1).join(' ') : undefined

  const messageLines = [
    `Calendly booking: ${input.eventType ?? 'Buyer consultation'}`,
    input.scheduledAt ? `Scheduled: ${input.scheduledAt}` : null,
    ...(input.questionsAndAnswers?.map((qa) => `${qa.question}: ${qa.answer}`) ?? []),
  ].filter((line): line is string => Boolean(line))

  return {
    source: FUB_SITE_SOURCE,
    system: FUB_SITE_SOURCE,
    type: 'Registration',
    message: messageLines.join('\n'),
    description: 'Calendly webhook — buyer consultation',
    person: {
      firstName,
      lastName,
      emails: [{ value: input.inviteeEmail }],
      tags: [FUB_SITE_SOURCE, 'Calendly Buyer Consultation'],
    },
    occurred: input.scheduledAt,
  }
}

export type SendFollowUpBossResult =
  | { ok: true; status: number }
  | { ok: false; reason: 'not-configured' | 'upstream' | 'network'; status?: number }

export async function sendFollowUpBossEvent(
  payload: FubEventPayload,
  fetchImpl: typeof fetch = fetch,
): Promise<SendFollowUpBossResult> {
  const apiKey = getFollowUpBossApiKey()
  if (!apiKey) {
    return { ok: false, reason: 'not-configured' }
  }

  try {
    const response = await fetchImpl('https://api.followupboss.com/v1/events', {
      method: 'POST',
      headers: followUpBossRequestHeaders(apiKey),
      body: JSON.stringify(payload),
    })

    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return { ok: true, status: response.status }
    }

    return { ok: false, reason: 'upstream', status: response.status }
  } catch {
    return { ok: false, reason: 'network' }
  }
}

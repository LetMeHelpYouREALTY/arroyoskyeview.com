import { createHmac, timingSafeEqual } from 'crypto'
import type { CalendlyLeadInput } from '@/workflows/calendly-lead'

type CalendlyWebhookBody = {
  event?: string
  payload?: {
    email?: string
    name?: string
    questions_and_answers?: Array<{ question: string; answer: string }>
    scheduled_event?: {
      start_time?: string
      name?: string
    }
  }
}

export function verifyCalendlyWebhookSignature(
  rawBody: string,
  signatureHeader: string | null,
  signingKey: string,
): boolean {
  if (!signatureHeader) return false

  const parts = Object.fromEntries(
    signatureHeader.split(',').map((part) => {
      const [key, value] = part.split('=')
      return [key, value]
    }),
  )

  const timestamp = parts.t
  const signature = parts.v1
  if (!timestamp || !signature) return false

  const signedPayload = `${timestamp}.${rawBody}`
  const expected = createHmac('sha256', signingKey).update(signedPayload).digest('hex')

  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  } catch {
    return false
  }
}

export function parseCalendlyLeadInput(body: CalendlyWebhookBody): CalendlyLeadInput | null {
  if (body.event !== 'invitee.created' || !body.payload?.email) {
    return null
  }

  return {
    event: body.event,
    inviteeEmail: body.payload.email,
    inviteeName: body.payload.name ?? body.payload.email,
    scheduledAt: body.payload.scheduled_event?.start_time,
    eventType: body.payload.scheduled_event?.name,
    questionsAndAnswers: body.payload.questions_and_answers,
  }
}

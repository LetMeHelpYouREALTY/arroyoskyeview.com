import { SITE_URL } from '@/lib/site-url'
import type { CalendlyLeadInput } from '@/lib/fub-events'

const DEFAULT_CALENDLY_URL =
  'https://calendly.com/drjanduffy/buyer-consultation-30-min'

function withArroyoCampaign(url: string): string {
  const parsed = new URL(url)
  if (!parsed.searchParams.has('utm_source')) {
    parsed.searchParams.set('utm_source', 'arroyoskyeview.com')
    parsed.searchParams.set('utm_medium', 'website')
    parsed.searchParams.set('utm_campaign', 'buyer-consultation')
  }
  return parsed.toString()
}

export const CALENDLY_URL = withArroyoCampaign(
  process.env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_CALENDLY_URL,
)

/** Calendly event Confirmation page → Redirect here, pass event details. */
export const CALENDLY_CONFIRMATION_URL = `${SITE_URL}/schedule-confirmed`

/**
 * Parent-page confirmation URL after an embed `calendly.event_scheduled`
 * postMessage. URIs only — email still requires PAT lookup or dashboard
 * “Pass event details”.
 */
export function scheduleConfirmedUrlFromCalendlyUris(
  inviteeUri: string,
  eventUri?: string,
): string {
  const next = new URL('/schedule-confirmed', SITE_URL)
  next.searchParams.set('invitee_uri', inviteeUri)
  if (eventUri) {
    next.searchParams.set('event_uri', eventUri)
  }
  return next.toString()
}

export const CALENDLY_BADGE = {
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: false,
} as const

function firstQueryValue(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0]
  }
  return value
}

/**
 * Calendly “Pass event details to the redirect URL” query params.
 * Requires email + start time so a bare ?email= cannot create FUB contacts.
 */
export function calendlyLeadFromConfirmationParams(
  params: Record<string, string | string[] | undefined>,
): CalendlyLeadInput | null {
  const inviteeEmail = firstQueryValue(params.invitee_email)?.trim()
  const email = firstQueryValue(params.email)?.trim()
  const resolvedEmail = inviteeEmail || email
  const scheduledAt = firstQueryValue(params.event_start_time)?.trim()
  if (!resolvedEmail || !scheduledAt) {
    return null
  }

  const fullName = firstQueryValue(params.invitee_full_name)?.trim()
  const firstName = firstQueryValue(params.invitee_first_name)?.trim()
  const lastName = firstQueryValue(params.invitee_last_name)?.trim()
  const inviteeName =
    fullName || [firstName, lastName].filter(Boolean).join(' ') || resolvedEmail
  const eventType = firstQueryValue(params.event_type_name)?.trim()
  const inviteePhone = firstQueryValue(params.text_reminder_number)?.trim()

  return {
    event: 'invitee.created',
    inviteeEmail: resolvedEmail,
    inviteeName,
    scheduledAt,
    eventType,
    inviteePhone,
  }
}


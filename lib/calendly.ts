import { isCalendlyInviteeUri } from '@/lib/calendly-invitee'
import { SITE_URL } from '@/lib/site-url'
import type { CalendlyLeadInput } from '@/lib/fub-events'

export type CalendlyRedirectDetails = {
  email?: string
  name?: string
  phone?: string
  eventStartTime?: string
  eventTypeName?: string
}

const DEFAULT_CALENDLY_URL =
  'https://calendly.com/drjanduffy/buyer-consultation-30-min'

function withArroyoCampaign(url: string): string {
  const parsed = new URL(url)
  if (!parsed.searchParams.has('utm_source')) {
    parsed.searchParams.set('utm_source', 'arroyoskyeview.com')
    parsed.searchParams.set('utm_medium', 'website')
    parsed.searchParams.set('utm_campaign', 'buyer-consultation')
  }
  if (!parsed.searchParams.has('utm_content')) {
    parsed.searchParams.set('utm_content', new URL(SITE_URL).hostname)
  }
  return parsed.toString()
}

export const CALENDLY_URL = withArroyoCampaign(
  process.env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_CALENDLY_URL,
)

export const CALENDLY_EMBED_DOMAIN = new URL(SITE_URL).hostname

export type CalendlyEmbedType = 'Inline' | 'Popup' | 'Badge'

/**
 * Calendly embed `utm` object (in addition to query params on CALENDLY_URL).
 * Native FUB↔Calendly otherwise sources people as “Calendly - drjanetduffy.com”
 * and never cites this site. `embed_domain` on the widget URL is what Calendly
 * stores as the parent site for FUB’s native integration.
 */
export const CALENDLY_UTM = {
  utmSource: 'arroyoskyeview.com',
  utmMedium: 'website',
  utmCampaign: 'buyer-consultation',
  utmContent: CALENDLY_EMBED_DOMAIN,
} as const

export function calendlyWidgetUrl(
  url: string,
  embedType: CalendlyEmbedType,
): string {
  const parsed = new URL(url)
  parsed.searchParams.set('embed_domain', CALENDLY_EMBED_DOMAIN)
  parsed.searchParams.set('embed_type', embedType)
  return parsed.toString()
}

/** Calendly event Confirmation page → Redirect here, pass event details. */
export const CALENDLY_CONFIRMATION_URL = `${SITE_URL}/schedule-confirmed`

export type CalendlyHostedConfirmation = {
  pageType: string
  redirectUrl: string | null
  passEventDetails: boolean | null
  pointsAtSite: boolean
}

function calendlyPublicLookupUrl(eventUrl: string): string | undefined {
  try {
    const parsed = new URL(eventUrl)
    const parts = parsed.pathname.split('/').filter(Boolean)
    const profile = parts[0]
    const slug = parts[1]
    if (!profile || !slug) {
      return undefined
    }
    const lookup = new URL(
      'https://calendly.com/api/booking/event_types/lookup',
    )
    lookup.searchParams.set('event_type_slug', slug)
    lookup.searchParams.set('profile_slug', profile)
    return lookup.toString()
  } catch {
    return undefined
  }
}

function asJsonRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return value as Record<string, unknown>
  }
  return null
}

function parseCalendlyHostedConfirmation(
  data: unknown,
): CalendlyHostedConfirmation {
  const record = asJsonRecord(data)
  const pageType =
    typeof record?.confirmation_page_type === 'string'
      ? record.confirmation_page_type
      : 'unknown'
  const redirect = asJsonRecord(record?.redirect_configuration)
  const redirectUrlRaw = redirect?.url ?? redirect?.redirect_url
  const redirectUrl =
    typeof redirectUrlRaw === 'string' && redirectUrlRaw.trim()
      ? redirectUrlRaw.trim()
      : null
  const passRaw = redirect?.pass_event_details ?? redirect?.passEventDetails
  const passEventDetails = typeof passRaw === 'boolean' ? passRaw : null
  const pointsAtSite = Boolean(
    redirectUrl && redirectUrl.startsWith(CALENDLY_CONFIRMATION_URL),
  )
  return {
    pageType,
    redirectUrl,
    passEventDetails,
    pointsAtSite,
  }
}

/**
 * Public Calendly booking lookup — no PAT. Used by /api/go-live to see
 * whether Confirmation page already redirects to /schedule-confirmed.
 */
export async function fetchCalendlyHostedConfirmation(): Promise<CalendlyHostedConfirmation | null> {
  const lookup = calendlyPublicLookupUrl(CALENDLY_URL)
  if (!lookup) {
    return null
  }
  try {
    const res = await fetch(lookup, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'arroyoskyeview.com-go-live',
      },
      signal: AbortSignal.timeout(4000),
      cache: 'no-store',
    })
    if (!res.ok) {
      return null
    }
    return parseCalendlyHostedConfirmation(await res.json())
  } catch {
    return null
  }
}

/**
 * Parent-page confirmation URL after an embed `calendly.event_scheduled`
 * postMessage. Always includes invitee/event URIs. When the widget also
 * exposes email (some embed builds do), pass it so /schedule-confirmed can
 * POST Follow Up Boss without a Calendly PAT or dashboard redirect.
 */
export function scheduleConfirmedUrlFromCalendlyUris(
  inviteeUri: string,
  eventUri?: string,
  details?: CalendlyRedirectDetails,
): string {
  const next = new URL('/schedule-confirmed', SITE_URL)
  next.searchParams.set('invitee_uri', inviteeUri)
  if (eventUri) {
    next.searchParams.set('event_uri', eventUri)
  }
  if (details?.email) {
    next.searchParams.set('invitee_email', details.email)
  }
  if (details?.name) {
    next.searchParams.set('invitee_full_name', details.name)
  }
  if (details?.phone) {
    next.searchParams.set('text_reminder_number', details.phone)
  }
  if (details?.eventStartTime) {
    next.searchParams.set('event_start_time', details.eventStartTime)
  }
  if (details?.eventTypeName) {
    next.searchParams.set('event_type_name', details.eventTypeName)
  }
  return next.toString()
}

export const CALENDLY_BADGE = {
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: false,
} as const

function firstQueryValue(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0]
  }
  return value
}

/**
 * Calendly “Pass event details to the redirect URL” query params, or embed
 * postMessage fields copied onto the confirmation URL.
 * Email alone is not enough — require event start time (hosted redirect) or
 * a real Calendly invitee URI (embed booking) so `?email=` cannot create
 * Follow Up Boss contacts.
 */
export function calendlyLeadFromConfirmationParams(
  params: Record<string, string | string[] | undefined>,
): CalendlyLeadInput | null {
  const inviteeEmail = firstQueryValue(params.invitee_email)?.trim()
  const email = firstQueryValue(params.email)?.trim()
  const resolvedEmail = inviteeEmail || email
  const scheduledAt = firstQueryValue(params.event_start_time)?.trim()
  const inviteeUri = firstQueryValue(params.invitee_uri)?.trim()
  const hasBookingProof = Boolean(
    scheduledAt || (inviteeUri && isCalendlyInviteeUri(inviteeUri)),
  )
  if (!resolvedEmail || !hasBookingProof) {
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

import type { CalendlyLeadInput } from '@/lib/fub-events'

function calendlyApiToken(): string | undefined {
  const value = process.env.CALENDLY_API_TOKEN
  return typeof value === 'string' && value.trim() ? value.trim() : undefined
}

export function isCalendlyApiConfigured(): boolean {
  return Boolean(calendlyApiToken())
}

export function isCalendlyScheduledEventUri(value: string): boolean {
  try {
    const url = new URL(value)
    return (
      url.protocol === 'https:' &&
      url.hostname === 'api.calendly.com' &&
      /^\/scheduled_events\/[^/]+$/.test(url.pathname)
    )
  } catch {
    return false
  }
}

export function isCalendlyInviteeUri(value: string): boolean {
  try {
    const url = new URL(value)
    return (
      url.protocol === 'https:' &&
      url.hostname === 'api.calendly.com' &&
      /^\/scheduled_events\/[^/]+\/invitees\/[^/]+$/.test(url.pathname)
    )
  } catch {
    return false
  }
}

type CalendlyInviteeResource = {
  email?: string
  name?: string
  text_reminder_number?: string
  scheduled_event?: { uri?: string }
}

type CalendlyEventResource = {
  start_time?: string
  name?: string
}

async function calendlyGet<T>(uri: string, token: string): Promise<T | null> {
  const res = await fetch(uri, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    return null
  }
  const json: { resource?: T } = await res.json().catch(() => ({}))
  return json.resource ?? null
}

/**
 * Resolve a Calendly invitee URI (from widget postMessage) into a FUB lead.
 * Requires CALENDLY_API_TOKEN. Returns null if the URIs are invalid or empty.
 */
export async function calendlyLeadFromInviteeUri(
  inviteeUri: string,
  eventUri?: string,
): Promise<CalendlyLeadInput | null> {
  const token = calendlyApiToken()
  if (!token || !isCalendlyInviteeUri(inviteeUri)) {
    return null
  }

  const invitee = await calendlyGet<CalendlyInviteeResource>(inviteeUri, token)
  if (!invitee) {
    return null
  }
  const email = invitee.email?.trim()
  if (!email) {
    return null
  }

  const resolvedEventUri =
    (eventUri && isCalendlyScheduledEventUri(eventUri) ? eventUri : undefined) ||
    (invitee.scheduled_event?.uri && isCalendlyScheduledEventUri(invitee.scheduled_event.uri)
      ? invitee.scheduled_event.uri
      : undefined)

  let scheduledAt: string | undefined
  let eventType: string | undefined
  if (resolvedEventUri) {
    const event = await calendlyGet<CalendlyEventResource>(resolvedEventUri, token)
    scheduledAt = event?.start_time?.trim()
    eventType = event?.name?.trim()
  }

  return {
    event: 'invitee.created',
    inviteeEmail: email,
    inviteeName: invitee.name?.trim() || email,
    scheduledAt,
    eventType,
    inviteePhone: invitee.text_reminder_number?.trim(),
  }
}

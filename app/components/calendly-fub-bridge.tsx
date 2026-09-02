'use client'

import { useEffect } from 'react'
import {
  scheduleConfirmedUrlFromCalendlyUris,
  type CalendlyRedirectDetails,
} from '@/lib/calendly'
import { trackEvent } from './analytics-tracker'

const BOOKED_URI_KEY = 'arroyo-calendly-booked-invitee'

type CalendlyScheduledPayload = {
  event?: {
    uri?: string
    start_time?: string
    name?: string
  }
  invitee?: {
    uri?: string
    email?: string
    name?: string
    first_name?: string
    last_name?: string
    text_reminder_number?: string
  }
}

type CalendlyMessageData = {
  event?: string
  payload?: CalendlyScheduledPayload
}

function isCalendlyMessage(
  event: MessageEvent,
): event is MessageEvent<CalendlyMessageData> {
  if (event.origin !== 'https://calendly.com') {
    return false
  }
  return typeof event.data === 'object' && event.data !== null
}

function nonEmpty(value: string | undefined): string | undefined {
  const trimmed = value?.trim()
  return trimmed ? trimmed : undefined
}

function inviteeNameFromPayload(
  invitee: CalendlyScheduledPayload['invitee'],
): string | undefined {
  const full = nonEmpty(invitee?.name)
  if (full) {
    return full
  }
  const joined = [invitee?.first_name, invitee?.last_name]
    .map((part) => nonEmpty(part))
    .filter((part): part is string => Boolean(part))
    .join(' ')
  return joined || undefined
}

function postBookingToFollowUpBoss(body: Record<string, string>): void {
  void fetch('/api/calendly/scheduled', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    keepalive: true,
  })
}

function redirectToScheduleConfirmed(
  inviteeUri: string,
  eventUri: string | undefined,
  details: CalendlyRedirectDetails,
): void {
  if (window.location.pathname === '/schedule-confirmed') {
    return
  }
  try {
    if (sessionStorage.getItem(BOOKED_URI_KEY) === inviteeUri) {
      return
    }
    sessionStorage.setItem(BOOKED_URI_KEY, inviteeUri)
  } catch {
    // Private mode — still redirect once from this handler.
  }
  const confirmed = new URL(
    scheduleConfirmedUrlFromCalendlyUris(inviteeUri, eventUri, details),
  )
  window.location.assign(`${confirmed.pathname}${confirmed.search}`)
}

/**
 * Calendly widgets run in an iframe, so the FUB pixel cannot capture the
 * booking form. This listener records the schedule event in GA, posts
 * invitee URIs (and email/name when the widget includes them) to
 * `/api/calendly/scheduled`, and sends the parent to `/schedule-confirmed`.
 * Durable fallback: details form, `/api/calendly/webhook`, dashboard redirect.
 */
export default function CalendlyFubBridge() {
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (!isCalendlyMessage(event)) {
        return
      }
      if (event.data.event !== 'calendly.event_scheduled') {
        return
      }
      const invitee = event.data.payload?.invitee
      const scheduledEvent = event.data.payload?.event
      const inviteeUri = nonEmpty(invitee?.uri)
      const eventUri = nonEmpty(scheduledEvent?.uri)
      const email = nonEmpty(invitee?.email)
      const name = inviteeNameFromPayload(invitee)
      const phone = nonEmpty(invitee?.text_reminder_number)
      const eventStartTime = nonEmpty(scheduledEvent?.start_time)
      const eventTypeName = nonEmpty(scheduledEvent?.name)
      trackEvent('calendly_event_scheduled', 'conversion', 'buyer-consultation')
      if (!inviteeUri) {
        return
      }
      const scheduledBody: Record<string, string> = { inviteeUri }
      if (eventUri) {
        scheduledBody.eventUri = eventUri
      }
      if (email) {
        scheduledBody.email = email
      }
      if (name) {
        scheduledBody.name = name
      }
      if (phone) {
        scheduledBody.phone = phone
      }
      postBookingToFollowUpBoss(scheduledBody)
      redirectToScheduleConfirmed(inviteeUri, eventUri, {
        email,
        name,
        phone,
        eventStartTime,
        eventTypeName,
      })
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return null
}

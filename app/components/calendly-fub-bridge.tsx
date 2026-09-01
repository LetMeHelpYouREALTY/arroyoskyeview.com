'use client'

import { useEffect } from 'react'
import { scheduleConfirmedUrlFromCalendlyUris } from '@/lib/calendly'
import { trackEvent } from './analytics-tracker'

const BOOKED_URI_KEY = 'arroyo-calendly-booked-invitee'

type CalendlyScheduledPayload = {
  event?: { uri?: string }
  invitee?: { uri?: string }
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

function postInviteeUris(inviteeUri: string, eventUri?: string): void {
  void fetch('/api/calendly/scheduled', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ inviteeUri, eventUri }),
    keepalive: true,
  })
}

function redirectToScheduleConfirmed(
  inviteeUri: string,
  eventUri?: string,
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
    scheduleConfirmedUrlFromCalendlyUris(inviteeUri, eventUri),
  )
  window.location.assign(`${confirmed.pathname}${confirmed.search}`)
}

/**
 * Calendly widgets run in an iframe, so the FUB pixel cannot capture the
 * booking form. This listener records the schedule event in GA, posts
 * invitee URIs to `/api/calendly/scheduled` (Calendly PAT + FUB key), and
 * sends the parent page to `/schedule-confirmed` for pixel form-capture.
 * Durable fallback: `/api/calendly/webhook`, `/api/calendly/confirmed`
 * details form, and Calendly dashboard redirect.
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
      const inviteeUri = event.data.payload?.invitee?.uri
      const eventUri = event.data.payload?.event?.uri
      trackEvent('calendly_event_scheduled', 'conversion', 'buyer-consultation')
      if (!inviteeUri) {
        return
      }
      postInviteeUris(inviteeUri, eventUri)
      redirectToScheduleConfirmed(inviteeUri, eventUri)
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return null
}

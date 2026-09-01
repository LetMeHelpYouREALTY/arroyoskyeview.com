'use client'

import { useEffect } from 'react'
import { trackEvent } from './analytics-tracker'

type CalendlyScheduledPayload = {
  event?: { uri?: string }
  invitee?: { uri?: string }
}

type CalendlyMessageData = {
  event?: string
  payload?: CalendlyScheduledPayload
}

function isCalendlyMessage(event: MessageEvent): event is MessageEvent<CalendlyMessageData> {
  if (event.origin !== 'https://calendly.com') {
    return false
  }
  return typeof event.data === 'object' && event.data !== null
}

async function postInviteeUris(payload: CalendlyScheduledPayload | undefined): Promise<void> {
  const inviteeUri = payload?.invitee?.uri
  const eventUri = payload?.event?.uri
  if (!inviteeUri) {
    return
  }
  await fetch('/api/calendly/scheduled', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ inviteeUri, eventUri }),
  })
}

/**
 * Calendly widgets run in an iframe, so the FUB pixel cannot capture the
 * booking form. This listener records the schedule event in GA and posts
 * invitee URIs to `/api/calendly/scheduled` (Calendly PAT + FUB key).
 * Durable fallback: `/api/calendly/webhook` and `/schedule-confirmed`.
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
      trackEvent('calendly_event_scheduled', 'conversion', 'buyer-consultation')
      void postInviteeUris(event.data.payload)
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return null
}

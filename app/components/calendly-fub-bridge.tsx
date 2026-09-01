'use client'

import { useEffect } from 'react'
import { trackEvent } from './analytics-tracker'

type CalendlyMessageData = {
  event?: string
}

function isCalendlyMessage(event: MessageEvent): event is MessageEvent<CalendlyMessageData> {
  if (event.origin !== 'https://calendly.com') {
    return false
  }
  return typeof event.data === 'object' && event.data !== null
}

/**
 * Calendly widgets run in an iframe, so the FUB pixel cannot capture the
 * booking form. This listener records the schedule event in GA. The durable
 * Calendly → Follow Up Boss lead sync is `/api/calendly/webhook`.
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
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return null
}

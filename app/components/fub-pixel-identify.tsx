'use client'

import { useEffect } from 'react'

type FubPixelIdentifyProps = {
  email?: string
}

/**
 * Identifies an existing Follow Up Boss contact from the confirmation URL.
 * New contacts still need the Events API (`/api/calendly/webhook` or
 * confirmation `after()` sync). No HTML form — marketing pages stay Calendly-only.
 */
export default function FubPixelIdentify({ email }: FubPixelIdentifyProps) {
  useEffect(() => {
    if (!email) {
      return
    }

    let attempts = 0
    const timer = window.setInterval(() => {
      attempts += 1
      const tracker = window.widgetTracker
      if (typeof tracker === 'function') {
        tracker('set', 'email', email)
        window.clearInterval(timer)
        return
      }
      if (attempts >= 20) {
        window.clearInterval(timer)
      }
    }, 250)

    return () => window.clearInterval(timer)
  }, [email])

  return null
}

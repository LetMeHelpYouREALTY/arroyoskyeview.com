'use client'

import { useEffect } from 'react'
import { CALENDLY_BADGE, CALENDLY_URL } from '@/lib/calendly'

export default function CalendlyBadgeWidget() {
  useEffect(() => {
    if (!window.Calendly?.initBadgeWidget) return

    const existingBadge = document.querySelector('.calendly-badge-widget')
    if (!existingBadge) {
      window.Calendly.initBadgeWidget({
        url: CALENDLY_URL,
        ...CALENDLY_BADGE,
      })
    }
  }, [])

  return null
}

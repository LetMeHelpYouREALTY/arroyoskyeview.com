'use client'

import { useEffect } from 'react'
import { CALENDLY_BADGE, CALENDLY_URL } from '@/lib/calendly'

const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css'

function ensureCalendlyCss() {
  if (document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
    return
  }
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = CALENDLY_CSS
  document.head.appendChild(link)
}

function initBadge() {
  if (!window.Calendly?.initBadgeWidget) {
    return false
  }
  if (!document.querySelector('.calendly-badge-widget')) {
    window.Calendly.initBadgeWidget({
      url: CALENDLY_URL,
      ...CALENDLY_BADGE,
    })
  }
  return true
}

/** Badge + CSS load after first paint so widget.css is not render-blocking. */
export default function CalendlyBadgeWidget() {
  useEffect(() => {
    ensureCalendlyCss()
    if (initBadge()) {
      return
    }
    const timer = window.setInterval(() => {
      if (initBadge()) {
        window.clearInterval(timer)
      }
    }, 400)
    const stop = window.setTimeout(() => window.clearInterval(timer), 15000)
    return () => {
      window.clearInterval(timer)
      window.clearTimeout(stop)
    }
  }, [])

  return null
}

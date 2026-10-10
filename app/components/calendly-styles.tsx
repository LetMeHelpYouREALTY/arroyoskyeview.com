'use client'

import { useEffect } from 'react'

const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css'

/** Load Calendly CSS after first paint so it does not block mobile LCP. */
export default function CalendlyStyles() {
  useEffect(() => {
    if (document.querySelector(`link[href="${CALENDLY_CSS}"]`)) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = CALENDLY_CSS
    document.head.appendChild(link)
  }, [])

  return null
}

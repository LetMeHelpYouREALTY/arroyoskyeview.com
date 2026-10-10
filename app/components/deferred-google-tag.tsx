'use client'

import { useEffect } from 'react'

const GA_ID = 'G-6HBW87EGMR'

/**
 * Loads GA after the browser is idle so the tag does not sit on the main
 * thread before the first paint. requestIdleCallback runs after rendering.
 */
export default function DeferredGoogleTag() {
  useEffect(() => {
    let ran = false

    const load = () => {
      if (ran || document.getElementById('gtag-js')) return
      ran = true
      window.dataLayer = window.dataLayer || []
      const gtag: NonNullable<Window['gtag']> = (...args) => {
        window.dataLayer?.push(args)
      }
      window.gtag = gtag
      gtag('js', new Date())
      gtag('config', GA_ID, {
        page_path: window.location.pathname,
        send_page_view: true,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
      })
      const script = document.createElement('script')
      script.id = 'gtag-js'
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.body.appendChild(script)
    }

    const schedule = window.requestIdleCallback?.bind(window)
    if (schedule) {
      const id = schedule(load, { timeout: 5000 })
      return () => window.cancelIdleCallback?.(id)
    }

    const timer = globalThis.setTimeout(load, 3500)
    return () => globalThis.clearTimeout(timer)
  }, [])

  return null
}

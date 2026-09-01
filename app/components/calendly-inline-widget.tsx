'use client'

import { useEffect, useRef } from 'react'
import { CALENDLY_URL } from '@/lib/calendly'
import { loadCalendlyWidget, whenVisible } from '@/lib/third-party-loaders'

type CalendlyInlineWidgetProps = {
  url?: string
  className?: string
}

/**
 * Mount the Calendly iframe only when this block is on screen so homepage
 * LCP is not blocked by booking-*.css / Stripe / the 1.2 MB widget.
 */
export default function CalendlyInlineWidget({
  url = CALENDLY_URL,
  className = '',
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) {
      return
    }
    return whenVisible(node, () => {
      void loadCalendlyWidget().then(() => {
        if (node.childElementCount > 0) {
          return
        }
        if (window.Calendly?.initInlineWidget) {
          window.Calendly.initInlineWidget({ url, parentElement: node })
          return
        }
        node.classList.add('calendly-inline-widget')
        node.setAttribute('data-url', url)
      })
    })
  }, [url])

  return (
    <div
      ref={containerRef}
      className={`min-w-[320px] min-h-[700px] ${className}`.trim()}
    />
  )
}

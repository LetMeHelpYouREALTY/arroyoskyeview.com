'use client'

import { useEffect, useRef } from 'react'
import { CALENDLY_URL, CALENDLY_UTM, calendlyWidgetUrl } from '@/lib/calendly'
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
  const embedUrl = calendlyWidgetUrl(url, 'Inline')

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
          window.Calendly.initInlineWidget({
            url: embedUrl,
            parentElement: node,
            utm: CALENDLY_UTM,
          })
          return
        }
        node.classList.add('calendly-inline-widget')
        node.setAttribute('data-url', embedUrl)
      })
    })
  }, [embedUrl])

  return (
    <div
      ref={containerRef}
      data-url={embedUrl}
      className={`min-w-[320px] min-h-[700px] ${className}`.trim()}
    />
  )
}

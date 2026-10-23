'use client'

import { usePathname } from 'next/navigation'
import { calendlyEventForPath, tagCalendlyUrl } from '@/lib/calendly'
import { loadCalendly } from '@/lib/load-calendly'

type CalendlyLinkWidgetProps = {
  text?: string
  url?: string
  className?: string
  /** utm_medium for this placement. */
  medium?: string
}

export default function CalendlyLinkWidget({
  text = 'Schedule time with me',
  url: eventUrl,
  className = '',
  medium = 'popup_link',
}: CalendlyLinkWidgetProps) {
  const pathname = usePathname()
  const url = tagCalendlyUrl(eventUrl ?? calendlyEventForPath(pathname), medium, pathname)
  const openPopup = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
    event.preventDefault()
    void loadCalendly()
      .then(() => {
        if (window.Calendly?.initPopupWidget) {
          window.Calendly.initPopupWidget({ url })
          return
        }
        window.open(url, '_blank', 'noopener,noreferrer')
      })
      .catch(() => {
        window.open(url, '_blank', 'noopener,noreferrer')
      })
  }

  return (
    <a href={url} onClick={openPopup} className={className}>
      {text}
    </a>
  )
}

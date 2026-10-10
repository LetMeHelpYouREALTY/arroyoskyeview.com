'use client'

import { CALENDLY_URL } from '@/lib/calendly'
import { loadCalendly } from '@/lib/load-calendly'

type CalendlyLinkWidgetProps = {
  text?: string
  url?: string
  className?: string
}

export default function CalendlyLinkWidget({
  text = 'Schedule time with me',
  url = CALENDLY_URL,
  className = '',
}: CalendlyLinkWidgetProps) {
  const openPopup = (event: React.MouseEvent<HTMLAnchorElement>) => {
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

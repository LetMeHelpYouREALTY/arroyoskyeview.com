'use client'

import { CALENDLY_URL } from '@/lib/calendly'

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
    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url })
    } else if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a href="/schedule" onClick={openPopup} className={className}>
      {text}
    </a>
  )
}

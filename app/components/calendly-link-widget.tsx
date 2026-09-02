'use client'

import { CALENDLY_URL, CALENDLY_UTM, calendlyWidgetUrl } from '@/lib/calendly'

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
    if (typeof window === 'undefined' || !window.Calendly?.initPopupWidget) {
      return
    }
    event.preventDefault()
    window.Calendly.initPopupWidget({
      url: calendlyWidgetUrl(url, 'Popup'),
      utm: CALENDLY_UTM,
    })
  }

  return (
    <a href="/schedule" onClick={openPopup} className={className}>
      {text}
    </a>
  )
}

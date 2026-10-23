'use client'

import { usePathname } from 'next/navigation'
import { calendlyEventForPath, tagCalendlyUrl } from '@/lib/calendly'

type CalendlyInlineWidgetProps = {
  url?: string
  className?: string
}

export default function CalendlyInlineWidget({
  url,
  className = '',
}: CalendlyInlineWidgetProps) {
  const pathname = usePathname()
  const dataUrl = tagCalendlyUrl(url ?? calendlyEventForPath(pathname), 'inline', pathname)
  return (
    <div
      className={`calendly-inline-widget min-w-[320px] h-[700px] ${className}`.trim()}
      data-url={dataUrl}
    />
  )
}

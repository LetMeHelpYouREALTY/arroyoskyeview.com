'use client'

import { cn } from '@/lib/utils'
import { CALENDLY_URL } from '@/lib/calendly'
import CalendlyLinkWidget from './calendly-link-widget'

type CalendlyScheduleButtonProps = {
  text?: string
  url?: string
  className?: string
  variant?: 'primary' | 'outline' | 'champagne'
}

const variantClasses: Record<NonNullable<CalendlyScheduleButtonProps['variant']>, string> = {
  primary:
    'inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  outline:
    'inline-flex min-h-11 items-center justify-center rounded-md border-2 border-primary bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  champagne:
    'inline-flex min-h-11 items-center justify-center rounded-full bg-luxury-champagne px-6 py-3 text-sm font-semibold text-luxury-navy transition-colors hover:bg-luxury-champagne/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
}

export default function CalendlyScheduleButton({
  text = 'Schedule time with me',
  url = CALENDLY_URL,
  className = '',
  variant = 'primary',
}: CalendlyScheduleButtonProps) {
  return (
    <CalendlyLinkWidget
      text={text}
      url={url}
      className={cn(variantClasses[variant], className)}
    />
  )
}

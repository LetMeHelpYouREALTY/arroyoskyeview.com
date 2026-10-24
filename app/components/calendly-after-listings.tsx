'use client'

import { CALENDLY_SHOWING_URL } from '@/lib/calendly'
import CalendlyLinkWidget from './calendly-link-widget'

/** Booking strip placed right after a RealScout listings block: see a home, book the showing. */
export default function CalendlyAfterListings({ className = '' }: { className?: string }) {
  return (
    <section
      aria-label="Book a showing with Dr. Jan Duffy"
      className={`border-y border-luxury-champagne/30 bg-muted/60 py-8 ${className}`.trim()}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-base font-medium text-foreground">
          See a home you like? Pick a showing time with Dr. Jan Duffy.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <CalendlyLinkWidget
            text="Book a showing"
            url={CALENDLY_SHOWING_URL}
            medium="after_listings"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          />
          <CalendlyLinkWidget
            text="Talk it through first"
            medium="after_listings"
            className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
          />
        </div>
      </div>
    </section>
  )
}

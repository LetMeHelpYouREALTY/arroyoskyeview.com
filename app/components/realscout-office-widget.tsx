'use client'

import { useId, useRef } from 'react'
import { buildRealScoutOfficeListingsMarkup } from '@/lib/realscout-markup'
import type { RealScoutOfficeListingsOverrides } from '@/lib/realscout-markup'
import { cn } from '@/lib/utils'
import { useRealScoutWhenVisible } from './realscout-loader'

type RealScoutOfficeWidgetProps = {
  /** Extra Tailwind classes for the outer section */
  className?: string
  /** Override heading (default: Browse Las Vegas area listings) */
  heading?: string
  /** Override subtext */
  description?: string
  /** Override price band for this embed */
  priceRange?: RealScoutOfficeListingsOverrides
}

/**
 * RealScout office listings (MLS) — custom element hydrated by realscout-web-components.umd.js.
 * Script loads when this section nears the viewport. Use dangerouslySetInnerHTML per RealScout.
 */
export default function RealScoutOfficeWidget({
  className = '',
  heading = 'Browse Las Vegas area listings',
  description = 'Live MLS search powered by RealScout — Dr. Jan Duffy represents buyers, not the builder.',
  priceRange,
}: RealScoutOfficeWidgetProps) {
  const headingId = useId().replace(/:/g, '')
  const sectionRef = useRef<HTMLElement>(null)
  useRealScoutWhenVisible(sectionRef)

  const markup = buildRealScoutOfficeListingsMarkup(priceRange)

  return (
    <section
      ref={sectionRef}
      className={cn(
        'border-t border-border bg-muted/40 py-12 sm:py-16',
        className,
      )}
      aria-labelledby={headingId}
      data-realscout-office-section
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id={headingId}
          className="mb-2 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
        <div
          className="realscout-office-widget min-h-[280px] w-full [&_realscout-office-listings]:min-h-[240px]"
          dangerouslySetInnerHTML={{ __html: markup }}
        />
      </div>
    </section>
  )
}

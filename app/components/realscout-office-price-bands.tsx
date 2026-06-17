'use client'

import { useId } from 'react'
import { REALSCOUT_OFFICE_PRICE_BANDS } from '@/lib/realscout-config'
import { buildRealScoutOfficeListingsMarkup } from '@/lib/realscout-markup'

type RealScoutOfficePriceBandsProps = {
  /** Optional intro line under the main heading */
  intro?: string
  className?: string
}

/**
 * Replaces dummy image carousels: multiple RealScout office listings embeds by price range.
 */
export default function RealScoutOfficePriceBands({
  intro = 'Live MLS search powered by RealScout — Dr. Jan Duffy represents buyers, not the builder.',
  className = '',
}: RealScoutOfficePriceBandsProps) {
  const sectionHeadingId = useId().replace(/:/g, '')

  return (
    <section
      className={`bg-muted py-10 sm:py-14 ${className}`.trim()}
      aria-labelledby={sectionHeadingId}
      data-realscout-office-price-bands
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id={sectionHeadingId}
          className="mb-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Browse Las Vegas MLS listings by price range
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-muted-foreground sm:text-base">
          {intro}
        </p>

        <div className="flex flex-col gap-12 sm:gap-14">
          {REALSCOUT_OFFICE_PRICE_BANDS.map((band) => {
            const markup = buildRealScoutOfficeListingsMarkup({
              priceMin: band.priceMin,
              priceMax: band.priceMax,
            })
            const bandHeadingId = `${band.id}-${sectionHeadingId}`
            return (
              <div
                key={band.id}
                className="rounded-xl border border-border bg-white p-4 shadow-sm sm:p-6"
              >
                <h3
                  id={bandHeadingId}
                  className="mb-1 text-xl font-semibold text-foreground sm:text-2xl"
                >
                  {band.title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground sm:text-base">{band.description}</p>
                <div
                  className="realscout-office-widget min-h-[260px] w-full [&_realscout-office-listings]:min-h-[220px]"
                  dangerouslySetInnerHTML={{ __html: markup }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

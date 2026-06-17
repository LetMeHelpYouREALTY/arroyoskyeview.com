'use client'

export default function PurpleSaleBanner() {
  return (
    <div className="border-b border-luxury-champagne/30 bg-luxury-navy py-2.5 text-luxury-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 sm:px-6 lg:px-8">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-luxury-champagne">
          Limited-Time Builder Incentive
        </span>
        <span className="text-luxury-champagne/50" aria-hidden>
          |
        </span>
        <span className="text-center text-sm text-luxury-ivory/90 sm:text-left">
          Special pricing with a <strong className="text-luxury-champagne">3.875% (4.827% APR)*</strong> rate
          — Skye Canyon townhomes from the upper $300s
        </span>
      </div>
    </div>
  )
}

import { ARROYO_PRICE_RANGE } from '@/lib/arroyo-inventory'

export default function PurpleSaleBanner() {
  return (
    <div className="border-b border-luxury-champagne/15 bg-luxury-navy">
      <p className="mx-auto max-w-7xl px-4 py-2 text-center font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-luxury-sand">
        Skye Canyon · 89166 · Townhomes {ARROYO_PRICE_RANGE}
      </p>
    </div>
  )
}

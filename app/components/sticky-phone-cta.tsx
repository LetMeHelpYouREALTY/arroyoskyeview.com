'use client'

import { trackPhoneClick } from './analytics-tracker'

export default function StickyPhoneCTA() {
  const handleClick = () => {
    trackPhoneClick('702-903-4687', 'sticky_mobile_cta')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-luxury-champagne/30 bg-luxury-navy pb-[env(safe-area-inset-bottom,0px)] lg:hidden">
      <a
        href="tel:7029034687"
        onClick={handleClick}
        className="flex min-h-14 items-center justify-center px-6 font-sans text-sm font-medium uppercase tracking-[0.16em] text-luxury-ivory"
        aria-label="Call Dr. Jan Duffy at 702-903-4687"
      >
        Call (702) 903-4687
      </a>
    </div>
  )
}

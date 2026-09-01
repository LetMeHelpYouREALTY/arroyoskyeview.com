'use client'

import { trackPhoneClick } from './analytics-tracker'
import DrJanPortrait from './dr-jan-portrait'

export default function StickyPhoneCTA() {
  const handleClick = () => {
    trackPhoneClick('702-903-4687', 'sticky_mobile_cta')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t-2 border-primary bg-background pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.4)]">
      <a
        href="tel:7029034687"
        onClick={handleClick}
        className="flex min-h-[52px] items-center justify-center space-x-3 bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-lg font-bold text-primary-foreground transition-all duration-200 hover:from-primary/90 hover:to-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        aria-label="Call Dr. Jan Duffy at 702-903-4687"
      >
        <DrJanPortrait size="xs" decorative className="ring-1 ring-white/80" />
        <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>Call Dr. Jan: (702) 903-4687</span>
        <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-semibold text-primary">FREE</span>
      </a>
    </div>
  )
}

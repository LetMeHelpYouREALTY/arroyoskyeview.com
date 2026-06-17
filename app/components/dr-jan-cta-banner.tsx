'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getCTAByContext } from './cta-rotator'
import { trackPhoneClick, trackSmsClick, trackCTAClick } from './analytics-tracker'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import RealScoutOfficeWidget from './realscout-office-widget'
import { REALSCOUT_PRICE_BANDS_ROUTE_PATHS } from '@/lib/realscout-config'

interface DrJanCTABannerProps {
  context?: string
}

export default function DrJanCTABanner({ context = '' }: DrJanCTABannerProps) {
  const [currentCTA] = useState(() => getCTAByContext(context))
  const pathname = usePathname()
  const phoneNumber = '(702) 903-4687'
  const telLink = `tel:7029034687`
  const smsLink = `sms:7029034687`
  const showInlineListings =
    pathname == null || !REALSCOUT_PRICE_BANDS_ROUTE_PATHS.has(pathname)

  const handlePhoneClick = () => {
    if (currentCTA.type === 'call') {
      trackPhoneClick('702-903-4687', 'dr_jan_cta_banner')
    } else {
      trackSmsClick('dr_jan_cta_banner')
    }
  }

  const handleLearnMoreClick = () => {
    trackCTAClick("Learn More About Dr. Jan's Buyer Representation", 'dr_jan_cta_banner')
  }

  return (
    <>
      <section className="bg-luxury-navy py-8 text-luxury-ivory md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
            <div className="text-center md:text-left">
              <h3 className="mb-2 font-serif text-balance text-xl font-light tracking-tight md:text-2xl">
                Work with Dr. Jan Duffy — Your Skye Canyon Buyer&apos;s Agent
              </h3>
              <p className="text-sm text-luxury-sand md:text-base">
                <strong className="text-luxury-champagne">Dr. Jan Duffy represents HOME BUYERS, not the builder.</strong>{' '}
                Expert representation for Arroyo at Skyeview in zip 89166—construction monitoring, building standards
                inspection, and insider builder knowledge at no extra cost.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-end">
              <Button
                asChild
                size="lg"
                className={cn(
                  'min-h-11 w-full rounded-full bg-luxury-champagne font-semibold text-luxury-navy shadow-sm sm:w-auto',
                  'hover:bg-luxury-champagne/90',
                )}
              >
                <a
                  href={currentCTA.type === 'call' ? telLink : smsLink}
                  onClick={handlePhoneClick}
                >
                  {currentCTA.text} - {currentCTA.type === 'call' ? 'Call' : 'Text'} Dr. Jan {phoneNumber}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className={cn(
                  'min-h-11 w-full rounded-full border-luxury-champagne/50 bg-transparent font-semibold text-luxury-champagne sm:w-auto',
                  'hover:bg-luxury-champagne/10 hover:text-luxury-ivory',
                )}
              >
                <Link href="/work-with-dr-jan" onClick={handleLearnMoreClick}>
                  Learn More About Dr. Jan's Buyer Representation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {showInlineListings && (
        <RealScoutOfficeWidget
          heading="Live Listings Below the Hero"
          description="Browse live MLS inventory without leaving the page. Dr. Jan Duffy represents buyers, not the builder."
          className="py-10"
        />
      )}
    </>
  )
}


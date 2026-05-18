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
      <section className="bg-linear-to-r from-primary to-primary/88 text-primary-foreground py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-balance text-xl font-bold tracking-tight md:text-2xl">
                Work with Dr. Jan Duffy - Buyer's Agent for Arroyo at Skyeview Homes
              </h3>
              <p className="text-sm text-primary-foreground/90 md:text-base">
                <strong>Dr. Jan Duffy represents HOME BUYERS, not the builder.</strong> Expert buyer representation for Arroyo at Skyeview Homes in Skye Canyon, zip code 89166—at no extra cost to you. Construction monitoring, building standards inspection & insider knowledge.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-end">
              <Button
                asChild
                size="lg"
                className={cn(
                  'min-h-11 w-full font-semibold shadow-sm sm:w-auto',
                  'bg-background text-primary hover:bg-background/90',
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
                  'min-h-11 w-full border-primary-foreground/45 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/12 hover:text-primary-foreground sm:w-auto',
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


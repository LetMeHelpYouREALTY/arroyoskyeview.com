'use client'

import { Button } from '@/components/ui/button'
import CalendlyScheduleButton from './calendly-schedule-button'
import { cn } from '@/lib/utils'
import { trackPhoneClick, trackSmsClick } from './analytics-tracker'

export default function DrJanHero() {
  const handleCallClick = () => {
    trackPhoneClick('702-903-4687', 'hero_call_cta')
  }

  const handleTextClick = () => {
    trackSmsClick('hero_text_cta')
  }

  return (
    <section className="relative overflow-hidden bg-luxury-navy py-16 text-luxury-ivory md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(197,168,128,0.15),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center lg:max-w-5xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Buying Arroyo at Skyeview Homes? Get Expert Buyer Representation in Skye Canyon, Northwest Las Vegas
          </h2>
          <p className="mt-6 text-pretty text-lg text-luxury-ivory/90 md:text-xl">
            <strong className="text-luxury-ivory">Dr. Jan Duffy represents HOME BUYERS</strong>
            —not the builder. Expert buyer representation for Arroyo at Skyeview Homes in Skye Canyon, zip code
            89166, northwest Las Vegas, Nevada. No extra cost to you.
          </p>

          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 text-left text-sm text-luxury-ivory/95 sm:grid-cols-1 md:text-base lg:mx-auto lg:max-w-4xl lg:grid-cols-3 lg:gap-4">
            <li className="rounded-xl border border-luxury-champagne/20 bg-luxury-champagne/10 px-4 py-3 backdrop-blur-sm lg:text-center">
              <span className="font-semibold text-luxury-ivory">Builder-paid commission</span>
              <span className="mt-1 block text-luxury-ivory/85">
                You are already funding an agent—choose one who works for you.
              </span>
            </li>
            <li className="rounded-xl border border-luxury-champagne/20 bg-luxury-champagne/10 px-4 py-3 backdrop-blur-sm lg:text-center">
              <span className="font-semibold text-luxury-ivory">Construction monitoring</span>
              <span className="mt-1 block text-luxury-ivory/85">
                Real-time checks every 7–10 days through your build.
              </span>
            </li>
            <li className="rounded-xl border border-luxury-champagne/20 bg-luxury-champagne/10 px-4 py-3 backdrop-blur-sm lg:text-center">
              <span className="font-semibold text-luxury-ivory">Closing protection</span>
              <span className="mt-1 block text-luxury-ivory/85">
                Building standards inspection at closing for your interests.
              </span>
            </li>
          </ul>

          <p className="mx-auto mt-10 max-w-3xl text-pretty text-base text-luxury-ivory/90 md:text-lg">
            Builders pay for buyer representation on all new construction homes including Arroyo at Skyeview
            Homes—which means you&apos;re already funding an agent, so choose one who works exclusively for YOU, not
            the builder. <strong>Dr. Jan Duffy is a New Construction Home Expert</strong> who specializes in Arroyo at
            Skyeview Homes and brings insider knowledge of Skye Canyon (zip code 89166), northwest Las Vegas
            communities, real-time construction monitoring every 7-10 days, and a building standards inspection at
            closing—protecting YOUR interests as a home buyer every step of the way.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            <CalendlyScheduleButton
              text="Schedule time with me"
              variant="champagne"
              className="min-h-11 px-8 text-base shadow-lg"
            />
            <Button
              asChild
              size="lg"
              className={cn(
                'min-h-11 min-w-[44px] px-8 text-base shadow-lg motion-safe:transition-transform motion-safe:hover:scale-[1.02]',
                'bg-luxury-champagne text-luxury-navy hover:bg-luxury-champagne/90',
              )}
            >
              <a href="tel:7029034687" onClick={handleCallClick}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now: (702) 903-4687
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className={cn(
                'min-h-11 min-w-[44px] border border-luxury-champagne/30 bg-luxury-champagne/15 px-8 text-base text-luxury-ivory shadow-lg backdrop-blur-sm',
                'hover:bg-luxury-champagne/25',
              )}
            >
              <a href="sms:7029034687" onClick={handleTextClick}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Text Dr. Jan
              </a>
            </Button>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-luxury-champagne/20 bg-luxury-champagne/10 px-4 py-4 backdrop-blur-sm">
            <p className="text-center text-sm text-luxury-ivory/95 md:text-base">
              <strong className="text-luxury-ivory">100% Free Buyer Representation</strong> • Builders Pay
              Commission • No Extra Cost to You
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

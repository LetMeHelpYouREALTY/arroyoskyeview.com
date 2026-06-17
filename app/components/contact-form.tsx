'use client'

import { Button } from '@/components/ui/button'
import CalendlyInlineWidget from './calendly-inline-widget'
import CalendlyLinkWidget from './calendly-link-widget'

export default function ContactForm() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Schedule Your Buyer Consultation
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Book a 30-minute session with Dr. Jan Duffy to discuss Arroyo at Skyeview Homes and other Skye Canyon communities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <svg className="mr-2 h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Free Buyer Representation</span>
              </div>
              <div className="flex items-center">
                <svg className="mr-2 h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Represents HOME BUYERS Only</span>
              </div>
              <div className="flex items-center">
                <svg className="mr-2 h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>30-minute buyer consultation</span>
              </div>
            </div>
          </div>

          <CalendlyInlineWidget className="mb-6 h-[700px]" />
          <div className="text-center">
            <CalendlyLinkWidget
              className="font-semibold text-primary underline underline-offset-4 hover:text-primary"
              text="Schedule time with me"
            />
            <div className="mt-4">
              <Button
                type="button"
                variant="outline"
                asChild
                className="min-w-[200px] rounded-lg border-2 border-luxury-champagne px-8 py-3 text-lg font-semibold text-primary transition-all hover:bg-blue-50"
              >
                <a href="tel:7029034687" className="flex items-center justify-center">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (702) 903-4687
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

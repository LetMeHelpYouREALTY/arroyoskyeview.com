'use client'

import { Button } from '@/components/ui/button'
import CalendlyInlineWidget from './calendly-inline-widget'
import CalendlyLinkWidget from './calendly-link-widget'

export default function ContactForm() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Get Started with Your Home Search
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Tell Dr. Jan Duffy about your new construction home search at Arroyo at Skyeview Homes or other Skye Canyon communities, and she'll get back to you within 24 hours
            </p>
            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Free Buyer Representation</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Represents HOME BUYERS Only</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>

          <CalendlyInlineWidget className="mb-6 h-[720px]" />
          <div className="text-center">
            <CalendlyLinkWidget
              className="text-primary hover:text-primary font-semibold underline underline-offset-4"
              text="Prefer popup booking? Schedule time with Dr. Jan"
            />
            <div className="mt-4">
              <Button
                type="button"
                variant="outline"
                asChild
                className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-luxury-champagne text-primary hover:bg-blue-50 transition-all min-w-[200px]"
              >
                <a href="tel:7029034687" className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

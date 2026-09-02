'use client'

import { Button } from '@/components/ui/button'
import CalendlyInlineWidget from './calendly-inline-widget'
import CalendlyLinkWidget from './calendly-link-widget'
import SectionPortraitMark from './section-portrait-mark'

export default function RequestInfo() {
  return (
    <section id="request-info" className="scroll-mt-28 bg-muted py-16" data-has-agent-portrait>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionPortraitMark size="md" />
        <h2 className="mb-8 text-center font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
          Schedule an appointment
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md">
          <CalendlyInlineWidget className="mb-6 h-[700px]" />
          <div className="space-y-4 text-center">
            <CalendlyLinkWidget
              text="Schedule time with me"
              className="font-semibold text-primary underline underline-offset-4 hover:text-primary"
            />
            <div>
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => {
                  window.location.href = 'tel:7029034687'
                }}
              >
                Call Dr. Jan: (702) 903-4687
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

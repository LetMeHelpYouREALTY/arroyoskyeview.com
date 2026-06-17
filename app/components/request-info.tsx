'use client'

import { Button } from '@/components/ui/button'
import CalendlyInlineWidget from './calendly-inline-widget'
import CalendlyLinkWidget from './calendly-link-widget'

export default function RequestInfo() {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Request Information</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <CalendlyInlineWidget className="mb-6" />
          <div className="text-center space-y-4">
            <CalendlyLinkWidget
              text="Open scheduling popup"
              className="text-primary hover:text-primary font-semibold underline underline-offset-4"
            />
            <div>
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => (window.location.href = 'tel:7029034687')}
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


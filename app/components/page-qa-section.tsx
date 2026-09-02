'use client'

import { useState } from 'react'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import SectionPortraitMark from './section-portrait-mark'

interface QAItem {
  question: string
  answer: string
}

interface PageQASectionProps {
  questions: QAItem[]
  title?: string
  showContact?: boolean
}

export default function PageQASection({
  questions,
  title = 'Frequently Asked Questions',
  showContact = true,
}: PageQASectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <Script
        id={`faq-schema-${title.replace(/\s+/g, '-').toLowerCase()}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-muted/40 py-12" data-has-agent-portrait>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionPortraitMark size="md" align="start" />
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">{title}</h2>

          <div className="space-y-4">
            {questions.map((qa, index) => (
              <div key={index} className="surface-elevated overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="pr-4 text-lg font-semibold text-foreground">{qa.question}</h3>
                  <svg
                    className={cn(
                      'h-5 w-5 shrink-0 text-primary transition-transform',
                      openIndex === index && 'rotate-180',
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="leading-relaxed text-muted-foreground">{qa.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {showContact && (
            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="mb-3 text-xl font-bold text-foreground">Still Have Questions?</h3>
              <p className="mb-4 text-muted-foreground">
                Dr. Jan Duffy is here to answer all your questions about buying new construction homes in Las Vegas. Get expert guidance tailored to your specific situation.
              </p>
              <Button asChild className="min-h-11 font-semibold">
                <a href="tel:7029034687">Call Dr. Jan: (702) 903-4687</a>
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

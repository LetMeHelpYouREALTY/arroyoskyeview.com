import Script from 'next/script'
import { Button } from '@/components/ui/button'

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

      <section className="bg-muted/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">{title}</h2>

          <div className="space-y-4">
            {questions.map((qa) => (
              <details key={qa.question} open className="surface-elevated overflow-hidden shadow-sm">
                <summary className="cursor-pointer list-none px-6 py-4 text-lg font-semibold text-foreground">
                  {qa.question}
                </summary>
                <div className="px-6 pb-4">
                  <p data-answer="section" className="leading-relaxed text-muted-foreground">{qa.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {showContact && (
            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="mb-3 text-xl font-bold text-foreground">Still Have Questions?</h3>
              <p data-answer="section" className="mb-4 text-muted-foreground">
                Call Dr. Jan Duffy at (702) 903-4687 for buyer representation on new construction in Skye Canyon, 89166, and Las Vegas. She represents buyers, not the builder.
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

import type { ReactNode } from 'react'
import PageQASection from './page-qa-section'

interface InformationalPageContentProps {
  title: string
  h1: string
  sections: Array<{
    h2: string
    content: string
    h3s?: Array<{ h3: string; content: string }>
  }>
  questions: Array<{ question: string; answer: string }>
}

export default function InformationalPageContent({
  title,
  h1,
  sections,
  questions,
}: InformationalPageContentProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">{h1}</h1>
      <div className="luxury-gold-divider mt-6 mb-10" aria-hidden />

      {sections.map((section, index) => (
        <section key={index} className="mb-12">
          <h2 className="font-serif text-3xl font-light text-foreground">{section.h2}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{section.content}</p>

          {section.h3s?.map((h3Item, h3Index) => (
            <div key={h3Index} className="mt-8 border-l-2 border-luxury-champagne/40 pl-6">
              <h3 className="font-serif text-2xl text-foreground">{h3Item.h3}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{h3Item.content}</p>
            </div>
          ))}
        </section>
      ))}

      <PageQASection questions={questions} title={`${title}: Frequently Asked Questions`} />
    </div>
  )
}



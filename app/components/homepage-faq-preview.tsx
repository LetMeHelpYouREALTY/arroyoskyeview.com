import Link from 'next/link'

const topFAQs = [
  {
    question: 'Does it cost more to use a buyer\'s agent for Arroyo at Skyeview?',
    answer:
      'No. Builders pay for buyer representation on new construction at Arroyo at Skyeview. The commission is already in the price. Dr. Jan Duffy represents the buyer, not the builder. Call (702) 903-4687.',
  },
  {
    question: 'Why work with Dr. Jan Duffy in Skye Canyon 89166?',
    answer:
      'Dr. Jan Duffy monitors construction at Arroyo at Skyeview every 7–10 days and does a building standards inspection at closing. She represents buyers in Skye Canyon, northwest Las Vegas, zip 89166.',
  },
  {
    question: 'How is a buyer\'s agent different from the builder\'s sales team?',
    answer:
      'The builder\'s sales team works for the builder. Dr. Jan Duffy works for the buyer on price, incentives, and construction quality at Arroyo at Skyeview.',
  },
]

export default function HomepageFAQPreview() {
  return (
    <section className="border-t border-border bg-white py-12" aria-labelledby="home-faq-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 id="home-faq-heading" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions About Arroyo at Skyeview
          </h2>
          <p data-answer="section" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Arroyo at Skyeview is new construction townhomes in Skye Canyon, zip 89166. Dr. Jan Duffy represents buyers. Call (702) 903-4687.
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-3xl space-y-4">
          {topFAQs.map((faq) => (
            <details key={faq.question} open className="overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
              <summary className="cursor-pointer list-none px-6 py-4 text-lg font-semibold text-foreground">
                {faq.question}
              </summary>
              <div className="px-6 pb-4">
                <p data-answer="section" className="leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center text-lg font-semibold text-primary hover:text-primary"
          >
            View all Skye Canyon buyer FAQs
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

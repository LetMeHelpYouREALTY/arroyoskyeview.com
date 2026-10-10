const faqs = [
  {
    question: 'Does it cost more to use a buyer\'s agent for Arroyo at Skyeview Homes?',
    answer: 'No. Builders pay for buyer representation on new construction, including Arroyo at Skyeview. The commission is in the home price whether you bring an agent or not. Dr. Jan Duffy represents home buyers, not the builder. Call (702) 903-4687.',
  },
  {
    question: 'What makes Dr. Jan Duffy different from the builder\'s agent at Arroyo at Skyeview?',
    answer: 'The builder\'s sales team works for the builder. Dr. Jan Duffy monitors construction at Arroyo at Skyeview every 7–10 days and represents the buyer through a building standards inspection at closing in Skye Canyon, 89166.',
  },
  {
    question: 'Why work with Dr. Jan Duffy for Arroyo at Skyeview in Skye Canyon?',
    answer: 'Dr. Jan Duffy is the buyer\'s agent for Arroyo at Skyeview in Skye Canyon, zip 89166, northwest Las Vegas. She covers construction monitoring, the closing inspection, and current inventory. Builders pay the commission. Call (702) 903-4687.',
  },
]

export default function DrJanFAQ() {
  return (
    <section className="bg-white py-16" aria-labelledby="buyer-faq-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="buyer-faq-heading" className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Frequently Asked Questions About Buyer Representation
        </h2>
        <p data-answer="section" className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Dr. Jan Duffy represents buyers, not the builder, for Arroyo at Skyeview townhomes in Skye Canyon, zip 89166. Builder-paid commission. Call (702) 903-4687.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="overflow-hidden rounded-lg border border-border" open>
              <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-foreground hover:bg-muted">
                {faq.question}
              </summary>
              <div className="border-t border-border bg-muted px-6 py-4">
                <p data-answer="section" className="text-muted-foreground">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

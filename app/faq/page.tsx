import type { Metadata } from 'next'
import Link from 'next/link'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import DrJanContactCard from '../components/dr-jan-contact-card'
import PageSchemas from '../components/page-schemas'

import MarketingPageShell from '../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'FAQ | New Construction Homes Las Vegas | Buyer\'s Agent FAQ',
  description: 'Get answers to common questions about buying new construction homes in Las Vegas, Nevada. Learn about the homebuying process, builder incentives, and warranties from your buyer\'s agent.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/faq',
  },
}

const faqs = [
  {
    question: 'Does it cost more to use a buyer\'s agent for new construction homes in Las Vegas, Nevada?',
    answer: 'No—the commission is built into new construction home pricing whether you represent yourself or hire a buyer\'s agent. You\'re already paying for representation, so choose someone who protects YOUR interests. Dr. Jan Duffy, your buyer\'s agent, provides expert representation at no extra cost to you.',
  },
  {
    question: 'What makes buying new construction different from resale?',
    answer: 'New construction offers modern features, energy efficiency, builder warranties, and the ability to customize finishes. You also won\'t face bidding wars or need to compete with cash offers like in the resale market. Plus, builders are currently offering incentives like rate buy-downs and closing cost assistance.',
  },
  {
    question: 'How long does it take to build a new home?',
    answer: 'Construction timelines vary but typically range from 4-8 months depending on the home size, complexity, and builder schedule. Dr. Jan Duffy monitors construction every 7-10 days to keep you informed throughout the process.',
  },
  {
    question: 'What warranties come with a new construction home?',
    answer: 'New construction homes come with builder warranties covering structural defects (typically 10 years), major systems (2-5 years), and workmanship (1 year). Dr. Jan Duffy\'s building standards inspection at closing catches issues before your warranty matters.',
  },
  {
    question: 'Can I customize my new home?',
    answer: 'Yes, depending on the construction stage. If you purchase pre-construction, you may be able to select finishes, flooring, and other design elements. Dr. Jan Duffy can help you understand customization options available for your specific home.',
  },
  {
    question: 'What incentives are builders offering?',
    answer: 'Builders are currently offering incentives including mortgage rate buy-downs, closing cost assistance, price reductions, and upgrade packages. Dr. Jan Duffy, your buyer\'s agent, has insider knowledge of current builder incentives in Las Vegas, Nevada and can help you maximize your savings.',
  },
  {
    question: 'Do I need a down payment for new construction?',
    answer: 'Yes, though down payment requirements vary by loan type. FHA loans require as little as 3.5% down, conventional loans typically require 5-20% down, and VA loans offer 0% down for qualified veterans. Down payment assistance programs may also be available.',
  },
  {
    question: 'What is construction monitoring and why do I need it?',
    answer: 'Construction monitoring involves regular inspections of your home during the build process. Dr. Jan Duffy monitors construction every 7-10 days, catching issues before your warranty expires. When the superintendent knows monitoring will happen, your home gets built right.',
  },
  {
    question: 'Should I get a home inspection on a new construction home?',
    answer: 'Yes! Even new homes can have issues. Dr. Jan Duffy provides a complimentary building standards inspection at closing that catches issues BEFORE your warranty matters, potentially saving you thousands in post-warranty repairs.',
  },
  {
    question: 'How do I register with builders when buying new construction?',
    answer: 'It\'s crucial to register correctly with builders to ensure your buyer\'s agent representation. Dr. Jan Duffy, your buyer\'s agent, handles proper registration to protect your co-op benefits and ensure commission applies to your purchase. Call her BEFORE visiting model homes.',
  },
]

export default function FAQPage() {
  const faqQuestions = [
    {
      question: 'Does it cost more to use a buyer\'s agent for new construction homes in Las Vegas, Nevada?',
      answer: 'No—the commission is built into new construction home pricing whether you represent yourself or hire a buyer\'s agent. You\'re already paying for representation, so choose someone who protects YOUR interests. Dr. Jan Duffy, your buyer\'s agent, provides expert representation at no extra cost to you.',
    },
    {
      question: 'What makes buying new construction different from resale?',
      answer: 'New construction offers modern features, energy efficiency, builder warranties, and the ability to customize finishes. You also won\'t face bidding wars or need to compete with cash offers like in the resale market. Plus, builders are currently offering incentives like rate buy-downs and closing cost assistance.',
    },
  ]

  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="faq"
        url="/faq"
        title="Frequently Asked Questions About New Construction Homes | Las Vegas Buyer's Agent FAQ"
        description="Get answers to common questions about buying new construction homes in Las Vegas, Nevada. Learn about the homebuying process, builder incentives, warranties, and buyer's agent representation."
        breadcrumbs={[
          { name: 'FAQ', url: '/faq' },
        ]}
        questions={faqQuestions}
      />
      }
      showContactCta={false}
    >
      <DrJanCTABanner />
        
        <section className="luxury-page-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions: New Construction Homes in Skye Canyon, Northwest Las Vegas
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Get answers to common questions about buying new construction homes in Las Vegas, Nevada with expert buyer's agent representation.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-10 rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Topic-Specific FAQs for Skye Canyon &amp; Northwest Las Vegas
            </h2>
            <p className="text-gray-700 mb-4">
              Drill into localized answers on financing, inspections, and Las Vegas neighborhoods—each page uses FAQ schema for search and AI assistants.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li>
                <Link href="/faq/financing" className="font-semibold text-blue-700 hover:text-blue-800 hover:underline">
                  Financing FAQ →
                </Link>
                <span className="block text-sm text-gray-600">Loans, down payments, builder incentives (zip 89166)</span>
              </li>
              <li>
                <Link href="/faq/inspections" className="font-semibold text-blue-700 hover:text-blue-800 hover:underline">
                  Inspections FAQ →
                </Link>
                <span className="block text-sm text-gray-600">Construction monitoring &amp; closing inspection</span>
              </li>
              <li>
                <Link href="/faq/las-vegas-hyperlocal" className="font-semibold text-blue-700 hover:text-blue-800 hover:underline">
                  Las Vegas Hyperlocal FAQ →
                </Link>
                <span className="block text-sm text-gray-600">Neighborhoods, schools, commute, lifestyle</span>
              </li>
              <li>
                <Link href="/buyers/closing-process-guide" className="font-semibold text-blue-700 hover:text-blue-800 hover:underline">
                  Closing Process Guide →
                </Link>
                <span className="block text-sm text-gray-600">Documents, timeline, and what to expect at closing</span>
              </li>
            </ul>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-border rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-foreground mb-3">
                      {faq.question}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Dr. Jan Duffy is here to answer all your questions about buying a new construction home. Get expert guidance on the entire process, from financing to closing.
                </p>
                <a
                  href="tel:7029034687"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary transition"
                >
                  Call Dr. Jan: (702) 903-4687
                </a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <DrJanContactCard />
              </div>
            </div>
          </div>
        </div>
    </MarketingPageShell>
  )
}
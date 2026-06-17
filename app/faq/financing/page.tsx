import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import PageSchemas from '../../components/page-schemas'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Construction Home Financing FAQ | Skye Canyon, Northwest Las Vegas',
  description: 'Get answers to financing questions for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Learn about loan types, down payments, builder incentives, and financing options. Expert guidance from Dr. Jan Duffy.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/faq/financing',
  },
  openGraph: {
    title: 'New Construction Home Financing FAQ | Skye Canyon, Northwest Las Vegas',
    description: 'Financing FAQ for new construction in Skye Canyon (89166) and northwest Las Vegas—down payments, FHA/VA, builder incentives, and closing costs.',
    url: 'https://www.arroyoskyeview.com/faq/financing',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'New construction financing FAQ' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const financingFAQs = [
  {
    question: 'What financing options are available for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada?',
    answer: 'Financing options for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada include conventional loans, FHA loans, VA loans, USDA loans, and builder financing. Many builders offer rate buy-downs and closing cost assistance. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current financing options and builder incentives in Skye Canyon and northwest Las Vegas.',
  },
  {
    question: 'Do I need a 20% down payment for a new construction home in Skye Canyon or northwest Las Vegas?',
    answer: 'No, you don\'t need a 20% down payment for a new construction home in Skye Canyon (zip code 89166) or northwest Las Vegas, Nevada. Many loan programs allow down payments as low as 3-5%, and some programs offer zero-down options. Down payment assistance programs may also be available in Nevada. Dr. Jan Duffy can help you understand your options.',
  },
  {
    question: 'What are builder incentives for new construction homes in Skye Canyon and northwest Las Vegas?',
    answer: 'Builder incentives for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada may include rate buy-downs, closing cost assistance, design center credits, and appliance upgrades. These incentives vary by builder and community. Dr. Jan Duffy helps you navigate available incentives in Skye Canyon and northwest Las Vegas communities.',
  },
  {
    question: 'Can I use an FHA loan for a new construction home in Skye Canyon (zip code 89166)?',
    answer: 'Yes, FHA loans can be used for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. FHA loans require as little as 3.5% down payment and accept credit scores as low as 580. FHA loan limits apply, so check current limits for Clark County, Nevada. Dr. Jan Duffy can connect you with FHA-approved lenders.',
  },
  {
    question: 'What is a rate buy-down and how does it work for new construction in northwest Las Vegas?',
    answer: 'A rate buy-down is a builder incentive that reduces your mortgage interest rate, typically for the first 1-3 years of your loan. This can significantly lower your monthly payment. Builders in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada may offer rate buy-downs as incentives. Dr. Jan Duffy can help you understand available rate buy-downs.',
  },
  {
    question: 'Are there down payment assistance programs for new construction homes in Las Vegas, Nevada?',
    answer: 'Yes, down payment assistance programs may be available for new construction homes in Las Vegas, Nevada, including Skye Canyon (zip code 89166) and northwest Las Vegas. Nevada Housing Division offers programs for first-time buyers. Dr. Jan Duffy can help you explore available down payment assistance programs.',
  },
  {
    question: 'How do I get pre-approved for a new construction home in Skye Canyon?',
    answer: 'To get pre-approved for a new construction home in Skye Canyon (zip code 89166) or northwest Las Vegas, Nevada, contact a lender who specializes in new construction financing. Dr. Jan Duffy can connect you with trusted lenders. Pre-approval shows builders you\'re serious and helps you understand your budget.',
  },
  {
    question: 'What are closing costs for new construction homes in northwest Las Vegas?',
    answer: 'Closing costs for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada typically range from 2-5% of the home price. These include loan origination fees, title insurance, escrow fees, and prepaid items. Many builders offer closing cost assistance as an incentive. Dr. Jan Duffy can help you understand and negotiate closing costs.',
  },
  {
    question: 'Can I use a VA loan for new construction in Skye Canyon (zip code 89166)?',
    answer: 'Yes, VA loans can be used for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. VA loans offer 0% down payment for qualified veterans and active military personnel. VA loans have specific requirements for new construction. Dr. Jan Duffy can help you understand VA loan options.',
  },
  {
    question: 'What is the difference between builder financing and traditional mortgage loans?',
    answer: 'Builder financing is offered directly by the builder, while traditional mortgage loans come from banks or lenders. Builder financing may offer special incentives, but traditional loans often have more competitive rates. Dr. Jan Duffy can help you compare builder financing and traditional loans for new construction in Skye Canyon and northwest Las Vegas.',
  },
  {
    question: 'How long does financing approval take for new construction homes?',
    answer: 'Financing approval for new construction homes typically takes 30-45 days, though it can vary. Pre-approval can be obtained in 1-3 days. For new construction in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, it\'s best to get pre-approved before selecting a home. Dr. Jan Duffy can help you get started.',
  },
  {
    question: 'What credit score do I need for a new construction home in northwest Las Vegas?',
    answer: 'Credit score requirements vary by loan type. Conventional loans typically require 620+, FHA loans accept 580+ (or 500+ with higher down payment), and VA loans may accept lower scores. For new construction in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, Dr. Jan Duffy can help you understand credit score requirements.',
  },
  {
    question: 'Can I lock in my interest rate for a new construction home in Skye Canyon?',
    answer: 'Yes, you can typically lock in your interest rate for a new construction home in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Rate locks usually last 30-60 days and may be extended. Some builders offer rate locks as incentives. Dr. Jan Duffy can help you understand rate lock options.',
  },
  {
    question: 'What happens if interest rates change during construction in northwest Las Vegas?',
    answer: 'If interest rates change during construction for your new home in Skye Canyon (zip code 89166) or northwest Las Vegas, Nevada, your rate lock protects you if you locked in. If not locked, you may need to adjust. Some builders offer rate protection programs. Dr. Jan Duffy can help you understand your options.',
  },
  {
    question: 'Are there special financing programs for first-time buyers in Skye Canyon?',
    answer: 'Yes, first-time buyers may qualify for special financing programs for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, including FHA loans, down payment assistance, and state programs. Dr. Jan Duffy can help first-time buyers explore available programs.',
  },
]

export default function FinancingFAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="faq"
        url="/faq/financing"
        title="New Construction Home Financing FAQ | Skye Canyon, Northwest Las Vegas"
        description="Get answers to financing questions for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Learn about loan types, down payments, builder incentives, and financing options. Expert guidance from Dr. Jan Duffy."
        breadcrumbs={[
          { name: 'FAQ', url: '/faq' },
          { name: 'Financing FAQ', url: '/faq/financing' },
        ]}
        questions={financingFAQs.slice(0, 3)}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner />
        
        <section className="luxury-page-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              New Construction Home Financing FAQ: Skye Canyon, Northwest Las Vegas
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Get answers to financing questions for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada. Expert guidance from Dr. Jan Duffy, your buyer's agent.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Financing New Construction Homes in Skye Canyon & Northwest Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Financing a new construction home in Skye Canyon (zip code 89166) or northwest Las Vegas, Nevada involves understanding loan types, down payment requirements, builder incentives, and financing options. This FAQ addresses common financing questions for new construction homes.
                </p>
              </section>

              <section className="mb-12">
                <div className="space-y-6">
                  {financingFAQs.map((faq, index) => (
                    <div key={index} className="bg-muted p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Get Expert Financing Guidance</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Dr. Jan Duffy, your buyer's agent for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas, Nevada, can help you understand financing options and connect you with trusted lenders. She helps you navigate builder incentives, down payment assistance programs, and financing requirements.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Call Dr. Jan Duffy at <strong>(702) 903-4687</strong> to get started with financing your new construction home in Skye Canyon or northwest Las Vegas.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link
                    href="/buyers/financing-new-construction"
                    className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-2">Complete Financing Guide</h3>
                    <p className="text-muted-foreground">
                      Comprehensive guide to financing new construction homes in Las Vegas.
                    </p>
                  </Link>
                  <Link
                    href="/buyers/first-time-homebuyer"
                    className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-2">First-Time Buyer Guide</h3>
                    <p className="text-muted-foreground">
                      Learn about programs and options for first-time homebuyers.
                    </p>
                  </Link>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <DrJanContactCard />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


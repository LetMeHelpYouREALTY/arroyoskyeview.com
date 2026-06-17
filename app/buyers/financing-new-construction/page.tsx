import type { Metadata } from 'next'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageSchemas from '../../components/page-schemas'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Financing New Construction Homes in Las Vegas | Buyer\'s Guide',
  description: 'Complete guide to financing new construction homes in Las Vegas, Nevada. Learn about loan types, down payment assistance, builder incentives, and financing options. Expert guidance from Dr. Jan Duffy, your buyer\'s agent.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/buyers/financing-new-construction',
  },
  openGraph: {
    title: 'Financing New Construction Homes in Las Vegas | Buyer\'s Guide',
    description: 'Complete guide to financing new construction homes in Las Vegas, Nevada. Learn about loan types, down payment assistance, and builder incentives.',
    url: 'https://www.arroyoskyeview.com/buyers/financing-new-construction',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Financing New Construction Homes Guide',
      },
    ],
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

export default function FinancingNewConstructionPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="buyer-guide"
        url="/buyers/financing-new-construction"
        title="Financing New Construction Homes in Las Vegas | Buyer's Guide"
        description="Complete guide to financing new construction homes in Las Vegas, Nevada. Learn about loan types, down payment assistance, builder incentives, and financing options. Expert guidance from Dr. Jan Duffy, your buyer's agent."
        breadcrumbs={[
          { name: 'Buyer Guides', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Financing New Construction', url: '/buyers/financing-new-construction' },
        ]}
        questions={[
          {
            question: 'What financing options are available for new construction homes in Las Vegas?',
            answer: 'Financing options for new construction homes in Las Vegas include conventional loans, FHA loans, VA loans, USDA loans, and builder financing. Many builders offer rate buy-downs and closing cost assistance. Contact Dr. Jan Duffy at (702) 903-4687 for current financing options and builder incentives.',
          },
          {
            question: 'Do I need a 20% down payment for a new construction home?',
            answer: 'No, you don\'t need a 20% down payment for a new construction home. Many loan programs allow down payments as low as 3-5%, and some programs offer zero-down options. Down payment assistance programs may also be available in Nevada.',
          },
          {
            question: 'What are builder incentives for new construction homes?',
            answer: 'Builder incentives for new construction homes in Las Vegas may include rate buy-downs, closing cost assistance, design center credits, and appliance upgrades. These incentives vary by builder and community. Dr. Jan Duffy helps you navigate available incentives.',
          },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financing New Construction Homes: Skye Canyon, Northwest Las Vegas | Buyer's Agent
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
              Complete guide to financing your new construction home. Learn about loan types, down payment assistance, builder incentives, and more.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Types of Loans for New Construction</h2>
            
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Conventional Loans</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  Conventional loans are the most common financing option for new construction homes. They typically require:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Down payment: 3-20% (depending on credit score and loan program)</li>
                  <li>Credit score: Minimum 620 (higher scores get better rates)</li>
                  <li>Debt-to-income ratio: Typically 43% or lower</li>
                  <li>Private mortgage insurance (PMI) if down payment is less than 20%</li>
                </ul>
              </div>

              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">FHA Loans</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  FHA loans are government-backed loans ideal for first-time homebuyers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Down payment: As low as 3.5%</li>
                  <li>Credit score: Minimum 580 (or 500 with 10% down)</li>
                  <li>Lower credit requirements than conventional loans</li>
                  <li>Mortgage insurance required for the life of the loan</li>
                </ul>
              </div>

              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">VA Loans</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  VA loans are available to eligible veterans, active-duty service members, and surviving spouses:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Down payment: Zero down payment required</li>
                  <li>No private mortgage insurance</li>
                  <li>Competitive interest rates</li>
                  <li>Eligibility based on military service</li>
                </ul>
              </div>

              <div className="border-l-4 border-luxury-champagne pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">USDA Loans</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  USDA loans are available for eligible rural and suburban areas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Down payment: Zero down payment required</li>
                  <li>Income limits apply</li>
                  <li>Property must be in eligible rural/suburban area</li>
                  <li>Lower interest rates available</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">Builder Incentives & Financing</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Many builders in Las Vegas, Nevada offer incentives to help with financing:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Rate Buy-Downs:</strong> Builders may offer temporary or permanent rate reductions</li>
                <li><strong>Closing Cost Assistance:</strong> Builders may contribute to closing costs</li>
                <li><strong>Design Center Credits:</strong> Credits toward upgrades and finishes</li>
                <li><strong>Builder Financing:</strong> Some builders offer their own financing programs</li>
                <li><strong>Appliance Upgrades:</strong> Free or discounted appliances</li>
              </ul>
              <p className="text-lg text-muted-foreground mt-4">
                <strong>Important:</strong> Builder incentives change frequently. Contact Dr. Jan Duffy at (702) 903-4687 for current incentives available for Arroyo at Skyeview Homes and other Skye Canyon communities.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">Down Payment Assistance Programs</h2>
            <div className="bg-muted rounded-lg p-6 mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Nevada offers several down payment assistance programs for homebuyers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Home Is Possible (HIP):</strong> Down payment assistance up to 5% of loan amount</li>
                <li><strong>Home Is Possible for Heroes:</strong> Additional assistance for veterans, teachers, healthcare workers</li>
                <li><strong>Home Is Possible for Teachers:</strong> Special programs for educators</li>
                <li><strong>Mortgage Credit Certificate (MCC):</strong> Tax credit for first-time homebuyers</li>
              </ul>
              <p className="text-lg text-muted-foreground mt-4">
                Eligibility requirements and available funds vary. Dr. Jan Duffy can help you determine which programs you qualify for.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">The Financing Process for New Construction</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Prequalification</h3>
                  <p className="text-muted-foreground">
                    Get prequalified to understand how much home you can afford. This is a no-commitment step that gives you insight into your budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Preapproval</h3>
                  <p className="text-muted-foreground">
                    Get preapproved for a specific loan amount. This shows builders you're a serious buyer and helps you move quickly when you find the right home.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                  </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Contract & Earnest Money</h3>
                  <p className="text-muted-foreground">
                    Once you find your home, you'll sign a contract and provide earnest money deposit. This secures your home while construction is completed.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Final Loan Approval</h3>
                  <p className="text-muted-foreground">
                    Your lender will complete final underwriting and approve your loan. This typically happens closer to closing when construction is nearly complete.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Closing</h3>
                  <p className="text-muted-foreground">
                    Finalize your loan, sign all documents, and get the keys to your new construction home. Dr. Jan Duffy's building standards inspection ensures everything is built to code.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Need Help with Financing?</h3>
              <p className="text-muted-foreground mb-4">
                Dr. Jan Duffy works with trusted lenders who specialize in new construction financing. She can help you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Find the best loan program for your situation</li>
                <li>Navigate builder incentives and financing options</li>
                <li>Understand down payment assistance programs</li>
                <li>Get preapproved quickly</li>
              </ul>
              <p className="text-muted-foreground">
                Contact Dr. Jan Duffy at (702) 903-4687 for expert guidance on financing your new construction home in Las Vegas, Nevada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link
                href="/buyers/first-time-homebuyer"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">First-Time Homebuyer Guide</h3>
                <p className="text-muted-foreground">
                  Complete guide for first-time homebuyers, including down payment assistance and first-time buyer programs.
                </p>
              </Link>
              <Link
                href="/buyers/builder-incentives-guide"
                className="bg-white border-2 border-border rounded-lg p-6 hover:border-luxury-champagne hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">Builder Incentives Guide</h3>
                <p className="text-muted-foreground">
                  Learn about current builder incentives, rate buy-downs, and closing cost assistance available.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <DrJanCTABanner context="financing" />
      </main>
      <Footer />
    </div>
  )
}


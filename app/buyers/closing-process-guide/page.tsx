import type { Metadata } from 'next'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageSchemas from '../../components/page-schemas'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Closing Process Guide for New Construction Homes | Las Vegas Buyer\'s Guide',
  description: 'Complete guide to closing on your new construction home in Las Vegas, Nevada. Learn about the closing process, what to expect, documents needed, and how Dr. Jan Duffy\'s building standards inspection protects you. Call (702) 903-4687.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/buyers/closing-process-guide',
  },
  openGraph: {
    title: 'Closing Process Guide for New Construction Homes | Las Vegas Buyer\'s Guide',
    description: 'Complete guide to closing on your new construction home in Las Vegas, Nevada. Learn about the closing process, documents needed, and what to expect.',
    url: 'https://www.arroyoskyeview.com/buyers/closing-process-guide',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Closing Process Guide for New Construction Homes',
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

export default function ClosingProcessGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="buyer-guide"
        url="/buyers/closing-process-guide"
        title="Closing Process Guide for New Construction Homes | Las Vegas Buyer's Guide"
        description="Complete guide to closing on your new construction home in Las Vegas, Nevada. Learn about the closing process, what to expect, documents needed, and how Dr. Jan Duffy's building standards inspection protects you. Call (702) 903-4687."
        breadcrumbs={[
          { name: 'Buyer Guides', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Closing Process Guide', url: '/buyers/closing-process-guide' },
        ]}
        questions={[
          {
            question: 'What happens during closing on a new construction home?',
            answer: 'Closing on a new construction home involves signing final documents, paying closing costs, transferring ownership, and receiving keys. Dr. Jan Duffy provides a building standards inspection before closing to ensure everything is built to code.',
          },
          {
            question: 'What documents do I need for closing on a new construction home?',
            answer: 'You\'ll need identification, proof of homeowners insurance, cashier\'s check for closing costs, and any required loan documents. Your lender and Dr. Jan Duffy will guide you through all required documents.',
          },
          {
            question: 'What is a building standards inspection before closing?',
            answer: 'A building standards inspection is a comprehensive inspection performed before closing to ensure your new construction home meets all building codes and standards. Dr. Jan Duffy provides this complimentary inspection as part of her buyer representation services.',
          },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Closing Process Guide: New Construction Homes in Skye Canyon, Northwest Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
              Complete guide to closing on your new construction home in Las Vegas, Nevada. Learn what to expect, documents needed, and how Dr. Jan Duffy's building standards inspection protects you.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline: What Happens Before Closing</h2>
            
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">4-6 Weeks Before Closing</h3>
                <p className="text-lg text-gray-700 mb-3">
                  Your lender begins final loan processing and underwriting. You'll need to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide updated financial documents if requested</li>
                  <li>Secure homeowners insurance</li>
                  <li>Schedule final walkthrough</li>
                  <li>Review closing disclosure</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">1-2 Weeks Before Closing</h3>
                <p className="text-lg text-gray-700 mb-3">
                  Final preparations and inspections:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Building Standards Inspection:</strong> Dr. Jan Duffy performs complimentary building standards inspection</li>
                  <li>Final walkthrough scheduled</li>
                  <li>Closing date confirmed</li>
                  <li>Closing costs finalized</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Day Before Closing</h3>
                <p className="text-lg text-gray-700 mb-3">
                  Final preparations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Final walkthrough completed</li>
                  <li>Any last-minute issues addressed</li>
                  <li>Cashier's check obtained for closing costs</li>
                  <li>Review closing documents if available</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Standards Inspection Before Closing</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Dr. Jan Duffy provides a complimentary building standards inspection before closing.</strong> This comprehensive inspection ensures:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>All systems functioning properly (HVAC, plumbing, electrical)</li>
                <li>Windows and doors operate correctly</li>
                <li>Appliances installed and working</li>
                <li>Flooring and finishes meet quality standards</li>
                <li>Code compliance verified</li>
                <li>No defects or issues that need addressing</li>
              </ul>
              <p className="text-gray-700">
                <strong>Why it matters:</strong> Issues found before closing are documented and can be addressed by the builder before you take possession. This protects your investment and ensures everything is built to code.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Walkthrough</h2>
            <p className="text-lg text-gray-700 mb-6">
              The final walkthrough happens just before closing, typically the day before or morning of closing. This is your opportunity to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8 ml-4">
              <li>Verify all requested repairs have been completed</li>
              <li>Test all appliances and systems</li>
              <li>Check for any damage from construction or move-in</li>
              <li>Ensure all included features are present</li>
              <li>Confirm the home is clean and ready for move-in</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Needed for Closing</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Required Documents:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Government-issued photo ID:</strong> Driver's license or passport</li>
                <li><strong>Cashier's check:</strong> For closing costs (exact amount provided by lender)</li>
                <li><strong>Proof of homeowners insurance:</strong> Insurance binder or policy</li>
                <li><strong>Loan documents:</strong> Any additional documents requested by lender</li>
                <li><strong>Copy of purchase agreement:</strong> For reference</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens During Closing</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Review Documents</h3>
                  <p className="text-gray-700">
                    You'll review and sign numerous documents including the deed, mortgage note, closing disclosure, and various disclosures. Take your time to read everything.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pay Closing Costs</h3>
                  <p className="text-gray-700">
                    You'll provide a cashier's check for closing costs, which typically include loan origination fees, title insurance, escrow fees, and prepaid items like property taxes and insurance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transfer Ownership</h3>
                  <p className="text-gray-700">
                    The deed is recorded with the county, officially transferring ownership from the builder to you. This typically happens within 24-48 hours after closing.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Receive Keys</h3>
                  <p className="text-gray-700">
                    Once closing is complete and funds are disbursed, you'll receive the keys to your new construction home. Congratulations—you're a homeowner!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Closing Costs Explained</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Closing costs typically range from 2-5% of the home's purchase price. Common closing costs include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Loan origination fees:</strong> Fees charged by lender for processing loan</li>
                <li><strong>Title insurance:</strong> Protects against title defects</li>
                <li><strong>Escrow fees:</strong> Fees for escrow services</li>
                <li><strong>Prepaid items:</strong> Property taxes, homeowners insurance, HOA fees</li>
                <li><strong>Recording fees:</strong> Fees to record deed with county</li>
                <li><strong>Homeowners association fees:</strong> If applicable</li>
              </ul>
              <p className="text-lg text-gray-700 mt-4">
                <strong>Builder incentives may help:</strong> Many builders offer closing cost assistance. Dr. Jan Duffy helps you navigate available incentives to reduce your closing costs.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">After Closing: What's Next?</h2>
            <div className="space-y-4 mb-12">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Move-In</h3>
                <p className="text-gray-700">
                  Schedule your move-in date and coordinate with movers. Make sure utilities are transferred to your name.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Warranty Period</h3>
                <p className="text-gray-700">
                  Your new construction home comes with a builder warranty. Document any issues and report them to the builder during the warranty period.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Change of Address</h3>
                <p className="text-gray-700">
                  Update your address with the post office, banks, credit cards, and other important accounts.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance Through Closing</h3>
              <p className="text-gray-700 mb-4">
                When you work with Dr. Jan Duffy for new construction homes in Las Vegas, Nevada, you get expert guidance through the entire closing process:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Building standards inspection before closing</li>
                <li>Final walkthrough assistance</li>
                <li>Document review and explanation</li>
                <li>Issue resolution with builder</li>
                <li>Post-closing support</li>
              </ul>
              <p className="text-gray-700">
                <strong>No Extra Cost:</strong> Builders pay for buyer representation—so you're already funding an agent, choose one who provides these valuable services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link
                href="/services/building-standards-inspection"
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">New Construction Inspections Guide</h3>
                <p className="text-gray-700">
                  Learn about construction monitoring and building standards inspection before closing.
                </p>
              </Link>
              <Link
                href="/buyers/financing-new-construction"
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Financing New Construction</h3>
                <p className="text-gray-700">
                  Complete guide to financing your new construction home, including closing costs.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <DrJanCTABanner context="closing" />
      </main>
      <Footer />
    </div>
  )
}


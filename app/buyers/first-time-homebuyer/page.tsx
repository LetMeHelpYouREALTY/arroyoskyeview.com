import type { Metadata } from 'next'
import Link from 'next/link'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import PageSchemas from '../../components/page-schemas'
import DrJanContactCard from '../../components/dr-jan-contact-card'

import MarketingPageShell from '../../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'First-Time Homebuyer Guide Las Vegas | Arroyo at Skyeview Homes',
  description: 'Complete guide for first-time homebuyers in Las Vegas. Learn about down payment assistance, financing, and the homebuying process. Expert guidance from Dr. Jan Duffy.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/buyers/first-time-homebuyer',
  },
}

export default function FirstTimeHomebuyerPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="buyer-guide"
        url="/buyers/first-time-homebuyer"
        title="First-Time Homebuyer Guide Las Vegas | Arroyo at Skyeview Homes | Dr. Jan Duffy"
        description="Complete guide for first-time homebuyers in Las Vegas. Learn about down payment assistance, financing options, and the homebuying process with expert guidance from Dr. Jan Duffy."
        breadcrumbs={[
          { name: 'Buyers', url: '/buyers/first-time-homebuyer' },
          { name: 'First-Time Homebuyer', url: '/buyers/first-time-homebuyer' },
        ]}
        questions={[
          {
            question: 'What programs are available for first-time homebuyers in Las Vegas?',
            answer: 'There are several programs available for first-time homebuyers in Las Vegas including down payment assistance programs, FHA loans, and state-specific first-time buyer programs. Contact Dr. Jan Duffy at (702) 903-4687 for guidance on available programs.',
          },
          {
            question: 'How much do I need for a down payment on a new construction home?',
            answer: 'Down payment requirements vary by loan type. FHA loans may require as little as 3.5% down, conventional loans typically require 5-20% down, and some programs offer down payment assistance. Dr. Jan Duffy can help you understand your options.',
          },
        ]}
      />
      }
      showContactCta={false}
    >
      <DrJanCTABanner />
        
        {/* Hero Section */}
        <section className="luxury-page-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              First-Time Homebuyer Guide: Skye Canyon, Northwest Las Vegas | Buyer's Agent
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Complete guide to buying your first home in Las Vegas. Get expert guidance from Dr. Jan Duffy on the entire homebuying process, financing, and available programs.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Getting Started as a First-Time Homebuyer</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Buying your first home is an exciting milestone, but it can also feel overwhelming. This guide will walk you through everything you need to know about purchasing your first home in Las Vegas including Arroyo at Skyeview Homes.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  The good news? As a first-time homebuyer, you may qualify for special programs, down payment assistance, and favorable financing options that can make homeownership more accessible than you think.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Step 1: Get Your Finances in Order</h2>
                <div className="space-y-4">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Check Your Credit Score</h3>
                    <p className="text-muted-foreground">
                      Your credit score significantly impacts your mortgage rate. Aim for a score of 620 or higher for conventional loans, though some programs accept lower scores.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Save for Down Payment</h3>
                    <p className="text-muted-foreground">
                      While 20% down is ideal, many first-time buyer programs require as little as 3-5% down. Down payment assistance programs may also be available.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Get Pre-Approved</h3>
                    <p className="text-muted-foreground">
                      Getting pre-approved shows sellers you're serious and helps you understand your budget. Dr. Jan Duffy can connect you with trusted lenders.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">First-Time Buyer Programs</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-luxury-champagne pl-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">FHA Loans</h3>
                    <p className="text-muted-foreground mb-2">
                      Federal Housing Administration loans allow down payments as low as 3.5% with more flexible credit requirements.
                    </p>
                  </div>
                  <div className="border-l-4 border-luxury-champagne pl-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">VA Loans</h3>
                    <p className="text-muted-foreground mb-2">
                      If you're a veteran or active military, VA loans offer 0% down payment and no private mortgage insurance.
                    </p>
                  </div>
                  <div className="border-l-4 border-luxury-champagne pl-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">Nevada Down Payment Assistance</h3>
                    <p className="text-muted-foreground mb-2">
                      Nevada offers various down payment assistance programs for first-time buyers. Dr. Jan Duffy can help you explore these options.
                    </p>
                  </div>
                  <div className="border-l-4 border-luxury-champagne pl-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">Builder Incentives</h3>
                    <p className="text-muted-foreground mb-2">
                      Builders often offer special incentives for first-time buyers at Arroyo at Skyeview Homes, including closing cost assistance and rate buy-downs.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Why New Construction for First-Time Buyers?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  New construction homes offer several advantages for first-time buyers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li><strong>No Surprise Repairs:</strong> Everything is brand new with builder warranties</li>
                  <li><strong>Modern Features:</strong> Energy-efficient systems, modern appliances, and contemporary design</li>
                  <li><strong>Builder Incentives:</strong> Special financing, closing cost assistance, and upgrades</li>
                  <li><strong>Warranty Protection:</strong> Builder warranties cover major systems and structural issues</li>
                  <li><strong>Customization Options:</strong> Choose finishes and features that match your style</li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">First-Time Buyer Friendly Communities</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore new construction homes starting at $392K that are perfect for first-time buyers:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-primary hover:text-primary font-semibold">
                        Arroyo at Skyeview
                      </Link>
                      {' - '}
                      <span className="text-muted-foreground">Explore new construction homes at Arroyo at Skyeview starting at $392K</span>
                    </li>
                    <li>
                      <Link href="/sierra-at-skyeview" className="text-primary hover:text-primary font-semibold">
                        Sierra at Skyeview
                      </Link>
                      {' - '}
                      <span className="text-muted-foreground">See available homes at Sierra at Skyeview with current builder incentives</span>
                    </li>
                    <li>
                      <Link href="/areas/zip-89166" className="text-primary hover:text-primary font-semibold">
                        Browse all Skye Canyon communities
                      </Link>
                      {' - '}
                      <span className="text-muted-foreground">Browse first-time buyer friendly communities in Skye Canyon</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">The Homebuying Process</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Get Pre-Approved</h3>
                      <p className="text-muted-foreground">Understand your budget and get pre-approved for financing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Work with Dr. Jan Duffy</h3>
                      <p className="text-muted-foreground">Get expert representation at no cost to you. Dr. Jan will help you find the perfect home and navigate the entire process.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Choose Your Home</h3>
                      <p className="text-muted-foreground">Select from available homes or choose a lot for new construction.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Construction & Monitoring</h3>
                      <p className="text-muted-foreground">Dr. Jan monitors construction to ensure quality throughout the build process.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Closing & Inspection</h3>
                      <p className="text-muted-foreground">Complete final inspection and close on your new home with confidence.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12 bg-blue-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Homebuying Journey?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Dr. Jan Duffy specializes in helping first-time homebuyers navigate the entire process. With expert guidance on financing, builder incentives, and the homebuying process, you'll have the support you need every step of the way.
                </p>
                <a
                  href="tel:7029034687"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary transition"
                >
                  Call Dr. Jan: (702) 903-4687
                </a>
              </section>
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
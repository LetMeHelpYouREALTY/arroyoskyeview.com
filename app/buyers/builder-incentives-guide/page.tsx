import type { Metadata } from 'next'
import Link from 'next/link'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import PageSchemas from '../../components/page-schemas'
import DrJanContactCard from '../../components/dr-jan-contact-card'

export const metadata: Metadata = {
  title: 'Builder Incentives Guide | Arroyo at Skyeview Homes Las Vegas',
  description: 'Learn about current builder incentives for Arroyo at Skyeview Homes in Las Vegas. Rate buy-downs, closing cost assistance, and promotions. Expert guidance from Dr. Jan Duffy.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/buyers/builder-incentives-guide',
  },
}

export default function BuilderIncentivesGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="buyer-guide"
        url="/buyers/builder-incentives-guide"
        title="Builder Incentives Guide | Arroyo at Skyeview Homes Las Vegas"
        description="Learn about current builder incentives for Arroyo at Skyeview Homes in Las Vegas. Get expert guidance on rate buy-downs, closing cost assistance, and promotions from Dr. Jan Duffy."
        breadcrumbs={[
          { name: 'Buyers', url: '/buyers/builder-incentives-guide' },
          { name: 'Builder Incentives Guide', url: '/buyers/builder-incentives-guide' },
        ]}
        questions={[
          {
            question: 'What builder incentives are currently available in Las Vegas?',
            answer: 'Builders are offering mortgage rate buy-downs, closing cost assistance, price reductions, and upgrade packages for Arroyo at Skyeview Homes. Dr. Jan Duffy has insider knowledge of current incentives—call (702) 903-4687.',
          },
          {
            question: 'How much can builder rate buy-downs save me?',
            answer: 'Builder rate buy-downs can reduce your mortgage interest rate by 1-2 percentage points for the first few years, potentially saving hundreds of dollars per month.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner />
        
        <section className="luxury-page-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Builder Incentives Guide: Skye Canyon, Northwest Las Vegas | Buyer's Agent
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Learn about current builder incentives, promotions, and how to maximize your savings when buying Arroyo at Skyeview Homes in Las Vegas.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Current Builder Incentives</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  With 2x the normal new home inventory, builders are offering aggressive incentives to attract buyers. Builders at Arroyo at Skyeview Homes are currently providing various incentives that can significantly reduce your costs and monthly payments.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                  <p className="text-lg font-semibold text-foreground mb-2">Important Note</p>
                  <p className="text-muted-foreground">
                    Builder incentives change frequently and vary by community, lot, and timing. Dr. Jan Duffy has real-time knowledge of current incentives and can help you maximize your savings.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Communities with Current Builder Incentives</h3>
                  <p className="text-muted-foreground mb-4">
                    Contact Dr. Jan Duffy to learn about current incentives at these new construction communities:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-primary hover:text-primary font-semibold">
                        Arroyo at Skyeview
                      </Link>
                      {' - '}
                      <span className="text-muted-foreground">See available homes at Arroyo at Skyeview with current builder incentives</span>
                    </li>
                    <li>
                      <Link href="/sierra-at-skyeview" className="text-primary hover:text-primary font-semibold">
                        Sierra at Skyeview
                      </Link>
                      {' - '}
                      <span className="text-muted-foreground">Explore Sierra at Skyeview new construction with promotions</span>
                    </li>
                    <li>
                      <Link href="/terra-at-skyeview" className="text-primary hover:text-primary font-semibold">
                        Terra at Skyeview
                      </Link>
                      {' - '}
                      <span className="text-muted-foreground">Browse Terra at Skyeview homes with current incentives</span>
                    </li>
                    <li>
                      <Link href="/find-your-new-home/nevada/las-vegas-metro" className="text-primary hover:text-primary font-semibold">
                        Browse all Las Vegas Metro communities
                      </Link>
                      {' - '}
                      <span className="text-muted-foreground">See all new construction communities with current builder incentives</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Types of Builder Incentives</h2>
                
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Mortgage Rate Buy-Downs</h3>
                    <p className="text-lg text-muted-foreground mb-3">
                      Builders are buying down mortgage rates to make financing more affordable. This can reduce your monthly payment by hundreds of dollars.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Temporary rate buy-downs (2-1 buydown, 3-2-1 buydown)</li>
                      <li>Permanent rate reductions</li>
                      <li>Combined with builder's preferred lenders for best rates</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Closing Cost Assistance</h3>
                    <p className="text-lg text-muted-foreground mb-3">
                      Builders may offer closing cost credits or assistance, reducing your upfront costs significantly.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Up to $5,000 or more in closing cost assistance</li>
                      <li>Can be combined with other incentives</li>
                      <li>Reduces cash needed at closing</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Price Reductions</h3>
                    <p className="text-lg text-muted-foreground mb-3">
                      Builders are adjusting prices to be more competitive, offering better value than in recent years.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Reduced base prices on select homes</li>
                      <li>Lot premiums waived or reduced</li>
                      <li>Move-in ready homes at discounted prices</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Upgrade Packages</h3>
                    <p className="text-lg text-muted-foreground mb-3">
                      Free or discounted upgrades can add significant value to your new home.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Premium flooring and countertops</li>
                      <li>Appliance upgrades</li>
                      <li>Design center credits</li>
                      <li>Smart home technology packages</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">How to Maximize Builder Incentives</h2>
                <div className="space-y-4">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">1. Work with Dr. Jan Duffy</h3>
                    <p className="text-muted-foreground">
                      Dr. Jan has insider knowledge of current incentives and can negotiate the best package for you. She knows which communities and lots have the best incentives available.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">2. Timing Matters</h3>
                    <p className="text-muted-foreground">
                      Incentives often vary by month and quarter. Builders may offer better incentives at month-end or quarter-end to meet sales goals.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">3. Consider Move-In Ready Homes</h3>
                    <p className="text-muted-foreground">
                      Homes that are completed or near completion may have better incentives as builders want to close quickly.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">4. Bundle Incentives</h3>
                    <p className="text-muted-foreground">
                      Often, builders allow you to combine multiple incentives. Dr. Jan can help you structure the best package combining rate buy-downs, closing costs, and upgrades.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12 bg-blue-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-foreground mb-4">Get Current Incentive Information</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Builder incentives change frequently. Dr. Jan Duffy maintains real-time knowledge of current builder incentives for Arroyo at Skyeview Homes and can help you find the best deals available.
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
      </main>
      <Footer />
    </div>
  )
}


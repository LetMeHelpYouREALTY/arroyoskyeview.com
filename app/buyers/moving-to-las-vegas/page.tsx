import type { Metadata } from 'next'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import DrJanContactCard from '../../components/dr-jan-contact-card'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'

import MarketingPageShell from '../../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Moving to Las Vegas: Complete Guide for New Homebuyers 2025 | Skye Canyon',
  description: 'Complete guide for moving to Las Vegas, Nevada. Learn about cost of living, neighborhoods, schools, job market, and new construction communities in Skye Canyon and northwest Las Vegas. Expert guidance from Dr. Jan Duffy.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/buyers/moving-to-las-vegas',
  },
}

export default function MovingToLasVegasPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="buyer-guide"
        url="/buyers/moving-to-las-vegas"
        title="Moving to Las Vegas: Complete Guide for New Homebuyers 2025 | Skye Canyon, Northwest Las Vegas"
        description="Complete guide for moving to Las Vegas, Nevada. Learn about cost of living, neighborhoods including Skye Canyon (zip code 89166), schools, job market, and new construction communities in northwest Las Vegas. Expert guidance from Dr. Jan Duffy, your buyer's agent."
        breadcrumbs={[
          { name: 'Buyers', url: '/buyers/moving-to-las-vegas' },
          { name: 'Moving to Las Vegas', url: '/buyers/moving-to-las-vegas' },
        ]}
        questions={[
          {
            question: 'What are the best neighborhoods for new construction homes in Las Vegas?',
            answer: 'Skye Canyon (zip code 89166) in northwest Las Vegas is one of the best neighborhoods for new construction homes, offering master-planned community living, top-rated schools, and modern homes. Other great areas include Summerlin and northwest Las Vegas communities. Contact Dr. Jan Duffy at (702) 903-4687 for guidance.',
          },
          {
            question: 'What is the cost of living in Las Vegas, Nevada?',
            answer: 'Las Vegas offers a relatively affordable cost of living compared to many major cities. Nevada has no state income tax, property taxes are relatively low (0.60-0.70% of assessed value), and housing costs are competitive. The cost of living is lower than California and many other western states.',
          },
          {
            question: 'What are the best schools in Las Vegas for families?',
            answer: 'Skye Canyon (zip code 89166) in northwest Las Vegas features top-rated schools including Roger Bryan Elementary (9/10 rating). Summerlin also offers excellent schools. The Clark County School District serves most of Las Vegas with many highly rated schools.',
          },
        ]}
      />
      }
      showContactCta={false}
    >
      <DrJanCTABanner />
        
        <section className="luxury-page-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Moving to Las Vegas: Skye Canyon, Northwest Las Vegas | Buyer's Agent Guide 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Everything you need to know about relocating to Las Vegas, Nevada. Learn about neighborhoods like Skye Canyon (zip code 89166), cost of living, schools, job market, and new construction communities in northwest Las Vegas.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Move to Las Vegas, Nevada?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Las Vegas offers an exceptional quality of life with no state income tax, affordable housing, year-round sunshine, and a growing economy. Whether you're relocating for work, retirement, or a lifestyle change, Las Vegas provides opportunities for everyone.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">No State Income Tax</h3>
                    <p className="text-muted-foreground">
                      Nevada has no state income tax, meaning you keep more of your earnings compared to many other states.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Affordable Housing</h3>
                    <p className="text-muted-foreground">
                      New construction homes in Las Vegas offer excellent value, especially in communities like Skye Canyon (zip code 89166).
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Year-Round Sunshine</h3>
                    <p className="text-muted-foreground">
                      Enjoy over 300 days of sunshine per year, perfect for outdoor activities and an active lifestyle.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Growing Economy</h3>
                    <p className="text-muted-foreground">
                      Las Vegas has a diverse economy with opportunities in technology, healthcare, hospitality, and more.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Best Neighborhoods for New Construction: Skye Canyon & Northwest Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  When moving to Las Vegas, consider these premier neighborhoods for new construction homes:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-luxury-champagne pl-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">Skye Canyon (Zip Code 89166) - Northwest Las Vegas</h3>
                    <p className="text-muted-foreground mb-2">
                      Skye Canyon is a premier 1,700-acre master-planned community in northwest Las Vegas offering new construction homes, top-rated schools including Roger Bryan Elementary (9/10 rating), extensive amenities, and a family-friendly atmosphere. The community features Arroyo at Skyeview, Sierra at Skyeview, Terra at Skyeview, and Eaglepointe at Skye Canyon.
                    </p>
                    <Link href="/areas/zip-89166" className="text-primary hover:text-primary font-semibold">
                      Learn more about Skye Canyon →
                    </Link>
                  </div>
                  <div className="border-l-4 border-luxury-champagne pl-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">Summerlin Area - West Las Vegas</h3>
                    <p className="text-muted-foreground mb-2">
                      Summerlin is one of Las Vegas's most prestigious master-planned communities, offering luxury living, golf courses, excellent schools, and world-class amenities. The area features multiple new construction developments.
                    </p>
                    <Link href="/neighborhoods/summerlin-las-vegas" className="text-primary hover:text-primary font-semibold">
                      Learn more about Summerlin →
                    </Link>
                  </div>
                  <div className="border-l-4 border-luxury-champagne pl-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">Northwest Las Vegas</h3>
                    <p className="text-muted-foreground mb-2">
                      Northwest Las Vegas offers convenient access to Red Rock Canyon, Mount Charleston, and major employment centers. The area features new construction communities with modern homes and excellent value.
                    </p>
                    <Link href="/neighborhoods/north-las-vegas" className="text-primary hover:text-primary font-semibold">
                      Learn more about North Las Vegas →
                    </Link>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Cost of Living in Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Las Vegas offers a relatively affordable cost of living compared to many major cities:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li><strong>No State Income Tax:</strong> Nevada has no state income tax, saving you money on every paycheck</li>
                  <li><strong>Property Taxes:</strong> Relatively low at approximately 0.60-0.70% of assessed value in Clark County</li>
                  <li><strong>Housing Costs:</strong> Competitive pricing for new construction homes, especially in Skye Canyon (zip code 89166)</li>
                  <li><strong>Utilities:</strong> Reasonable utility costs, especially with energy-efficient new construction homes</li>
                  <li><strong>Sales Tax:</strong> 8.38% in Clark County (varies by area)</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Schools in Las Vegas: Skye Canyon & Northwest Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Las Vegas is served by the Clark County School District, one of the largest school districts in the nation. Skye Canyon (zip code 89166) in northwest Las Vegas features top-rated schools:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li><strong>Roger Bryan Elementary School:</strong> Rated 9/10, located in Skye Canyon</li>
                  <li><strong>Sig Rogich Middle School:</strong> Serves Skye Canyon area</li>
                  <li><strong>Shadow Ridge High School:</strong> Serves Skye Canyon area</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Many families specifically choose Skye Canyon (zip code 89166) for the exceptional school quality. Summerlin also offers excellent schools throughout the area.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Job Market & Employment in Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Las Vegas has a diverse and growing economy with opportunities in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li>Hospitality and tourism</li>
                  <li>Technology and innovation</li>
                  <li>Healthcare and medical services</li>
                  <li>Construction and real estate</li>
                  <li>Finance and professional services</li>
                  <li>Education</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Northwest Las Vegas, including Skye Canyon (zip code 89166), offers convenient access to major employment centers throughout the Las Vegas Metro area.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Climate & Lifestyle in Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Las Vegas offers an exceptional climate and lifestyle:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li><strong>Year-Round Sunshine:</strong> Over 300 days of sunshine per year</li>
                  <li><strong>Outdoor Recreation:</strong> Red Rock Canyon (15 minutes from Skye Canyon), Mount Charleston (30 minutes), Lake Mead (45 minutes)</li>
                  <li><strong>Entertainment:</strong> World-class dining, shows, and entertainment on the Las Vegas Strip</li>
                  <li><strong>Sports:</strong> Professional sports teams including the Las Vegas Raiders and Golden Knights</li>
                  <li><strong>No State Income Tax:</strong> Keep more of your earnings</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">New Construction Communities: Skye Canyon & Northwest Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  When moving to Las Vegas, consider these new construction communities:
                </p>
                <div className="space-y-4">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      <Link href="/" className="text-primary hover:text-primary">
                        Arroyo at Skyeview
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Townhomes in Skye Canyon (zip code 89166), northwest Las Vegas, starting from $392,640. Modern 2-story townhomes with 2-4 bedrooms in a premier master-planned community.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      <Link href="/sierra-at-skyeview" className="text-primary hover:text-primary">
                        Sierra at Skyeview
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      New construction townhomes in Skye Canyon, northwest Las Vegas, with contemporary designs and premium finishes.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      <Link href="/terra-at-skyeview" className="text-primary hover:text-primary">
                        Terra at Skyeview
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Energy-efficient townhomes in Skye Canyon, northwest Las Vegas, with modern floor plans.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Working with Dr. Jan Duffy When Moving to Las Vegas</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  When relocating to Las Vegas, working with Dr. Jan Duffy ensures you have expert buyer representation for new construction homes in Skye Canyon (zip code 89166) and northwest Las Vegas. She helps you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                  <li>Understand neighborhoods and communities in northwest Las Vegas</li>
                  <li>Find the best new construction homes in your budget</li>
                  <li>Navigate the homebuying process as a relocating buyer</li>
                  <li>Get construction monitoring and building standards inspection included</li>
                  <li>Access insider knowledge of Skye Canyon and northwest Las Vegas communities</li>
                </ul>
                <p className="text-lg text-muted-foreground mb-4">
                  Builders pay for buyer representation, so there's no extra cost. Call Dr. Jan Duffy at (702) 903-4687 to get started.
                </p>
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
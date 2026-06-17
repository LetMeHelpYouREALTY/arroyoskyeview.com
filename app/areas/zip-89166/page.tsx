import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import InformationalPageContent from '../../components/informational-page-content'
import PeopleAlsoSearch from '../../components/people-also-search'
import ZipCodeMap from '../../components/zipcode-map'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'

export const metadata: Metadata = {
  title: 'New Homes in Zip Code 89166 | Skye Canyon Las Vegas',
  description: 'Discover new construction homes in zip code 89166, Skye Canyon, northwest Las Vegas, Nevada. Explore new construction developments including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview with expert buyer\'s agent representation.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/areas/zip-89166',
  },
}

export default function Zip89166Page() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="zip"
        url="/areas/zip-89166"
        title="New Homes in Zip Code 89166 | Skye Canyon, Las Vegas, Nevada | Buyer's Agent"
        description="Discover new construction homes in zip code 89166, Skye Canyon, northwest Las Vegas, Nevada. Explore new construction developments including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview with expert buyer's agent representation."
        breadcrumbs={[
          { name: 'Find Your Home', url: '/find-your-new-home/nevada/las-vegas-metro' },
          { name: 'Zip Code 89166', url: '/areas/zip-89166' },
        ]}
        location="Skye Canyon"
        zipCode="89166"
        questions={[
          {
            question: 'What is zip code 89166 and where is it located?',
            answer: 'Zip code 89166 encompasses Skye Canyon, a premier master-planned community in northwest Las Vegas.',
          },
          {
            question: 'What new construction developments are in zip code 89166, Skye Canyon, Las Vegas, Nevada?',
            answer: 'New construction developments in zip code 89166, Skye Canyon, northwest Las Vegas, Nevada include Arroyo at Skyeview (townhomes starting from $392,640), Sierra at Skyeview, and Terra at Skyeview. Contact Dr. Jan Duffy, your buyer\'s agent, at (702) 903-4687 for current availability in this northwest Las Vegas area.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner context="available lots homesite" />
        <InformationalPageContent
          title="New Homes in Zip Code 89166"
          h1="New Construction Homes in Zip Code 89166: Skye Canyon, Northwest Las Vegas | Buyer's Agent"
          sections={[
            {
              h2: 'Welcome to Zip Code 89166: Skye Canyon, Las Vegas',
              content: 'Zip code 89166 encompasses Skye Canyon, a premier master-planned community in northwest Las Vegas, Nevada. This area is home to multiple new construction developments including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview. Skye Canyon offers exceptional new construction homes, top-rated schools, extensive amenities, and a family-friendly atmosphere. Your buyer\'s agent, Dr. Jan Duffy, specializes in this northwest Las Vegas area.',
              h3s: [
                {
                  h3: 'Skye Canyon: A Premier Master-Planned Community',
                  content: 'Skye Canyon is a 1,700-acre master-planned community in northwest Las Vegas (zip code 89166) that represents one of the city\'s most thoughtfully designed residential developments. The community features extensive parks, trails, recreation centers, top-rated schools, and family-friendly amenities. Skye Canyon combines natural desert beauty with modern community planning.',
                },
                {
                  h3: 'New Construction Developments in Zip Code 89166, Skye Canyon, Las Vegas, Nevada',
                  content: 'Multiple new construction developments are available in zip code 89166, Skye Canyon, northwest Las Vegas, Nevada, including Arroyo at Skyeview (townhomes starting from $392,640), Sierra at Skyeview, and Terra at Skyeview. These communities offer modern new construction homes with contemporary designs, premium finishes, and energy-efficient features perfect for Las Vegas, Nevada living. Your buyer\'s agent, Dr. Jan Duffy, has insider knowledge of all developments in this northwest Las Vegas area.',
                },
                {
                  h3: 'Location Benefits of Zip Code 89166, Skye Canyon, Northwest Las Vegas, Nevada',
                  content: 'Zip code 89166, Skye Canyon, northwest Las Vegas, Nevada offers excellent location benefits including proximity to Red Rock Canyon National Conservation Area (15 minutes west), Mount Charleston (30 minutes northwest), and easy access to the Las Vegas Strip (20-25 minutes southeast). The area provides a peaceful residential atmosphere in northwest Las Vegas while maintaining convenient access to city amenities, employment centers, and major highways including US-95 and the 215 Beltway.',
                },
              ],
            },
            {
              h2: 'Schools in Zip Code 89166',
              content: 'Zip code 89166 is served by excellent schools in the Clark County School District, making it ideal for families prioritizing education. The area features highly rated elementary, middle, and high schools with strong academic programs.',
              h3s: [
                {
                  h3: 'Roger Bryan Elementary School - Skye Canyon, Zip Code 89166',
                  content: 'Roger Bryan Elementary School serves zip code 89166, Skye Canyon, northwest Las Vegas, Nevada and is highly rated (9/10). The school offers strong academic programs and is conveniently located within Skye Canyon itself, making it easily accessible for families living in Arroyo at Skyeview and other new construction developments in this northwest Las Vegas area. Many families specifically choose Skye Canyon and zip code 89166 for the exceptional school quality.',
                },
                {
                  h3: 'Sig Rogich Middle School and Shadow Ridge High School',
                  content: 'Sig Rogich Middle School and Shadow Ridge High School serve older students in zip code 89166. These schools provide quality education and are conveniently located for families in Skye Canyon. The area\'s commitment to education makes it attractive for families with school-age children.',
                },
              ],
            },
            {
              h2: 'Working with Dr. Jan Duffy, Your Buyer\'s Agent, for Zip Code 89166 Homes in Skye Canyon, Northwest Las Vegas',
              content: 'When purchasing a new construction home in zip code 89166, Skye Canyon, northwest Las Vegas, Nevada, working with Dr. Jan Duffy ensures you have expert buyer\'s agent representation. Dr. Jan is a New Construction Home Expert who specializes in new construction homes throughout Skye Canyon, zip code 89166, and all of northwest Las Vegas, Nevada. She represents YOU, not the builder, and provides comprehensive services at no extra cost to you.',
              h3s: [
                {
                  h3: 'Construction Monitoring for Skye Canyon Homes',
                  content: 'Dr. Jan Duffy monitors your home\'s construction every 7-10 days throughout the build process. This proactive approach catches issues before your warranty expires, potentially saving thousands of dollars. Her monitoring ensures quality construction for your zip code 89166 home.',
                },
                {
                  h3: 'Building Standards Inspection',
                  content: 'Dr. Jan provides a complimentary building standards inspection at closing that identifies issues BEFORE your warranty matters. This specialized inspection ensures your zip code 89166 home is built to the highest standards.',
                },
                {
                  h3: 'Insider Knowledge of Zip Code 89166, Skye Canyon, Northwest Las Vegas Communities',
                  content: 'Dr. Jan Duffy, your buyer\'s agent, has insider knowledge of all new construction developments in zip code 89166, Skye Canyon, northwest Las Vegas, Nevada, including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview. She knows current pricing, available incentives, and inventory for all communities in this northwest Las Vegas area. She knows which lots have the best views, which floor plans are most popular, and how to maximize your value when purchasing in Skye Canyon, zip code 89166.',
                },
              ],
            },
            {
              h2: 'Amenities and Lifestyle in Zip Code 89166, Skye Canyon, Northwest Las Vegas, Nevada',
              content: 'Zip code 89166, Skye Canyon, northwest Las Vegas, Nevada offers exceptional amenities and lifestyle opportunities. Skye Canyon, a premier 1,700-acre master-planned community, features extensive recreational facilities, parks including Skye Canyon Park, trails connecting throughout the community, and amenities that enhance daily living for Arroyo at Skyeview residents and all northwest Las Vegas homeowners.',
              h3s: [
                {
                  h3: 'Skye Canyon Recreation Facilities',
                  content: 'Skye Canyon features a recreation center, fitness facilities, multiple parks, extensive trail systems, splash pads, sports courts and fields, and neighborhood schools. The master-planned community is designed for active lifestyles with family-friendly amenities.',
                },
                {
                  h3: 'Shopping and Dining in Zip Code 89166, Skye Canyon, Northwest Las Vegas',
                  content: 'Zip code 89166, Skye Canyon, northwest Las Vegas, Nevada is conveniently located near the Skye Canyon Marketplace (right within the community) featuring Smith\'s Food and Drug, restaurants, and retail shops. The area is also close to Durango Square shopping center (approximately 10 minutes south), Downtown Summerlin (15-20 minutes southeast), and approximately 20-25 minutes from the Las Vegas Strip for more extensive dining and entertainment options. The 215 Beltway and US-95 provide easy access to shopping centers throughout northwest Las Vegas.',
                },
                {
                  h3: 'Outdoor Recreation Near Zip Code 89166, Skye Canyon, Northwest Las Vegas, Nevada',
                  content: 'Zip code 89166, Skye Canyon, northwest Las Vegas, Nevada is perfectly positioned for outdoor enthusiasts. Red Rock Canyon National Conservation Area is just 15 minutes west via US-95, offering world-class hiking, rock climbing, and scenic drives. Mount Charleston (for skiing in winter and hiking year-round) is 30 minutes northwest, reaching elevations over 11,000 feet. Lake Mead National Recreation Area is 45 minutes southeast. Within Skye Canyon itself, residents enjoy extensive trail systems connecting throughout the 1,700-acre community, multiple parks including Skye Canyon Park, and outdoor activities perfect for active families. The northwest Las Vegas location means you\'re closer to the mountains and desert recreation than most Las Vegas areas.',
                },
              ],
            },
          ]}
          questions={[
            {
              question: 'What is zip code 89166 and where exactly is it located in Las Vegas, Nevada?',
              answer: 'Zip code 89166 encompasses Skye Canyon, a premier 1,700-acre master-planned community in northwest Las Vegas, Nevada. The area is located near the intersection of US-95 and the 215 Beltway, approximately 20-25 minutes northwest of the Las Vegas Strip, 15 minutes west of Red Rock Canyon National Conservation Area, and 30 minutes northwest of Mount Charleston. The area is home to multiple new construction developments including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview, and offers exceptional new construction homes, top-rated schools including Roger Bryan Elementary (9/10 rating), and extensive amenities.',
            },
            {
              question: 'What new construction developments are in zip code 89166, Skye Canyon, northwest Las Vegas?',
              answer: 'Multiple new construction developments are available in zip code 89166, Skye Canyon, northwest Las Vegas, Nevada, including Arroyo at Skyeview (townhomes starting from $392,640), Sierra at Skyeview, and Terra at Skyeview. These communities offer modern new construction homes with contemporary designs, premium finishes, and energy-efficient features perfect for Las Vegas, Nevada living. Your buyer\'s agent, Dr. Jan Duffy, has insider knowledge of all developments in this northwest Las Vegas area.',
            },
            {
              question: 'What schools serve zip code 89166?',
              answer: 'Zip code 89166 is served by excellent schools including Roger Bryan Elementary School (rated 9/10), Sig Rogich Middle School, and Shadow Ridge High School. The area is known for quality education, making it ideal for families.',
            },
            {
              question: 'What are property taxes like in zip code 89166?',
              answer: 'Nevada has relatively low property taxes. In zip code 89166 (Clark County), the average property tax rate is approximately 0.60-0.70% of assessed value. For a $400,000 home, annual property taxes would be approximately $2,400-$2,800. Nevada also has no state income tax.',
            },
            {
              question: 'What amenities are available in zip code 89166?',
              answer: 'Zip code 89166 features extensive amenities including a recreation center, fitness facilities, multiple parks, extensive trail systems, splash pads, sports courts and fields, and neighborhood schools. Skye Canyon is designed for active lifestyles.',
            },
            {
              question: 'Why should I work with Dr. Jan Duffy for zip code 89166 homes?',
              answer: 'Dr. Jan Duffy provides expert buyer representation for Arroyo at Skyeview Homes and new construction homes in zip code 89166. She offers construction monitoring every 7-10 days, a complimentary building standards inspection at closing, and insider knowledge of available inventory and pricing. Builders pay for buyer representation, so there\'s no extra cost. Call (702) 903-4687.',
            },
            {
              question: 'What is the commute like from zip code 89166?',
              answer: 'Zip code 89166 offers excellent commute times. Downtown Las Vegas is approximately 20-25 minutes away, the Strip is 20-25 minutes, and McCarran International Airport is about 25-30 minutes. The northwest location provides easy access to major employment centers.',
            },
            {
              question: 'What outdoor recreation is available near zip code 89166?',
              answer: 'Zip code 89166 is perfectly positioned for outdoor enthusiasts. Red Rock Canyon National Conservation Area is 15 minutes away, Mount Charleston is 30 minutes, and Lake Mead is 45 minutes. Within Skye Canyon, residents enjoy extensive trail systems and parks.',
            },
            {
              question: 'What are current builder incentives in zip code 89166?',
              answer: 'With 2x the normal new home inventory in Las Vegas, builders in zip code 89166 are offering aggressive incentives including mortgage rate buy-downs, closing cost assistance, and competitive pricing. Dr. Jan Duffy has insider knowledge of current incentives—call (702) 903-4687.',
            },
            {
              question: 'What shopping and dining options are in zip code 89166?',
              answer: 'Zip code 89166 is conveniently located near the Skye Canyon Marketplace with grocery stores, restaurants, and retail. The area is also close to Durango Square shopping center and approximately 15-20 minutes from the Las Vegas Strip.',
            },
          ]}
        />
        <section className="bg-muted py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Arroyo at Skyeview Homes in Skye Canyon
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover all new construction developments in zip code 89166 (Skye Canyon):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Arroyo at Skyeview: Townhomes starting at $392,640
                </h3>
                <p className="text-muted-foreground text-sm">
                  2-story townhomes with 2-4 bedrooms in Skye Canyon master-planned community.
                </p>
              </Link>
              <Link
                href="/sierra-at-skyeview"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Sierra at Skyeview: New construction in Skye Canyon
                </h3>
                <p className="text-muted-foreground text-sm">
                  Modern townhomes with contemporary designs and premium finishes.
                </p>
              </Link>
              <Link
                href="/terra-at-skyeview"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Terra at Skyeview: Skye Canyon townhomes
                </h3>
                <p className="text-muted-foreground text-sm">
                  Energy-efficient townhomes with modern floor plans in northwest Las Vegas.
                </p>
              </Link>
              <Link
                href="/eaglepointe-skye-canyon"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Eaglepointe at Skye Canyon: Master-planned community
                </h3>
                <p className="text-muted-foreground text-sm">
                  New construction homes in Skye Canyon with resort-style amenities.
                </p>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Explore More Las Vegas Zip Codes
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover new construction homes in other Las Vegas zip codes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/areas/zip-89128"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Zip Code 89128: Summerlin Area
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover luxury new construction homes in the prestigious Summerlin area.
                </p>
              </Link>
              <Link
                href="/areas/zip-89135"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Zip Code 89135: West Las Vegas
                </h3>
                <p className="text-muted-foreground text-sm">
                  Explore new construction homes in west Las Vegas with convenient access to amenities.
                </p>
              </Link>
              <Link
                href="/areas/zip-89144"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Zip Code 89144: Southwest Las Vegas
                </h3>
                <p className="text-muted-foreground text-sm">
                  Find new construction homes in southwest Las Vegas with easy access to the Strip.
                </p>
              </Link>
              <Link
                href="/areas/zip-89117"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Zip Code 89117: West Las Vegas
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover new construction homes in west Las Vegas near Summerlin and Red Rock.
                </p>
              </Link>
            </div>
          </div>
        </section>
        <ZipCodeMap highlightZipCode="89166" />
        <PeopleAlsoSearch />
      </main>
      <Footer />
    </div>
  )
}


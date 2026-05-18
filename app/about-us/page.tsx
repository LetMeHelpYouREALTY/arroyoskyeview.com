import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import DrJanCTABanner from '../components/dr-jan-cta-banner'
import DrJanContactCard from '../components/dr-jan-contact-card'
import AboutUsHero from '../components/about-us-hero'
import OurBrands from '../components/our-brands'
import OurPreferredBuyersAgent from '../components/our-preferred-buyers-agent'
import OurStory from '../components/our-story'
import WhereWeBuild from '../components/where-we-build'
import OnlineHomebuyingPioneer from '../components/online-homebuying-pioneer'
import OurAffiliates from '../components/our-affiliates'
import SupportingCommunities from '../components/supporting-communities'
import BuildCareer from '../components/build-career'
import InformationalPageContent from '../components/informational-page-content'
import PageSchemas from '../components/page-schemas'

export const metadata: Metadata = {
  title: 'About Arroyo at Skyeview | Las Vegas New Construction Homes',
  description: 'Learn about Arroyo at Skyeview Homes - new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada. Expert buyer representation with Dr. Jan Duffy.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/about-us',
  },
  openGraph: {
    title: 'About Arroyo at Skyeview | Las Vegas New Construction Homes',
    description: 'Learn about Arroyo at Skyeview Homes - new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada. Expert buyer representation with Dr. Jan Duffy.',
    url: 'https://www.arroyoskyeview.com/about-us',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arroyo at Skyeview at Skye Canyon',
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

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="about"
        url="/about-us"
        title="About Arroyo at Skyeview | Las Vegas New Construction Homes"
        description="Learn about Arroyo at Skyeview Homes - new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada. Expert buyer representation with Dr. Jan Duffy."
        breadcrumbs={[
          { name: 'About Arroyo at Skyeview', url: '/about-us' },
        ]}
        questions={[
          {
            question: 'What is Arroyo at Skyeview and where is it located?',
            answer: 'Arroyo at Skyeview Homes is a residential community of new construction townhomes located in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166).',
          },
          {
            question: 'Where is Arroyo at Skyeview located in Las Vegas?',
            answer: 'Arroyo at Skyeview Homes is located in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166), near the intersection of US-95 and the 215 Beltway.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner context="pricing incentives" />
        <AboutUsHero />
        <OurBrands />
        <OurStory />
        <WhereWeBuild />
        <OnlineHomebuyingPioneer />
        <OurAffiliates />
        <OurPreferredBuyersAgent />
        <SupportingCommunities />
        <BuildCareer />
        <InformationalPageContent
          title="About Arroyo at Skyeview in Las Vegas"
          h1="About Arroyo at Skyeview Homes: New Construction Townhomes in Skye Canyon, Northwest Las Vegas | Buyer's Agent"
          sections={[
            {
              h2: 'Arroyo at Skyeview Homes: New Construction Townhomes in Skye Canyon',
              content: 'Arroyo at Skyeview Homes offers modern new construction townhomes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Located near the intersection of US-95 and the 215 Beltway, this premier development features two-story townhomes with 2-4 bedrooms, premium finishes, and energy-efficient features. Arroyo at Skyeview Homes is part of Skye Canyon, a 1,700-acre master-planned community with extensive amenities, top-rated schools, and a family-friendly atmosphere.',
              h3s: [
                {
                  h3: 'Building in Las Vegas: A Commitment to Quality',
                  content: 'Arroyo at Skyeview Homes features modern two-story townhomes designed for contemporary lifestyles. The development offers three floor plans ranging from 1,531 to 1,729 square feet, each with premium finishes, energy-efficient features, and 2-bay garages. Homes are designed with the Las Vegas desert climate in mind, featuring efficient HVAC systems and quality construction.',
                },
                {
                  h3: 'Las Vegas Communities: Skye Canyon, Summerlin, and More',
                  content: 'Arroyo at Skyeview Homes is strategically located in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Skye Canyon is a premier 1,700-acre master-planned community featuring extensive parks, trails, recreation center, top-rated schools including Roger Bryan Elementary (9/10 rating), and the Skye Canyon Marketplace shopping center. The community is approximately 20-25 minutes northwest of the Las Vegas Strip, 15 minutes west of Red Rock Canyon, and 30 minutes northwest of Mount Charleston.',
                },
                {
                  h3: 'Why Choose Arroyo at Skyeview Homes?',
                  content: 'Arroyo at Skyeview Homes offers exceptional value in northwest Las Vegas, combining quality construction, modern design, and competitive pricing. Starting from $392,640, these new construction townhomes feature premium finishes, energy-efficient features, and builder warranties. With current builder incentives including rate buy-downs and closing cost assistance, Arroyo at Skyeview Homes represents excellent value for homebuyers seeking quality new construction in Skye Canyon.',
                },
              ],
            },
            {
              h2: 'Working with Dr. Jan Duffy: Expert Buyer Representation for New Construction Homes',
              content: 'When purchasing a new construction home in Las Vegas, working with Dr. Jan Duffy ensures you have expert representation throughout the entire process. Dr. Jan is a New Construction Home Preferred Buyer\'s Agent specializing in new construction homes throughout Las Vegas, including all new construction developments.',
              h3s: [
                {
                  h3: 'Construction Monitoring Every 7-10 Days',
                  content: 'Dr. Jan Duffy monitors your home\'s construction every 7-10 days during the build process. This proactive approach catches issues before your warranty expires, potentially saving thousands of dollars in post-warranty repairs. When the superintendent knows Dr. Jan is monitoring, your home gets built right the first time.',
                },
                {
                  h3: 'Building Standards Inspection at Closing',
                  content: 'Dr. Jan provides a complimentary building standards inspection at closing that catches issues BEFORE your warranty matters. This specialized inspection for new construction identifies problems that standard home inspections might miss, ensuring you start homeownership with confidence.',
                },
                {
                  h3: 'Insider Knowledge of Arroyo at Skyeview Homes',
                  content: 'Dr. Jan Duffy has insider knowledge of Arroyo at Skyeview Homes and all new construction developments in Las Vegas, including real-time inventory tracking, current pricing, available incentives, and which communities best fit different lifestyles and budgets. She knows which lots have the best views, which floor plans are most popular, and how to navigate the builder\'s processes to maximize your value.',
                },
                {
                  h3: 'No Extra Cost to You',
                  content: 'Builders pay for buyer representation on all new construction homes including Arroyo at Skyeview Homes. The commission is built into the home pricing whether you use an agent or not—which means you\'re already funding representation. Dr. Jan Duffy works exclusively for YOU, not the builder, ensuring your interests are protected throughout the entire process.',
                },
              ],
            },
            {
              h2: 'Las Vegas Real Estate Market: Why Arroyo at Skyeview Homes Excels',
              content: 'Las Vegas offers exceptional opportunities for new construction homebuyers. With no state income tax, relatively low property taxes, a growing economy, and excellent weather that allows for year-round construction, Las Vegas provides an ideal environment for homeownership. Arroyo at Skyeview Homes in Skye Canyon represents quality new construction with modern designs and excellent value.',
              h3s: [
                {
                  h3: 'Las Vegas Property Taxes and Cost of Living',
                  content: 'Nevada has relatively low property taxes compared to many states. In Clark County (Las Vegas), the average property tax rate is approximately 0.60-0.70% of assessed value. For a $400,000 home, annual property taxes would be approximately $2,400-$2,800. Combined with no state income tax, Las Vegas provides an attractive cost of living for homeowners.',
                },
                {
                  h3: 'Las Vegas Communities: Skye Canyon, Summerlin, Henderson',
                  content: 'Arroyo at Skyeview Homes is located in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Skye Canyon offers excellent schools including Roger Bryan Elementary (9/10 rating), extensive amenities including parks, trails, and recreation center, shopping at Skye Canyon Marketplace, and recreational opportunities including proximity to Red Rock Canyon and Mount Charleston. Skye Canyon provides a family-friendly atmosphere with a focus on outdoor recreation and community living.',
                },
                {
                  h3: 'Current Market Conditions in Las Vegas',
                  content: 'Las Vegas is experiencing favorable conditions for new construction buyers. With 2x the normal new home inventory, builders are offering aggressive incentives including mortgage rate buy-downs, closing cost assistance, and competitive pricing. This creates exceptional opportunities for homebuyers to secure quality new construction homes at attractive prices, including Arroyo at Skyeview Homes.',
                },
              ],
            },
          ]}
          questions={[
            {
              question: 'What is Arroyo at Skyeview and where is it located?',
              answer: 'Arroyo at Skyeview Homes is a residential community of new construction townhomes located in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). The development offers modern two-story townhomes with 2-4 bedrooms, premium finishes, and energy-efficient features.',
            },
            {
              question: 'Where is Arroyo at Skyeview located in Las Vegas?',
              answer: 'Arroyo at Skyeview Homes is located in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166), near the intersection of US-95 and the 215 Beltway. Skye Canyon is a premier 1,700-acre master-planned community featuring extensive amenities, top-rated schools, and a family-friendly atmosphere.',
            },
            {
              question: 'Why should I work with Dr. Jan Duffy when buying Arroyo at Skyeview Homes?',
              answer: 'Dr. Jan Duffy provides expert buyer representation for Arroyo at Skyeview Homes in Las Vegas. She offers construction monitoring every 7-10 days, a complimentary building standards inspection at closing, and insider knowledge of available inventory and pricing. Builders pay for buyer representation, so there\'s no extra cost. Call (702) 903-4687.',
            },
            {
              question: 'What are builder incentives for Arroyo at Skyeview Homes?',
              answer: 'With 2x the normal new home inventory in Las Vegas, builders are offering aggressive incentives including mortgage rate buy-downs, closing cost assistance, price reductions, and upgrade packages. Dr. Jan Duffy has insider knowledge of current incentives for Arroyo at Skyeview Homes—call (702) 903-4687 for the most current information.',
            },
            {
              question: 'What are property taxes like for Arroyo at Skyeview Homes?',
              answer: 'Nevada has relatively low property taxes. In Clark County (Las Vegas), the average property tax rate is approximately 0.60-0.70% of assessed value. For a $400,000 home, annual property taxes would be approximately $2,400-$2,800. Nevada also has no state income tax.',
            },
            {
              question: 'What other communities are near Arroyo at Skyeview Homes?',
              answer: 'Arroyo at Skyeview Homes is located in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Nearby communities in Skye Canyon include Sierra at Skyeview and Terra at Skyeview. Other premier Las Vegas areas include Summerlin and Henderson, each offering unique features and amenities.',
            },
            {
              question: 'What makes Arroyo at Skyeview Homes different?',
              answer: 'Arroyo at Skyeview Homes features modern two-story townhomes with contemporary designs, energy-efficient construction for the desert climate, premium finishes including quartz countertops, and thoughtful community planning. The development is part of Skye Canyon, a premier master-planned community with extensive amenities and top-rated schools.',
            },
            {
              question: 'How long does it take to build a home at Arroyo at Skyeview?',
              answer: 'Construction timelines typically range from 4-7 months depending on the specific home and construction stage when you purchase. Las Vegas\'s dry climate means minimal weather-related delays. Dr. Jan Duffy monitors construction every 7-10 days throughout the process.',
            },
            {
              question: 'What warranties come with Arroyo at Skyeview Homes?',
              answer: 'Arroyo at Skyeview Homes includes comprehensive builder warranties covering structural defects (typically 10 years), major systems (2-5 years), and workmanship (1 year). This warranty protection provides peace of mind. Combined with Dr. Jan Duffy\'s building standards inspection at closing, you can be confident your home is built to the highest standards.',
            },
            {
              question: 'What schools serve Arroyo at Skyeview Homes?',
              answer: 'Arroyo at Skyeview Homes is served by excellent schools in the Clark County School District. Skye Canyon is served by highly rated schools including Roger Bryan Elementary (9/10 rating), Sig Rogich Middle School, and Shadow Ridge High School. All schools are conveniently located within or near zip code 89166. Contact Dr. Jan Duffy for specific school information.',
            },
          ]}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto">
            <DrJanContactCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


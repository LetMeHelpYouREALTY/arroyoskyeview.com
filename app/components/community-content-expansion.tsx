import PageQASection from './page-qa-section'
import Link from 'next/link'

interface CommunityContentExpansionProps {
  communityName: string
  location: string
  zipCode: string
  homeType: string
  startingPrice?: string
  questions: Array<{ question: string; answer: string }>
}

export default function CommunityContentExpansion({
  communityName,
  location,
  zipCode,
  homeType,
  startingPrice,
  questions,
}: CommunityContentExpansionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* H1 - Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
        {communityName}: New {homeType} in {location}, Las Vegas | Buyer's Agent
      </h1>

      {/* Section 1: Community Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Welcome to {communityName}
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          {communityName} is a premier residential community located in {location}, Las Vegas, Nevada (zip code {zipCode}). This Arroyo at Skyeview Homes development offers exceptional new construction {homeType.toLowerCase()} designed for modern living with premium finishes, energy-efficient features, and contemporary design elements.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Prime Location in Las Vegas
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Located in {location}, {communityName} offers residents convenient access to Las Vegas's best amenities while maintaining a peaceful residential atmosphere. The community is strategically positioned to provide easy commutes throughout the Las Vegas valley, with excellent proximity to shopping, dining, schools, and recreational facilities.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Modern {homeType} Living
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          {communityName} features thoughtfully designed {homeType.toLowerCase()} with modern floor plans, premium finishes, and energy-efficient construction. Each home is built to high standards, featuring quality materials and contemporary design elements that enhance daily living and reduce utility costs.
        </p>

        {startingPrice && (
          <>
            <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
              Competitive Pricing and Value
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Homes at {communityName} start from {startingPrice}, representing excellent value for new construction in Las Vegas. With current builder incentives including mortgage rate buy-downs and closing cost assistance, now is an excellent time to purchase. Dr. Jan Duffy has insider knowledge of current pricing and incentives available at {communityName}.
            </p>
          </>
        )}
      </section>

      {/* Section 2: Dr. Jan Duffy Services */}
      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Expert Buyer Representation with Dr. Jan Duffy
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          When purchasing a new construction home at {communityName}, working with Dr. Jan Duffy ensures you have expert representation throughout the entire process. Dr. Jan specializes in Arroyo at Skyeview Homes and new construction homes throughout Las Vegas and provides comprehensive services at no extra cost to you.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Construction Monitoring Services
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Dr. Jan Duffy monitors your home's construction every 7-10 days during the build process. This proactive approach catches issues before your warranty expires, potentially saving you thousands of dollars in post-warranty repairs. When the superintendent knows Dr. Jan is monitoring, your home gets built right the first time.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Building Standards Inspection at Closing
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Dr. Jan provides a complimentary building standards inspection at closing that catches issues BEFORE your warranty matters. This specialized inspection for new construction identifies problems that standard home inspections might miss, ensuring you start homeownership with confidence.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Insider Knowledge and Real-Time Inventory
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Dr. Jan Duffy maintains real-time knowledge of available homes, pricing, and incentives at {communityName} and all new construction developments in Las Vegas including Arroyo at Skyeview Homes. She knows which lots have the best features, which floor plans are available, and how to navigate the builder's processes to maximize your value.
        </p>

        <div className="mt-6">
          <a
            href="tel:7029034687"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary transition"
          >
            Call Dr. Jan Duffy: (702) 903-4687
          </a>
        </div>
      </section>

      {/* Section 3: Neighborhood Content */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Living in {location}, Las Vegas: Neighborhood Guide
        </h2>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          {location} Neighborhood Information
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          {location} is one of Las Vegas's most desirable areas, offering residents a perfect blend of suburban living and urban convenience. The neighborhood features excellent schools, convenient shopping and dining, and easy access to major employment centers throughout the Las Vegas valley.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Schools in Zip Code {zipCode}
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          {location} is served by excellent schools in the Clark County School District. The area is known for quality education, with many families choosing {location} specifically for the school quality and proximity to educational facilities. Contact Dr. Jan Duffy for detailed information about specific schools serving {communityName}.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Local Shopping and Dining
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          {location} offers convenient access to shopping and dining options. The area features grocery stores, restaurants, and retail services nearby, with additional shopping available in nearby areas. Las Vegas's diverse dining scene is easily accessible from {location}, offering everything from casual family restaurants to fine dining.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Commute Times and Location Benefits
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          {location} offers excellent commute times throughout the Las Vegas valley. Downtown Las Vegas is easily accessible, as are major employment centers. The location provides easy access to the Las Vegas Strip, McCarran International Airport, and other key destinations while maintaining a peaceful residential atmosphere.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Property Taxes and Cost of Living
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Las Vegas, and specifically zip code {zipCode}, offers attractive property tax rates. Nevada's average property tax rate is approximately 0.60-0.70% of assessed value, significantly lower than many states. Combined with no state income tax, Las Vegas provides an attractive cost of living for homeowners.
        </p>
      </section>

      {/* Section 4: Why Choose New Construction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Why Choose New Construction at {communityName}?
        </h2>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Modern Features and Energy Efficiency
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          New construction homes at {communityName} feature the latest in home design and energy efficiency. Modern HVAC systems, energy-efficient windows, proper insulation, and ENERGY STAR-rated appliances help reduce utility costs in Las Vegas's hot desert climate. These features are designed specifically for the Las Vegas environment.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Builder Warranties and Protection
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          New construction comes with comprehensive builder warranties covering structural defects (typically 10 years), major systems (2-5 years), and workmanship (1 year). This warranty protection provides peace of mind. Combined with Dr. Jan Duffy's building standards inspection at closing, you can be confident your home is built to the highest standards.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Current Builder Incentives
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          With 2x the normal new home inventory in Las Vegas, builders are offering aggressive incentives including mortgage rate buy-downs, closing cost assistance, price reductions, and upgrade packages. These incentives can significantly reduce your monthly payment and upfront costs. Dr. Jan Duffy has insider knowledge of current builder incentives at {communityName} and Arroyo at Skyeview Homes.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          No Competition or Bidding Wars
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Unlike the resale market where bidding wars and cash offers are common, new construction offers more availability and less competition. You can choose from available homes or select a lot for new construction, giving you more options and less stress. With current high inventory levels, you have time to make informed decisions.
        </p>
      </section>

      {/* Q&A Section */}
      <PageQASection questions={questions} title={`${communityName}: Frequently Asked Questions`} />
    </div>
  )
}

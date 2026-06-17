import PageQASection from './page-qa-section'
import Link from 'next/link'
import { trackPhoneClick, trackCTAClick } from './analytics-tracker'

export default function HomepageContentSection() {
  const homepageQuestions = [
    {
      question: 'What is Arroyo at Skyeview Homes and where exactly is it located in northwest Las Vegas, Nevada?',
      answer: 'Arroyo at Skyeview Homes is a residential community of modern new construction townhomes located in Skye Canyon, a 1,700-acre master-planned community in northwest Las Vegas, Nevada (zip code 89166). The community is situated near the intersection of US-95 and the 215 Beltway, approximately 20-25 minutes northwest of the Las Vegas Strip, 15 minutes west of Red Rock Canyon National Conservation Area, and 30 minutes northwest of Mount Charleston. Skye Canyon spans 1,700 acres in northwest Las Vegas and features extensive parks, trails, top-rated schools including Roger Bryan Elementary (9/10 rating), and recreational facilities. This northwest Las Vegas location offers easy access to major employment centers including Summerlin, Downtown Las Vegas, and the Strip corridor while maintaining a peaceful residential atmosphere away from the hustle and bustle.',
    },
    {
      question: 'What are the prices for Arroyo at Skyeview Homes?',
      answer: 'Arroyo at Skyeview Homes start from $392,640, with prices ranging up to $424,590 depending on the floor plan and lot location. These prices are competitive for new construction townhomes in the Las Vegas area, especially considering the modern features, energy-efficient construction, and prime location in Skye Canyon. Current builder incentives may also be available, including rate buy-downs and closing cost assistance.',
    },
    {
      question: 'What floor plans are available at Arroyo at Skyeview Homes?',
      answer: 'Arroyo at Skyeview Homes offers three distinct floor plans: the Beverly (1,531 sq ft, 3 bedrooms), the Captiva (1,643 sq ft, 3 bedrooms), and the Delray (1,729 sq ft, 3-4 bedrooms). All plans include 2.5 bathrooms and 2-bay garages. Each floor plan features modern open-concept designs, quartz countertops, energy-efficient appliances, and contemporary finishes perfect for modern living in Las Vegas.',
    },
    {
      question: 'What schools serve Arroyo at Skyeview Homes in Skye Canyon, zip code 89166, northwest Las Vegas?',
      answer: 'Arroyo at Skyeview Homes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada is served by excellent schools in the Clark County School District. Roger Bryan Elementary School (rated 9/10) is located within Skye Canyon itself, making it highly convenient for families at Arroyo at Skyeview Homes. Sig Rogich Middle School and Shadow Ridge High School serve older students in this northwest Las Vegas area. Many families specifically choose Skye Canyon and Arroyo at Skyeview Homes for the exceptional school quality, with Roger Bryan Elementary being one of the top-rated elementary schools in northwest Las Vegas. These schools are all conveniently located within or near zip code 89166, making the school commute easy for Arroyo at Skyeview Homes residents.',
    },
    {
      question: 'What amenities are available near Arroyo at Skyeview Homes in Skye Canyon, northwest Las Vegas, Nevada?',
      answer: 'Arroyo at Skyeview Homes residents in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166) have access to extensive amenities within the master-planned community. Skye Canyon features a state-of-the-art recreation center, fitness facilities, multiple parks and playgrounds including Skye Canyon Park, extensive trail systems for hiking and biking connecting throughout the 1,700-acre community, splash pads, sports courts and fields, and neighborhood schools including Roger Bryan Elementary. The Skye Canyon Marketplace shopping center is nearby with grocery stores, restaurants, and retail. The community is designed for active lifestyles with a focus on outdoor recreation and family-friendly amenities. Additionally, Arroyo at Skyeview Homes is just 15 minutes from Red Rock Canyon National Conservation Area, 30 minutes from Mount Charleston for skiing and hiking, and 20-25 minutes from the Las Vegas Strip. The 215 Beltway and US-95 provide easy access to all of northwest Las Vegas and beyond.',
    },
    {
      question: 'Why should I work with Dr. Jan Duffy when buying at Arroyo at Skyeview Homes in Skye Canyon, northwest Las Vegas?',
      answer: 'Dr. Jan Duffy is a New Construction Home Expert and buyer\'s agent who provides expert buyer representation specifically for Arroyo at Skyeview Homes and new construction homes in northwest Las Vegas, Nevada, including Skye Canyon (zip code 89166). <strong>She represents HOME BUYERS, not the builder.</strong> She offers construction monitoring every 7-10 days during your home\'s build at Arroyo at Skyeview Homes, a complimentary building standards inspection at closing, and insider knowledge of available inventory, pricing, and lot selection in this northwest Las Vegas area. Dr. Jan has deep local knowledge of Arroyo at Skyeview Homes, Skye Canyon, zip code 89166, and all northwest Las Vegas new construction communities. Best of all, builders pay for buyer\'s agent representation—so you\'re already funding an agent, and Dr. Jan works exclusively for YOU as a home buyer, not the builder. Call (702) 903-4687 to get started with your Arroyo at Skyeview Homes purchase.',
    },
    {
      question: 'How long does it take to build a new home at Arroyo at Skyeview Homes?',
      answer: 'Construction timelines for homes at Arroyo at Skyeview Homes typically range from 4-7 months depending on the specific home, lot location, and construction stage when you purchase. Las Vegas\'s dry climate means minimal weather-related delays. Dr. Jan Duffy monitors construction every 7-10 days to keep you informed throughout the process and ensure quality construction standards are maintained.',
    },
    {
      question: 'What are property taxes like in Las Vegas zip code 89166?',
      answer: 'Nevada has relatively low property taxes compared to many states. In Clark County (Las Vegas zip code 89166), the average property tax rate is approximately 0.60-0.70% of assessed value. For a $400,000 home at Arroyo at Skyeview Homes, annual property taxes would be approximately $2,400-$2,800. Nevada also has no state income tax, making it attractive for homeowners.',
    },
    {
      question: 'What shopping and dining options are near Arroyo at Skyeview Homes in Skye Canyon, northwest Las Vegas?',
      answer: 'Arroyo at Skyeview Homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166) is conveniently located near excellent shopping and dining. The Skye Canyon Marketplace is right within the community, featuring grocery stores including Smith\'s Food and Drug, restaurants, and retail shops. The area is also close to Durango Square shopping center (approximately 10 minutes south), and approximately 20-25 minutes from the Las Vegas Strip. Summerlin, with its upscale dining and shopping options including Downtown Summerlin, is approximately 15-20 minutes southeast. Local dining options near Arroyo at Skyeview Homes include casual and family-friendly restaurants perfect for northwest Las Vegas living, with more upscale dining available in nearby Summerlin. The 215 Beltway and US-95 provide easy access to shopping centers throughout northwest Las Vegas.',
    },
    {
      question: 'What outdoor recreation is available near Arroyo at Skyeview Homes in Skye Canyon, northwest Las Vegas, Nevada?',
      answer: 'Arroyo at Skyeview Homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166) offers convenient access to outdoor recreation. Red Rock Canyon National Conservation Area is 15 minutes west via US-95, offering hiking, rock climbing, and scenic drives. Mount Charleston (for skiing in winter and hiking year-round) is 30 minutes northwest, reaching elevations over 11,000 feet. Lake Mead National Recreation Area is 45 minutes southeast. Skye Canyon itself features extensive trail systems connecting throughout the 1,700-acre community, multiple parks including Skye Canyon Park, and outdoor activities perfect for active families. The northwest Las Vegas location means you\'re closer to the mountains and desert recreation than most Las Vegas areas, while still being accessible to city amenities. The 215 Beltway provides easy access to all outdoor recreation throughout the Las Vegas Valley.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* H1 - Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
        Arroyo at Skyeview Homes: New Construction Townhomes in Skye Canyon, Northwest Las Vegas, Nevada (Zip Code 89166)
      </h1>

      {/* Section 1: Community Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Welcome to Arroyo at Skyeview Homes in Skye Canyon, Northwest Las Vegas, Nevada (Zip Code 89166)
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          Arroyo at Skyeview Homes combines modern living with extensive community amenities in Skye Canyon, a 1,700-acre master-planned community in northwest Las Vegas, Nevada (zip code 89166). Located in <Link href="/areas/zip-89166" className="text-primary hover:text-primary underline font-medium">Skye Canyon, northwest Las Vegas, Nevada (zip code 89166)</Link>, near the intersection of US-95 and the 215 Beltway, this new construction development offers two-story townhomes designed for contemporary lifestyles with premium finishes and energy-efficient features. Arroyo at Skyeview Homes is situated in the heart of Skye Canyon, a premier 1,700-acre master-planned community in northwest Las Vegas. When buying Arroyo at Skyeview Homes, work with <Link href="/work-with-dr-jan" className="text-primary hover:text-primary underline font-medium">Dr. Jan Duffy—your buyer's agent who represents HOME BUYERS, not the builder</Link>. Explore <Link href="/homes/townhomes-las-vegas" className="text-primary hover:text-primary underline font-medium">new construction townhomes in Las Vegas</Link> and learn about <Link href="/buyers/first-time-homebuyer" className="text-primary hover:text-primary underline font-medium">first-time homebuyer programs</Link> available for Skye Canyon communities.
        </p>
        
        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Prime Location in Northwest Las Vegas, Nevada - Zip Code 89166
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Skye Canyon and Arroyo at Skyeview Homes are located in northwest Las Vegas, Nevada (zip code 89166), offering residents peaceful suburban living with convenient access to city amenities via US-95 and the 215 Beltway. The community is approximately 20-25 minutes northwest of the Las Vegas Strip via US-95, providing convenient access to entertainment, dining, and employment centers including Summerlin (15-20 minutes southeast), Downtown Las Vegas (25 minutes southeast), and the Strip corridor. The 215 Beltway provides easy access to all of northwest Las Vegas and beyond. This northwest Las Vegas location maintains a family-friendly residential atmosphere while being close to major employment centers, shopping at Skye Canyon Marketplace and Durango Square, and outdoor recreation at Red Rock Canyon (15 minutes west) and Mount Charleston (30 minutes northwest).
        </p>
        
        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Modern Townhome Living
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Arroyo at Skyeview offers three thoughtfully designed floor plans ranging from 1,531 to 1,729 square feet. Each home features modern open-concept layouts, quartz countertops, energy-efficient appliances, and contemporary design elements. With 2-4 bedrooms, 2.5 bathrooms, and 2-bay garages, these townhomes provide an ideal balance of space and convenience for families, professionals, and active adults in northwest Las Vegas, Nevada (zip code 89166).
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Starting Prices and Value
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Homes at Arroyo at Skyeview start from $392,640, representing strong value for new construction townhomes in northwest Las Vegas, Nevada (zip code 89166). When you consider the modern features, energy efficiency, builder warranties, and prime Skye Canyon location near US-95 and the 215 Beltway, these homes offer competitive value. With current builder incentives including rate buy-downs and closing cost assistance, now is a good time to purchase. Dr. Jan Duffy helps you navigate these incentives to maximize your savings.
        </p>
      </section>

      {/* Section 2: Dr. Jan Duffy Services */}
      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Expert Buyer Representation with Dr. Jan Duffy
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          When purchasing a new construction home at Arroyo at Skyeview in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166), working with Dr. Jan Duffy ensures you have expert buyer's agent representation throughout the entire process. Dr. Jan is a New Construction Home Expert and buyer's agent specializing in new construction homes throughout northwest Las Vegas, Nevada, including all Skye Canyon communities. She has deep local knowledge of zip code 89166, Skye Canyon, and the northwest Las Vegas area, including Arroyo at Skyeview, Sierra at Skyeview, and Terra at Skyeview.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Construction Monitoring Every 7-10 Days
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Unlike traditional real estate transactions, new construction requires ongoing monitoring during the build process. Dr. Jan Duffy visits your home's construction site every 7-10 days to check progress, verify quality standards, and catch any issues before your warranty expires. This proactive approach has saved clients thousands of dollars in post-warranty repairs. When the superintendent knows Dr. Jan is monitoring construction, your home gets built right the first time.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Building Standards Inspection at Closing
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Even new construction homes can have issues. Dr. Jan Duffy provides a complimentary building standards inspection at closing that catches problems BEFORE your warranty matters. This inspection is specifically designed for new construction and identifies issues that standard home inspections might miss. By catching these issues before warranty expiration, you can save thousands in future repair costs.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Insider Knowledge of New Construction Homes in Las Vegas, Nevada
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Dr. Jan Duffy is a New Construction Home Expert with insider knowledge of all new construction developments in northwest Las Vegas, Nevada (zip code 89166), Skye Canyon, Summerlin, Henderson, and throughout the Las Vegas metro area, including real-time inventory tracking, current pricing, available incentives, and which communities fit different lifestyles and budgets. She knows which lots offer mountain views, which floor plans are most popular at Arroyo at Skyeview Homes, and how to navigate the builder's processes to maximize your value and minimize delays.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          No Extra Cost to You - Dr. Jan Duffy Represents HOME BUYERS, Not the Builder
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          <strong>Important: Dr. Jan Duffy represents HOME BUYERS, not the builder.</strong> When you buy Arroyo at Skyeview Homes, builders pay for buyer representation—the commission is built into the home pricing whether you use an agent or not. This means you're already funding representation, so choose someone who works exclusively for YOU as a home buyer. Dr. Jan Duffy protects YOUR interests throughout the entire process, ensuring you get the best deal, quality construction, and proper representation. There's no additional cost for this expert buyer representation—builders pay for it.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="tel:7029034687"
            onClick={() => trackPhoneClick('702-903-4687', 'homepage_content_section')}
            className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary transition"
          >
            Call Dr. Jan Duffy: (702) 903-4687 | Buyer's Agent for Arroyo at Skyeview Homes
          </a>
          <Link
            href="/work-with-dr-jan"
            onClick={() => trackCTAClick('Work with Dr. Jan', 'homepage_content_section')}
            className="inline-block bg-white text-primary border-2 border-luxury-champagne px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition"
          >
            Work with Dr. Jan Duffy | Represents Home Buyers, Not the Builder
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/buyers/builder-incentives-guide"
            className="bg-white p-4 rounded-lg border border-border hover:border-blue-300 hover:shadow-md transition group"
          >
            <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Current builder incentives and promotions
            </h4>
            <p className="text-sm text-muted-foreground">
              Learn about rate buy-downs, closing cost assistance, and current builder incentives for new construction homes in northwest Las Vegas, Nevada.
            </p>
          </Link>
          <Link
            href="/buyers/first-time-homebuyer"
            className="bg-white p-4 rounded-lg border border-border hover:border-blue-300 hover:shadow-md transition group"
          >
            <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              First-time homebuyer guide
            </h4>
            <p className="text-sm text-muted-foreground">
              Complete guide for first-time buyers including down payment assistance and financing options.
            </p>
          </Link>
        </div>
      </section>

      {/* Section 3: Skye Canyon Neighborhood Content */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Living in Skye Canyon, Las Vegas: Neighborhood Guide
        </h2>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Skye Canyon Master-Planned Community
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Skye Canyon is a 1,700-acre master-planned community in northwest Las Vegas that represents one of the city's most thoughtfully designed residential developments. The community is designed for active lifestyles with extensive amenities including parks, trails, recreation centers, and top-rated schools. Skye Canyon combines the natural beauty of the surrounding desert landscape with modern community planning.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Top-Rated Schools in Zip Code 89166
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Families choosing Arroyo at Skyeview benefit from strong schools in the Clark County School District. Roger Bryan Elementary School is rated 9/10 and serves the Skye Canyon area in zip code 89166. Sig Rogich Middle School and Shadow Ridge High School provide quality education for older students in northwest Las Vegas, Nevada. The proximity to these schools in zip code 89166 makes Skye Canyon a strong choice for families prioritizing education in northwest Las Vegas.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Local Shopping and Dining
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Skye Canyon residents in northwest Las Vegas, Nevada (zip code 89166) have convenient access to shopping and dining. The Skye Canyon Marketplace offers grocery stores including Smith's Food and Drug, restaurants, and retail services. Durango Square (approximately 10 minutes south) provides additional shopping options, and the area is 20-25 minutes from the Las Vegas Strip for more extensive dining and entertainment. The community is also close to Summerlin (15-20 minutes southeast), which offers upscale shopping and dining experiences including Downtown Summerlin.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Outdoor Recreation and Natural Beauty
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Skye Canyon in northwest Las Vegas, Nevada (zip code 89166) offers convenient access to outdoor recreation. Red Rock Canyon National Conservation Area is 15 minutes west via US-95, offering hiking, rock climbing, and scenic drives. Mount Charleston is 30 minutes northwest, providing skiing in winter and hiking in summer. Lake Mead National Recreation Area is 45 minutes southeast for water recreation. Within Skye Canyon itself, residents enjoy extensive trail systems connecting throughout the 1,700-acre community, multiple parks including Skye Canyon Park, and recreational facilities.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Commute and Location Benefits
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Skye Canyon in northwest Las Vegas, Nevada (zip code 89166) offers convenient commute times throughout the Las Vegas valley. Downtown Las Vegas is approximately 20-25 minutes southeast via US-95, the Las Vegas Strip is 20-25 minutes southeast, and Harry Reid International Airport is about 25-30 minutes southeast. The northwest location near US-95 and the 215 Beltway provides easy access to major employment centers including Summerlin (15-20 minutes southeast), Downtown Las Vegas, and the Strip corridor, while maintaining a peaceful residential atmosphere in northwest Las Vegas.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Property Taxes and Cost of Living
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Las Vegas, and specifically zip code 89166, offers attractive property tax rates. Nevada's average property tax rate is approximately 0.60-0.70% of assessed value, significantly lower than many states. Combined with no state income tax, Las Vegas provides an attractive cost of living. For a $400,000 home at Arroyo at Skyeview, annual property taxes would be approximately $2,400-$2,800.
        </p>
      </section>

      {/* Section 4: Why Choose New Construction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Why Choose New Construction in Las Vegas?
        </h2>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Modern Features and Energy Efficiency
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          New construction homes at Arroyo at Skyeview feature the latest in home design and energy efficiency. Modern HVAC systems, energy-efficient windows, proper insulation, and ENERGY STAR-rated appliances help reduce utility costs in Las Vegas's hot desert climate. These features are designed specifically for the Las Vegas environment, helping you save money on utilities while maintaining comfort.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Builder Warranties and Peace of Mind
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          New construction comes with comprehensive builder warranties covering structural defects (typically 10 years), major systems (2-5 years), and workmanship (1 year). This warranty protection provides peace of mind that you won't face unexpected repair costs. Combined with Dr. Jan Duffy's building standards inspection at closing, you can be confident your home is built to the highest standards.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Current Builder Incentives
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          With 2x the normal new home inventory in Las Vegas, builders are offering aggressive incentives including mortgage rate buy-downs, closing cost assistance, price reductions, and upgrade packages. These incentives can significantly reduce your monthly payment and upfront costs. Dr. Jan Duffy has insider knowledge of current builder incentives at Arroyo at Skyeview Homes and can help you maximize your savings.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          No Bidding Wars or Competition
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Unlike the resale market where bidding wars and cash offers are common, new construction offers more availability and less competition. You can choose from available homes or select a lot for new construction, giving you more options and less stress. With current high inventory levels, you have time to make informed decisions without the pressure of competing offers.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">
          Customization Opportunities
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          When purchasing pre-construction, you may have the opportunity to customize finishes, flooring, cabinetry, and design elements through the builder's design center. This allows you to create a home that truly matches your style and preferences. Even if you purchase a move-in ready home, you can often make selections on finishes and upgrades.
        </p>
      </section>

      {/* Q&A Section */}
      <PageQASection questions={homepageQuestions} title="Arroyo at Skyeview: Frequently Asked Questions" />
    </div>
  )
}


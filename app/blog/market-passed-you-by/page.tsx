import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import PageSchemas from '../../components/page-schemas'

export const metadata: Metadata = {
  title: 'Market Passed You By? Think Again | 2025 Update',
  description: 'With more homes to choose from, prices leveling off, and mortgage rates easing, today\'s market is offering something you haven\'t had in a while: options.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/blog/market-passed-you-by',
  },
}

export default function MarketPassedYouByPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="blog"
        url="/blog/market-passed-you-by"
        title="Thought the Market Passed You By? Think Again. | Arroyo at Skyeview Homes"
        description="With more homes to choose from, prices leveling off, and mortgage rates easing, today's market is offering something you haven't had in a while: options."
        breadcrumbs={[
          { name: 'Blog', url: '/' },
          { name: 'Market Passed You By', url: '/blog/market-passed-you-by' },
        ]}
        author="Dr. Jan Duffy"
        datePublished="2024-01-12"
        dateModified={new Date().toISOString().split('T')[0]}
        questions={[
          {
            question: 'Is now a good time to buy a home?',
            answer: 'Yes, with more homes to choose from, prices leveling off, and mortgage rates easing, today\'s market is offering options that buyers haven\'t had in a while.',
          },
          {
            question: 'What are current market conditions for buyers?',
            answer: 'Buyers are in a better position now than they\'ve been in quite a long time, with more inventory, better affordability, and more negotiating power.',
          },
        ]}
      />
      <PurpleSaleBanner />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <DrJanCTABanner />
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thought the Market Passed You By? Think Again.
            </h1>
            <p className="text-xl text-gray-600">
              Published: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              If you stepped back from your home search over the past few years, you're not alone – and you're definitely not out of options. In fact, <strong>now might be the ideal time to take another look.</strong> With more homes to choose from, prices leveling off in many areas, and mortgage rates easing, today's market is offering something you haven't had in a while: <strong>options</strong>.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900">
                Experts agree, buyers are in a better spot right now than they've been in quite a long time. Here's what they have to say.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Affordability Is Finally Improving
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              <strong>Lisa Sturtevant, Chief Economist at Bright MLS</strong>, says affordability is finally starting to turn the corner:
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-lg italic">
              <p className="text-lg text-gray-800">
                "Slower price growth coupled with a slight drop in mortgage rates will improve affordability and create a window for some buyers to get into the market."
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Mortgage rates have eased from their recent highs, price growth has slowed, and that one-two combo is making homes more affordable than they've been in months.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              There Are More Homes on The Market
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              And a big reason prices are easing is because <strong>there are more homes on the market</strong>. According to the latest from Realtor.com, there are <strong>17% more homes for sale today</strong> than there were at this time last year. That means more options, less competition with other buyers, and a chance to find the space that actually works for you.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              <strong>Lawrence Yun, Chief Economist at the National Association of Realtors (NAR)</strong>, shares:
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-lg italic">
              <p className="text-lg text-gray-800">
                "Homebuyers are in the best position in more than five years to find the right home and negotiate for a better price. Current inventory is at its highest since May 2020, during the COVID lockdown."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Inventory Growth by Region</h3>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <p className="text-sm">Inventory is up in every region compared to last year</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              As Yun notes, inventory is up everywhere. Compared to this time last year, <strong>every region of the country has more homes on the market</strong> than at this time last year.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              That translates to more homes to choose from, whether you're looking for a bigger backyard, a shorter commute, or finally ditching your rental.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
              But not all markets are the same…
            </h3>

            <p className="text-lg text-gray-700 mb-6">
              When you compare current inventory growth to pre-pandemic norms (2017–2019), the picture changes a bit, depending on where you are:
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-100 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Fully Recovered</h4>
                  <p className="text-sm text-gray-700">South and West regions have inventory above pre-pandemic levels</p>
                </div>
                <div className="bg-yellow-100 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Still Recovering</h4>
                  <p className="text-sm text-gray-700">Northeast and Midwest inventory is below pre-pandemic levels but improving</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              The green bars show where inventory has fully recovered (and even grown above pre-pandemic levels) in the South and the West. Supply, however, is still tighter in the Northeast and Midwest, as shown in the red bars, where inventory is still below normal.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">And here's why that's still a win everywhere.</h3>
              <p className="text-lg text-gray-800">
                When you step back and look at the bigger picture, with inventory up in every region, that means more choices everywhere, even if some areas have more homes for sale than others.
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              And with <strong>fewer buyers in the market and more homes for sale</strong>, sellers are willing to negotiate to get a deal done.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              All of that adds up to a win for today's buyers.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900">
                And it's also why working with a local expert really makes a difference. What's happening in your zip code or neighborhood might look different than the national or regional trend. But the overall takeaway is clear: <strong>with more homes on the market, buyers have more leverage than they did a year or more ago.</strong>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              This Could Be Your Moment
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              So, if you stepped away from your search because things felt too competitive, too pricey, you were worried about finding a home, or it was all just too much to process, <strong>this could be your moment to take another look.</strong>
            </p>

            <p className="text-lg text-gray-700 mb-6">
              And if you're not quite ready to go all in, that's okay too. You can start by planning ahead. That means working with a trusted agent who can help you break down your budget, narrow your search, and make sure you're prepped and ready when the right home hits the market.
            </p>

            <div className="bg-blue-600 text-white rounded-lg p-8 mt-12 mb-8">
              <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
              <p className="text-lg mb-6">
                Want to know what's happening in our area? Let's have a conversation so you can get a custom overview of what's available right now and learn how to be ready when the timing is right for you.
              </p>
              <div className="bg-white/10 rounded-lg p-4 mt-6">
                <p className="text-lg font-semibold mb-2">Because this isn't 2021.</p>
                <p className="text-lg font-semibold mb-2">This isn't even 2023 or 2024.</p>
                <p className="text-xl font-bold">This is a new market – and you might be surprised by what you find.</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition text-center"
                >
                  Contact Us
                </a>
                <a
                  href="/"
                  className="bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition text-center"
                >
                  View Available Homes
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}


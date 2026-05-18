import type { Metadata } from 'next'
import PurpleSaleBanner from '../../components/purple-sale-banner'
import Header from '../../components/header'
import Footer from '../../components/footer'
import DrJanCTABanner from '../../components/dr-jan-cta-banner'
import PageSchemas from '../../components/page-schemas'

export const metadata: Metadata = {
  title: 'How To Make Sure Your Sale Crosses Finish Line',
  description: 'Learn how pre-listing inspections can help prevent buyers from backing out. Get expert advice on avoiding common deal breakers and ensuring a smooth home sale.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/blog/sale-crosses-finish-line',
  },
  openGraph: {
    title: 'How To Make Sure Your Sale Crosses Finish Line',
    description: 'Learn how pre-listing inspections can help prevent buyers from backing out. Get expert advice on avoiding common deal breakers and ensuring a smooth home sale.',
    url: 'https://www.arroyoskyeview.com/blog/sale-crosses-finish-line',
    type: 'article',
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

export default function SaleCrossesFinishLinePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchemas
        pageType="blog"
        url="/blog/sale-crosses-finish-line"
        title="How To Make Sure Your Sale Crosses the Finish Line | Arroyo at Skyeview Homes"
        description="Learn how pre-listing inspections can help prevent buyers from backing out. Get expert advice on avoiding common deal breakers and ensuring a smooth home sale."
        breadcrumbs={[
          { name: 'Blog', url: '/' },
          { name: 'Sale Crosses Finish Line', url: '/blog/sale-crosses-finish-line' },
        ]}
        author="Dr. Jan Duffy"
        datePublished="2024-01-13"
        dateModified={new Date().toISOString().split('T')[0]}
        questions={[
          {
            question: 'How can I prevent buyers from backing out of a sale?',
            answer: 'Pre-listing inspections can help identify and fix issues before listing, preventing buyers from discovering problems during their inspection and backing out.',
          },
          {
            question: 'What is a pre-listing inspection?',
            answer: 'A pre-listing inspection is a home inspection done before listing your home for sale. It identifies issues that could cause problems during the sale process, allowing you to fix them proactively.',
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
              How To Make Sure Your Sale Crosses the Finish Line
            </h1>
            <p className="text-xl text-gray-600">
              Published: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              If there was one simple step that could help make your home sale a seamless process, wouldn't you want to know about it?
            </p>

            <p className="text-lg text-gray-700 mb-8">
              There's a lot that happens from the time your house goes under contract to closing day. And a few things still have to go right for the deal to go through. But here's what a lot of sellers may not know.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900">
                There's one part of the process where some homeowners are hitting a road bump that's causing buyers to back out these days. But don't worry. The majority of these snags are completely avoidable, especially when you understand what's causing them and how to be proactive.
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              That's where a great agent (and a little prep) can make all the difference.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What's Causing Some Buyers To Back Out
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              The latest data from Redfin says <strong>15% of pending home sales are falling through</strong>. And that's not wildly higher than the 12% norm from 2017-2019. But it is an increase.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              That means roughly <strong>1 in 7 deals today don't make it to the closing table</strong>. But, at the same time, <strong>6 out of 7 do</strong>. So, the majority of sellers never face this problem – and odds are, you won't either. But you can help make it even less likely if you know how to get ahead.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              You might assume the main reason buyers are backing out today is financing. But that's actually not the case. <strong>The most common deal breaker today, by far, is inspection and repair issues</strong> (see graph below):
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Common Deal Breakers</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Inspection & Repair Issues</span>
                    <span className="text-2xl font-bold text-red-600">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-600 h-3 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Financing Issues</span>
                    <span className="text-2xl font-bold text-yellow-600">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-yellow-600 h-3 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Other Reasons</span>
                    <span className="text-2xl font-bold text-blue-600">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Here's why that's a sticking point for buyers right now:
            </p>

            <ul className="space-y-4 mb-8 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold mt-1">•</span>
                <span><strong>Buyers are already stretched thin</strong> from high prices and challenging mortgage rates, so they don't have the appetite (or budget) for unexpected repairs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold mt-1">•</span>
                <span>If they're going to spend all that money, <strong>they want to get something that's move-in ready</strong>. They don't want to take on another high-cost project themselves.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold mt-1">•</span>
                <span><strong>They have more homes to choose from</strong>, so if yours seems like a hassle or if you're not willing to fix something, they can just move on.</span>
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900">
                The sellers with the best agents have heard about this shift and they're doing what they can to go in prepared. Enter the pre-listing inspection.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What's a Pre-Listing Inspection?
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              It's exactly what it sounds like. It's a <strong>professional home inspection you schedule before your home hits the market</strong>. And while it's not required, the <strong>National Association of Realtors (NAR)</strong> explains why it could be a valuable step for some sellers right now:
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-lg italic">
              <p className="text-lg text-gray-800">
                "To keep deals from unraveling . . . it allows a seller the opportunity to address any repairs before the For Sale sign even goes up. It also can help avoid surprises like a costly plumbing problem, a failing roof or an outdated electrical panel that could cause financially stretched buyers to bolt before closing."
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Think of it as a way to avoid future headaches. You'll know what issues could pop up during the buyer's inspection – and you'll have time to fix them or decide what to disclose before you put your house on the market.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900">
                This way, when the buyer's inspector walks in, you're ready. No surprises. No last-minute panic. No deal on the line.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Is It Worth It?
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Generally speaking, a pre-listing inspection costs just a few hundred dollars. So, it's not a big expense. And the information it gives you is invaluable. But before you make that investment, <strong>talk to your local agent</strong>.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              In some markets, it may not be worth it. And in others, it may be the best move you can make. It all depends on what's happening where you are and what's working for other local sellers. If your agent recommends getting one, they'll also:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Help you decide which issues to fix</h3>
                    <p className="text-gray-700">Prioritize what matters most to buyers in your market</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Prioritize repairs based on what buyers in your area are focusing on</h3>
                    <p className="text-gray-700">Know what buyers care about most in your local market</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Connect you with trusted professionals to get the work done</h3>
                    <p className="text-gray-700">Access to reliable contractors and repair services</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ensure you understand local disclosure laws</h3>
                    <p className="text-gray-700">Stay compliant with local real estate regulations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900">
                That small step could save your deal (and your timeline).
              </p>
            </div>

            <div className="bg-blue-600 text-white rounded-lg p-8 mt-12 mb-8">
              <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
              <p className="text-lg mb-6">
                So, if there was one simple step that could help make your home sale go according to plan, would you do it?
              </p>
              <p className="text-lg mb-6">
                If you'd rather deal with surprises on your terms (not with the clock ticking under contract), let's talk about whether a pre-listing inspection makes sense for your house.
              </p>
              <p className="text-xl font-bold">
                It may be worth it so you can hit the market confident, prepared, and in control.
              </p>
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


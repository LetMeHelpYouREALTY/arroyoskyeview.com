'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE_CONTACT } from '@/lib/site-contact'
import { trackPhoneClick, trackSmsClick } from './analytics-tracker'
import RealScoutOfficeWidget from './realscout-office-widget'

type FooterProps = {
  /** Reserved for backwards compatibility. */
  suppressRealScout?: boolean
}

const FOOTER_REALSCOUT_FALLBACK_PATHS = new Set([
  '/legal',
  '/privacy-policy',
  '/terms-of-use',
  '/accessibility',
])

export default function Footer({ suppressRealScout = false }: FooterProps) {
  const pathname = usePathname()
  const showFooterRealScout =
    !suppressRealScout &&
    pathname != null &&
    FOOTER_REALSCOUT_FALLBACK_PATHS.has(pathname)
  const communities = [
    { name: 'Arroyo at Skyeview', href: '/', title: 'Arroyo at Skyeview New Construction Townhomes Las Vegas' },
    { name: 'Sierra at Skyeview', href: '/sierra-at-skyeview', title: 'Sierra at Skyeview Las Vegas New Homes' },
    { name: 'Terra at Skyeview', href: '/terra-at-skyeview', title: 'Terra at Skyeview Las Vegas New Construction' },
    { name: 'Ironwood', href: '/ironwood', title: 'Ironwood Las Vegas New Homes' },
    { name: 'Homestead West', href: '/homestead-west', title: 'Homestead West Las Vegas New Construction' },
    { name: 'Eaglepointe at Skye Canyon', href: '/eaglepointe-skye-canyon', title: 'Eaglepointe at Skye Canyon Las Vegas' },
  ]

  const neighborhoods = [
    { name: 'Skye Canyon', href: '/areas/zip-89166', title: 'Skye Canyon Las Vegas Neighborhood' },
    { name: 'Zip Code 89128', href: '/areas/zip-89128', title: 'New Construction Homes Zip Code 89128 Summerlin Area Las Vegas' },
    { name: 'Zip Code 89135', href: '/areas/zip-89135', title: 'New Construction Homes Zip Code 89135 Las Vegas' },
    { name: 'Zip Code 89144', href: '/areas/zip-89144', title: 'New Construction Homes Zip Code 89144 Las Vegas' },
    { name: 'Zip Code 89117', href: '/areas/zip-89117', title: 'New Construction Homes Zip Code 89117 Las Vegas' },
    { name: 'Summerlin', href: '/neighborhoods/summerlin-las-vegas', title: 'Summerlin Las Vegas New Homes' },
    { name: 'Henderson', href: '/neighborhoods/henderson-las-vegas', title: 'Henderson Las Vegas New Construction' },
    { name: 'North Las Vegas', href: '/neighborhoods/north-las-vegas', title: 'North Las Vegas New Construction Homes' },
    { name: 'Centennial Hills', href: '/neighborhoods/centennial-hills', title: 'Centennial Hills Las Vegas New Construction' },
    { name: 'Southwest Las Vegas', href: '/neighborhoods/southwest-las-vegas', title: 'Southwest Las Vegas New Construction Homes' },
    { name: 'Las Vegas Metro', href: '/find-your-new-home/nevada/las-vegas-metro', title: 'Las Vegas Metro New Homes' },
  ]

  const propertyTypes = [
    { name: 'Townhomes', href: '/homes/townhomes-las-vegas', title: 'Las Vegas Townhomes for Sale' },
    { name: 'Single Family Homes', href: '/homes/single-family-las-vegas', title: 'Las Vegas Single Family Homes' },
    { name: 'Homes Under $300k', href: '/homes/under-300k', title: 'Affordable Las Vegas Homes Under $300k' },
    { name: 'Homes Under $400k', href: '/homes/under-400k', title: 'Affordable Las Vegas Homes Under $400k' },
    { name: 'Homes $400k-$500k', href: '/homes/400k-500k', title: 'Las Vegas Homes $400k to $500k' },
    { name: 'Homes $500k+', href: '/homes/500k-plus', title: 'Luxury Las Vegas Homes $500k Plus' },
  ]

  const buyerResources = [
    { name: 'First-Time Homebuyer Guide', href: '/buyers/first-time-homebuyer', title: 'First Time Homebuyer Guide Las Vegas' },
    { name: 'Moving to Las Vegas', href: '/buyers/moving-to-las-vegas', title: 'Moving to Las Vegas Complete Guide 2025' },
    { name: 'Buyer Representation', href: '/services/buyer-representation', title: 'Buyer Representation vs Builders Agent Las Vegas' },
    { name: 'Financing New Construction', href: '/buyers/financing-new-construction', title: 'Financing New Construction Homes Las Vegas' },
    { name: 'New Construction Inspections', href: '/services/construction-monitoring', title: 'New Construction Home Inspections Guide Las Vegas' },
    { name: 'Closing Process Guide', href: '/homebuying-process', title: 'Closing Process Guide for New Construction Homes Las Vegas' },
    { name: 'New Construction vs Resale', href: '/buyers/new-construction-vs-resale', title: 'New Construction vs Resale Homes Comparison Las Vegas' },
    { name: 'Builder Incentives Guide', href: '/buyers/builder-incentives-guide', title: 'New Construction Builder Incentives Las Vegas' },
    { name: 'Homebuying Process', href: '/homebuying-process', title: 'New Home Buying Process Las Vegas' },
    { name: 'Online Homebuying', href: '/homebuying-process', title: 'Buy New Home Online Las Vegas' },
  ]

  const resources = [
    { name: 'Resources', href: '/resources', title: 'Free Resources for New Construction Homebuyers' },
    { name: 'Testimonials', href: '/testimonials', title: 'Client Testimonials and Reviews Dr. Jan Duffy' },
    { name: 'FAQ', href: '/faq', title: 'Frequently Asked Questions New Construction Homes Las Vegas' },
    { name: 'Financing FAQ', href: '/buyers/financing-new-construction', title: 'New Construction Home Financing FAQ Las Vegas' },
    { name: 'Inspections FAQ', href: '/services/building-standards-inspection', title: 'New Construction Home Inspections FAQ Las Vegas' },
    { name: 'Las Vegas Neighborhood Q&A', href: '/faq/las-vegas-hyperlocal', title: 'Las Vegas Real Estate Questions Answers' },
  ]

  const blogPosts = [
    { name: 'New Home Inventory 2x Normal', href: '/blog/new-home-inventory-2x', title: 'New Home Inventory Las Vegas Market 2025' },
    { name: 'Housing Market Crash 2025?', href: '/blog/housing-market-crash-2025', title: 'Las Vegas Housing Market 2025 Forecast' },
    { name: 'Market Passed You By?', href: '/blog/market-passed-you-by', title: 'Las Vegas Real Estate Market Analysis' },
    { name: 'Buying Home with Student Loans', href: '/blog/buying-home-with-student-loans', title: 'Buying Home with Student Loans Las Vegas' },
    { name: 'Sale Crosses Finish Line', href: '/blog/sale-crosses-finish-line', title: 'Real Estate Closing Process Las Vegas' },
  ]

  return (
    <>
      {showFooterRealScout && <RealScoutOfficeWidget className="py-10" />}
      <footer
        className="border-t border-zinc-800 bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100"
        role="contentinfo"
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Work with Dr. Jan - Enhanced SEO Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <section aria-labelledby="dr-jan-heading">
              <h2 id="dr-jan-heading" className="text-xl font-bold mb-4 text-zinc-50">
                Work with Dr. Jan Duffy
              </h2>
              <div className="mb-6 space-y-3">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-50">New Construction Home Expert</strong> serving Las Vegas, Nevada & Skye Canyon
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Expert buyer representation on new construction homes in Las Vegas, Nevada. Dr. Jan Duffy represents YOU, not the builder. Construction monitoring, building standards inspection & insider knowledge of builder incentives and pricing.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-50">{SITE_CONTACT.licenseDisplay}</strong>
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONTACT.formattedAddress)}`}
                    className="hover:text-primary transition-colors"
                    rel="noopener noreferrer"
                  >
                    {SITE_CONTACT.formattedAddress}
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  href={`tel:${SITE_CONTACT.phoneTel}`}
                  onClick={() => trackPhoneClick(SITE_CONTACT.phoneAnalytics, 'footer_cta')}
                  className="inline-flex items-center space-x-2 bg-linear-to-r from-primary to-primary/90 text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:from-primary/90 hover:to-primary transition-all duration-200 shadow-lg hover:shadow-xl motion-safe:transform motion-safe:hover:scale-[1.02] min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                  aria-label={`Call Dr. Jan Duffy at ${SITE_CONTACT.phoneDisplay}`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call: {SITE_CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href={`sms:${SITE_CONTACT.phoneTel}`}
                  onClick={() => trackSmsClick('footer_cta')}
                  className="inline-flex items-center space-x-2 border border-zinc-600 bg-zinc-800/80 text-zinc-50 px-5 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-all duration-200 min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                  aria-label={`Text Dr. Jan Duffy at ${SITE_CONTACT.phoneDisplay}`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Text</span>
                </a>
              </div>
              <div className="mt-4">
                <Link
                  href="/work-with-dr-jan"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-sm"
                  title="Learn more about Dr. Jan Duffy new construction buyer representation in Las Vegas, Nevada"
                >
                  <span>Learn More About Dr. Jan</span>
                  <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="flex space-x-4 mt-6">
                <a 
                  href="https://www.linkedin.com/in/dr-jan-duffy" 
                  className="text-zinc-500 hover:text-primary transition-colors duration-200 hover:scale-110 transform" 
                  aria-label="Visit Dr. Jan Duffy on LinkedIn"
                  title="Dr. Jan Duffy LinkedIn"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/dr-jan-duffy" 
                  className="text-zinc-500 hover:text-primary transition-colors duration-200 hover:scale-110 transform" 
                  aria-label="Visit Dr. Jan Duffy on Facebook"
                  title="Dr. Jan Duffy Facebook"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/dr-jan-duffy" 
                  className="text-zinc-500 hover:text-primary transition-colors duration-200 hover:scale-110 transform" 
                  aria-label="Visit Dr. Jan Duffy on Instagram"
                  title="Dr. Jan Duffy Instagram"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </section>
          </div>

          {/* Communities - SEO Enhanced */}
          <nav className="col-span-1" aria-labelledby="communities-heading">
            <h3 id="communities-heading" className="text-lg font-bold mb-4 text-zinc-50 border-b border-zinc-800 pb-2">
              Arroyo at Skyeview Homes | Las Vegas, Nevada
            </h3>
            <ul className="space-y-3 text-sm">
              {communities.map((community) => (
                <li key={community.href}>
                  <Link 
                    href={community.href} 
                    className="text-zinc-400 hover:text-primary transition-colors duration-200 block py-1.5 hover:translate-x-1 transform group"
                    title={community.title}
                  >
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-200"></span>
                      {community.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Neighborhoods & Property Types - SEO Enhanced */}
          <nav className="col-span-1" aria-labelledby="locations-heading">
            <h3 id="locations-heading" className="text-lg font-bold mb-4 text-zinc-50 border-b border-zinc-800 pb-2">
              Las Vegas Neighborhoods
            </h3>
            <ul className="space-y-3 text-sm mb-6">
              {neighborhoods.map((neighborhood) => (
                <li key={neighborhood.href}>
                  <Link 
                    href={neighborhood.href} 
                    className="text-zinc-400 hover:text-primary transition-colors duration-200 block py-1.5 hover:translate-x-1 transform group"
                    title={neighborhood.title}
                  >
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-200"></span>
                      {neighborhood.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mb-4 text-zinc-50 border-b border-zinc-800 pb-2">
              Property Types
            </h3>
            <ul className="space-y-3 text-sm">
              {propertyTypes.map((type) => (
                <li key={type.href}>
                  <Link 
                    href={type.href} 
                    className="text-zinc-400 hover:text-primary transition-colors duration-200 block py-1.5 hover:translate-x-1 transform group"
                    title={type.title}
                  >
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-200"></span>
                      {type.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Buyers - SEO Enhanced */}
          <nav className="col-span-1" aria-labelledby="buyers-heading">
            <h3 id="buyers-heading" className="text-lg font-bold mb-4 text-zinc-50 border-b border-zinc-800 pb-2">
              Homebuyer Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {buyerResources.map((resource) => (
                <li key={resource.href}>
                  <Link 
                    href={resource.href} 
                    className="text-zinc-400 hover:text-primary transition-colors duration-200 block py-1.5 hover:translate-x-1 transform group"
                    title={resource.title}
                  >
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-200"></span>
                      {resource.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources & Blog - SEO Enhanced */}
          <nav className="col-span-1" aria-labelledby="resources-heading">
            <h3 id="resources-heading" className="text-lg font-bold mb-4 text-zinc-50 border-b border-zinc-800 pb-2">
              Resources
            </h3>
            <ul className="space-y-3 text-sm mb-6">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link 
                    href={resource.href} 
                    className="text-zinc-400 hover:text-primary transition-colors duration-200 block py-1.5 hover:translate-x-1 transform group"
                    title={resource.title}
                  >
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-200"></span>
                      {resource.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mb-4 text-zinc-50 border-b border-zinc-800 pb-2">
              Real Estate Blog
            </h3>
            <ul className="space-y-3 text-sm">
              {blogPosts.map((post) => (
                <li key={post.href}>
                  <Link 
                    href={post.href} 
                    className="text-zinc-400 hover:text-primary transition-colors duration-200 block py-1.5 hover:translate-x-1 transform group"
                    title={post.title}
                  >
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-200"></span>
                      {post.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Footer - Enhanced SEO */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-zinc-400 space-y-2">
              <p className="font-semibold text-zinc-50">
                © 2025 Arroyo at Skyeview | Homes by Dr. Jan Duffy
              </p>
              <p className="text-xs text-zinc-500">
                Dr. Jan Duffy, Nevada Real Estate License #S.0197614
              </p>
              <p className="text-xs text-zinc-500">
                All Rights Reserved. Equal Housing Opportunity Provider.
              </p>
            </div>
            <nav className="flex flex-wrap gap-6 text-sm" aria-label="Footer legal links">
              <Link 
                href="/legal" 
                className="text-zinc-500 hover:text-primary transition-colors duration-200"
                title="Legal Information"
              >
                Legal
              </Link>
              <Link 
                href="/privacy-policy" 
                className="text-zinc-500 hover:text-primary transition-colors duration-200"
                title="Privacy Policy"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-use" 
                className="text-zinc-500 hover:text-primary transition-colors duration-200"
                title="Terms of Use"
              >
                Terms Of Use
              </Link>
              <Link 
                href="/accessibility" 
                className="text-zinc-500 hover:text-primary transition-colors duration-200"
                title="Accessibility Statement"
              >
                Accessibility Statement
              </Link>
            </nav>
          </div>
          <div className="mt-6 pt-6 border-t border-zinc-800">
            <p className="text-xs text-zinc-500 text-center leading-relaxed">
              Equal Housing Opportunity | Arroyo at Skyview | Homes by Dr. Duffy. Licensed agent (License #S.0197614.LLC), Berkshire Hathaway HomeServices Nevada. Subject to change. (702) 903-4687
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

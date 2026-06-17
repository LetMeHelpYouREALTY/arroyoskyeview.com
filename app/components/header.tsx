'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './logo'
import { trackPhoneClick, trackSmsClick } from './analytics-tracker'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const communities = [
    { name: 'Arroyo at Skyeview', href: '/' },
    { name: 'Sierra at Skyeview', href: '/sierra-at-skyeview' },
    { name: 'Terra at Skyeview', href: '/terra-at-skyeview' },
    { name: 'Ironwood', href: '/ironwood' },
    { name: 'Homestead West', href: '/homestead-west' },
    { name: 'Eaglepointe at Skye Canyon', href: '/eaglepointe-skye-canyon' },
  ]

  const neighborhoods = [
    { name: 'Skye Canyon', href: '/areas/zip-89166' },
    { name: 'Summerlin', href: '/neighborhoods/summerlin-las-vegas' },
    { name: 'Henderson', href: '/neighborhoods/henderson-las-vegas' },
    { name: 'Las Vegas Metro', href: '/find-your-new-home/nevada/las-vegas-metro' },
  ]

  const propertyTypes = [
    { name: 'Townhomes', href: '/homes/townhomes-las-vegas' },
    { name: 'Single Family Homes', href: '/homes/single-family-las-vegas' },
    { name: 'Homes Under $400k', href: '/homes/under-400k' },
  ]

  const buyerResources = [
    { name: 'First-Time Homebuyer Guide', href: '/buyers/first-time-homebuyer' },
    { name: 'Builder Incentives Guide', href: '/buyers/builder-incentives-guide' },
    { name: 'Homebuying Process', href: '/homebuying-process' },
    { name: 'Online Homebuying', href: '/homebuying-process' },
  ]

  const blogPosts = [
    { name: 'New Home Inventory 2x Normal', href: '/blog/new-home-inventory-2x' },
    { name: 'Housing Market Crash 2025?', href: '/blog/housing-market-crash-2025' },
    { name: 'Market Passed You By?', href: '/blog/market-passed-you-by' },
    { name: 'Buying Home with Student Loans', href: '/blog/buying-home-with-student-loans' },
    { name: 'Sale Crosses Finish Line', href: '/blog/sale-crosses-finish-line' },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-luxury-champagne/20 bg-luxury-navy/95 text-luxury-ivory shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-luxury-navy/90">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {/* Home Link */}
            <Link 
              href="/" 
              className="text-luxury-ivory hover:text-luxury-champagne px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-luxury-champagne/10 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              title="Home - Arroyo at Skyeview New Construction Homes"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>

            {/* Communities Dropdown (with Neighborhoods) */}
            <div className="relative group">
              <button
                className="text-luxury-ivory hover:text-luxury-champagne px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-luxury-champagne/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onMouseEnter={() => setActiveDropdown('communities')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Communities
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'communities' && (
                <>
                  {/* Invisible bridge to prevent dropdown from closing when moving mouse */}
                  <div 
                    className="absolute left-0 top-full w-full h-2"
                    onMouseEnter={() => setActiveDropdown('communities')}
                  />
                  <div
                    className="absolute left-0 mt-0 w-80 rounded-xl border border-border bg-luxury-navy text-luxury-ivory shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setActiveDropdown('communities')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                  <div className="py-2">
                    <div className="px-4 py-2.5 text-xs font-bold text-luxury-champagne uppercase tracking-wider bg-luxury-champagne/10 border-b border-luxury-champagne/20">
                      Communities
                    </div>
                    {communities.map((community) => (
                      <Link
                        key={community.href}
                        href={community.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                        title={`${community.name} - New Construction Homes | Buyer's Agent Representation`}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                          {community.name}
                        </span>
                      </Link>
                    ))}
                    <div className="border-t border-border my-2"></div>
                    <div className="px-4 py-2.5 text-xs font-bold text-luxury-champagne uppercase tracking-wider bg-accent">
                      Neighborhoods
                    </div>
                    {neighborhoods.map((neighborhood) => (
                      <Link
                        key={neighborhood.href}
                        href={neighborhood.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                        title={`New Homes in ${neighborhood.name} | Buyer's Agent Representation`}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                          {neighborhood.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  </div>
                </>
              )}
            </div>


            {/* Property Types Dropdown */}
            <div className="relative group">
              <button
                className="text-luxury-ivory hover:text-luxury-champagne px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-luxury-champagne/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onMouseEnter={() => setActiveDropdown('propertyTypes')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Property Types
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'propertyTypes' && (
                <>
                  {/* Invisible bridge to prevent dropdown from closing when moving mouse */}
                  <div 
                    className="absolute left-0 top-full w-full h-2"
                    onMouseEnter={() => setActiveDropdown('propertyTypes')}
                  />
                  <div
                    className="absolute left-0 mt-0 w-64 rounded-xl border border-border bg-luxury-navy text-luxury-ivory shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setActiveDropdown('propertyTypes')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                  <div className="py-2">
                    {propertyTypes.map((type) => (
                      <Link
                        key={type.href}
                        href={type.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                        title={`${type.name} in Las Vegas | Buyer's Agent Representation`}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                          {type.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  </div>
                </>
              )}
            </div>

            {/* Buyers Dropdown */}
            <div className="relative group">
              <button
                className="text-luxury-ivory hover:text-luxury-champagne px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-luxury-champagne/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onMouseEnter={() => setActiveDropdown('buyers')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Buyers
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'buyers' && (
                <>
                  {/* Invisible bridge to prevent dropdown from closing when moving mouse */}
                  <div 
                    className="absolute left-0 top-full w-full h-2"
                    onMouseEnter={() => setActiveDropdown('buyers')}
                  />
                  <div
                    className="absolute left-0 mt-0 w-72 rounded-xl border border-border bg-luxury-navy text-luxury-ivory shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setActiveDropdown('buyers')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                  <div className="py-2">
                    {buyerResources.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                        title={`${resource.name} - Las Vegas Homebuyer Resources`}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                          {resource.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  </div>
                </>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="text-luxury-ivory hover:text-luxury-champagne px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-luxury-champagne/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Resources
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'resources' && (
                <>
                  {/* Invisible bridge to prevent dropdown from closing when moving mouse */}
                  <div 
                    className="absolute left-0 top-full w-full h-2"
                    onMouseEnter={() => setActiveDropdown('resources')}
                  />
                  <div
                    className="absolute left-0 mt-0 w-72 rounded-xl border border-border bg-luxury-navy text-luxury-ivory shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setActiveDropdown('resources')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                  <div className="py-2">
                    <Link
                      href="/faq"
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                      title="Frequently Asked Questions About New Construction Homes"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        FAQ
                      </span>
                    </Link>
                    <Link
                      href="/faq/las-vegas-hyperlocal"
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                      title="Las Vegas Neighborhood Questions & Answers - Neighborhoods, Schools, Lifestyle"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        Las Vegas Neighborhood Q&A
                      </span>
                    </Link>
                    <div className="border-t border-border my-2"></div>
                    <div className="px-4 py-2.5 text-xs font-bold text-luxury-champagne uppercase tracking-wider bg-accent">Blog</div>
                    {blogPosts.map((post) => (
                      <Link
                        key={post.href}
                        href={post.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                        title={`${post.name} - Real Estate Blog Article`}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                          {post.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  </div>
                </>
              )}
            </div>

            {/* Contact Dropdown */}
            <div className="relative group">
              <button
                className="text-luxury-ivory hover:text-luxury-champagne px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-luxury-champagne/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onMouseEnter={() => setActiveDropdown('contact')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Contact
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'contact' && (
                <>
                  {/* Invisible bridge to prevent dropdown from closing when moving mouse */}
                  <div 
                    className="absolute right-0 top-full w-full h-2"
                    onMouseEnter={() => setActiveDropdown('contact')}
                  />
                  <div
                    className="absolute right-0 mt-0 w-64 rounded-xl border border-border bg-luxury-navy text-luxury-ivory shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setActiveDropdown('contact')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                  <div className="py-2">
                    <Link
                      href="/work-with-dr-jan"
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                      title="Work with Dr. Jan Duffy - Expert Buyer's Agent for Arroyo at Skyeview Homes | Represents Home Buyers, Not Builders"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        Work with Dr. Jan
                      </span>
                    </Link>
                    <Link
                      href="/contact-us"
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                      title="Contact Dr. Jan Duffy - Buyer's Agent for Arroyo at Skyeview Homes | (702) 903-4687"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        Contact Us
                      </span>
                    </Link>
                  </div>
                  </div>
                </>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                className="text-luxury-ivory hover:text-luxury-champagne px-4 py-2.5 text-sm font-medium flex items-center rounded-lg transition-all duration-200 hover:bg-luxury-champagne/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                About
                <svg className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'about' && (
                <>
                  {/* Invisible bridge to prevent dropdown from closing when moving mouse */}
                  <div 
                    className="absolute right-0 top-full w-full h-2"
                    onMouseEnter={() => setActiveDropdown('about')}
                  />
                  <div
                    className="absolute right-0 mt-0 w-64 rounded-xl border border-border bg-luxury-navy text-luxury-ivory shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setActiveDropdown('about')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                  <div className="py-2">
                    <Link
                      href="/about-us"
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                      title="About Dr. Jan Duffy - Buyer's Agent for Arroyo at Skyeview Homes | Represents Home Buyers"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        About Dr. Jan Duffy
                      </span>
                    </Link>
                    <Link
                      href="/find-your-new-home/nevada/las-vegas-metro"
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-luxury-champagne/10 hover:text-primary transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                      title="Find Your New Home in Las Vegas Metro - Browse Communities"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-luxury-champagne opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-150"></span>
                        Find Your Home
                      </span>
                    </Link>
                  </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-2 ml-4">
            <a
              href="tel:7029034687"
              onClick={() => trackPhoneClick('702-903-4687', 'header_desktop')}
              className="bg-gradient-to-r from-luxury-champagne to-luxury-champagne/90 text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:from-luxury-champagne/90 hover:to-luxury-champagne transition-all duration-200 shadow-lg hover:shadow-xl motion-safe:transform motion-safe:hover:scale-[1.02] flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Dr. Jan: (702) 903-4687</span>
            </a>
            <a
              href="sms:7029034687"
              onClick={() => trackSmsClick('header_desktop')}
              className="border border-luxury-champagne/40 bg-luxury-navy/80 text-luxury-ivory px-5 py-3 rounded-lg text-sm font-semibold hover:bg-luxury-champagne/10 transition-all duration-200 flex items-center space-x-2 min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Text</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="tel:7029034687"
              onClick={() => trackPhoneClick('702-903-4687', 'header_mobile')}
              className="bg-luxury-champagne text-luxury-navy px-4 py-2 rounded-lg text-sm font-semibold hover:bg-luxury-champagne/90 transition flex items-center space-x-1 min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xs">Call</span>
            </a>
            <a
              href="sms:7029034687"
              onClick={() => trackSmsClick('header_mobile')}
              className="border border-border bg-luxury-navy/80 text-luxury-ivory px-3 py-2 rounded-lg text-sm font-semibold hover:bg-luxury-champagne/10 transition flex items-center min-h-11 min-w-11 justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Text Dr. Jan at (702) 903-4687"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-luxury-ivory hover:text-luxury-champagne p-2 rounded-lg min-h-11 min-w-11 inline-flex items-center justify-center hover:bg-luxury-champagne/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-1 border-t border-border bg-background animate-in slide-in-from-top duration-200">
            <Link
              href="/"
              className="block px-4 py-3 text-luxury-ivory hover:text-luxury-champagne hover:bg-luxury-champagne/10 font-medium rounded-lg transition-colors duration-150 min-h-11"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-communities')}
                className="w-full flex items-center justify-between text-luxury-ivory hover:text-luxury-champagne hover:bg-luxury-champagne/10 font-medium rounded-lg px-2 py-2 min-h-11 transition-colors duration-150"
              >
                Communities & Neighborhoods
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-communities' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-communities' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="pt-2 pb-2 text-xs font-bold text-luxury-champagne uppercase tracking-wider">Communities</div>
                  {communities.map((community) => (
                    <Link
                      key={community.href}
                      href={community.href}
                      className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {community.name}
                    </Link>
                  ))}
                  <div className="pt-4 pb-2 text-xs font-bold text-luxury-champagne uppercase tracking-wider">Neighborhoods</div>
                  {neighborhoods.map((neighborhood) => (
                    <Link
                      key={neighborhood.href}
                      href={neighborhood.href}
                      className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {neighborhood.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-propertyTypes')}
                className="w-full flex items-center justify-between text-luxury-ivory hover:text-luxury-champagne hover:bg-luxury-champagne/10 font-medium rounded-lg px-2 py-2 min-h-11 transition-colors duration-150"
              >
                Property Types
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-propertyTypes' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-propertyTypes' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {propertyTypes.map((type) => (
                    <Link
                      key={type.href}
                      href={type.href}
                      className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-buyers')}
                className="w-full flex items-center justify-between text-luxury-ivory hover:text-luxury-champagne hover:bg-luxury-champagne/10 font-medium rounded-lg px-2 py-2 min-h-11 transition-colors duration-150"
              >
                Buyers
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-buyers' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-buyers' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {buyerResources.map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-resources')}
                className="w-full flex items-center justify-between text-luxury-ivory hover:text-luxury-champagne hover:bg-luxury-champagne/10 font-medium rounded-lg px-2 py-2 min-h-11 transition-colors duration-150"
              >
                Resources
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-resources' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/faq"
                    className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/faq/las-vegas-hyperlocal"
                    className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Las Vegas Neighborhood Q&A
                  </Link>
                  <div className="pt-3 pb-2 text-xs font-bold text-luxury-champagne uppercase tracking-wider">Blog</div>
                  {blogPosts.map((post) => (
                    <Link
                      key={post.href}
                      href={post.href}
                      className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {post.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-contact')}
                className="w-full flex items-center justify-between text-luxury-ivory hover:text-luxury-champagne hover:bg-luxury-champagne/10 font-medium rounded-lg px-2 py-2 min-h-11 transition-colors duration-150"
              >
                Contact
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-contact' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-contact' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/work-with-dr-jan"
                    className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Work with Dr. Jan
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('mobile-about')}
                className="w-full flex items-center justify-between text-luxury-ivory hover:text-luxury-champagne hover:bg-luxury-champagne/10 font-medium rounded-lg px-2 py-2 min-h-11 transition-colors duration-150"
              >
                About
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-about' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-about' && (
                <div className="pl-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/about-us"
                    className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Arroyo at Skyeview
                  </Link>
                  <Link
                    href="/find-your-new-home/nevada/las-vegas-metro"
                    className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-luxury-champagne/10 rounded-lg transition-colors duration-150 min-h-10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Find Your Home
                  </Link>
                </div>
              )}
            </div>
            <a
              href="tel:7029034687"
              onClick={() => {
                trackPhoneClick('702-903-4687', 'header_mobile_menu')
                setIsMenuOpen(false)
              }}
              className="block w-full mx-4 mt-4 bg-gradient-to-r from-luxury-champagne to-luxury-champagne/90 text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold text-center hover:from-luxury-champagne/90 hover:to-luxury-champagne transition-all duration-200 shadow-lg min-h-12 flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Dr. Jan: (702) 903-4687</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

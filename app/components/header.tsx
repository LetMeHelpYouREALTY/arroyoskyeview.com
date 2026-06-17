'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './logo'
import SiteBreadcrumbs from './site-breadcrumbs'
import HeaderMegaMenu from './header-mega-menu'
import HeaderDropdown from './header-dropdown'
import CalendlyScheduleButton from './calendly-schedule-button'
import { trackPhoneClick, trackSmsClick } from './analytics-tracker'
import {
  ABOUT_NAV,
  ARROYO_NAV,
  BUYERS_NAV,
  COMMUNITIES_NAV,
  CONTACT_LINK,
} from '@/lib/site-navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  const closeMenus = () => setOpenMenu(null)

  const toggleMobileSection = (id: string) => {
    setMobileSection(mobileSection === id ? null : id)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-luxury-champagne/20 bg-luxury-navy/95 text-luxury-ivory shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-luxury-navy/90">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            <HeaderMegaMenu
              menu={ARROYO_NAV}
              isOpen={openMenu === ARROYO_NAV.id}
              onOpen={() => setOpenMenu(ARROYO_NAV.id)}
              onClose={closeMenus}
            />
            <HeaderMegaMenu
              menu={COMMUNITIES_NAV}
              isOpen={openMenu === COMMUNITIES_NAV.id}
              onOpen={() => setOpenMenu(COMMUNITIES_NAV.id)}
              onClose={closeMenus}
            />
            <HeaderDropdown
              menu={BUYERS_NAV}
              isOpen={openMenu === BUYERS_NAV.id}
              onOpen={() => setOpenMenu(BUYERS_NAV.id)}
              onClose={closeMenus}
            />
            <HeaderDropdown
              menu={ABOUT_NAV}
              isOpen={openMenu === ABOUT_NAV.id}
              onOpen={() => setOpenMenu(ABOUT_NAV.id)}
              onClose={closeMenus}
              align="right"
            />
            <Link
              href={CONTACT_LINK.href}
              className="ml-2 rounded-lg border border-luxury-champagne/40 bg-luxury-champagne/10 px-4 py-2.5 text-sm font-semibold text-luxury-champagne transition-colors hover:bg-luxury-champagne/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {CONTACT_LINK.name}
            </Link>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <CalendlyScheduleButton
              text="Schedule"
              variant="champagne"
              className="px-4 py-2.5 text-sm"
            />
            <a
              href="tel:7029034687"
              onClick={() => trackPhoneClick('702-903-4687', 'header_desktop')}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-luxury-champagne px-4 py-2.5 text-sm font-semibold text-luxury-navy shadow-md transition hover:bg-luxury-champagne/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span className="hidden xl:inline">Call</span>
              <span>(702) 903-4687</span>
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:7029034687"
              onClick={() => trackPhoneClick('702-903-4687', 'header_mobile')}
              className="inline-flex min-h-11 items-center rounded-lg bg-luxury-champagne px-3 py-2 text-sm font-semibold text-luxury-navy"
            >
              Call
            </a>
            <a
              href="sms:7029034687"
              onClick={() => trackSmsClick('header_mobile')}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-luxury-champagne/30 text-luxury-ivory"
              aria-label="Text Dr. Jan"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-luxury-ivory hover:bg-luxury-champagne/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-nav-panel"
            className="border-t border-luxury-champagne/15 py-4 lg:hidden"
          >
            <div className="mb-4 px-2">
              <CalendlyScheduleButton text="Schedule time with me" variant="champagne" className="w-full" />
            </div>

            {[ARROYO_NAV, COMMUNITIES_NAV].map((mega) => (
              <div key={mega.id} className="px-2 py-1">
                <button
                  type="button"
                  className="flex min-h-11 w-full items-center justify-between rounded-lg px-2 py-2 font-medium text-luxury-ivory"
                  onClick={() => toggleMobileSection(mega.id)}
                  aria-expanded={mobileSection === mega.id}
                >
                  {mega.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${mobileSection === mega.id ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSection === mega.id ? (
                  <div className="space-y-3 pb-2 pl-4">
                    {mega.columns.map((col) => (
                      <div key={col.title}>
                        <p className="py-1 text-xs font-bold uppercase tracking-wider text-luxury-champagne">
                          {col.title}
                        </p>
                        {col.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block min-h-10 py-2 text-sm text-luxury-sand hover:text-luxury-champagne"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {[BUYERS_NAV, ABOUT_NAV].map((dropdown) => (
              <div key={dropdown.id} className="px-2 py-1">
                <button
                  type="button"
                  className="flex min-h-11 w-full items-center justify-between rounded-lg px-2 py-2 font-medium text-luxury-ivory"
                  onClick={() => toggleMobileSection(dropdown.id)}
                  aria-expanded={mobileSection === dropdown.id}
                >
                  {dropdown.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${mobileSection === dropdown.id ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSection === dropdown.id ? (
                  <div className="space-y-1 pb-2 pl-4">
                    {dropdown.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block min-h-10 py-2 text-sm text-luxury-sand hover:text-luxury-champagne"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            <div className="mt-2 space-y-1 px-2">
              <Link
                href={CONTACT_LINK.href}
                className="block min-h-11 rounded-lg bg-luxury-champagne/15 px-4 py-3 text-center font-semibold text-luxury-champagne"
                onClick={() => setIsMenuOpen(false)}
              >
                {CONTACT_LINK.name}
              </Link>
              <Link
                href="/"
                className="block min-h-11 rounded-lg px-4 py-3 text-center text-sm text-luxury-sand hover:text-luxury-ivory"
                onClick={() => setIsMenuOpen(false)}
              >
                Arroyo homepage
              </Link>
            </div>
          </div>
        ) : null}
      </nav>

      <SiteBreadcrumbs />
    </header>
  )
}

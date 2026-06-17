'use client'

import Link from 'next/link'
import type { NavMegaMenu } from '@/lib/site-navigation'

type HeaderMegaMenuProps = {
  menu: NavMegaMenu
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  align?: 'left' | 'right'
}

export default function HeaderMegaMenu({
  menu,
  isOpen,
  onOpen,
  onClose,
  align = 'left',
}: HeaderMegaMenuProps) {
  const panelAlign = align === 'right' ? 'right-0' : 'left-0'

  return (
    <div className="relative" onMouseLeave={onClose}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`nav-panel-${menu.id}`}
        className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-luxury-ivory transition-all duration-200 hover:bg-luxury-champagne/10 hover:text-luxury-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        onMouseEnter={onOpen}
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        {menu.label}
        <svg
          className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen ? (
        <>
          <div className="absolute left-0 top-full h-2 w-full" onMouseEnter={onOpen} aria-hidden />
          <div
            id={`nav-panel-${menu.id}`}
            role="region"
            aria-label={`${menu.label} menu`}
            className={`absolute ${panelAlign} z-50 mt-0 w-[min(100vw-2rem,42rem)] rounded-xl border border-luxury-champagne/20 bg-luxury-navy text-luxury-ivory shadow-2xl`}
            onMouseEnter={onOpen}
          >
            {menu.featured ? (
              <div className="border-b border-luxury-champagne/15 bg-luxury-champagne/5 px-5 py-4">
                <Link
                  href={menu.featured.href}
                  className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={onClose}
                >
                  <span className="font-serif text-lg text-luxury-ivory group-hover:text-luxury-champagne">
                    {menu.featured.name}
                  </span>
                  {menu.featured.description ? (
                    <span className="mt-1 block text-sm text-luxury-sand">{menu.featured.description}</span>
                  ) : null}
                </Link>
              </div>
            ) : null}
            <div className="grid gap-0 p-2 sm:grid-cols-2 lg:grid-cols-3">
              {menu.columns.map((column) => (
                <div key={column.title} className="px-3 py-3">
                  <p className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-luxury-champagne">
                    {column.title}
                  </p>
                  <ul className="space-y-0.5">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-lg px-2 py-2 text-sm text-luxury-ivory/90 transition-colors hover:bg-luxury-champagne/10 hover:text-luxury-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                          onClick={onClose}
                        >
                          <span className="font-medium">{link.name}</span>
                          {link.description ? (
                            <span className="mt-0.5 block text-xs text-luxury-sand">{link.description}</span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

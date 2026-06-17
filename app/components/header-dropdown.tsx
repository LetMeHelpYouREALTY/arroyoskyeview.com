'use client'

import Link from 'next/link'
import type { NavDropdown } from '@/lib/site-navigation'

type HeaderDropdownProps = {
  menu: NavDropdown
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  align?: 'left' | 'right'
}

export default function HeaderDropdown({
  menu,
  isOpen,
  onOpen,
  onClose,
  align = 'left',
}: HeaderDropdownProps) {
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
            className={`absolute ${panelAlign} z-50 mt-0 min-w-[16rem] rounded-xl border border-luxury-champagne/20 bg-luxury-navy py-2 shadow-2xl`}
            onMouseEnter={onOpen}
          >
            <ul>
              {menu.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-luxury-ivory/90 transition-colors hover:bg-luxury-champagne/10 hover:text-luxury-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  )
}

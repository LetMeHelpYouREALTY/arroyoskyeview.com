'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { getBreadcrumbsForPath } from '@/lib/breadcrumb-trail'
import { cn } from '@/lib/utils'

export default function SiteBreadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname()
  const items = getBreadcrumbsForPath(pathname)

  if (items.length === 0) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'border-b border-luxury-champagne/15 bg-luxury-navy/80 text-luxury-sand',
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-4 py-2.5 text-sm sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-medium text-luxury-ivory/90 transition-colors hover:text-luxury-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Home
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <span key={item.href} className="inline-flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-luxury-champagne/60" aria-hidden />
              {isLast ? (
                <span className="font-medium text-luxury-champagne" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-luxury-ivory/80 transition-colors hover:text-luxury-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {item.name}
                </Link>
              )}
            </span>
          )
        })}
      </div>
    </nav>
  )
}

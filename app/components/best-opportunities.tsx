'use client'

import Link from 'next/link'
import SiteImage from './site-image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const opportunities = [
  {
    id: '1',
    community: 'Arroyo at Skyeview',
    location: 'Skye Canyon',
    price: 392640,
    incentives: '$5,000 toward closing costs',
    features: ['US-95 and 215 Beltway access', 'Red Rock hiking access', 'Resort-style amenities'],
    image: '/images/homes/homes-1.jpg',
    phone: '(702) 903-4687',
    href: '/',
  },
  {
    id: '2',
    community: 'Sierra at Skyeview',
    location: 'Skye Canyon',
    price: 392640,
    incentives: 'Competitive financing rates',
    features: ['Master-planned community', 'NW Las Vegas', 'Quick move-in available'],
    image: '/images/homes/homes-3.jpg',
    phone: '(702) 903-4687',
    href: '/sierra-at-skyeview',
  },
  {
    id: '3',
    community: 'Terra at Skyeview',
    location: 'Skye Canyon',
    price: 392640,
    incentives: 'Special incentives available',
    features: ['Skye Canyon location', 'New construction', 'Move-in ready homes'],
    image: '/images/homes/homes-4.jpg',
    phone: '(702) 903-4687',
    href: '/terra-at-skyeview',
  },
]

export default function BestOpportunities() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          This Week&apos;s Best Opportunities at Arroyo at Skyeview Homes
        </h2>
        <p className="mb-12 text-center text-muted-foreground">Updated weekly with current inventory and incentives</p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="surface-elevated overflow-hidden transition hover:shadow-lg">
              <div className="relative h-48 overflow-hidden bg-muted">
                {opportunity.image ? (
                  <SiteImage
                    src={opportunity.image}
                    alt={opportunity.community}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground" aria-hidden>
                    <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white dark:bg-emerald-800">
                    Quick Move-In
                  </span>
                </div>
              </div>

              <div className="p-6">
                <Link href={opportunity.href} className="group block">
                  <h3 className="mb-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {opportunity.community}
                  </h3>
                </Link>
                <p className="mb-4 text-muted-foreground">{opportunity.location}</p>
                <p className="mb-2 text-3xl font-bold text-primary">From {formatPrice(opportunity.price)}</p>
                <div className="mb-4 rounded-lg bg-primary/10 p-3 dark:bg-primary/15">
                  <p className="text-sm font-semibold text-foreground">{opportunity.incentives}</p>
                </div>
                <ul className="mb-6 space-y-2">
                  {opportunity.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <svg
                        className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="min-h-11 w-full font-semibold">
                  <a href="tel:7029034687">Call/Text {opportunity.phone}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="tel:7029034687"
            className={cn(
              'text-lg font-semibold text-primary transition-colors hover:text-primary/90',
              'focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            )}
          >
            See all available homes → Call/Text (702) 903-4687
          </a>
        </div>
      </div>
    </section>
  )
}

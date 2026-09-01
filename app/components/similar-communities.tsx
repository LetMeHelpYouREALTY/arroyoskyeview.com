'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteImage } from '@/lib/cloudflare-images'

interface Community {
  id: string
  name: string
  location: string
  phone: string
  price: number
  image: string
  features: string[]
  href: string
  anchorText: string
}

const communities: Community[] = [
  {
    id: '1',
    name: 'Sierra at Skyeview',
    location: 'Las Vegas, NV 89166',
    phone: '(702) 903-4687',
    price: 392640,
    image: siteImage('/images/hero/hero-5.jpg'),
    features: ['New Construction', 'Skye Canyon'],
    href: '/sierra-at-skyeview',
    anchorText: 'Explore Sierra at Skyeview townhomes in Skye Canyon',
  },
  {
    id: '2',
    name: 'Terra at Skyeview',
    location: 'Las Vegas, NV 89166',
    phone: '(702) 903-4687',
    price: 392640,
    image: siteImage('/images/floor-plans/floor-plans-1.jpg'),
    features: ['Skye Canyon', 'New Homes'],
    href: '/terra-at-skyeview',
    anchorText: 'Compare Terra at Skyeview pricing and floor plans',
  },
  {
    id: '3',
    name: 'Ironwood',
    location: 'Las Vegas, NV',
    phone: '(702) 903-4687',
    price: 392640,
    image: siteImage('/images/hero/hero-6.jpg'),
    features: ['Arroyo at Skyeview Homes', 'Las Vegas Metro'],
    href: '/ironwood',
    anchorText: 'View Ironwood new construction homes',
  },
  {
    id: '4',
    name: 'Homestead West',
    location: 'Las Vegas, NV',
    phone: '(702) 903-4687',
    price: 392640,
    image: siteImage('/images/hero/hero-7.jpg'),
    features: ['Arroyo at Skyeview Homes', 'Las Vegas'],
    href: '/homestead-west',
    anchorText: 'Discover Homestead West single-family homes',
  },
  {
    id: '5',
    name: 'Eaglepointe at Skye Canyon',
    location: 'Las Vegas, NV 89166',
    phone: '(702) 903-4687',
    price: 392640,
    image: siteImage('/images/hero/hero-5.jpg'),
    features: ['Skye Canyon', 'Masterplan'],
    href: '/eaglepointe-skye-canyon',
    anchorText: 'Browse Eaglepointe at Skye Canyon master-planned community',
  },
]

export default function SimilarCommunities() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % communities.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + communities.length) % communities.length)
  }

  const navBtn = cn(
    'absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2 shadow-lg transition',
    'hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
  )

  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground">
          Similar Communities Near You
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          Other new homes starting at $392K in Skye Canyon and Las Vegas Metro
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {communities.map((community) => (
                <div key={community.id} className="min-w-full px-4">
                  <div className="surface-elevated overflow-hidden shadow-md">
                    <div className="group relative h-64 overflow-hidden bg-muted">
                      <Link href={community.href} className="block h-full w-full">
                        {community.image ? (
                          <Image
                            src={community.image}
                            alt={`${community.name} new construction homes in ${community.location}. Arroyo at Skyeview Homes development with modern designs and premium finishes.`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                      </Link>
                      <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-2">
                        {community.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <Link href={community.href} className="group block">
                        <h3 className="mb-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                          {community.name}
                        </h3>
                      </Link>
                      <p className="mb-2 text-muted-foreground">{community.location}</p>
                      <p className="mb-2 font-semibold text-primary">
                        <a
                          href="tel:7029034687"
                          className="transition-colors hover:text-primary/90 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {community.phone}
                        </a>
                      </p>
                      <p className="mb-2 text-2xl font-bold text-foreground">Homes From {formatPrice(community.price)}</p>
                      <p className="mb-4 text-sm text-muted-foreground">Contact for monthly payment estimate</p>
                      <div className="flex gap-2">
                        <Link href={community.href} className="flex-1">
                          <Button variant="outline" className="min-h-10 w-full">
                            View Community Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {communities.length > 1 && (
            <>
              <button type="button" onClick={goToPrevious} className={cn(navBtn, 'left-0')} aria-label="Previous community">
                <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button type="button" onClick={goToNext} className={cn(navBtn, 'right-0')} aria-label="Next community">
                <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="mt-4 flex justify-center space-x-3">
            {communities.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-full transition',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  index === currentIndex ? 'bg-primary' : 'bg-muted',
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
              >
                <span
                  className={cn(
                    'h-2 w-2 rounded-full',
                    index === currentIndex ? 'bg-primary-foreground' : 'bg-muted-foreground/60',
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

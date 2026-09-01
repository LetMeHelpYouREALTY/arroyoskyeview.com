'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface TakenHome {
  id: string
  address: string
  lot: string
  floorPlan: string
  sqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  completion: string
  status: string
  features: string[]
}

const takenHomes: TakenHome[] = [
  {
    id: '1',
    address: '8958 Grabill Spruce St',
    lot: 'ARR181',
    floorPlan: 'Captiva',
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    status: 'Pending',
    features: ['End Unit'],
  },
]

type SortOption = 'price-low' | 'price-high' | 'sqft-low' | 'sqft-high' | 'completion'

export default function AlreadyTaken() {
  const [sortBy, setSortBy] = useState<SortOption>('price-low')
  const [sortedHomes, setSortedHomes] = useState(takenHomes)

  const handleSort = (option: SortOption) => {
    setSortBy(option)
    const sorted = [...takenHomes].sort((a, b) => {
      switch (option) {
        case 'price-low':
          return 0
        case 'price-high':
          return 0
        case 'sqft-low':
          return a.sqft - b.sqft
        case 'sqft-high':
          return b.sqft - a.sqft
        case 'completion':
          return a.completion.localeCompare(b.completion)
        default: {
          const _exhaustive: never = option
          return _exhaustive
        }
      }
    })
    setSortedHomes(sorted)
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">ALREADY TAKEN</h2>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">Sort By:</span>
          <select
            aria-label="Sort homes already taken"
            value={sortBy}
            onChange={(e) => handleSort(e.target.value as SortOption)}
            className="rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="sqft-low">Sq Ft: Low to High</option>
            <option value="sqft-high">Sq Ft: High to Low</option>
            <option value="completion">Est Completion Date</option>
          </select>
        </div>
      </div>

      <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 border-l-4 border-l-amber-500 p-4 dark:bg-amber-500/15">
        <p className="text-sm text-foreground">
          <strong>Homes reserved or under contract</strong>
          <br />
          Homes are selling fast! See what&apos;s still available at this community above.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedHomes.map((home) => (
          <div
            key={home.id}
            className="surface-elevated overflow-hidden opacity-75 transition hover:shadow-md"
          >
            <div className="relative h-48 bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground" aria-hidden>
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div className="absolute top-2 left-2">
                <span className="rounded bg-amber-600 px-2 py-1 text-xs font-semibold text-white dark:bg-amber-700">
                  {home.status}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="mb-1 text-xl font-bold text-foreground">{home.address}</h3>
                <p className="text-sm text-muted-foreground">Lot {home.lot}</p>
                <p className="text-sm text-muted-foreground">Est. Completion: {home.completion}</p>
              </div>
              
              <div className="mb-4">
                <p className="mb-2 text-lg font-semibold text-primary">{home.floorPlan}</p>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Square Footage:</span>
                  <span className="ml-1 font-semibold text-foreground">{home.sqft} sq ft</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Bedrooms:</span>
                  <span className="ml-1 font-semibold text-foreground">{home.bedrooms} br</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Bathrooms:</span>
                  <span className="ml-1 font-semibold text-foreground">{home.bathrooms} ba</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Parking Bays:</span>
                  <span className="ml-1 font-semibold text-foreground">{home.parking} {home.parking > 1 ? 'bays' : 'bay'}</span>
                </div>
              </div>

              {home.features.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {home.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Button asChild variant="outline" className="min-h-10 w-full">
                <a href="tel:+17029034687">Call for Available Homes</a>
              </Button>
              <Button asChild variant="ghost" className="mt-2 min-h-10 w-full">
                <Link href={`/arroyo-at-skyeview/floor-plans#${home.floorPlan.toLowerCase()}`}>
                  View floor plan
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


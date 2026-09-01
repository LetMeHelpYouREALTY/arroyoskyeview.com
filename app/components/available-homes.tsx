'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteImage } from '@/lib/cloudflare-images'

interface Home {
  id: string
  address: string
  lot: string
  floorPlan: string
  price: number
  sqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  completion: string
  features: string[]
  image?: string
}

const homes: Home[] = [
  {
    id: '1',
    address: '8933 Grabill Spruce St',
    lot: 'ARR224',
    floorPlan: 'Delray',
    price: 424590,
    sqft: 1729,
    bedrooms: 4,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['Gray cabinets'],
    image: siteImage('/images/homes/homes-1.jpg'),
  },
  {
    id: '2',
    address: '8925 Grabill Spruce St',
    lot: 'ARR223',
    floorPlan: 'Captiva',
    price: 405720,
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['LVP Flooring', 'White Cabinets'],
    image: siteImage('/images/homes/homes-2.jpg'),
  },
  {
    id: '3',
    address: '8942 Grabill Spruce St',
    lot: 'ARR183',
    floorPlan: 'Delray',
    price: 416960,
    sqft: 1729,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['End Unit', 'White Cabinets'],
    image: siteImage('/images/homes/homes-3.jpg'),
  },
  {
    id: '4',
    address: '8917 Grabill Spruce St',
    lot: 'ARR222',
    floorPlan: 'Beverly',
    price: 392640,
    sqft: 1531,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['LG Kitchen Appliances', 'Java Cabinets'],
    image: siteImage('/images/homes/homes-4.jpg'),
  },
  {
    id: '5',
    address: '8909 Grabill Spruce St',
    lot: 'ARR221',
    floorPlan: 'Captiva',
    price: 411090,
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    completion: 'Dec. Move In',
    features: ['End unit', 'Courtyard Entry'],
    image: siteImage('/images/homes/homes-5.jpg'),
  },
]

type SortOption = 'price-low' | 'price-high' | 'sqft-low' | 'sqft-high' | 'completion'

export default function AvailableHomes() {
  const [sortBy, setSortBy] = useState<SortOption>('price-low')
  const [sortedHomes, setSortedHomes] = useState(homes)

  const handleSort = (option: SortOption) => {
    setSortBy(option)
    const sorted = [...homes].sort((a, b) => {
      switch (option) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Available homes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">Sort By:</span>
          <select
            aria-label="Sort available homes"
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

      <div className="mb-6 rounded-lg border border-border bg-primary/5 border-l-4 border-l-primary p-4">
        <p className="text-sm text-foreground">
          <strong>Buy online today!</strong> Lock in your new construction home at Arroyo at Skyeview Homes or other Skye Canyon communities through the convenient and completely online{' '}
          <strong>Buy Now</strong> process with expert buyer representation from Dr. Jan Duffy.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedHomes.map((home) => (
          <div
            key={home.id}
            className="surface-elevated overflow-hidden transition hover:shadow-md"
          >
            <div className="relative h-48 overflow-hidden bg-muted">
              {home.image ? (
                <Image
                  src={home.image}
                  alt={`${home.floorPlan} floor plan at ${home.address}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground" aria-hidden>
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="mb-1 text-xl font-bold text-foreground">{home.address}</h3>
                <p className="text-sm text-muted-foreground">Lot {home.lot}</p>
                <p className="text-sm text-muted-foreground">Est. Completion: {home.completion}</p>
              </div>
              
              <div className="mb-4">
                <p className="mb-2 text-lg font-semibold text-primary">{home.floorPlan}</p>
                <p className="mb-2 text-2xl font-bold text-foreground">{formatPrice(home.price)}</p>
                <p className="text-sm text-muted-foreground">Contact for monthly payment estimate</p>
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
                  <span className="ml-1 font-semibold text-foreground">{home.parking} bay</span>
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

              <div className="flex gap-2">
                <Button className={cn('min-h-10 flex-1 font-semibold')}>Buy Now</Button>
                <Button variant="outline" className="min-h-10 flex-1">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


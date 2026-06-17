'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FloorPlan {
  id: string
  name: string
  price: number
  sqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  description: string
  status: string
  image?: string
  floorPlanImage?: string
}

const floorPlans: FloorPlan[] = [
  {
    id: '1',
    name: 'Beverly',
    price: 364990,
    sqft: 1531,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    description: 'Interior Unit',
    status: 'Model Open',
    image: '/images/floor-plans/beverly-model.jpg',
    floorPlanImage: '/images/floor-plans/beverly-floorplan.jpg',
  },
  {
    id: '2',
    name: 'Captiva',
    price: 374990,
    sqft: 1643,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    description: '3 Bed + Loft',
    status: 'Modeled',
    image: '/images/floor-plans/captiva-model.jpg',
    floorPlanImage: '/images/floor-plans/captiva-floorplan.jpg',
  },
  {
    id: '3',
    name: 'Delray',
    price: 384990,
    sqft: 1729,
    bedrooms: 3,
    bathrooms: 2.5,
    parking: 2,
    description: 'End Unit',
    status: 'Stunning Model',
    image: '/images/floor-plans/delray-model.jpg',
    floorPlanImage: '/images/floor-plans/delray-floorplan.jpg',
  },
]

type SortOption = 'price-low' | 'price-high' | 'sqft-low' | 'sqft-high'

export default function FloorPlans() {
  const [sortBy, setSortBy] = useState<SortOption>('price-low')
  const [sortedPlans, setSortedPlans] = useState(floorPlans)

  const handleSort = (option: SortOption) => {
    setSortBy(option)
    const sorted = [...floorPlans].sort((a, b) => {
      switch (option) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'sqft-low':
          return a.sqft - b.sqft
        case 'sqft-high':
          return b.sqft - a.sqft
        default:
          return 0
      }
    })
    setSortedPlans(sorted)
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
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Floor Plans</h2>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">Sort By:</span>
          <select
            aria-label="Sort floor plans"
            value={sortBy}
            onChange={(e) => handleSort(e.target.value as SortOption)}
            className="rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="sqft-low">Sq Ft: Low to High</option>
            <option value="sqft-high">Sq Ft: High to Low</option>
          </select>
        </div>
      </div>

      <p className="mb-6 text-muted-foreground">
        Check out quality layouts that may be available for purchase at this community today!
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedPlans.map((plan) => (
          <div
            key={plan.id}
            className="surface-elevated overflow-hidden transition hover:shadow-md"
          >
            <div className="relative h-64 overflow-hidden bg-muted">
              {plan.image ? (
                <Image
                  src={plan.image}
                  alt={`${plan.name} floor plan model home at Arroyo at Skyeview Homes in Skye Canyon, Las Vegas. ${plan.sqft} square feet, ${plan.bedrooms} bedrooms, ${plan.bathrooms} bathrooms.`}
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
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
              )}
              <div className="absolute top-2 right-2 z-10">
                <span className="bg-primary text-white text-xs px-2 py-1 rounded">{plan.status}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="mb-2 text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mb-2 text-sm text-muted-foreground">{plan.description}</p>
                <p className="mb-1 text-2xl font-bold text-primary">From {formatPrice(plan.price)}</p>
                <p className="text-sm text-muted-foreground">Contact for monthly payment estimate</p>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-2 border-t border-border pt-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Square Footage:</span>
                  <span className="ml-1 font-semibold text-foreground">{plan.sqft} sq ft</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Bedrooms:</span>
                  <span className="ml-1 font-semibold text-foreground">{plan.bedrooms} br</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Bathrooms:</span>
                  <span className="ml-1 font-semibold text-foreground">{plan.bathrooms} ba</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Parking Bays:</span>
                  <span className="ml-1 font-semibold text-foreground">{plan.parking} bay</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="min-h-10 flex-1">
                  Request Info
                </Button>
                <Button className={cn('min-h-10 flex-1 font-semibold')}>View Details</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


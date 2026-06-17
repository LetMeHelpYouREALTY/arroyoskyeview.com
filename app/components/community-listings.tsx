'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Community {
  id: string
  name: string
  location: string
  city: string
  zip: string
  phone: string
  price: number
  homeTypes: string[]
  image: string
  url: string
  features: string[]
}

const communities: Community[] = [
  {
    id: '1',
    name: 'Arroyo at Skyeview',
    location: 'Skye Canyon',
    city: 'Las Vegas',
    zip: '89166',
    phone: '(702) 903-4687',
    price: 392640,
    homeTypes: ['Townhomes'],
    image: '/images/hero/hero-5.jpg',
    url: '/',
    features: ['New Construction', 'Quick Move-In Available'],
  },
  {
    id: '2',
    name: 'Skye Canyon',
    location: 'Skye Canyon',
    city: 'Las Vegas',
    zip: '89166',
    phone: '(702) 903-4687',
    price: 392640,
    homeTypes: ['Single-Family Homes', 'Townhomes'],
    image: '/images/floor-plans/floor-plans-1.jpg',
    url: '/',
    features: ['Masterplan Community', 'NW Las Vegas'],
  },
  {
    id: '3',
    name: 'The Townes at Union Village',
    location: 'Union Village',
    city: 'Henderson',
    zip: '89011',
    phone: '(702) 903-4687',
    price: 366990,
    homeTypes: ['Townhomes'],
    image: '/images/hero/hero-7.jpg',
    url: '/',
    features: ['Special Incentives', 'Tour Models Today!'],
  },
]

export default function CommunityListings() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'name'>('name')

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const sortedCommunities = [...communities].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return a.name.localeCompare(b.name)
  })

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Communities in Las Vegas Metro
            </h2>
            <p className="text-muted-foreground">
              {communities.length} {communities.length === 1 ? 'community' : 'communities'} found
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {/* View Mode Toggle */}
            <div className="flex border border-border rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 ${
                  viewMode === 'grid'
                    ? 'bg-primary text-white'
                    : 'bg-white text-muted-foreground hover:bg-muted'
                }`}
                aria-label="Grid view"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 ${
                  viewMode === 'list'
                    ? 'bg-primary text-white'
                    : 'bg-white text-muted-foreground hover:bg-muted'
                }`}
                aria-label="List view"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Community Cards */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
          }
        >
          {sortedCommunities.map((community) => (
            <div
              key={community.id}
              className={`bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'} h-48 bg-gray-200 relative overflow-hidden`}>
                {community.image ? (
                  <Image
                    src={community.image}
                    alt={community.name}
                    fill
                    className="object-cover"
                    sizes={viewMode === 'list' ? '33vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                  {community.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-primary text-white text-xs px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`${viewMode === 'list' ? 'w-2/3' : 'w-full'} p-6 flex flex-col`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {community.name}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {community.location}, {community.city}, NV {community.zip}
                </p>
                <p className="text-primary font-semibold mb-2">
                  <a href="tel:7029034687" className="hover:text-primary transition-colors">
                    {community.phone}
                  </a>
                </p>
                <p className="text-2xl font-bold text-foreground mb-4">
                  Homes From {formatPrice(community.price)}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Home Types:</p>
                  <div className="flex flex-wrap gap-2">
                    {community.homeTypes.map((type, idx) => (
                      <span
                        key={idx}
                        className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <Link href={community.url}>
                    <Button className="w-full bg-primary hover:bg-primary text-white">
                      View Community
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const homes = [
  {
    id: '1',
    name: 'Arroyo at Skyeview',
    location: 'Las Vegas, NV',
    price: 392640,
    image: '/images/hero/hero-5.jpg',
    url: '/',
    available: true,
  },
  {
    id: '2',
    name: 'The Townes at Union Village',
    location: 'Henderson, NV',
    price: 366990,
    image: '/images/hero/hero-7.jpg',
    url: '/',
    available: true,
  },
]

export default function AvailableHomesOnline() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Available Homes for Online Purchase
        </h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Browse new construction homes at Arroyo at Skyeview Homes and other Skye Canyon communities available for purchase online. Click "Buy Now" to start your 
          online homebuying journey with expert buyer representation from Dr. Jan Duffy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homes.map((home) => (
            <div key={home.id} className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                {home.image ? (
                  <Image
                    src={home.image}
                    alt={home.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                {home.available && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Available Online
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {home.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {home.location}
                </p>
                <p className="text-2xl font-bold text-foreground mb-6">
                  From {formatPrice(home.price)}
                </p>
                
                <Link href={home.url}>
                  <Button className="w-full bg-primary hover:bg-primary text-white mb-2">
                    View Details
                  </Button>
                </Link>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  variant="default"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Looking for more options? Browse all available communities.
          </p>
          <Link href="/find-your-new-home/nevada/las-vegas-metro">
            <Button variant="outline" className="border-luxury-champagne text-primary hover:bg-blue-50">
              Browse All Communities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


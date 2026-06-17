'use client'

import Link from 'next/link'
import GoogleMapEmbed from './google-map-embed'

interface ZipCodeMapProps {
  highlightZipCode?: string
  showAllZipCodes?: boolean
}

export default function ZipCodeMap({ highlightZipCode, showAllZipCodes = true }: ZipCodeMapProps) {
  const zipCodes = [
    {
      code: '89166',
      name: 'Skye Canyon',
      area: 'Northwest Las Vegas',
      link: '/areas/zip-89166',
      description: 'Premier master-planned community with Arroyo at Skyeview, Sierra at Skyeview, Terra at Skyeview',
      coordinates: { lat: 36.2765, lng: -115.2832 },
    },
    {
      code: '89128',
      name: 'Summerlin Area',
      area: 'West Las Vegas',
      link: '/areas/zip-89128',
      description: 'Luxury master-planned community with world-class amenities',
      coordinates: { lat: 36.1800, lng: -115.3300 },
    },
    {
      code: '89135',
      name: 'West Las Vegas',
      area: 'West Las Vegas',
      link: '/areas/zip-89135',
      description: 'Growing residential area with convenient access to amenities',
      coordinates: { lat: 36.2000, lng: -115.3100 },
    },
    {
      code: '89144',
      name: 'Southwest Las Vegas',
      area: 'Southwest Las Vegas',
      link: '/areas/zip-89144',
      description: 'Convenient location with easy access to the Strip',
      coordinates: { lat: 36.1000, lng: -115.2000 },
    },
    {
      code: '89117',
      name: 'West Las Vegas',
      area: 'West Las Vegas',
      link: '/areas/zip-89117',
      description: 'Growing area near Summerlin and Red Rock Canyon',
      coordinates: { lat: 36.1900, lng: -115.3200 },
    },
  ]

  return (
    <section className="py-12 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
          New Construction Homes by Zip Code
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
          Explore new construction homes in Las Vegas zip codes. Dr. Jan Duffy provides expert buyer representation for new construction homes throughout northwest Las Vegas, Skye Canyon, and surrounding areas.
        </p>

        {/* Google Maps Embed - Centered on Las Vegas */}
        <div className="mb-8">
          <GoogleMapEmbed
            address="Las Vegas, NV"
            height="400px"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Zip Code Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zipCodes.map((zip) => (
            <Link
              key={zip.code}
              href={zip.link}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-2 ${
                highlightZipCode === zip.code
                  ? 'border-luxury-champagne ring-2 ring-blue-200'
                  : 'border-border hover:border-blue-300'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Zip Code {zip.code}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-1">
                    {zip.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{zip.area}</p>
                </div>
                {highlightZipCode === zip.code && (
                  <span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                    Current Area
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-4">{zip.description}</p>
              <div className="flex items-center text-primary font-semibold text-sm">
                View Homes in {zip.code} →
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Looking for New Construction Homes in a Specific Zip Code?
          </h3>
          <p className="text-muted-foreground mb-4">
            Dr. Jan Duffy has insider knowledge of new construction inventory and pricing in all Las Vegas zip codes. 
            Get expert buyer representation at no extra cost—builders pay for buyer representation.
          </p>
          <a
            href="tel:7029034687"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary transition"
          >
            Call Dr. Jan Duffy: (702) 903-4687
          </a>
        </div>
      </div>
    </section>
  )
}


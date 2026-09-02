import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function AreaInformation() {
  const schools = [
    { name: 'Roger Bryan Elementary School', address: 'Skye Canyon, Las Vegas, NV 89166' },
    { name: 'Sig Rogich Middle School', address: 'Skye Canyon, Las Vegas, NV 89166' },
    { name: 'Shadow Ridge High School', address: 'Northwest Las Vegas, NV 89166' },
  ]

  const shopping = [
    { name: "Smith's Food and Drug", address: 'Skye Canyon Marketplace, Las Vegas, NV 89166' },
    { name: 'Skye Canyon Marketplace', address: 'Skye Canyon, Las Vegas, NV 89166' },
    { name: 'Durango Square', address: 'Northwest Las Vegas, NV (10 min south)' },
    { name: 'Downtown Summerlin', address: 'Summerlin, Las Vegas, NV (15-20 min southeast)' },
    { name: "Lowe's Home Improvement", address: 'Northwest Las Vegas, NV' },
  ]

  const dining = [
    { name: 'Restaurants at Skye Canyon Marketplace', address: 'Skye Canyon, Las Vegas, NV 89166' },
    { name: 'Baby Stacks Cafe', address: 'Skye Canyon, Las Vegas, NV 89166' },
    { name: 'Cafe Rio', address: 'Skye Canyon, Las Vegas, NV 89166' },
    { name: 'Starbucks', address: 'Skye Canyon Marketplace, Las Vegas, NV 89166' },
    { name: 'Local Dining Options', address: 'Throughout northwest Las Vegas, NV 89166' },
    { name: 'Upscale Dining', address: 'Downtown Summerlin (15-20 min southeast)' },
  ]

  return (
    <div>
      <h2 className="mb-8 text-balance text-3xl font-bold tracking-tight text-foreground">
        Area Information for Arroyo at Skyeview,{' '}
        <Link
          href="/areas/zip-89166"
          className={cn(
            'font-semibold text-primary underline decoration-primary/40 underline-offset-2',
            'transition-colors hover:text-primary/90 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          )}
        >
          Skye Canyon, Northwest Las Vegas, Nevada (Zip Code 89166)
        </Link>
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Schools */}
        <div>
          <h3 className="mb-4 flex items-center text-xl font-bold text-foreground">
            <svg className="mr-2 h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Schools
          </h3>
          <ul className="space-y-3">
            {schools.map((school, index) => (
              <li key={index} className="text-foreground">
                <div className="flex items-start font-medium">
                  <svg className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{school.name}</span>
                </div>
                <div className="ml-7 text-sm text-muted-foreground">{school.address}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Shopping */}
        <div>
          <h3 className="mb-4 flex items-center text-xl font-bold text-foreground">
            <svg className="mr-2 h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Shopping
          </h3>
          <ul className="space-y-3">
            {shopping.map((place, index) => (
              <li key={index} className="text-foreground">
                <div className="font-medium">{place.name}</div>
                <div className="text-sm text-muted-foreground">{place.address}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Dining */}
        <div>
          <h3 className="mb-4 flex items-center text-xl font-bold text-foreground">
            <svg className="mr-2 h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            Dining
          </h3>
          <ul className="space-y-3">
            {dining.map((restaurant, index) => (
              <li key={index} className="text-foreground">
                <div className="font-medium">{restaurant.name}</div>
                <div className="text-sm text-muted-foreground">{restaurant.address}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


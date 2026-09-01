import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const inlineLink = cn(
  'font-medium text-primary underline underline-offset-2 decoration-primary/30',
  'transition-colors hover:text-primary/90 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
)

const checkIcon = (
  <svg
    className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary"
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
)

export default function Overview() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">Overview</h2>

      <div className="mb-8 max-w-none">
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Arroyo at Skyeview Homes offers new construction townhomes in{' '}
          <Link href="/areas/zip-89166" className={inlineLink}>
            Skye Canyon, northwest Las Vegas, Nevada (zip code 89166)
          </Link>
          . These thoughtfully designed two-story townhomes feature quartz countertops, open layouts, 2 to 4 bedrooms, 2.5 baths, and 2-bay garages. As part of the 1,700-acre Skye Canyon master-planned community, Arroyo at Skyeview Homes residents enjoy resort-style pool, fitness center, parks, trails, and Roger Bryan Elementary (GreatSchools 9/10). Located near US-95 and the 215 Beltway, this northwest Las Vegas community provides easy access to employment centers, shopping, and outdoor recreation. When buying Arroyo at Skyeview Homes, work with{' '}
          <Link href="/work-with-dr-jan" className={inlineLink}>
            Dr. Jan Duffy—your buyer&apos;s agent who represents HOME BUYERS, not the builder
          </Link>
          . Explore{' '}
          <Link href="/homes/townhomes-las-vegas" className={inlineLink}>
            new construction townhomes in Las Vegas
          </Link>{' '}
          and learn about{' '}
          <Link href="/buyers/first-time-homebuyer" className={inlineLink}>
            first-time homebuyer programs
          </Link>{' '}
          available for Skye Canyon communities.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-border bg-primary/5 p-6">
        <h3 className="mb-4 text-2xl font-bold text-foreground">Community Amenities</h3>
        <p className="mb-4 text-muted-foreground">
          Skye Canyon is a 1,700-acre master-planned community in northwest Las Vegas, Nevada (zip code 89166) designed for active lifestyles. Located near the intersection of US-95 and the 215 Beltway, Skye Canyon offers extensive amenities, neighborhood schools including Roger Bryan Elementary, and outdoor recreation opportunities. Living at Arroyo at Skyeview Homes in Skye Canyon, you&apos;ll enjoy:
        </p>
        <ul className="grid grid-cols-1 gap-3 text-muted-foreground md:grid-cols-2">
          {[
            'Recreation center',
            'Fitness center',
            'Parks',
            'Trails',
            'Splash pads',
            'Sports courts and fields',
            'Neighborhood schools',
            'And more!',
          ].map((label) => (
            <li key={label} className="flex items-start">
              {checkIcon}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-muted/50 p-6">
        <h3 className="mb-4 text-xl font-bold text-foreground">Explore homesites at this community!</h3>
        <p className="mb-4 text-muted-foreground">
          Get a feel for the neighborhood and find the right homesite for you
        </p>
        <Button type="button" className="min-h-10 font-semibold">
          Printable Homesite Map
        </Button>
      </div>
    </div>
  )
}

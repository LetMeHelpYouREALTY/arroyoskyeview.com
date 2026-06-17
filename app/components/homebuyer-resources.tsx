import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function HomebuyerResources() {
  const resources = [
    {
      id: '1',
      title: 'Is the Housing Market Going To Crash? Here\'s What Experts Say',
      description: 'Expert forecasts show home prices are expected to rise nationally, not fall, over the next 5 years. Learn what the data says about the housing market outlook.',
      image: '/images/hero/hero-5.jpg',
      category: 'Market Insights',
      url: '/blog/housing-market-crash-2025',
    },
    {
      id: '2',
      title: 'Thought the Market Passed You By? Think Again.',
      description: 'With more homes to choose from, prices leveling off, and mortgage rates easing, today\'s market is offering something you haven\'t had in a while: options.',
      image: '/images/hero/hero-6.jpg',
      category: 'Market Insights',
      url: '/blog/market-passed-you-by',
    },
    {
      id: '3',
      title: 'You Can Buy a Home When You Have Student Loans',
      description: 'Learn how student loans don\'t have to prevent you from buying a new construction home in Las Vegas. Get expert advice on managing student debt while purchasing a home at Arroyo at Skyeview Homes or other Skye Canyon communities.',
      image: '/images/hero/hero-7.jpg',
      category: 'Homebuying Guide',
      url: '/blog/buying-home-with-student-loans',
    },
    {
      id: '4',
      title: 'How To Make Sure Your Sale Crosses the Finish Line',
      description: 'Learn how pre-listing inspections can help prevent buyers from backing out. Get expert advice on avoiding common deal breakers and ensuring a smooth home sale.',
      image: '/images/hero/hero-5.jpg',
      category: 'Selling Tips',
      url: '/blog/sale-crosses-finish-line',
    },
    {
      id: '5',
      title: 'New Home Inventory is 2x the Normal: Why It\'s Time to Buy New',
      description: 'With low resale inventory and 2x the normal new home inventory, builders are buying down mortgage rates, lowering prices, and offering promotions and incentives. It\'s time to buy new!',
      image: '/images/hero/hero-7.jpg',
      category: 'Market Insights',
      url: '/blog/new-home-inventory-2x',
    },
  ]

  const linkClass = cn(
    'text-sm font-medium text-primary transition-colors hover:text-primary/90',
    'focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
  )

  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">Homebuyer Resources</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <div key={resource.id} className="surface-elevated overflow-hidden transition hover:shadow-md">
            <div className="relative h-48 overflow-hidden bg-muted">
              {resource.image ? (
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground" aria-hidden>
                  <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              )}
              <div className="absolute top-2 right-2 z-10">
                <span className="rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                  {resource.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-foreground">{resource.title}</h3>
              <p className="mb-4 line-clamp-3 text-muted-foreground">{resource.description}</p>
              <Link href={resource.url || '#'} className={linkClass}>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-muted/50 p-6">
        <h3 className="mb-4 text-xl font-bold text-foreground">Additional Resources</h3>
        <ul className="space-y-3">
          <li>
            <Link href="/homebuying-process" className={linkClass}>
              Homebuying Process
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Learn about Dr. Jan Duffy&apos;s step-by-step process for buying your new construction home at Arroyo at Skyeview Homes or other Skye Canyon communities
            </p>
          </li>
          <li>
            <Link href="/faq" className={linkClass}>
              Frequently Asked Questions
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">Get answers to common questions about buying new construction homes</p>
          </li>
          <li>
            <Link href="/faq/las-vegas-hyperlocal" className={linkClass}>
              Las Vegas Neighborhood Q&A
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Comprehensive questions and answers about Las Vegas neighborhoods, schools, and lifestyle
            </p>
          </li>
          <li>
            <Link href="/faq/financing" className={linkClass}>
              New Construction Financing FAQ
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Down payments, FHA/VA loans, builder rate buy-downs, and closing costs for Skye Canyon (89166) and northwest Las Vegas
            </p>
          </li>
          <li>
            <Link href="/faq/inspections" className={linkClass}>
              Inspections &amp; Construction Monitoring FAQ
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Building standards inspection, 7–10 day construction monitoring, and protecting your warranty on new builds
            </p>
          </li>
          <li>
            <Link href="/online-homebuying" className={linkClass}>
              Online Homebuying
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Purchase your new construction home at Arroyo at Skyeview Homes entirely online with expert buyer representation from Dr. Jan Duffy
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

import Link from 'next/link'

interface NeighborhoodLinksSectionProps {
  location: string
  zipCode?: string
}

export default function NeighborhoodLinksSection({ location, zipCode }: NeighborhoodLinksSectionProps) {
  const isSkyeCanyon = location === 'Skye Canyon' || zipCode === '89166'

  return (
    <section className="bg-white py-12 mt-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Explore the Neighborhood
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isSkyeCanyon && (
            <Link
              href="/areas/zip-89166"
              className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-200 hover:border-blue-300 group"
            >
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Learn more about Skye Canyon master-planned community
              </h3>
              <p className="text-muted-foreground">
                Discover schools, amenities, outdoor recreation, and lifestyle benefits in Skye Canyon, Las Vegas.
              </p>
            </Link>
          )}
          <Link
            href="/neighborhoods/summerlin-las-vegas"
            className="bg-muted p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Nearby Summerlin new construction options
            </h3>
            <p className="text-muted-foreground">
              Explore Summerlin, one of Las Vegas's premier master-planned communities with luxury homes and amenities.
            </p>
          </Link>
          <Link
            href="/find-your-new-home/nevada/las-vegas-metro"
            className="bg-muted p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Browse all Las Vegas Metro new construction communities
            </h3>
            <p className="text-muted-foreground">
              View all Arroyo at Skyeview Homes and new construction homes across Las Vegas, Henderson, and surrounding areas.
            </p>
          </Link>
          <Link
            href="/faq/las-vegas-hyperlocal"
            className="bg-muted p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Las Vegas neighborhood guide: schools, amenities, lifestyle
            </h3>
            <p className="text-muted-foreground">
              Comprehensive guide to Las Vegas neighborhoods, schools, lifestyle, and what makes each area unique.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}


export default function MoreWaysToStreamline() {
  const affiliates = [
    {
      name: 'Inspire Homeloans',
      description: 'In-house mortgage financing',
      logo: '/images/affiliates/inspire.svg',
    },
    {
      name: 'Parkway Title',
      description: 'Title services',
      logo: '/images/affiliates/parkway.svg',
    },
    {
      name: 'IHL Home Insurance',
      description: 'Insurance services',
      logo: '/images/affiliates/ihl.svg',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          More ways to streamline
        </h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Affiliate companies help streamline your new construction home purchase at Arroyo at Skyeview Homes and other Skye Canyon communities, offering everything from 
          in-house mortgage financing to title and insurance services. With coordinated services, you\'ll enjoy a more seamless experience that allows you to focus on selecting your new construction home in northwest Las Vegas (zip code 89166).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {affiliates.map((affiliate, index) => (
            <div key={index} className="bg-muted rounded-lg p-8 text-center hover:shadow-md transition">
              <div className="h-24 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm font-medium">
                  {affiliate.name}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {affiliate.name}
              </h3>
              <p className="text-muted-foreground">
                {affiliate.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/contact-us" className="text-primary hover:text-primary font-medium">
            Learn more →
          </a>
        </div>
      </div>
    </section>
  )
}


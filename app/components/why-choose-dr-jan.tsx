import SectionPortraitMark from './section-portrait-mark'

export default function WhyChooseDrJan() {
  const benefits = [
    {
      title: 'Expert Market Knowledge',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      points: [
        'New construction homes are strategically positioned in amenity-rich master-planned communities like Skye Canyon (zip code 89166) in northwest Las Vegas, Nevada, plus neighborhoods in Summerlin, Henderson, and throughout the Las Vegas metro area',
        'Dr. Jan Duffy, your buyer\'s agent, knows which communities fit YOUR lifestyle and budget',
        'Real-time inventory tracking across all new construction communities in northwest Las Vegas, Nevada (zip code 89166), Skye Canyon, Summerlin, Henderson, and throughout the Las Vegas metro area',
      ],
    },
    {
      title: 'Construction Protection (Your Superpower)',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      points: [
        'Dr. Jan Duffy, your buyer\'s agent, monitors your home\'s construction every 7-10 days at Arroyo at Skyeview Homes and other Skye Canyon communities—the builder\'s team works for the builder, but Dr. Duffy works exclusively for YOU',
        'Complimentary Building Standards Home Inspection at closing (catches issues BEFORE your warranty matters)',
        'Construction quality difference? When the superintendent knows your buyer\'s agent is watching, your home gets built right',
        'Once the superintendent knows buyer\'s agent monitoring will happen, he takes special care to follow construction standards at your Skye Canyon home',
      ],
    },
    {
      title: 'Smart Financial Positioning',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      points: [
        'The price you pay doesn\'t change—commission is built into new construction home prices at Arroyo at Skyeview Homes and other Skye Canyon communities whether you use a buyer\'s agent or not',
        'Current builder incentives in Skye Canyon (zip code 89166) include rate buy-downs, closing cost assistance, and competitive financing rates',
        'Dr. Jan Duffy, your buyer\'s agent, navigates incentives, timing, and move-in-ready inventory at Arroyo at Skyeview Homes and throughout Skye Canyon for maximum savings',
      ],
    },
  ]

  return (
    <section className="bg-background py-16 sm:py-20" data-has-agent-portrait>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionPortraitMark size="md" />
        <h2 className="mb-12 text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Your Buyer&apos;s Agent Advantage in Las Vegas, Nevada
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="surface-elevated flex flex-col rounded-2xl border-2 border-border p-8 transition-shadow hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-accent text-primary">
                {benefit.icon}
              </div>
              <h3 className="mb-6 text-center text-2xl font-bold text-foreground">{benefit.title}</h3>
              <ul className="space-y-4">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="mr-3 mt-0.5 h-5 w-5 shrink-0 text-primary"
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
                    <span className="text-pretty text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


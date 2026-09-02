import SectionPortraitMark from './section-portrait-mark'

const REASONS = [
  {
    title: 'Trusted expertise',
    body: 'Serving Las Vegas and Henderson since 2008 through Berkshire Hathaway HomeServices Nevada Properties.',
  },
  {
    title: 'Skye Canyon inventory',
    body: 'Live MLS plus builder lots at Arroyo, Sierra, Terra, and neighboring 89166 villages.',
  },
  {
    title: 'Buyer advocacy',
    body: 'Your agent—not the builder team. Construction monitoring every 7–10 days on new builds.',
  },
  {
    title: 'Proven volume',
    body: 'Hundreds of closings across the Las Vegas Valley with a documented new-construction process.',
  },
  {
    title: 'White-glove advocacy',
    body: 'Private tours, contract strategy, and same-day replies at (702) 903-4687 during office hours.',
  },
  {
    title: 'Full service',
    body: 'Search, contract, upgrades, inspections, and closing support on one team.',
  },
] as const

export default function WhyChooseUs() {
  return (
    <section className="bg-background py-16 md:py-20" aria-labelledby="why-heading" data-has-agent-portrait>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionPortraitMark size="md" />
          <h2
            id="why-heading"
            className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl"
          >
            Why choose Dr. Jan Duffy
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ultra-luxury buyer advocacy for Arroyo at Skyeview and Skye Canyon 89166.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <li
              key={reason.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {reason.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { Dumbbell, Mountain, Trees, Coffee } from 'lucide-react'
import { SKYE_AMENITIES } from '@/lib/hyperlocal-content'

const ICONS = {
  fitness: Dumbbell,
  mountain: Mountain,
  park: Trees,
  coffee: Coffee,
} as const

export default function HyperlocalHighlights() {
  return (
    <section className="border-y border-border/60 bg-muted/40 py-14 md:py-16" aria-labelledby="hyperlocal-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-luxury-champagne">
            Skye Canyon · Zip 89166
          </p>
          <h2 id="hyperlocal-heading" className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
            Northwest Las Vegas, Elevated
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            A 1,700-acre master-planned community between Red Rock Canyon and Mount Charleston—where
            resort amenities meet desert luxury living.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKYE_AMENITIES.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <li
                key={item.title}
                className="surface-elevated border-luxury-champagne/20 bg-card/80 p-6 backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-full border border-luxury-champagne/30 bg-luxury-navy/5 p-3 text-luxury-champagne">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

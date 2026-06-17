import Link from 'next/link'
import { ARROYO_HUB_LINKS } from '@/lib/arroyo-inventory'

export default function ArroyoHubLinks() {
  return (
    <section className="bg-muted/30 py-16" aria-labelledby="arroyo-hub-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-luxury-champagne">
            Arroyo at Skyeview
          </p>
          <h2
            id="arroyo-hub-heading"
            className="mt-3 font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl"
          >
            Explore homes, plans &amp; Skye Canyon living
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Each topic has its own page so you—and search engines—can find inventory,
            floor plans, and local area details without digging through tabs.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARROYO_HUB_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="font-serif text-xl text-foreground group-hover:text-primary">
                  {item.title}
                </span>
                <span className="mt-2 flex-1 text-sm text-muted-foreground text-pretty">
                  {item.description}
                </span>
                <span className="mt-4 text-sm font-medium text-luxury-champagne">
                  View {item.title.toLowerCase()} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

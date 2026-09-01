import Image from 'next/image'
import { siteImage } from '@/lib/cloudflare-images'

export default function LifeAtArroyo() {
  const scenes = [
    {
      src: siteImage('/images/hero/luxury-hero-skye-canyon.jpg'),
      alt: 'Aerial view of Arroyo at Skyeview townhomes in Skye Canyon, northwest Las Vegas ZIP 89166',
      caption: 'Two-story townhomes in Skye Canyon',
    },
    {
      src: siteImage('/images/homes/homes-2.jpg'),
      alt: 'Arroyo at Skyeview townhome exterior in Skye Canyon, northwest Las Vegas',
      caption: 'Townhome exteriors in Skye Canyon',
    },
    {
      src: siteImage('/images/homes/homes-1.jpg'),
      alt: 'Move-in ready townhome inventory at Arroyo at Skyeview on Grabill Spruce Street',
      caption: 'Move-in ready homes on Grabill Spruce St',
    },
  ] as const
  return (
    <section className="bg-muted/30 py-16 md:py-20" aria-labelledby="life-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-luxury-champagne">
            Skye Canyon · 89166
          </p>
          <h2
            id="life-heading"
            className="mt-3 font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl"
          >
            Life at Arroyo at Skyeview
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Townhomes from 1,531–1,729 sq ft inside a 1,700-acre master plan, 15 minutes from Red Rock Canyon
            and 20–25 minutes from the Las Vegas Strip.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {scenes.map((scene) => (
            <li key={scene.caption} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={scene.src}
                  alt={scene.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="px-4 py-3 text-sm font-medium text-foreground">{scene.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

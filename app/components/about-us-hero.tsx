import SectionPortraitMark from './section-portrait-mark'

export default function AboutUsHero() {
  return (
    <section className="bg-linear-to-b from-muted/80 to-background py-16" data-has-agent-portrait>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionPortraitMark size="lg" decorative={false} />
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          About Arroyo at Skyeview Homes
        </h1>
        <div className="space-y-4">
          <p className="text-3xl font-bold text-foreground md:text-4xl">New Construction Townhomes</p>
          <p className="text-2xl font-bold italic text-primary md:text-3xl">Skye Canyon, Northwest Las Vegas</p>
        </div>
      </div>
    </section>
  )
}

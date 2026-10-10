'use client'

import Image from 'next/image'

export default function MapView() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Find Communities on the Map
        </h2>

        <div className="surface-elevated overflow-hidden shadow-lg">
          <div className="relative h-96 overflow-hidden">
            <Image
              src="/images/las-vegas-metro.jpg"
              alt="Aerial of Las Vegas metro communities, including northwest desert neighborhoods near Skye Canyon"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-muted-foreground">Click on a pin to view community details</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full border-2 border-background bg-primary" aria-hidden />
              <span className="text-sm text-foreground">Arroyo at Skyeview Homes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full border-2 border-background bg-muted-foreground/50" aria-hidden />
              <span className="text-sm text-foreground">New Construction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

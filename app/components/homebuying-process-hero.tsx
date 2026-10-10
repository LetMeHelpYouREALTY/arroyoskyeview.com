import DrJanPortrait from './dr-jan-portrait'

export default function HomebuyingProcessHero() {
  return (
    <section className="bg-linear-to-b from-muted/80 to-background py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <DrJanPortrait size={88} className="h-[5.5rem] w-[5.5rem] ring-2 ring-primary/30" />
        </div>
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          New Construction Homebuying Process: Skye Canyon, Northwest Las Vegas | Buyer's Agent
        </h1>
        <p className="mx-auto max-w-3xl text-pretty text-xl text-muted-foreground">
          Whether it’s your first time buying a new construction home at Arroyo at Skyeview Homes or you’re in need of a refresher for the
          next home purchase, Dr. Jan Duffy walks you through the process—ensuring that you’ll be
          prepared and informed every step of the way with expert buyer representation.
        </p>
      </div>
    </section>
  )
}


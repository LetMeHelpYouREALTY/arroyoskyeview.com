const testimonials = [
  {
    quote:
      'Dr. Duffy caught issues during construction monitoring that would have cost thousands after closing. She advocated for us—not the builder.',
    author: 'Skye Canyon buyer',
    community: 'Arroyo at Skyeview',
  },
  {
    quote:
      'Registering our agent before the model visit kept representation on our contract. The 7–10 day build checks gave us a clear timeline.',
    author: 'Northwest Las Vegas buyer',
    community: 'ZIP 89166',
  },
  {
    quote:
      'She compared Beverly, Captiva, and Delray by square footage and lot position, then walked the incentives with us before we wrote.',
    author: 'Relocating buyer',
    community: 'Arroyo at Skyeview townhomes',
  },
] as const

export default function DrJanTestimonials() {
  return (
    <section className="bg-background py-16 md:py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="reviews-heading"
            className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl"
          >
            What our clients say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Buyer experiences at Arroyo at Skyeview and in Skye Canyon (89166).
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <blockquote className="flex-1 text-base leading-relaxed text-foreground text-pretty">
                “{item.quote}”
              </blockquote>
              <p className="mt-6 font-semibold text-foreground">{item.author}</p>
              <p className="text-sm text-muted-foreground">{item.community}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          On-site quotes are client experiences.{' '}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Dr+Jan+Duffy+Berkshire+Hathaway+Las+Vegas"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            View verified reviews on Google
          </a>
          .
        </p>
      </div>
    </section>
  )
}

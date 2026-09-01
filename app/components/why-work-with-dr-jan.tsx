import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import SectionPortraitMark from './section-portrait-mark'

export default function WhyWorkWithDrJan() {
  return (
    <section className="bg-muted/35 py-16" data-has-agent-portrait>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SectionPortraitMark size="md" />
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Work with Dr. Jan Duffy?
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-xl text-muted-foreground">
            Get expert representation on Arroyo at Skyeview Homes and new construction—at no extra cost to you.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="surface-elevated p-6">
            <h3 className="mb-3 text-xl font-bold text-card-foreground">
              Construction Monitoring
            </h3>
            <p className="mb-4 text-muted-foreground">
              Dr. Duffy monitors your home&apos;s construction every 7-10 days, catching issues before your warranty expires. When the superintendent knows Dr. Duffy&apos;s watching, your home gets built right.
            </p>
          </div>

          <div className="surface-elevated p-6">
            <h3 className="mb-3 text-xl font-bold text-card-foreground">
              Building Standards Inspection
            </h3>
            <p className="mb-4 text-muted-foreground">
              Complimentary inspection at closing catches issues BEFORE your warranty matters—saving you thousands in post-warranty repairs.
            </p>
          </div>

          <div className="surface-elevated p-6">
            <h3 className="mb-3 text-xl font-bold text-card-foreground">
              Insider Knowledge
            </h3>
            <p className="mb-4 text-muted-foreground">
              Dr. Duffy knows which new construction communities in Las Vegas including Arroyo at Skyeview Homes fit YOUR lifestyle and budget, with real-time inventory tracking.
            </p>
          </div>

          <div className="surface-elevated p-6">
            <h3 className="mb-3 text-xl font-bold text-card-foreground">
              No Extra Cost
            </h3>
            <p className="mb-4 text-muted-foreground">
              Builders pay for buyer representation on Arroyo at Skyeview Homes—you&apos;re already funding an agent, so choose Dr. Jan Duffy who works exclusively for YOU, not the builder, with construction monitoring every 7-10 days and building standards inspection at closing.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className={cn('min-h-11 px-8 text-lg font-semibold shadow-md')}
          >
            <a href="tel:7029034687">Call Dr. Jan: (702) 903-4687</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className={cn(
              'min-h-11 border-2 border-primary px-8 text-lg font-semibold shadow-md',
              'bg-background text-primary hover:bg-accent',
            )}
          >
            <Link href="/work-with-dr-jan">Learn More About Working with Dr. Jan Duffy</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

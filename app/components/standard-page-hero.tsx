import { cn } from '@/lib/utils'
import { PageSection } from './page-section'
import DrJanPortrait from './dr-jan-portrait'

type StandardPageHeroProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  children?: React.ReactNode
  className?: string
}

/** Consistent inner-page hero matching Desert Luxe tokens (replaces ad-hoc luxury-page-hero sections). */
export default function StandardPageHero({
  title,
  subtitle,
  eyebrow,
  children,
  className,
}: StandardPageHeroProps) {
  return (
    <section className={cn('luxury-page-hero', className)}>
      <PageSection variant="default" className="py-0">
        {eyebrow ? (
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-luxury-champagne">
            {eyebrow}
          </p>
        ) : null}
        <div className="flex items-center gap-4">
          <DrJanPortrait size={64} className="h-16 w-16 shrink-0 ring-2 ring-luxury-champagne/50" />
          <h1 className="font-serif text-4xl font-light tracking-tight text-balance text-luxury-ivory md:text-5xl">
            {title}
          </h1>
        </div>
        {subtitle ? (
          <p data-answer="lead" className="mt-4 max-w-3xl text-lg text-pretty text-luxury-sand md:text-xl">{subtitle}</p>
        ) : null}
        {children}
      </PageSection>
    </section>
  )
}

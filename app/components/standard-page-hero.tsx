import { cn } from '@/lib/utils'
import { PageSection } from './page-section'

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
        <h1 className="font-serif text-4xl font-light tracking-tight text-balance text-luxury-ivory md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-3xl text-lg text-pretty text-luxury-sand md:text-xl">{subtitle}</p>
        ) : null}
        {children}
      </PageSection>
    </section>
  )
}

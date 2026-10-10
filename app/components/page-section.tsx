import { cn } from '@/lib/utils'

type PageSectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  /** Direct answer for this section. Rendered first so answer engines can extract it. */
  answer?: string
  /** Use narrow reading width for long-form content */
  variant?: 'default' | 'narrow' | 'full'
}

const widthClasses = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  full: 'max-w-none',
}

export function PageSection({ children, className, id, answer, variant = 'default' }: PageSectionProps) {
  return (
    <section id={id} className={cn('mx-auto px-4 sm:px-6 lg:px-8', widthClasses[variant], className)}>
      {answer ? (
        <p data-answer="section" className="mb-6 max-w-3xl text-lg text-pretty text-muted-foreground">
          {answer}
        </p>
      ) : null}
      {children}
    </section>
  )
}

export function PageContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <PageSection className={cn('py-8 md:py-12', className)}>{children}</PageSection>
  )
}

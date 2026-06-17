import { cn } from '@/lib/utils'

type PageSectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  /** Use narrow reading width for long-form content */
  variant?: 'default' | 'narrow' | 'full'
}

const widthClasses = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  full: 'max-w-none',
}

export function PageSection({ children, className, id, variant = 'default' }: PageSectionProps) {
  return (
    <section id={id} className={cn('mx-auto px-4 sm:px-6 lg:px-8', widthClasses[variant], className)}>
      {children}
    </section>
  )
}

export function PageContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <PageSection className={cn('py-8 md:py-12', className)}>{children}</PageSection>
  )
}

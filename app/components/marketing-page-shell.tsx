import type { ReactNode } from 'react'
import PurpleSaleBanner from './purple-sale-banner'
import Header from './header'
import Footer from './footer'
import DrJanContactCard from './dr-jan-contact-card'
import { PageContent } from './page-section'

type MarketingPageShellProps = {
  children: ReactNode
  /** JSON-LD / PageSchemas — render before chrome */
  schema?: ReactNode
  showBanner?: boolean
  showContactCta?: boolean
  footerSuppressRealScout?: boolean
  contactCtaClassName?: string
}

/**
 * Standard marketing page structure:
 * schema → banner → header (with breadcrumbs) → main → optional contact CTA → footer
 */
export default function MarketingPageShell({
  children,
  schema,
  showBanner = true,
  showContactCta = false,
  footerSuppressRealScout = false,
  contactCtaClassName,
}: MarketingPageShellProps) {
  return (
    <div className="min-h-screen bg-background">
      {schema}
      {showBanner ? <PurpleSaleBanner /> : null}
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {children}
        {showContactCta ? (
          <PageContent className={contactCtaClassName}>
            <DrJanContactCard />
          </PageContent>
        ) : null}
      </main>
      <Footer suppressRealScout={footerSuppressRealScout} />
    </div>
  )
}

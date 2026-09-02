import { OFFICE_HOURS_DISPLAY, SITE_CONTACT } from '@/lib/site-contact'
import DrJanPortrait from './dr-jan-portrait'

export default function NapContactCard() {
  return (
    <div className="rounded-lg border border-border bg-muted/40 border-l-4 border-l-primary p-6">
      <div className="mb-4">
        <DrJanPortrait size="md" />
      </div>
      <p className="mb-2 text-lg font-semibold text-foreground">{SITE_CONTACT.agentName}</p>
      <p className="mb-2 text-lg text-muted-foreground">{SITE_CONTACT.businessName}</p>
      <p className="mb-2 text-lg text-muted-foreground">{SITE_CONTACT.licenseDisplay}</p>
      <p className="mb-2 text-lg text-muted-foreground">
        {SITE_CONTACT.streetAddress}
        <br />
        {SITE_CONTACT.addressLocality}, {SITE_CONTACT.addressRegion} {SITE_CONTACT.postalCode}
      </p>
      <p className="mb-2 text-lg text-muted-foreground">{OFFICE_HOURS_DISPLAY}</p>
      <p className="mb-2 text-lg text-muted-foreground">
        <a
          href={`tel:${SITE_CONTACT.phoneTel}`}
          className="rounded-sm font-semibold text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Phone: {SITE_CONTACT.phoneDisplay}
        </a>
      </p>
      <p className="text-lg text-muted-foreground">
        Email:{' '}
        <a
          href={`mailto:${SITE_CONTACT.email}`}
          className="rounded-sm text-primary underline-offset-2 hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {SITE_CONTACT.email}
        </a>
      </p>
    </div>
  )
}

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/drjanduffy/buyer-consultation-30-min'

export const CALENDLY_LISTING_CONSULTATION_URL =
  'https://calendly.com/drjanduffy/listing-consultation'

export const CALENDLY_SHOWING_URL = 'https://calendly.com/drjanduffy/showing'

const DEFAULT_CALENDLY_UTM_SOURCE = 'arroyoskyeview.com'

/** Paths where the visitor is a seller, so the listing consultation is the right event. */
const SELLER_PATH_PREFIXES = ['/sellers']

/** Event that fits the page: sellers book a listing consultation, everyone else the buyer consultation. */
export function calendlyEventForPath(pathname?: string | null): string {
  if (pathname && SELLER_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return CALENDLY_LISTING_CONSULTATION_URL
  }
  return CALENDLY_URL
}

/**
 * Adds the site's tracking params. utm_source is the bare domain (the Calendly→FUB
 * worker maps it to the lead source), utm_medium the widget, utm_campaign the page.
 * An existing utm_content is kept.
 */
export function tagCalendlyUrl(eventUrl: string, medium: string, pathname?: string | null): string {
  const url = new URL(eventUrl)
  url.searchParams.set('utm_source', DEFAULT_CALENDLY_UTM_SOURCE)
  url.searchParams.set('utm_medium', medium)
  if (pathname) url.searchParams.set('utm_campaign', pathname)
  url.searchParams.set('hide_gdpr_banner', '1')
  return url.toString()
}

/** Calendly booking links with standard site UTM parameters. */
export function calendlyUrlWithUtm(
  eventUrl: string,
  utmContent: string,
  utmSource = DEFAULT_CALENDLY_UTM_SOURCE,
): string {
  const url = new URL(eventUrl)
  url.searchParams.set('utm_source', utmSource)
  url.searchParams.set('utm_medium', 'website')
  url.searchParams.set('utm_content', utmContent)
  return url.toString()
}

export const CALENDLY_BADGE = {
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: false,
} as const

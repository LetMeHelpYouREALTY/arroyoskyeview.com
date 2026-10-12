export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/drjanduffy/buyer-consultation-30-min'

export const CALENDLY_LISTING_CONSULTATION_URL =
  'https://calendly.com/drjanduffy/listing-consultation'

const DEFAULT_CALENDLY_UTM_SOURCE = 'arroyoskyeview.com'

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

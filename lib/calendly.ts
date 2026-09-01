const DEFAULT_CALENDLY_URL =
  'https://calendly.com/drjanduffy/buyer-consultation-30-min'

function withArroyoCampaign(url: string): string {
  const parsed = new URL(url)
  if (!parsed.searchParams.has('utm_source')) {
    parsed.searchParams.set('utm_source', 'arroyoskyeview.com')
    parsed.searchParams.set('utm_medium', 'website')
    parsed.searchParams.set('utm_campaign', 'buyer-consultation')
  }
  return parsed.toString()
}

export const CALENDLY_URL = withArroyoCampaign(
  process.env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_CALENDLY_URL,
)

export const CALENDLY_BADGE = {
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: false,
} as const

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/drjanduffy/buyer-consultation-30-min'

export const CALENDLY_BADGE = {
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: false,
} as const

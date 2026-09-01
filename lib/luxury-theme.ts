import { siteImage } from '@/lib/cloudflare-images'

/** Desert Luxe brand palette — navy anchor, champagne gold accents, warm neutrals. */
export const LUXURY_COLORS = {
  navy: '#1B2838',
  navyLight: '#2A3A4D',
  champagne: '#C5A880',
  champagneLight: '#D8C3A5',
  ivory: '#F7F3ED',
  sand: '#D8C3A5',
  charcoal: '#3C3C3C',
} as const

export const LUXURY_HERO_IMAGE = siteImage(
  '/images/hero/luxury-hero-skye-canyon.png',
  'images/hero/luxury-hero-skye-canyon',
)
export const LUXURY_HERO_FALLBACK = siteImage(
  '/images/hero/hero-5.jpg',
  'images/hero/hero-5',
)

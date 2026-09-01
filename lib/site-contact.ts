/**
 * Canonical NAP — must match Google Business Profile
 * "Arroyo at Skyeview | Homes by Dr. Jan Duffy".
 * Verified 2026-09-01 via GBP Business Information API:
 * 8912 Vanhoy Creek St, Las Vegas, NV 89166 · (702) 903-4687 · daily 09:00–18:00.
 */
export const SITE_CONTACT = {
  agentName: 'Dr. Jan Duffy',
  businessName: 'Arroyo at Skyeview | Homes by Dr. Jan Duffy',
  phoneDisplay: '(702) 903-4687',
  phoneTel: '7029034687',
  phoneAnalytics: '702-903-4687',
  email: 'info@arroyoskyeview.com',
  licenseDisplay: 'Nevada Real Estate License #S.0197614.LLC',
  streetAddress: '8912 Vanhoy Creek St',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  /** Business postal code per GBP (community ZIP is the same). */
  postalCode: '89166',
  /** Skye Canyon / Arroyo community area */
  communityPostalCode: '89166',
  formattedAddress: '8912 Vanhoy Creek St, Las Vegas, NV 89166',
  geo: {
    latitude: '36.2765',
    longitude: '-115.2832',
  },
} as const

export const OFFICE_HOURS_DISPLAY = 'Monday–Sunday: 9:00 AM – 6:00 PM'

export const OFFICE_OPENING_HOURS = [
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '09:00',
    closes: '18:00',
  },
]

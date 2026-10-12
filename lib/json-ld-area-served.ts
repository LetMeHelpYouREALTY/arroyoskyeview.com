/** Community-focused areaServed for arroyoskyeview.com JSON-LD (Skye Canyon / Las Vegas only). */

export const ARROYO_JSON_LD_AREA_SERVED = [
  {
    '@type': 'Place',
    name: 'Arroyo at Skyeview Homes',
    containedInPlace: {
      '@type': 'City',
      name: 'Las Vegas',
      addressRegion: 'NV',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89166',
      addressCountry: 'US',
    },
  },
] as const

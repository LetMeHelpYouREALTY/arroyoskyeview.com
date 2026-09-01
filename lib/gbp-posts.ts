/**
 * Latest Google Business Profile posts for
 * “Arroyo at Skyeview | Homes by Dr. Jan Duffy”.
 * Snapshot from the GBP localPosts API on 2026-09-01.
 * Fair Housing: market data, sq ft, commute, and incentives only.
 */
export type GbpPost = {
  createdAt: string
  title: string
  summary: string
}

export const GBP_POSTS_FETCHED_AT = '2026-09-01'

export const GBP_LATEST_POSTS: GbpPost[] = [
  {
    createdAt: '2026-08-01',
    title: 'Las Vegas prices barely moved this spring',
    summary:
      'Las Vegas home prices were $449,731 for the 3-month period ending May 2026, down 0.06% year-over-year (Redfin). Inventory rose to 3.6 months of supply in July, with 7,600 active single-family listings (Rice Las Vegas, July 1, 2026).',
  },
  {
    createdAt: '2026-07-22',
    title: 'New-construction incentives at Arroyo at Skyeview',
    summary:
      'Arroyo at Skyeview sits in the northwest growth corridor near Skye Canyon, where builders are still offering rate buydowns on new construction. With 30-year rates at 6.48% that week, a 1–2 point buydown can change the first-year payment. Compare new-build incentive math against resale in the northwest valley.',
  },
  {
    createdAt: '2026-07-30',
    title: 'Home insurance belongs on the buying worksheet',
    summary:
      'If a purchase is on your radar, watch homeowners insurance alongside mortgage rates and price. Insurance is a monthly carrying cost, not a closing-day surprise.',
  },
]

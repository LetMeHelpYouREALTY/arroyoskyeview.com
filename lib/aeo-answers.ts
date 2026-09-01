import { SITE_CONTACT } from '@/lib/site-contact'

export type AeoAnswer = {
  id: 'aeo-who' | 'aeo-where' | 'aeo-service' | 'aeo-how'
  question: string
  answer: string
}

/**
 * Direct-answer copy for AEO (featured snippets, voice) and GEO (AI citations).
 * First sentence is the extractable fact. Numbers are site-published, not estimates.
 */
export const LUXURY_AEO_ANSWERS: readonly AeoAnswer[] = [
  {
    id: 'aeo-who',
    question: 'Who is Dr. Jan Duffy at Arroyo at Skyeview?',
    answer: `Dr. Jan Duffy is the luxury buyer's agent for Arroyo at Skyeview in Skye Canyon, Las Vegas ${SITE_CONTACT.communityPostalCode}. She represents home buyers—not the builder—through Berkshire Hathaway HomeServices Nevada Properties under ${SITE_CONTACT.licenseDisplay}. Call ${SITE_CONTACT.phoneDisplay}.`,
  },
  {
    id: 'aeo-where',
    question: 'Where is Arroyo at Skyeview in Las Vegas?',
    answer:
      'Arroyo at Skyeview is in Skye Canyon, a 1,700-acre master-planned community in northwest Las Vegas, ZIP 89166. The office is at 8912 Vanhoy Creek St, Las Vegas, NV 89166, near US-95 and the 215 Beltway—about 15 minutes from Red Rock Canyon and 20–25 minutes from the Las Vegas Strip.',
  },
  {
    id: 'aeo-service',
    question: 'What luxury realtor services does Dr. Jan Duffy provide at Arroyo at Skyeview?',
    answer:
      'Dr. Jan Duffy provides white-glove buyer representation at Arroyo at Skyeview: private tours of 1,531–1,729 sq ft townhomes, contract advocacy, construction monitoring every 7–10 days, and a building standards inspection at closing. Builders pay the commission, so there is no extra fee to the buyer.',
  },
  {
    id: 'aeo-how',
    question: 'How do I buy an Arroyo at Skyeview townhome with Dr. Jan Duffy?',
    answer: `Call ${SITE_CONTACT.phoneDisplay} or schedule a consult before the first model visit. Register Dr. Jan Duffy with the builder, tour plans in Skye Canyon 89166, then she monitors the build every 7–10 days through closing.`,
  },
] as const

export const LUXURY_AEO_FAQS = LUXURY_AEO_ANSWERS.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

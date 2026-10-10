import { ARROYO_AT_SKYEVIEW, SKYE_CANYON } from '@/lib/hyperlocal-content'
import { ARROYO_PRICE_RANGE } from '@/lib/arroyo-inventory'
import { SITE_CONTACT } from '@/lib/site-contact'
import { SITE_URL } from '@/lib/site-url'

/** Plain-text site brief for answer engines. Not a ranking page. */
export function buildLlmsTxt(): string {
  return `# ${SITE_CONTACT.businessName}

> Buyer representation for new construction townhomes at Arroyo at Skyeview in Skye Canyon, northwest Las Vegas, Nevada ${SKYE_CANYON.zip}.

## Business
- Agent: ${SITE_CONTACT.agentName}
- License: ${SITE_CONTACT.licenseDisplay}
- Phone: ${SITE_CONTACT.phoneDisplay}
- Email: ${SITE_CONTACT.email}
- Office: ${SITE_CONTACT.formattedAddress}
- Hours: ${SITE_CONTACT.hoursDisplay}
- Community: ${SKYE_CANYON.name}, ${SKYE_CANYON.region}, ZIP ${SKYE_CANYON.zip}
- Site: ${SITE_URL}

## Direct answers
- Who represents buyers at Arroyo at Skyeview? ${SITE_CONTACT.agentName} represents home buyers, not the builder sales office. Call ${SITE_CONTACT.phoneDisplay}.
- Where is Arroyo at Skyeview? ${SKYE_CANYON.name}, ${SKYE_CANYON.region}, Nevada ${SKYE_CANYON.zip}, near US-95 and the 215 Beltway.
- What homes are offered? ${ARROYO_AT_SKYEVIEW.beds} bedroom townhomes, ${ARROYO_AT_SKYEVIEW.baths} baths, ${ARROYO_AT_SKYEVIEW.sqft} sq ft, ${ARROYO_AT_SKYEVIEW.garages} garages. Published range ${ARROYO_PRICE_RANGE}. Confirm live inventory before quoting a price.
- What does the buyer agent do during construction? Construction monitoring every 7–10 days and a building standards inspection at closing. Builder-paid commission, no extra fee to the buyer.

## Pages
- ${SITE_URL}/
- ${SITE_URL}/arroyo-at-skyeview/available-homes
- ${SITE_URL}/arroyo-at-skyeview/floor-plans
- ${SITE_URL}/areas/zip-89166
- ${SITE_URL}/work-with-dr-jan
- ${SITE_URL}/buyers/inspections-new-construction
- ${SITE_URL}/buyers/closing-process-guide
- ${SITE_URL}/faq
- ${SITE_URL}/faq/inspections
- ${SITE_URL}/contact-us
`
}

import { ARROYO_AT_SKYEVIEW, SKYE_CANYON } from '@/lib/hyperlocal-content'
import { ARROYO_PRICE_RANGE } from '@/lib/arroyo-inventory'
import { formatLlmsTxtLink, LLMS_TXT_SECTIONS } from '@/lib/llms-txt-pages'
import { SITE_CONTACT } from '@/lib/site-contact'
import { SITE_URL } from '@/lib/site-url'

/** Plain-text site brief for answer engines. Not a ranking page. */
export function buildLlmsTxt(): string {
  const pageSections = LLMS_TXT_SECTIONS.map(
    (section) =>
      `## ${section.heading}\n${section.links.map(formatLlmsTxtLink).join('\n')}`,
  ).join('\n\n')

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
- Sitemap: ${SITE_URL}/sitemap.xml

## Direct answers
- Who represents buyers at Arroyo at Skyeview? ${SITE_CONTACT.agentName} represents home buyers, not the builder sales office. Call ${SITE_CONTACT.phoneDisplay}.
- Where is Arroyo at Skyeview? ${SKYE_CANYON.name}, ${SKYE_CANYON.region}, Nevada ${SKYE_CANYON.zip}, near US-95 and the 215 Beltway.
- What homes are offered? ${ARROYO_AT_SKYEVIEW.beds} bedroom townhomes, ${ARROYO_AT_SKYEVIEW.baths} baths, ${ARROYO_AT_SKYEVIEW.sqft} sq ft, ${ARROYO_AT_SKYEVIEW.garages} garages. Published range ${ARROYO_PRICE_RANGE}. Confirm live inventory before quoting a price.
- What does the buyer agent do during construction? Construction monitoring every 7–10 days and a building standards inspection at closing. Builder-paid commission, no extra fee to the buyer.
- How do I sell my current home to buy at Arroyo? See ${SITE_URL}/sellers/sell-to-buy-at-arroyo-skyeview for a sell-to-buy plan with ${SITE_CONTACT.agentName}.

${pageSections}

## Optional (market blog and legal)
- ${SITE_URL}/blog/new-home-inventory-2x
- ${SITE_URL}/legal
- ${SITE_URL}/privacy-policy
`
}

import { LUXURY_AEO_FAQS } from '@/lib/aeo-answers'
import { ENTITY_IDS, siteEntityGraphJsonLd } from '@/lib/entity-graph'
import { localBusinessJsonLd } from '@/lib/local-business-schema'
import { SITE_URL } from '@/lib/site-url'

/**
 * Sitewide entity graph for GEO/AEO. One @graph so Person, Place, Service,
 * and LocalBusiness share @id links instead of disconnected JSON-LD blobs.
 */
export default function StructuredData() {
  const graph = siteEntityGraphJsonLd()
  const localBusiness = localBusinessJsonLd()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}#faq`,
    mainEntity: LUXURY_AEO_FAQS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}#about-arroyo`,
    headline: 'Luxury buyer representation at Arroyo at Skyeview, Skye Canyon Las Vegas 89166',
    description:
      "Dr. Jan Duffy is the luxury buyer's agent for Arroyo at Skyeview in Skye Canyon, northwest Las Vegas ZIP 89166. She represents home buyers—not the builder.",
    author: { '@id': ENTITY_IDS.person },
    publisher: { '@id': ENTITY_IDS.organization },
    about: [{ '@id': ENTITY_IDS.arroyo }, { '@id': ENTITY_IDS.person }],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE_URL,
    },
    image: localBusiness.image,
    dateModified: new Date().toISOString().split('T')[0],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  )
}

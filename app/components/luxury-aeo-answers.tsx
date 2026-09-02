import { LUXURY_AEO_ANSWERS } from '@/lib/aeo-answers'
import { SITE_CONTACT } from '@/lib/site-contact'
import SectionPortraitMark from './section-portrait-mark'

/**
 * Visible, speakable answers for AEO/GEO. IDs match SpeakableSpecification
 * cssSelector values in homepage WebPage JSON-LD.
 */
export default function LuxuryAeoAnswers() {
  return (
    <section
      className="bg-luxury-navy py-16 text-luxury-ivory md:py-20"
      aria-labelledby="aeo-heading"
      data-has-agent-portrait
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionPortraitMark size="md" decorative={false} />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-luxury-champagne">
            Arroyo at Skyeview · Skye Canyon · 89166
          </p>
          <h2
            id="aeo-heading"
            className="mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl"
          >
            Dr. Jan Duffy, luxury buyer&apos;s agent
          </h2>
          <p className="mt-4 text-luxury-sand">
            Direct answers for search, voice, and AI assistants—then call {SITE_CONTACT.phoneDisplay}.
          </p>
        </div>
        <dl className="mt-12 space-y-10">
          {LUXURY_AEO_ANSWERS.map((item) => (
            <div key={item.id} className="border-l-2 border-luxury-champagne/50 pl-6">
              <dt className="font-serif text-xl font-light text-luxury-ivory">{item.question}</dt>
              <dd
                id={item.id}
                className="mt-3 text-base leading-relaxed text-luxury-ivory/90 text-pretty"
              >
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

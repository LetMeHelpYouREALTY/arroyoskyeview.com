import { preload } from 'react-dom'
import CalendlyScheduleButton from './calendly-schedule-button'
import DrJanPortrait from './dr-jan-portrait'
import HeroContactLinks from './hero-contact-links'

const HERO_MOBILE = '/images/hero/luxury-hero-828.webp'
const HERO_DESKTOP = '/images/hero/luxury-hero-skye-canyon.webp'
const HERO_SRC_SET = `${HERO_MOBILE} 828w, ${HERO_DESKTOP} 1280w`

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 md:justify-start" aria-hidden="true">
      <div className="h-px w-12 bg-[#C5A880]" />
      <div className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
      <div className="h-px w-12 bg-[#C5A880]" />
    </div>
  )
}

export default function LuxuryHero() {
  // href only. A srcset preload omits href, and that link is what the lab kept unresolved until first paint.
  preload(HERO_MOBILE, {
    as: 'image',
    fetchPriority: 'high',
  })

  return (
    <section
      aria-label="Arroyo at Skyeview luxury townhomes hero"
      className="relative min-h-[92dvh] w-full overflow-hidden bg-[#1B2838]"
    >
      {/* picture skips React's automatic srcset preload, which is emitted without an href. */}
      <picture className="pointer-events-none absolute inset-0">
        <img
          src={HERO_MOBILE}
          srcSet={HERO_SRC_SET}
          sizes="100vw"
          alt="Arroyo at Skyeview townhomes with Red Rock Canyon in the background"
          fetchPriority="high"
          decoding="async"
          width={1280}
          height={853}
          className="h-full w-full object-cover"
        />
      </picture>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgb(27 40 56 / 0.95), rgb(27 40 56 / 0.6) 45%, rgb(27 40 56 / 0.2)), radial-gradient(ellipse at center, transparent 40%, rgb(27 40 56 / 0.55) 100%), linear-gradient(to right, rgb(27 40 56 / 0.75), rgb(27 40 56 / 0.35), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-[92dvh] flex-col items-center justify-center py-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 text-center md:items-start md:px-10 md:text-left">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-[#C5A880]">
            Skye Canyon · Northwest Las Vegas · 89166
          </p>

          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
            <DrJanPortrait
              size={176}
              loading="eager"
              fetchPriority="low"
              className="h-36 w-36 shadow-2xl md:h-44 md:w-44"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-[#F7F3ED] text-balance sm:text-6xl lg:text-7xl">
                Arroyo at{' '}
                <em className="not-italic text-[#C5A880]">Skyeview</em>
              </h1>
              <GoldDivider />
              <p className="font-serif text-xl font-light italic leading-relaxed text-[#D8C3A5] text-balance sm:text-2xl">
                New-build townhomes in the heart of Skye Canyon
              </p>
            </div>
          </div>

          <p data-answer="lead" className="max-w-xl font-sans text-base leading-relaxed text-[#F7F3ED]/80 text-pretty">
            Dr. Jan Duffy represents you, not the builder. Thoughtfully designed townhomes in a{' '}
            <strong className="font-medium text-[#F7F3ED]">1,700-acre</strong> community, minutes from Red Rock Canyon.
          </p>

          <div className="flex flex-col items-center gap-4 md:items-start">
            <CalendlyScheduleButton
              text="Schedule a visit"
              variant="champagne"
              className="px-8 py-3 text-xs uppercase tracking-[0.18em]"
            />
            <HeroContactLinks />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}

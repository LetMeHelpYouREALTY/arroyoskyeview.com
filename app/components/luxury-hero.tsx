'use client'

import Image from 'next/image'
import CalendlyScheduleButton from './calendly-schedule-button'
import { trackPhoneClick, trackSmsClick } from './analytics-tracker'
import DrJanPortrait from './dr-jan-portrait'

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 md:justify-start" aria-hidden="true">
      <div className="h-px w-12 bg-[#C5A880]" />
      <div className="h-1.5 w-1.5 rotate-45 bg-[#C5A880]" />
      <div className="h-px w-12 bg-[#C5A880]" />
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LuxuryHero() {
  const phoneNumber = 'tel:+17029034687'
  const smsNumber = 'sms:+17029034687'
  const displayPhone = '(702) 903-4687'

  function handlePhoneClick() {
    trackPhoneClick('702-903-4687', 'luxury_hero_call_cta')
  }

  function handleSmsClick() {
    trackSmsClick('luxury_hero_text_cta')
  }

  return (
    <section
      aria-label="Arroyo at Skyeview luxury townhomes hero"
      className="relative min-h-[92dvh] w-full overflow-hidden"
    >
      {/* ── Background image layer ─────────────────────────────────────── */}
      <Image
        src="/images/hero/luxury-hero-skye-canyon.webp"
        alt="Arroyo at Skyeview townhomes with Red Rock Canyon in the background"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={68}
        className="object-cover"
      />

      {/* ── Gradient overlay: navy bottom-to-top for readability ─────── */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1B2838]/95 via-[#1B2838]/60 to-[#1B2838]/20"
        aria-hidden="true"
      />

      {/* ── Subtle gold-tinted vignette on sides ──────────────────────── */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(27,40,56,0.55)_100%)]"
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B2838]/75 via-[#1B2838]/35 to-transparent" aria-hidden="true" />

      <div className="relative flex min-h-[92dvh] flex-col items-center justify-center py-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 text-center md:items-start md:px-10 md:text-left">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-[#C5A880]">
            Skye Canyon · Northwest Las Vegas · 89166
          </p>

          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
            <DrJanPortrait size={176} className="h-36 w-36 shadow-2xl md:h-44 md:w-44" />
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
            <p className="font-sans text-sm tracking-[0.12em] text-[#C5A880]">
              <a href={phoneNumber} onClick={handlePhoneClick} className="hover:text-[#F7F3ED]">
                Call {displayPhone}
              </a>
              <span className="px-2 text-[#C5A880]/50" aria-hidden>
                ·
              </span>
              <a href={smsNumber} onClick={handleSmsClick} className="hover:text-[#F7F3ED]">
                Text
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ── Decorative bottom border ──────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}

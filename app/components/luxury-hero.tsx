'use client'

import type { ReactNode } from 'react'
import { Phone, MessageSquare, MapPin, Dumbbell, Mountain, Map } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { trackPhoneClick, trackSmsClick } from './analytics-tracker'

// ─── Sub-components ──────────────────────────────────────────────────────────

interface BadgeProps {
  icon: ReactNode
  label: string
}

function HyperlocalBadge({ icon, label }: BadgeProps) {
  return (
    <div
      className="flex items-center gap-2 rounded-full border border-[#C5A880]/40 bg-[#1B2838]/70 px-4 py-2 backdrop-blur-sm"
      role="listitem"
    >
      <span className="text-[#C5A880]" aria-hidden="true">
        {icon}
      </span>
      <span className="font-sans text-xs font-medium tracking-wide text-[#F7F3ED]/90 sm:text-sm">
        {label}
      </span>
    </div>
  )
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
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
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/hero-14.jpg')" }}
        role="img"
        aria-label="Aerial view of Arroyo at Skyeview townhomes with Red Rock Canyon in the background"
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
      <div className="relative flex min-h-[92dvh] flex-col items-center justify-end pb-12 sm:justify-center sm:pb-0">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-5 text-center sm:gap-8 sm:px-8 lg:px-12">

          {/* Location pill */}
          <div
            className="flex items-center gap-2 rounded-full border border-[#C5A880]/50 bg-[#C5A880]/10 px-4 py-1.5 backdrop-blur-sm"
            aria-label="Location: Skye Canyon, Northwest Las Vegas"
          >
            <MapPin className="h-3.5 w-3.5 text-[#C5A880]" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A880]">
              Skye Canyon · Northwest Las Vegas · 89166
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-3">
            <h1 className="font-serif text-4xl font-light leading-tight tracking-tight text-[#F7F3ED] text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              Arroyo at{' '}
              <em className="not-italic text-[#C5A880]">Skyeview</em>
            </h1>

            <GoldDivider />

            <p className="font-serif text-lg font-light italic leading-relaxed text-[#D8C3A5] text-balance sm:text-xl lg:text-2xl">
              New-Build Townhomes in the Heart of Skye Canyon
            </p>
          </div>

          {/* Body copy */}
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-[#F7F3ED]/75 text-pretty sm:text-base">
            Discover resort-inspired living where the Mojave desert meets modern luxury.
            Arroyo at Skyeview offers thoughtfully designed townhomes within a{' '}
            <strong className="font-semibold text-[#F7F3ED]/90">1,700-acre master-planned community</strong>{' '}
            — minutes from Red Rock Canyon, world-class dining, and the Las Vegas Strip.
          </p>

          {/* Hyperlocal badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            role="list"
            aria-label="Community highlights"
          >
            <HyperlocalBadge
              icon={<Mountain className="h-4 w-4" />}
              label="Red Rock Canyon Views"
            />
            <HyperlocalBadge
              icon={<Dumbbell className="h-4 w-4" />}
              label="Skye Fitness Center"
            />
            <HyperlocalBadge
              icon={<Map className="h-4 w-4" />}
              label="1,700-Acre Master Plan"
            />
          </div>

          {/* CTA buttons */}
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button
              asChild
              size="lg"
              className="group w-full cursor-pointer rounded-full border-0 bg-[#C5A880] px-8 py-6 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-[#1B2838] shadow-lg shadow-[#C5A880]/20 transition-all duration-300 hover:bg-[#D8C3A5] hover:shadow-xl hover:shadow-[#C5A880]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2838] sm:w-auto"
            >
              <a
                href={phoneNumber}
                aria-label={`Call Dr. Jan Duffy at ${displayPhone}`}
                onClick={handlePhoneClick}
              >
                <Phone
                  className="mr-2.5 h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                Call {displayPhone}
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group w-full cursor-pointer rounded-full border-[#C5A880]/60 bg-transparent px-8 py-6 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-[#C5A880] shadow-md transition-all duration-300 hover:border-[#C5A880] hover:bg-[#C5A880]/10 hover:text-[#D8C3A5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2838] sm:w-auto"
            >
              <a
                href={smsNumber}
                aria-label={`Text Dr. Jan Duffy at ${displayPhone}`}
                onClick={handleSmsClick}
              >
                <MessageSquare
                  className="mr-2.5 h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                Text Us Now
              </a>
            </Button>
          </div>

          {/* Agent byline */}
          <p className="font-sans text-xs font-medium tracking-wide text-[#F7F3ED]/45">
            Dr. Jan Duffy · Luxury Buyer&apos;s Agent · Skye Canyon Specialist
          </p>
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

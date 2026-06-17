import Image from 'next/image'
import { LUXURY_HERO_FALLBACK } from '@/lib/luxury-theme'

type LuxuryPageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  imageSrc?: string
  imageAlt?: string
  children?: React.ReactNode
}

export default function LuxuryPageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc = LUXURY_HERO_FALLBACK,
  imageAlt = 'Luxury new construction homes in Skye Canyon, Northwest Las Vegas',
  children,
}: LuxuryPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-luxury-navy py-16 text-luxury-ivory md:py-20">
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-luxury-navy/95 via-luxury-navy/75 to-luxury-navy/40"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-luxury-champagne/60 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-luxury-champagne">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-serif text-4xl font-light tracking-tight text-balance md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-3xl font-sans text-lg text-luxury-sand text-pretty md:text-xl">
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  )
}

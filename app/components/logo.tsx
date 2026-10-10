'use client'

import Link from 'next/link'
import DrJanPortrait from './dr-jan-portrait'

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Arroyo at Skyeview, home">
      <DrJanPortrait size={44} loading="eager" className="h-11 w-11" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-light tracking-wide text-luxury-ivory transition-colors group-hover:text-luxury-sand">
          Arroyo
        </span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-luxury-champagne">
          at Skyeview
        </span>
      </span>
    </Link>
  )
}

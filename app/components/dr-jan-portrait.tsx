'use client'

import SiteImage from './site-image'
import { DR_JAN_PORTRAIT_ALT, DR_JAN_PORTRAIT_SRC } from '@/lib/brand-images'
import { cn } from '@/lib/utils'

const SIZE_PX = {
  xs: 40,
  sm: 56,
  md: 88,
  lg: 144,
  xl: 208,
  hero: 240,
} as const

export type DrJanPortraitSize = keyof typeof SIZE_PX

type DrJanPortraitProps = {
  size?: DrJanPortraitSize
  className?: string
  priority?: boolean
  /** Repeated section marks stay decorative; header/hero keep the alt text. */
  decorative?: boolean
}

export default function DrJanPortrait({
  size = 'md',
  className,
  priority = false,
  decorative = false,
}: DrJanPortraitProps) {
  const px = SIZE_PX[size]

  return (
    <span
      className={cn(
        'inline-flex shrink-0 overflow-hidden rounded-full bg-black shadow-md ring-2 ring-luxury-champagne/80',
        className,
      )}
      style={{ width: px, height: px }}
      aria-hidden={decorative || undefined}
    >
      <SiteImage
        src={DR_JAN_PORTRAIT_SRC}
        alt={decorative ? '' : DR_JAN_PORTRAIT_ALT}
        width={px}
        height={px}
        priority={priority}
        className="h-full w-full object-cover"
        sizes={`${px}px`}
      />
    </span>
  )
}

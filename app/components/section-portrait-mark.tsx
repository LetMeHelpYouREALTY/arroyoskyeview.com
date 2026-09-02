'use client'

import DrJanPortrait, { type DrJanPortraitSize } from './dr-jan-portrait'
import { cn } from '@/lib/utils'

type SectionPortraitMarkProps = {
  size?: DrJanPortraitSize
  align?: 'start' | 'center'
  className?: string
  priority?: boolean
  decorative?: boolean
}

/**
 * Standard placement for the Dr. Jan portrait at the top of a section heading.
 */
export default function SectionPortraitMark({
  size = 'sm',
  align = 'center',
  className,
  priority = false,
  decorative = true,
}: SectionPortraitMarkProps) {
  return (
    <div
      className={cn(
        'mb-4',
        align === 'center' && 'flex justify-center',
        align === 'start' && 'flex justify-start',
        className,
      )}
    >
      <DrJanPortrait
        size={size}
        priority={priority}
        decorative={decorative}
      />
    </div>
  )
}

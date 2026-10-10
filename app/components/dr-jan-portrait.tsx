import Image from 'next/image'
import { cn } from '@/lib/utils'

type DrJanPortraitProps = {
  size?: number
  className?: string
  priority?: boolean
}

/** Circular brand portrait of Dr. Jan Duffy. */
export default function DrJanPortrait({
  size = 48,
  className,
  priority = false,
}: DrJanPortraitProps) {
  return (
    <Image
      src="/images/dr-jan-duffy.png"
      alt="Dr. Jan Duffy, buyer's agent, on the phone"
      width={size}
      height={size}
      priority={priority}
      className={cn('rounded-full object-cover', className)}
    />
  )
}

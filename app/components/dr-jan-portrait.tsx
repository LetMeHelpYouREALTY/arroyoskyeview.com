import Image from 'next/image'
import { cn } from '@/lib/utils'

type DrJanPortraitProps = {
  size?: number
  className?: string
  priority?: boolean
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

/** Circular brand portrait of Dr. Jan Duffy. */
export default function DrJanPortrait({
  size = 48,
  className,
  priority = false,
  loading,
  fetchPriority,
}: DrJanPortraitProps) {
  return (
    <Image
      src="/images/dr-jan-duffy.png"
      alt="Dr. Jan Duffy, buyer's agent, on the phone"
      width={size}
      height={size}
      priority={priority}
      {...(!priority && loading ? { loading } : {})}
      {...(fetchPriority ? { fetchPriority } : {})}
      className={cn(className, 'rounded-full object-cover ring-1 ring-[#c5a880]')}
    />
  )
}

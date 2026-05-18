'use client'

import { useState, useEffect } from 'react'
import { trackPhoneClick, trackSmsClick } from './analytics-tracker'
import { cn } from '@/lib/utils'

interface CTAOption {
  text: string
  type: 'call' | 'text'
  variant?: 'primary' | 'secondary'
}

const ctaOptions: CTAOption[] = [
  {
    text: "Claim Your New Home Before It's Gone",
    type: 'call',
    variant: 'primary',
  },
  {
    text: 'Lock In Pre-Construction Pricing Today',
    type: 'text',
    variant: 'primary',
  },
  {
    text: "Ready to Build Your New Construction Home? Let's Talk",
    type: 'call',
    variant: 'primary',
  },
  {
    text: 'Get the Inside Track on Available Lots',
    type: 'text',
    variant: 'primary',
  },
  {
    text: "First-Time New Home Buyer? I'll Guide You Through It",
    type: 'call',
    variant: 'primary',
  },
  {
    text: "Don't Miss Out on Your Perfect Floor Plan",
    type: 'text',
    variant: 'primary',
  },
  {
    text: 'Questions About Builder Incentives? Call Me',
    type: 'call',
    variant: 'primary',
  },
  {
    text: 'See Your New Home Before Construction Starts',
    type: 'call',
    variant: 'primary',
  },
  {
    text: "Move-In Ready or Pre-Construction? Let's Find Your Perfect Fit",
    type: 'text',
    variant: 'primary',
  },
  {
    text: 'Get Expert Guidance on Builder Incentives & Pricing',
    type: 'call',
    variant: 'primary',
  },
]

interface CTARotatorProps {
  variant?: 'primary' | 'secondary'
  className?: string
  showRotate?: boolean
  specificIndex?: number
}

export default function CTARotator({
  variant = 'primary',
  className = '',
  showRotate = false,
  specificIndex,
}: CTARotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(
    specificIndex !== undefined ? specificIndex : Math.floor(Math.random() * ctaOptions.length)
  )

  useEffect(() => {
    if (showRotate && specificIndex === undefined) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % ctaOptions.length)
      }, 5000) // Rotate every 5 seconds

      return () => clearInterval(interval)
    }
  }, [showRotate, specificIndex])

  const currentCTA = ctaOptions[currentIndex]
  const phoneNumber = '(702) 903-4687'
  const telLink = `tel:7029034687`
  const smsLink = `sms:7029034687`

  const isPrimary = variant === 'primary' || currentCTA.variant === 'primary'

  const handleClick = () => {
    if (currentCTA.type === 'call') {
      trackPhoneClick('702-903-4687', 'cta_rotator')
    } else {
      trackSmsClick('cta_rotator')
    }
  }

  return (
    <div className={className}>
      <a
        href={currentCTA.type === 'call' ? telLink : smsLink}
        onClick={handleClick}
        className={cn(
          'inline-block min-h-[52px] rounded-lg px-8 py-4 text-center text-lg font-semibold transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          isPrimary
            ? 'bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl motion-safe:hover:scale-[1.02]'
            : 'border-2 border-border bg-muted text-foreground hover:bg-muted/80',
        )}
      >
        {currentCTA.text} - {currentCTA.type === 'call' ? 'Call' : 'Text'} Dr. Jan {phoneNumber}
      </a>
    </div>
  )
}

export function getCTAByContext(context: string): { text: string; type: 'call' | 'text' } {
  const contextLower = context.toLowerCase()

  // Match CTAs to page context
  if (contextLower.includes('inventory') || contextLower.includes('available')) {
    return ctaOptions[0] // "Claim Your New Home Before It's Gone"
  }
  if (contextLower.includes('pre-construction') || contextLower.includes('pricing')) {
    return ctaOptions[1] // "Lock In Pre-Construction Pricing Today"
  }
  if (contextLower.includes('build') || contextLower.includes('dream')) {
    return ctaOptions[2] // "Ready to Build Your New Construction Home? Let's Talk"
  }
  if (contextLower.includes('lot') || contextLower.includes('homesite')) {
    return ctaOptions[3] // "Get the Inside Track on Available Lots"
  }
  if (contextLower.includes('first-time') || contextLower.includes('homebuyer')) {
    return ctaOptions[4] // "First-Time New Home Buyer? I'll Guide You Through It"
  }
  if (contextLower.includes('floor plan') || contextLower.includes('plan')) {
    return ctaOptions[5] // "Don't Miss Out on Your Perfect Floor Plan"
  }
  if (contextLower.includes('incentive') || contextLower.includes('builder')) {
    return ctaOptions[6] // "Questions About Builder Incentives? Call Me"
  }
  if (contextLower.includes('construction') || contextLower.includes('build')) {
    return ctaOptions[7] // "See Your New Home Before Construction Starts"
  }
  if (contextLower.includes('move-in') || contextLower.includes('ready')) {
    return ctaOptions[8] // "Move-In Ready or Pre-Construction? Let's Find Your Perfect Fit"
  }
  if (contextLower.includes('pricing') || contextLower.includes('incentive')) {
    return ctaOptions[9] // "Get Expert Guidance on Builder Incentives & Pricing"
  }

  // Default to first CTA
  return ctaOptions[0]
}


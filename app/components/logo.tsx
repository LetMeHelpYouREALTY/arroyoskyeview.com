'use client'

import Link from 'next/link'
import DrJanPortrait from './dr-jan-portrait'
import { trackPhoneClick } from './analytics-tracker'

export default function Logo() {
  const handleClick = () => {
    trackPhoneClick('702-903-4687', 'logo_header')
  }

  return (
    <Link href="tel:7029034687" onClick={handleClick} className="flex items-center space-x-3 group transition-all duration-200">
      <DrJanPortrait size={48} priority className="h-12 w-12 shadow-lg transition-transform duration-300 group-hover:scale-105" />

      {/* Phone Number Display */}
      <div className="flex flex-col leading-none">
        <span className="text-sm md:text-base font-extrabold text-foreground leading-tight tracking-tight group-hover:text-primary transition-colors">
          (702) 903-4687
        </span>
        <div className="mt-0.5 flex items-center gap-1.5">
          <div className="h-px w-4 bg-blue-300"></div>
          <span className="text-[9px] md:text-[10px] font-semibold text-muted-foreground tracking-wide">
            Call or Text
          </span>
        </div>
      </div>
    </Link>
  )
}


'use client'

import Link from 'next/link'
import { trackPhoneClick } from './analytics-tracker'

export default function Logo() {
  const handleClick = () => {
    trackPhoneClick('702-903-4687', 'logo_header')
  }

  return (
    <Link href="tel:7029034687" onClick={handleClick} className="flex items-center space-x-3 group transition-all duration-200">
      {/* Phone Number Display */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          {/* Phone Icon */}
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        {/* Premium accent badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>

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


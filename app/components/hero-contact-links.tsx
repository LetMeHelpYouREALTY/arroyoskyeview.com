'use client'

import { trackPhoneClick, trackSmsClick } from './analytics-tracker'

const PHONE_HREF = 'tel:+17029034687'
const SMS_HREF = 'sms:+17029034687'
const DISPLAY_PHONE = '(702) 903-4687'

export default function HeroContactLinks() {
  return (
    <p className="font-sans text-sm tracking-[0.12em] text-[#C5A880]">
      <a
        href={PHONE_HREF}
        onClick={() => trackPhoneClick('702-903-4687', 'luxury_hero_call_cta')}
        className="hover:text-[#F7F3ED]"
      >
        Call {DISPLAY_PHONE}
      </a>
      <span className="px-2 text-[#C5A880]/50" aria-hidden>
        ·
      </span>
      <a
        href={SMS_HREF}
        onClick={() => trackSmsClick('luxury_hero_text_cta')}
        className="hover:text-[#F7F3ED]"
      >
        Text
      </a>
    </p>
  )
}

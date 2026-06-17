'use client'

import { SITE_CONTACT } from '@/lib/site-contact'
import { trackPhoneClick, trackSmsClick } from './analytics-tracker'
import CalendlyScheduleButton from './calendly-schedule-button'

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Buyer&apos;s Agent: Skye Canyon, Northwest Las Vegas | Dr. Jan Duffy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Get expert buyer representation for Arroyo at Skyeview Homes and new construction in Las Vegas.
            Dr. Jan Duffy represents HOME BUYERS, not the builder—at no extra cost to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <CalendlyScheduleButton
              text="Schedule time with me"
              variant="champagne"
              className="w-full text-center"
            />
          </div>

          <a
            href={`tel:${SITE_CONTACT.phoneTel}`}
            onClick={() => trackPhoneClick(SITE_CONTACT.phoneAnalytics, 'contact_hero_call')}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 group min-h-11"
          >
            <div className="flex items-center justify-center mb-4" aria-hidden>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-2 text-center">Call</h2>
            <p className="text-blue-100 text-center text-lg font-bold">{SITE_CONTACT.phoneDisplay}</p>
          </a>

          <a
            href={`mailto:${SITE_CONTACT.email}`}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 group min-h-11"
          >
            <div className="flex items-center justify-center mb-4" aria-hidden>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-2 text-center">Email</h2>
            <p className="text-blue-100 text-center break-all">{SITE_CONTACT.email}</p>
          </a>

          <a
            href={`sms:${SITE_CONTACT.phoneTel}`}
            onClick={() => trackSmsClick('contact_hero_text')}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 group min-h-11"
          >
            <div className="flex items-center justify-center mb-4" aria-hidden>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-2 text-center">Text</h2>
            <p className="text-blue-100 text-center text-lg font-bold">{SITE_CONTACT.phoneDisplay}</p>
          </a>
        </div>

        <address className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20 not-italic text-center">
          <h2 className="text-2xl font-bold mb-2">{SITE_CONTACT.agentName}</h2>
          <p className="text-blue-100 mb-2">{SITE_CONTACT.licenseDisplay}</p>
          <p className="text-blue-100 mb-4">New Construction Home Preferred Buyer&apos;s Agent</p>
          <p className="text-white font-medium mb-4">{SITE_CONTACT.formattedAddress}</p>
          <div className="pt-4 border-t border-white/20">
            <p className="text-sm text-blue-200 mb-2">Available 7 days a week</p>
            <p className="text-lg text-white font-semibold">9:00 AM - 6:00 PM</p>
          </div>
        </address>
      </div>
    </section>
  )
}

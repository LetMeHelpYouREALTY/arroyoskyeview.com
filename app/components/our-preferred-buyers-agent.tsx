'use client'

import Link from 'next/link'
import { trackPhoneClick, trackCTAClick } from './analytics-tracker'

export default function OurPreferredBuyersAgent() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-4">
              <span className="text-blue-800 font-semibold text-sm">New Construction Home Expert | Las Vegas, Nevada</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert Buyer Representation - Dr. Jan Duffy Represents YOU
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dr. Jan Duffy provides expert buyer representation on all new construction homes in Las Vegas, Nevada, including Arroyo at Skyeview Homes and other Skye Canyon communities (zip code 89166). She represents YOU, not the builder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Why Dr. Duffy?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Construction monitoring every 7-10 days during build</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Complimentary building standards inspection at closing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Insider knowledge of all new construction communities in Las Vegas, Nevada & Skye Canyon</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Works for YOU, not the builder</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">No Extra Cost</h3>
              <p className="text-muted-foreground mb-4">
                Builders pay for buyer representation on all new construction homes in Las Vegas, Nevada. The commission is built into the home pricing whether you use an agent or not—so you're already funding representation.
              </p>
              <p className="text-muted-foreground font-semibold">
                Choose Dr. Jan Duffy, a New Construction Home Expert who protects YOUR interests throughout the entire process. She represents YOU, not the builder.
              </p>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-border">
            <a
              href="tel:7029034687"
              onClick={() => trackPhoneClick('702-903-4687', 'preferred_buyers_agent')}
              className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary transition shadow-lg mr-4 mb-4"
            >
              Call Dr. Jan: (702) 903-4687
            </a>
            <Link
              href="/work-with-dr-jan"
              onClick={() => trackCTAClick('Learn More About Dr. Duffy', 'preferred_buyers_agent')}
              className="inline-block bg-white text-primary border-2 border-luxury-champagne px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition shadow-lg mb-4"
            >
              Learn More About Dr. Duffy
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


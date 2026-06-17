'use client'

import { useState } from 'react'
import Link from 'next/link'
import { trackFAQExpand } from './analytics-tracker'

const topFAQs = [
  {
    question: 'Does it cost more to use a buyer\'s agent for Arroyo at Skyeview Homes?',
    answer: 'No—builders pay for buyer representation on all new construction homes including Arroyo at Skyeview Homes. The commission is built into the home pricing whether you use an agent or not. Dr. Jan Duffy represents HOME BUYERS, not the builder, and there\'s no extra cost to you.',
  },
  {
    question: 'Why should I work with Dr. Jan Duffy when buying Arroyo at Skyeview Homes?',
    answer: 'Dr. Jan Duffy is a New Construction Home Expert and buyer\'s agent who specializes in Arroyo at Skyeview Homes in Skye Canyon, zip code 89166, northwest Las Vegas. She represents HOME BUYERS, not the builder. She offers construction monitoring every 7-10 days, building standards inspection at closing, and insider knowledge of available inventory and pricing—all at no extra cost.',
  },
  {
    question: 'What makes Dr. Jan Duffy different from going directly to the builder?',
    answer: 'The builder\'s entire team works exclusively for the builder, not for you. Dr. Jan Duffy is a buyer\'s agent who monitors construction quality and advocates solely for YOUR interests as a home buyer. She represents HOME BUYERS, not the builder, ensuring you get the best deal and quality construction.',
  },
]

export default function HomepageFAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions About Arroyo at Skyeview Homes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get quick answers about buying Arroyo at Skyeview Homes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          {topFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-muted border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => {
                  const newIndex = openIndex === index ? null : index
                  setOpenIndex(newIndex)
                  if (newIndex !== null) {
                    trackFAQExpand(faq.question)
                  }
                }}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted transition"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center text-primary hover:text-primary font-semibold text-lg"
          >
            View All FAQs
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}


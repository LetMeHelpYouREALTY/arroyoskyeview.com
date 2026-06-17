'use client'

import { useState } from 'react'
import { trackFAQExpand } from './analytics-tracker'

const faqs = [
  {
    question: 'Does it cost more to use a buyer\'s agent for Arroyo at Skyeview Homes?',
    answer: 'No—builders pay for buyer representation on all new construction homes including Arroyo at Skyeview Homes. The commission is built into the home pricing whether you use an agent or not. You\'re already paying for representation, so choose someone who protects YOUR interests. Dr. Jan Duffy represents HOME BUYERS, not the builder. There\'s no extra cost to you.',
  },
  {
    question: 'What makes Dr. Jan Duffy different from going directly to the builder\'s agent for Arroyo at Skyeview Homes?',
    answer: 'The builder\'s entire team—from model home agents to carpenters—works exclusively for the builder, not for you. Dr. Jan Duffy is a New Construction Home Expert and buyer\'s agent who monitors construction quality at Arroyo at Skyeview Homes every 7-10 days and advocates solely for YOUR interests as a home buyer. She represents HOME BUYERS, not the builder. This means you get construction monitoring, building standards inspection, and insider knowledge—all at no extra cost.',
  },
  {
    question: 'Why should I work with Dr. Jan Duffy when buying Arroyo at Skyeview Homes in Skye Canyon?',
    answer: 'Dr. Jan Duffy is a New Construction Home Expert and buyer\'s agent who specializes in Arroyo at Skyeview Homes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada. She represents HOME BUYERS, not the builder. She offers construction monitoring every 7-10 days, building standards inspection at closing, and insider knowledge of available inventory, pricing, and lot selection. Best of all, builders pay for buyer representation—so there\'s no extra cost to you. Call/text (702) 903-4687 to get started.',
  },
]

export default function DrJanFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    const newIndex = openIndex === index ? null : index
    setOpenIndex(newIndex)
    if (newIndex !== null) {
      trackFAQExpand(faqs[index].question)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Frequently Asked Questions About Buyer Representation
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get answers about working with Dr. Jan Duffy, your buyer's agent for Arroyo at Skyeview Homes in Skye Canyon, zip code 89166, northwest Las Vegas, Nevada
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted transition"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-muted border-t border-border">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


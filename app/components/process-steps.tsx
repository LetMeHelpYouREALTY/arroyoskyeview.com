'use client'

import { Button } from '@/components/ui/button'

const steps = [
  {
    id: 1,
    title: 'Prequalify',
    subtitle: 'Get a no-strings-attached financial assessment',
    description: 'This no-commitment, knowledge-building exercise gives you insight into how much home you could probably afford, as well as which home loan type might be your best fit. All it requires is for a lender to take a snapshot of your finances and run a credit check. Prequalification is a powerful tool that will let you know exactly what steps you\'ll need to take before you\'re ready to purchase a home—if you\'re not there already! It also establishes a relationship with a lender, which will come in handy later on when you need preapproval to purchase a particular home',
    cta: 'Get prequalified',
    ctaLink: '#prequalify',
    myths: [
      'You need a 20% down payment. Actually, most buyers don\'t. Some even qualify for zero-down loans.',
      'You have to pay for everything. Maybe not. Home loan types available for Las Vegas new construction purchases allow you to use a financial gift from family or friends toward your home purchase.',
      'You need perfect credit. There wouldn\'t be many homebuyers if this were the case. While exceptional credit is ideal, buyers with good credit often qualify for home loans for Arroyo at Skyeview Homes and other Skye Canyon communities.',
    ],
  },
  {
    id: 2,
    title: 'House Hunt',
    subtitle: 'Search on-site or online',
    description: 'Once you\'ve prequalified and know your price range, you\'re ready to search for new construction homes. Browse Arroyo at Skyeview Homes and other Skye Canyon communities online, tour communities in person, or a combination of both. Dr. Jan Duffy helps you identify which communities in northwest Las Vegas (zip code 89166) fit your needs and budget.',
    cta: 'Start your search',
    ctaLink: '/',
    wishList: [
      'Number of bedrooms and bathrooms',
      'Number of stories',
      'Proximity to work, school and amenities',
      'Space for a home office',
      'How quickly you hope to move',
    ],
  },
  {
    id: 3,
    title: 'Contract',
    subtitle: 'Make a preliminary commitment to buy',
    description: 'One of the great advantages of new home construction is that it\'s first-come, first-served. As long as you\'re a qualified buyer, the house is yours if you\'re the one who got there first. When you\'ve found a home that checks the right boxes, you\'ll want to act fast to get it under contract—ensuring that no other buyer can swoop in and buy it out from under you.',
    considerations: [
      'Home loan preapproval',
      'Earnest money deposit',
      'Building timeline',
      'Avoiding major transactions before closing, like purchasing a car or large furniture',
    ],
  },
  {
    id: 4,
    title: 'Close',
    subtitle: 'Put a bow on it and grab the keys… you\'re a new homeowner!',
    description: 'This is your big day to sign final paperwork and breathe a sigh of satisfaction, because you\'ve officially bought your Arroyo at Skyeview Home in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166). Whether this is your first home purchase or you\'re upgrading to a new construction townhome, closing on your Arroyo at Skyeview Home is a milestone. You\'ll also love the peace of mind that comes with a new home warranty, providing coverage on major items and repairs. Dr. Jan Duffy\'s complimentary building standards inspection ensures everything is built to code before you move in.',
    considerations: [
      'Down Payment',
      'Closing costs',
      'Homeowners insurance',
      'Moving arrangements',
      'Change of address',
    ],
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Number Indicator */}
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.id}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {step.title}
                  </h2>
                  <h3 className="text-xl md:text-2xl text-muted-foreground mb-6">
                    {step.subtitle}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
                    {step.description}
                  </p>

                  {/* CTA Button */}
                  {step.cta && (
                    <div className="mb-8">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary text-white"
                      >
                        <a href={step.ctaLink}>{step.cta}</a>
                      </Button>
                    </div>
                  )}

                  {/* Myths Section */}
                  {step.myths && (
                    <div className="bg-blue-50 border-l-4 border-luxury-champagne p-6 rounded-r-lg mb-8">
                      <h4 className="text-xl font-bold text-foreground mb-4">
                        COMMON HOMEBUYING MYTHS
                      </h4>
                      <ul className="space-y-3">
                        {step.myths.map((myth, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{myth}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Wish List Section */}
                  {step.wishList && (
                    <div className="bg-muted border-l-4 border-gray-400 p-6 rounded-r-lg mb-8">
                      <h4 className="text-xl font-bold text-foreground mb-4">
                        POTENTIAL WISH-LIST ITEMS
                      </h4>
                      <ul className="space-y-2">
                        {step.wishList.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Considerations Section */}
                  {step.considerations && (
                    <div className="bg-muted border-l-4 border-gray-400 p-6 rounded-r-lg">
                      <h4 className="text-xl font-bold text-foreground mb-4">
                        {step.id === 3 ? 'CONTRACTING CONSIDERATIONS' : 'CLOSING CONSIDERATIONS'}
                      </h4>
                      <ul className="space-y-2">
                        {step.considerations.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Connector Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-24 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


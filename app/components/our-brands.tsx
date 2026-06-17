import Link from 'next/link'

export default function OurBrands() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Expert Buyer Representation Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Arroyo at Skyeview Homes */}
          <div className="bg-white border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <div className="mb-6">
              <div className="h-16 bg-primary rounded-lg mb-4 flex items-center justify-center">
                <a href="tel:7029034687" className="text-white text-xl font-bold hover:text-blue-100 transition-colors">
                  (702) 903-4687
                </a>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Arroyo at Skyeview Homes
              </h3>
              <div className="w-16 h-1 bg-gray-300 mb-4"></div>
              <p className="text-muted-foreground mb-4 font-semibold">Skye Canyon, Zip Code 89166, Northwest Las Vegas</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Construction Monitoring Every 7-10 Days</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Building Standards Inspection at Closing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Insider Knowledge of Builder Incentives</span>
              </li>
            </ul>
            
            <Link 
              href="/" 
              className="inline-block text-primary hover:text-primary font-semibold"
            >
              Learn More →
            </Link>
          </div>

          {/* New Construction Options */}
          <div className="bg-white border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <div className="mb-6">
              <div className="h-16 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <a href="tel:7029034687" className="text-white text-xl font-bold hover:text-gray-200 transition-colors">
                  (702) 903-4687
                </a>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Las Vegas New Construction
              </h3>
              <div className="w-16 h-1 bg-gray-300 mb-4"></div>
              <p className="text-muted-foreground mb-4 font-semibold">Skye Canyon • Summerlin • Northwest Las Vegas</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">100% Free Buyer Representation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Represents HOME BUYERS, Not Builders</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Expert Knowledge of All Skye Canyon Communities</span>
              </li>
            </ul>
            
            <Link 
              href="/work-with-dr-jan" 
              className="inline-block text-primary hover:text-primary font-semibold"
            >
              Work with Dr. Jan →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


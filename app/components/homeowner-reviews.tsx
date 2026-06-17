export default function HomeownerReviews() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Homeowner reviews</h2>
        <p className="text-center text-muted-foreground mb-8">
          See for yourself what homeowners are saying about Arroyo at Skyeview Homes!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Eliant Reviews */}
          <div className="bg-muted rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-foreground">Eliant Experience Management</h3>
                <p className="text-sm text-muted-foreground">100% verified homeowners since 1984</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-foreground">4.5</span>
              <span className="ml-1 text-muted-foreground">out of 5 stars</span>
            </div>
            <p className="text-muted-foreground mb-4">
              <strong>8,866</strong> homebuyer reviews
            </p>
            <button className="text-primary hover:text-primary font-medium text-sm">
              See reviews →
            </button>
          </div>

          {/* NewHomeSource Reviews */}
          <div className="bg-muted rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-foreground">Trust Builder</h3>
                <p className="text-sm text-muted-foreground">Real Homeowners, Honest Reviews</p>
                <p className="text-xs text-muted-foreground mt-1">Powered by NewHomeSource</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Trusted reviews from verified homeowners who have purchased and moved into their new Arroyo at Skyeview Homes.
            </p>
            <button className="text-primary hover:text-primary font-medium text-sm">
              View All Reviews →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


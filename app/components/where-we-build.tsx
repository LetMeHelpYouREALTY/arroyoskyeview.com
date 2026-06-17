export default function WhereWeBuild() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Buyer Representation Services in Las Vegas Metro Area
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Statistics */}
          <div className="text-center md:text-left">
            <p className="text-lg text-muted-foreground mb-8">
              Dr. Jan Duffy specializes in new construction homebuying throughout the Las Vegas metro area, with 
              particular expertise in northwest Las Vegas communities including Skye Canyon (zip code 89166), 
              Summerlin, and surrounding areas. Her buyer representation services help homebuyers navigate the 
              new construction process, from initial community selection through construction monitoring and final 
              closing inspections.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  7-10
                </div>
                <div className="text-xl font-semibold text-foreground">
                  Day Construction Monitoring
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-xl font-semibold text-foreground">
                  Buyer-Focused Representation
                </div>
              </div>
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="h-96 bg-gray-200 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-lg font-medium">Las Vegas Metro Area</p>
                <p className="text-sm text-muted-foreground mt-2">Skye Canyon • Summerlin • Northwest Las Vegas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


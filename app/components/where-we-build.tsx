import Image from 'next/image'

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
          
          <div className="relative h-96 overflow-hidden rounded-lg">
            <Image
              src="/images/las-vegas-metro.jpg"
              alt="Aerial of northwest Las Vegas desert neighborhoods served by buyer representation, including the Skye Canyon area"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


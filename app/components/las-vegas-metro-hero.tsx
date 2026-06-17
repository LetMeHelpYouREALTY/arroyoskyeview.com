export default function LasVegasMetroHero() {
  return (
    <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your New Home in Las Vegas Metro
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Discover new homes and communities in Las Vegas, Nevada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-muted transition shadow-lg">
              View Communities
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition shadow-lg">
              View Map
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


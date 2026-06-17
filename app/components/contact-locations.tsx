import { SITE_CONTACT } from '@/lib/site-contact'
import GoogleMapEmbed from './google-map-embed'

export default function ContactLocations() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Arroyo at Skyeview Map
            </h3>
            <div className="mb-4">
              <GoogleMapEmbed 
                mapUrl="https://maps.app.goo.gl/E4ySRChkkQjnYjeN7"
                address={SITE_CONTACT.formattedAddress}
                height="200px"
                className="rounded-lg overflow-hidden"
              />
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-medium text-foreground">{SITE_CONTACT.formattedAddress}</p>
              <p className="font-semibold text-primary mt-4">
                <a href="tel:7029034687" className="hover:text-primary transition-colors">
                  (702) 903-4687
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Mon-Sun: 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


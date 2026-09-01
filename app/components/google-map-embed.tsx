import { SITE_CONTACT } from '@/lib/site-contact'

interface GoogleMapEmbedProps {
  address?: string
  mapUrl?: string
  className?: string
  height?: string
}

export default function GoogleMapEmbed({ 
  address, 
  mapUrl,
  className = '', 
  height = '300px' 
}: GoogleMapEmbedProps) {
  // Use provided mapUrl, or generate from address
  let embedUrl: string
  if (mapUrl && mapUrl.includes('maps.app.goo.gl')) {
    // For Google Maps short links, use the address-based embed
    // Short links don't work directly in iframes, so we'll use the address
    const encodedAddress = encodeURIComponent(address || SITE_CONTACT.formattedAddress)
    embedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`
  } else if (mapUrl) {
    // Use provided embed URL directly
    embedUrl = mapUrl
  } else if (address) {
    // Generate embed URL from address
    const encodedAddress = encodeURIComponent(address)
    embedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`
  } else {
    // Fallback to default address
    const encodedAddress = encodeURIComponent(SITE_CONTACT.formattedAddress)
    embedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`
  }

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '8px' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
        title={`Map showing ${address || 'location'}`}
      />
      {mapUrl && mapUrl.includes('maps.app.goo.gl') && (
        <div className="mt-2 text-center">
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/90 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Open in Google Maps →
          </a>
        </div>
      )}
    </div>
  )
}


'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  AMENITY_CATEGORIES,
  AMENITY_SEARCH_RADIUS_METERS,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_LABEL,
  type AmenityCategoryId,
  getDirectionsUrl,
  getEmbedMapUrl,
} from '@/lib/amenity-map-config'
import { getCuratedPlacesForCategory } from '@/lib/nearby-amenities-content'
import { cn } from '@/lib/utils'

type MapPlace = {
  id: string
  name: string
  address?: string
  rating?: number
  lat?: number
  lng?: number
  mapsUri?: string
  isCommunity?: boolean
}

type AmenityMapProps = {
  className?: string
  /** Shorter map on embedded sections */
  mapHeightClass?: string
  defaultCategory?: AmenityCategoryId
}

const MAP_HEIGHT_DEFAULT = 'min-h-[22rem] h-[22rem] sm:h-[26rem] md:h-[28rem]'

let mapsScriptPromise: Promise<void> | null = null

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('No window'))
  }
  if (window.google?.maps) {
    return Promise.resolve()
  }
  if (!mapsScriptPromise) {
    mapsScriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>(
        'script[data-amenity-maps-loader]',
      )
      if (existing) {
        existing.addEventListener('load', () => resolve())
        existing.addEventListener('error', () => reject(new Error('Maps load error')))
        return
      }
      const script = document.createElement('script')
      script.dataset.amenityMapsLoader = 'true'
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places,marker&loading=async`
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = () => {
        mapsScriptPromise = null
        reject(new Error('Maps script failed'))
      }
      document.head.appendChild(script)
    })
  }
  return mapsScriptPromise
}

function curatedToMapPlaces(categoryId: AmenityCategoryId): MapPlace[] {
  return getCuratedPlacesForCategory(categoryId).map((p, i) => ({
    id: `curated-${categoryId}-${i}`,
    name: p.name,
    address: p.address,
  }))
}

export default function AmenityMap({
  className,
  mapHeightClass = MAP_HEIGHT_DEFAULT,
  defaultCategory = 'grocery',
}: AmenityMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
  const listId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const mapDivRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const infoRef = useRef<google.maps.InfoWindow | null>(null)
  const communityMarkerRef = useRef<google.maps.Marker | null>(null)

  const [inView, setInView] = useState(false)
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(defaultCategory)
  const [places, setPlaces] = useState<MapPlace[]>(() =>
    curatedToMapPlaces(defaultCategory),
  )
  const [loadState, setLoadState] = useState<
    'idle' | 'loading' | 'ready' | 'fallback' | 'error'
  >(() => (apiKey ? 'idle' : 'fallback'))
  const [statusMessage, setStatusMessage] = useState<string | null>(
    apiKey ? null : 'Interactive map preview — add an API key for live place search.',
  )

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px', threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null))
    markersRef.current = []
    communityMarkerRef.current?.setMap(null)
    communityMarkerRef.current = null
    infoRef.current?.close()
  }, [])

  const renderMarkers = useCallback(
    (items: MapPlace[]) => {
      const map = mapRef.current
      if (!map || !window.google?.maps) return
      clearMarkers()
      infoRef.current = new window.google.maps.InfoWindow()
      const bounds = new window.google.maps.LatLngBounds()
      bounds.extend(COMMUNITY_MAP_CENTER)

      const communityMarker = new window.google.maps.Marker({
        map,
        position: COMMUNITY_MAP_CENTER,
        title: COMMUNITY_MAP_LABEL,
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        },
      })
      communityMarkerRef.current = communityMarker
      communityMarker.addListener('click', () => {
        infoRef.current?.setContent(
          `<div style="max-width:220px"><strong>${COMMUNITY_MAP_LABEL}</strong><br/>Your community</div>`,
        )
        infoRef.current?.open({ map, anchor: communityMarker })
      })

      for (const place of items) {
        const position =
          place.lat != null && place.lng != null
            ? { lat: place.lat, lng: place.lng }
            : null
        if (!position) continue
        bounds.extend(position)
        const marker = new window.google.maps.Marker({
          map,
          position,
          title: place.name,
        })
        marker.addListener('click', () => {
          const directions = getDirectionsUrl(place.name, place.address)
          const rating =
            place.rating != null
              ? `<br/>Rating: ${place.rating.toFixed(1)}`
              : ''
          const addr = place.address
            ? `<br/><span style="font-size:12px">${place.address}</span>`
            : ''
          const link = `<br/><a href="${directions}" target="_blank" rel="noopener noreferrer">Directions</a>`
          infoRef.current?.setContent(
            `<div style="max-width:240px"><strong>${place.name}</strong>${rating}${addr}${link}</div>`,
          )
          infoRef.current?.open({ map, anchor: marker })
        })
        markersRef.current.push(marker)
      }
      if (items.some((p) => p.lat != null)) {
        map.fitBounds(bounds)
      }
    },
    [clearMarkers],
  )

  const fetchNearby = useCallback(
    async (categoryId: AmenityCategoryId) => {
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId)
      if (!category || !mapRef.current || !window.google?.maps) {
        setPlaces(curatedToMapPlaces(categoryId))
        return
      }
      setLoadState('loading')
      setStatusMessage('Loading nearby places…')
      try {
        const { Place } = await window.google.maps.importLibrary('places')
        const { places: results } = await Place.searchNearby({
          fields: [
            'displayName',
            'formattedAddress',
            'location',
            'rating',
            'googleMapsURI',
          ],
          locationRestriction: {
            center: COMMUNITY_MAP_CENTER,
            radius: AMENITY_SEARCH_RADIUS_METERS,
          },
          includedPrimaryTypes: category.placeTypes,
          maxResultCount: 15,
        })
        const mapped = results.flatMap((r, i) => {
          const loc = r.location
          const displayName =
            typeof r.displayName === 'string'
              ? r.displayName
              : r.displayName?.text
          if (!loc || !displayName) return []
          const place: MapPlace = {
            id: `api-${categoryId}-${i}`,
            name: displayName,
            address: r.formattedAddress,
            rating: r.rating,
            lat: loc.lat,
            lng: loc.lng,
            mapsUri: r.googleMapsURI,
          }
          return [place]
        })

        if (mapped.length === 0) {
          const curated = curatedToMapPlaces(categoryId)
          setPlaces(curated)
          setStatusMessage(
            'Showing curated Skye Canyon highlights for this category.',
          )
          renderMarkers(curated)
        } else {
          setPlaces(mapped)
          setStatusMessage(null)
          renderMarkers(mapped)
        }
        setLoadState('ready')
      } catch {
        const curated = curatedToMapPlaces(categoryId)
        setPlaces(curated)
        setStatusMessage(
          'Live search unavailable — showing curated nearby highlights.',
        )
        renderMarkers(curated)
        setLoadState('ready')
      }
    },
    [renderMarkers],
  )

  useEffect(() => {
    if (!inView || !apiKey) return
    let cancelled = false
    ;(async () => {
      try {
        setLoadState('loading')
        await loadGoogleMapsScript(apiKey)
        if (cancelled || !mapDivRef.current) return
        mapRef.current = new window.google.maps.Map(mapDivRef.current, {
          center: COMMUNITY_MAP_CENTER,
          zoom: 13,
          mapId: mapId || undefined,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        })
        setLoadState('ready')
        await fetchNearby(activeCategory)
      } catch {
        if (!cancelled) {
          setLoadState('fallback')
          setPlaces(curatedToMapPlaces(activeCategory))
          setStatusMessage(
            'Map preview mode — configure NEXT_PUBLIC_GOOGLE_MAPS_API_KEY for interactive search.',
          )
        }
      }
    })()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once when in view
  }, [inView, apiKey])

  useEffect(() => {
    if (loadState !== 'ready' || !apiKey) return
    fetchNearby(activeCategory)
  }, [activeCategory, fetchNearby, loadState, apiKey])

  const showIframe = loadState === 'fallback' || !apiKey

  return (
    <div ref={containerRef} className={cn('space-y-4', className)}>
      <div
        role="tablist"
        aria-label="Filter nearby amenities by category"
        className="flex flex-wrap gap-2"
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              id={`${listId}-tab-${cat.id}`}
              aria-selected={selected}
              aria-controls={`${listId}-panel`}
              aria-label={cat.ariaLabel}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                selected
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-foreground hover:bg-muted',
              )}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {statusMessage ? (
        <p className="text-sm text-muted-foreground" role="status">
          {statusMessage}
        </p>
      ) : null}

      <div
        id={`${listId}-panel`}
        role="tabpanel"
        aria-labelledby={`${listId}-tab-${activeCategory}`}
        className={cn(
          'relative w-full overflow-hidden rounded-lg border border-border bg-muted/30',
          mapHeightClass,
        )}
      >
        {showIframe ? (
          <iframe
            title={`Map of ${COMMUNITY_MAP_LABEL} and nearby amenities`}
            src={getEmbedMapUrl()}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div ref={mapDivRef} className="h-full w-full" aria-label="Interactive amenity map" />
        )}
      </div>

      <ul className="grid gap-2 sm:grid-cols-2" aria-label="Places in selected category">
        {places.map((place) => (
          <li
            key={place.id}
            className="rounded-md border border-border/80 bg-card/60 px-3 py-2 text-sm"
          >
            <span className="font-medium text-foreground">{place.name}</span>
            {place.address ? (
              <p className="text-muted-foreground">{place.address}</p>
            ) : null}
            {place.rating != null ? (
              <p className="text-xs text-muted-foreground">
                Google rating: {place.rating.toFixed(1)}
              </p>
            ) : null}
            <a
              href={getDirectionsUrl(place.name, place.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs font-medium text-primary underline underline-offset-2"
            >
              Directions
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

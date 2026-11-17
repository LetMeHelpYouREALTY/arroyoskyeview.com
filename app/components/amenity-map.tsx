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
import { searchCategory } from '@/lib/amenity-places-search'
import {
  loadGoogleMaps,
  mapsAuthFailed,
} from '@/lib/google-maps-loader'
import { getCuratedPlacesForCategory } from '@/lib/nearby-amenities-content'
import { cn } from '@/lib/utils'

type MapPlace = {
  id: string
  name: string
  address?: string
  lat?: number
  lng?: number
  mapsUri?: string
  isCommunity?: boolean
}

type AmenityMapProps = {
  className?: string
  mapHeightClass?: string
  defaultCategory?: AmenityCategoryId
}

const MAP_HEIGHT_DEFAULT = 'min-h-[22rem] h-[22rem] sm:h-[26rem] md:h-[28rem]'

function placeDisplayName(
  displayName: google.maps.places.Place['displayName'],
): string | undefined {
  if (!displayName) return undefined
  if (typeof displayName === 'string') return displayName
  return (displayName as { text?: string }).text ?? undefined
}

function curatedToMapPlaces(categoryId: AmenityCategoryId): MapPlace[] {
  return getCuratedPlacesForCategory(categoryId).map((p, i) => ({
    id: `curated-${categoryId}-${i}`,
    name: p.name,
    address: p.address,
  }))
}

function buildInfoWindowContent(
  place: MapPlace,
  doc: Document,
): HTMLElement {
  const wrap = doc.createElement('div')
  wrap.style.maxWidth = '240px'

  const title = doc.createElement('strong')
  title.textContent = place.name
  wrap.appendChild(title)

  if (place.address) {
    const addr = doc.createElement('div')
    addr.style.fontSize = '12px'
    addr.textContent = place.address
    wrap.appendChild(addr)
  }

  const link = doc.createElement('a')
  link.href = getDirectionsUrl(place.name, place.address)
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.textContent = 'Directions'
  wrap.appendChild(link)

  return wrap
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
  const [useFallback, setUseFallback] = useState(
    () => !apiKey || mapsAuthFailed,
  )
  const [statusMessage, setStatusMessage] = useState<string | null>(() =>
    !apiKey
      ? 'Map preview — configure NEXT_PUBLIC_GOOGLE_MAPS_API_KEY for live place search.'
      : null,
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

  const enterFallback = useCallback(
    (message: string) => {
      mapRef.current = null
      clearMarkers()
      setUseFallback(true)
      setPlaces(curatedToMapPlaces(activeCategory))
      setStatusMessage(message)
    },
    [activeCategory, clearMarkers],
  )

  useEffect(() => {
    const onAuthFailure = () => {
      enterFallback(
        'Map preview — showing curated Skye Canyon highlights while the map key is unavailable.',
      )
    }
    window.addEventListener('gmaps:auth-failure', onAuthFailure)
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure)
  }, [enterFallback])

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
        const content = document.createElement('div')
        content.style.maxWidth = '220px'
        const strong = document.createElement('strong')
        strong.textContent = COMMUNITY_MAP_LABEL
        content.appendChild(strong)
        const sub = document.createElement('div')
        sub.textContent = 'Your community'
        content.appendChild(sub)
        infoRef.current?.setContent(content)
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
          const content = buildInfoWindowContent(place, document)
          infoRef.current?.setContent(content)
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
      const curated = curatedToMapPlaces(categoryId)
      if (!category || !mapRef.current || useFallback) {
        setPlaces(curated)
        return
      }
      setStatusMessage('Loading nearby places…')
      try {
        const results = await searchCategory(
          COMMUNITY_MAP_CENTER,
          categoryId,
          category.placeTypes,
          AMENITY_SEARCH_RADIUS_METERS,
        )
        const mapped = results.flatMap((r, i) => {
          const loc = r.location
          const displayName = placeDisplayName(r.displayName)
          if (!loc || !displayName) return []
          const { lat, lng } = loc.toJSON()
          const place: MapPlace = {
            id: `api-${categoryId}-${i}`,
            name: displayName,
            address: r.formattedAddress ?? undefined,
            lat,
            lng,
            mapsUri: r.googleMapsURI ?? undefined,
          }
          return [place]
        })

        if (mapped.length === 0) {
          setPlaces(curated)
          setStatusMessage('Showing curated Skye Canyon highlights for this category.')
          renderMarkers(curated)
        } else {
          setPlaces(mapped)
          setStatusMessage(null)
          renderMarkers(mapped)
        }
      } catch {
        setPlaces(curated)
        setStatusMessage('Live search unavailable — showing curated nearby highlights.')
        renderMarkers(curated)
      }
    },
    [renderMarkers, useFallback],
  )

  useEffect(() => {
    if (!inView || !apiKey || useFallback || mapsAuthFailed) return
    let cancelled = false

    const init = async () => {
      if (!mapDivRef.current) return
      mapRef.current = new google.maps.Map(mapDivRef.current, {
        center: COMMUNITY_MAP_CENTER,
        zoom: 13,
        mapId: mapId || undefined,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      })
      await fetchNearby(activeCategory)
    }

    loadGoogleMaps(apiKey)
      .then(() => {
        if (!cancelled) return init()
      })
      .catch(() => {
        if (!cancelled) {
          enterFallback(
            'Map preview — showing curated Skye Canyon highlights while the map key is unavailable.',
          )
        }
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once when in view
  }, [inView, apiKey, useFallback])

  useEffect(() => {
    if (useFallback || !apiKey || !mapRef.current) return
    fetchNearby(activeCategory)
  }, [activeCategory, fetchNearby, useFallback, apiKey])

  const showIframe = useFallback || !apiKey

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
          <div
            ref={mapDivRef}
            className="h-full w-full"
            aria-label="Interactive amenity map"
          />
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
            <a
              href={
                place.mapsUri ?? getDirectionsUrl(place.name, place.address)
              }
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

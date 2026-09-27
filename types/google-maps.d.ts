/** Minimal typings for Maps JS + Places (New) used by the amenity map. */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: MapOptions)
    setCenter(center: LatLngLiteral | LatLng): void
    setZoom(zoom: number): void
    fitBounds(bounds: LatLngBounds): void
  }
  class LatLngBounds {
    constructor()
    extend(point: LatLngLiteral): void
  }
  class InfoWindow {
    constructor(opts?: { content?: string })
    setContent(content: string): void
    open(opts: { map: Map; anchor?: Marker }): void
    close(): void
  }
  class Marker {
    constructor(opts?: MarkerOptions)
    setMap(map: Map | null): void
    addListener(event: string, handler: () => void): void
  }
  interface MapOptions {
    center?: LatLngLiteral
    zoom?: number
    mapId?: string
    disableDefaultUI?: boolean
    zoomControl?: boolean
    mapTypeControl?: boolean
    streetViewControl?: boolean
    fullscreenControl?: boolean
  }
  interface MarkerOptions {
    map?: Map
    position?: LatLngLiteral
    title?: string
    icon?: string | { url: string; scaledSize?: { width: number; height: number } }
  }
  interface LatLngLiteral {
    lat: number
    lng: number
  }
  function importLibrary(name: 'places'): Promise<PlacesLibrary>
  interface PlacesLibrary {
    Place: PlaceClass
  }
  interface PlaceClass {
    searchNearby(request: SearchNearbyRequest): Promise<{ places: PlaceResult[] }>
  }
  interface SearchNearbyRequest {
    fields: string[]
    locationRestriction: {
      center: LatLngLiteral
      radius: number
    }
    includedPrimaryTypes?: string[]
    maxResultCount?: number
  }
  interface PlaceResult {
    displayName?: string | { text?: string }
    formattedAddress?: string
    location?: LatLngLiteral
    rating?: number
    googleMapsURI?: string
  }
}

interface Window {
  google?: typeof google
}

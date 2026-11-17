'use client'

import dynamic from 'next/dynamic'
import type { ComponentProps } from 'react'

const AmenityMap = dynamic(() => import('./amenity-map'), {
  ssr: false,
  loading: () => (
    <div
      className="min-h-[22rem] animate-pulse rounded-lg border border-border bg-muted/40 sm:h-[26rem]"
      role="status"
      aria-label="Loading amenity map"
    />
  ),
})

type AmenityMapClientProps = ComponentProps<typeof AmenityMap>

export default function AmenityMapClient(props: AmenityMapClientProps) {
  return <AmenityMap {...props} />
}

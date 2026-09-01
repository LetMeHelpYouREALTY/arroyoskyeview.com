'use client'

import { createContext, useContext, type ReactNode } from 'react'

const CloudflareImagesHashContext = createContext<string | undefined>(undefined)

type CloudflareImagesProviderProps = {
  hash?: string
  children: ReactNode
}

export function CloudflareImagesProvider({
  hash,
  children,
}: CloudflareImagesProviderProps) {
  return (
    <CloudflareImagesHashContext.Provider value={hash}>
      {children}
    </CloudflareImagesHashContext.Provider>
  )
}

export function useCloudflareImagesHash(): string | undefined {
  return useContext(CloudflareImagesHashContext)
}

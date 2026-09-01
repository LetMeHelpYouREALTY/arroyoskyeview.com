'use client'

import { createContext, useContext, type ReactNode } from 'react'

export type CloudflareImagesRuntime = {
  hash?: string
  readyIds: readonly string[]
}

const CloudflareImagesRuntimeContext = createContext<CloudflareImagesRuntime>({
  readyIds: [],
})

type CloudflareImagesProviderProps = {
  hash?: string
  readyIds?: readonly string[]
  children: ReactNode
}

export function CloudflareImagesProvider({
  hash,
  readyIds = [],
  children,
}: CloudflareImagesProviderProps) {
  return (
    <CloudflareImagesRuntimeContext.Provider value={{ hash, readyIds }}>
      {children}
    </CloudflareImagesRuntimeContext.Provider>
  )
}

export function useCloudflareImagesHash(): string | undefined {
  return useContext(CloudflareImagesRuntimeContext).hash
}

export function useCloudflareImagesRuntime(): CloudflareImagesRuntime {
  return useContext(CloudflareImagesRuntimeContext)
}

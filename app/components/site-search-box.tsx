'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type SiteSearchBoxProps = {
  initialQuery?: string
}

/** Site search UI. Marketing pages cannot ship HTML lead forms. */
export default function SiteSearchBox({ initialQuery = '' }: SiteSearchBoxProps) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)

  function submit() {
    const trimmed = query.trim()
    const href = trimmed
      ? `/search?q=${encodeURIComponent(trimmed.slice(0, 120))}`
      : '/search'
    router.push(href)
  }

  return (
    <div className="mt-8 flex max-w-xl gap-2" role="search">
      <label htmlFor="site-search-q" className="sr-only">
        Search homes
      </label>
      <input
        id="site-search-q"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault()
            submit()
          }
        }}
        placeholder="City, ZIP, or neighborhood"
        className="min-w-0 flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground"
      />
      <button
        type="button"
        onClick={submit}
        className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
      >
        Search
      </button>
    </div>
  )
}

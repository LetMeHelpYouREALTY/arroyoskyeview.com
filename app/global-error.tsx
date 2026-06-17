'use client'

import Link from 'next/link'

/**
 * Root-level error UI (replaces root layout when active). Must define html/body.
 * @see https://nextjs.org/docs/app/building-your-application/routing/error-handling
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-muted antialiased">
        <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Arroyo at Skyeview</p>
          <h1 className="mt-2 text-2xl font-bold text-foreground">Something went wrong</h1>
          <p className="mt-4 text-muted-foreground">
            Try again or return home. For help buying in Skye Canyon, call Dr. Jan Duffy at{' '}
            <a href="tel:7029034687" className="font-semibold text-primary hover:underline">
              (702) 903-4687
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => reset()}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary"
            >
              Try again
            </button>
            <Link
              href="/"
              className="rounded-lg border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Back to homepage
            </Link>
          </div>
          {process.env.NODE_ENV === 'development' && error?.message ? (
            <pre className="mt-8 max-w-full overflow-auto rounded bg-muted p-4 text-left text-xs text-red-800">
              {error.message}
            </pre>
          ) : null}
        </div>
      </body>
    </html>
  )
}

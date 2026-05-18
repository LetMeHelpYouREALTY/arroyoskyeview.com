import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from './components/footer'
import Header from './components/header'

export const metadata: Metadata = {
  title: 'Page Not Found | Arroyo at Skyeview | Homes by Dr. Jan Duffy',
  description:
    'The page you requested could not be found. Return to Arroyo at Skyeview new construction townhomes in Skye Canyon, Las Vegas, NV.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring flex flex-1 flex-col items-center justify-center px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">404</p>
        <h1 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-center text-gray-600">
          That URL does not exist or has moved. Use the navigation above or return to the homepage.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Back to Arroyo at Skyeview
        </Link>
      </main>
      <Footer />
    </div>
  )
}

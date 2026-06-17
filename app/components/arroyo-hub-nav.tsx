import Link from 'next/link'
import { ARROYO_HUB_LINKS } from '@/lib/arroyo-inventory'

type ArroyoHubNavProps = {
  currentPath: string
}

export default function ArroyoHubNav({ currentPath }: ArroyoHubNavProps) {
  const navItems = ARROYO_HUB_LINKS.filter((item) => item.href.startsWith('/arroyo-at-skyeview'))

  return (
    <nav
      className="border-b border-border bg-card/50"
      aria-label="Arroyo at Skyeview sections"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="-mb-px flex flex-wrap gap-x-6 gap-y-1">
          {navItems.map((item) => {
            const isActive = currentPath === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-block whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-luxury-champagne text-primary'
                      : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

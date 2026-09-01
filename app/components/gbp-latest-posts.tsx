import { SITE_CONTACT } from '@/lib/site-contact'
import { GBP_LATEST_POSTS, GBP_POSTS_FETCHED_AT } from '@/lib/gbp-posts'
import SectionPortraitMark from './section-portrait-mark'

export default function GbpLatestPosts() {
  return (
    <section className="bg-background py-16 md:py-20" aria-labelledby="gbp-posts-heading" data-has-agent-portrait>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionPortraitMark size="md" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-luxury-champagne">
            Google Business Profile
          </p>
          <h2
            id="gbp-posts-heading"
            className="mt-3 font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl"
          >
            Latest from our Google listing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Posts from {SITE_CONTACT.businessName}, updated {GBP_POSTS_FETCHED_AT}.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {GBP_LATEST_POSTS.map((post) => (
            <li
              key={post.createdAt + post.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <time
                dateTime={post.createdAt}
                className="text-xs font-semibold uppercase tracking-wide text-luxury-champagne"
              >
                {post.createdAt}
              </time>
              <h3 className="mt-3 font-serif text-xl font-light text-foreground text-balance">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {post.summary}
              </p>
              <a
                href={SITE_CONTACT.googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-semibold text-primary underline-offset-2 hover:underline"
              >
                Read on Google
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

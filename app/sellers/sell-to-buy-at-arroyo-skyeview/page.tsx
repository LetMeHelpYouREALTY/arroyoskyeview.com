import type { Metadata } from 'next'
import Link from 'next/link'
import PageSchemas from '../../components/page-schemas'
import MarketingPageShell from '../../components/marketing-page-shell'
import DrJanPortrait from '../../components/dr-jan-portrait'
import CalendlyScheduleButton from '../../components/calendly-schedule-button'
import {
  CALENDLY_LISTING_CONSULTATION_URL,
  calendlyUrlWithUtm,
} from '@/lib/calendly'
import { ARROYO_PRICE_LOW } from '@/lib/arroyo-inventory'
import { SITE_CONTACT } from '@/lib/site-contact'

const PAGE_PATH = '/sellers/sell-to-buy-at-arroyo-skyeview'
const LISTING_CALENDLY_HERO = calendlyUrlWithUtm(
  CALENDLY_LISTING_CONSULTATION_URL,
  'seller-page-hero',
)
const LISTING_CALENDLY_FAQ = calendlyUrlWithUtm(
  CALENDLY_LISTING_CONSULTATION_URL,
  'seller-page-faq-cta',
)

const priceFormatted = `$${ARROYO_PRICE_LOW.toLocaleString('en-US')}`

export const metadata: Metadata = {
  title: 'Sell Your Home to Buy at Arroyo at Skyeview | Dr. Jan Duffy',
  description:
    'Sell your Las Vegas home and buy at Arroyo at Skyeview in Skye Canyon (89166). Dr. Jan Duffy coordinates listing and buyer representation. (702) 903-4687.',
  alternates: {
    canonical: `https://www.arroyoskyeview.com${PAGE_PATH}`,
  },
  openGraph: {
    title: 'Sell Your Home to Buy at Arroyo at Skyeview | Dr. Jan Duffy',
    description:
      'Coordinate selling your Las Vegas-area home while reserving a new townhome at Arroyo at Skyeview in Skye Canyon (zip 89166) with Dr. Jan Duffy.',
    url: `https://www.arroyoskyeview.com${PAGE_PATH}`,
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arroyo at Skyeview at Skye Canyon',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const faqItems = [
  {
    question: 'Can Dr. Jan Duffy help me sell my current home and buy at Arroyo at Skyeview?',
    answer:
      'Yes. Dr. Jan Duffy can list and market your existing Las Vegas–area home while she represents you as the buyer on a new townhome at Arroyo at Skyeview in Skye Canyon (zip code 89166), northwest Las Vegas, Nevada. One coordinated plan keeps your sale timing aligned with builder milestones on the Arroyo purchase.',
  },
  {
    question: 'Where is Arroyo at Skyeview located?',
    answer:
      'Arroyo at Skyeview Homes is a townhome community inside Skye Canyon in northwest Las Vegas, Nevada (zip code 89166). Published inventory on this site shows two-story townhomes with published pricing from $392,640 as of site data maintained by Dr. Jan Duffy.',
  },
  {
    question: 'How do I start a sell-to-buy plan for Arroyo at Skyeview?',
    answer:
      'Book a listing consultation with Dr. Jan Duffy to review your current home, target list date, and builder contract dates for Arroyo at Skyeview. You can also call (702) 903-4687 or email info@arroyoskyeview.com.',
  },
]

export default function SellToBuyAtArroyoPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
          pageType="buyer-guide"
          url={PAGE_PATH}
          title="Sell Your Home to Buy at Arroyo at Skyeview | Dr. Jan Duffy"
          description="Coordinate selling your Las Vegas–area home with buyer representation on a new townhome at Arroyo at Skyeview in Skye Canyon (89166), northwest Las Vegas, Nevada."
          breadcrumbs={[
            { name: 'Sellers', url: PAGE_PATH },
            { name: 'Sell to buy at Arroyo', url: PAGE_PATH },
          ]}
          location="Skye Canyon"
          zipCode="89166"
          questions={faqItems}
        />
      }
      showContactCta={true}
    >
      <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <DrJanPortrait
              size={72}
              className="h-[4.5rem] w-[4.5rem] ring-2 ring-luxury-champagne/70"
            />
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Sell your current home to buy at Arroyo at Skyeview
          </h1>
          <p className="max-w-3xl text-xl text-blue-100 md:text-2xl">
            Arroyo at Skyeview is a Skye Canyon townhome community in northwest Las Vegas (zip
            89166). If you already own elsewhere in the valley, Dr. Jan Duffy can align your listing
            timeline with a new-build contract here—townhomes on this site publish from {priceFormatted}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CalendlyScheduleButton
              text="Book a listing consultation"
              url={LISTING_CALENDLY_HERO}
              variant="champagne"
            />
            <a
              href={`tel:${SITE_CONTACT.phoneTel}`}
              className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-luxury-champagne px-6 py-3 text-sm font-semibold text-luxury-champagne transition-colors hover:bg-luxury-champagne/10"
            >
              Call {SITE_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Why sellers look at Arroyo at Skyeview
          </h2>
          <p className="mb-4 text-lg text-muted-foreground">
            Move-up buyers often want a newer floor plan without leaving the Las Vegas metro. Arroyo
            at Skyeview sits inside the Skye Canyon master plan in zip code 89166, with two-story
            townhomes, quartz countertops, and access to Skye Canyon parks and trails described on
            the{' '}
            <Link href="/arroyo-at-skyeview/overview" className="text-primary underline">
              community overview
            </Link>{' '}
            pages on this site.
          </p>
          <p className="text-lg text-muted-foreground">
            Dr. Jan Duffy represents home buyers on new construction—including Arroyo contracts—and
            can also list your existing property so both sides share one calendar for photos, showings,
            and contingency dates.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            How Dr. Jan Duffy sequences a sell-to-buy move
          </h2>
          <ol className="list-decimal space-y-4 pl-6 text-lg text-muted-foreground">
            <li>
              <strong className="text-foreground">Listing prep on your current home.</strong> Pricing
              uses local MLS data; Dr. Jan Duffy prepares marketing aligned with your target close
              date.
            </li>
            <li>
              <strong className="text-foreground">Builder contract at Arroyo.</strong> She negotiates
              buyer-side terms on the Skye Canyon townhome while your sale is active or under
              contract.
            </li>
            <li>
              <strong className="text-foreground">Contingency coordination.</strong> Sale-of-home
              contingencies, rent-backs, and float periods are mapped against builder milestone
              dates so you are not double-moving without a plan.
            </li>
            <li>
              <strong className="text-foreground">Construction monitoring on the buy side.</strong>{' '}
              On the Arroyo purchase, Dr. Jan Duffy continues buyer representation with walk-throughs
              during build—details on{' '}
              <Link href="/services/construction-monitoring" className="text-primary underline">
                construction monitoring
              </Link>
              .
            </li>
          </ol>
        </section>

        <section className="mb-12 rounded-lg border border-border bg-muted/40 p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Inventory snapshot</h2>
          <p className="text-lg text-muted-foreground">
            Published Arroyo at Skyeview pricing on arroyoskyeview.com starts at {priceFormatted}{' '}
            for townhomes in Skye Canyon (89166). See{' '}
            <Link href="/arroyo-at-skyeview/available-homes" className="text-primary underline">
              available homes
            </Link>{' '}
            and{' '}
            <Link href="/arroyo-at-skyeview/floor-plans" className="text-primary underline">
              floor plans
            </Link>{' '}
            for current Beverly, Captiva, and Delray layouts before you set a list date on your
            current property.
          </p>
        </section>

        <section className="mb-12" id="seller-faq">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Sell-to-buy FAQ</h2>
          <dl className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.question}>
                <dt className="mb-2 text-xl font-semibold text-foreground">{item.question}</dt>
                <dd className="text-lg text-muted-foreground" data-answer>{item.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <CalendlyScheduleButton
              text="Schedule listing consultation with Dr. Jan Duffy"
              url={LISTING_CALENDLY_FAQ}
            />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Related buyer resources</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <Link href="/homebuying-process" className="text-primary underline">
                New homebuying process in Las Vegas
              </Link>
            </li>
            <li>
              <Link href="/buyers/closing-process-guide" className="text-primary underline">
                Closing process for new construction
              </Link>
            </li>
            <li>
              <Link href="/work-with-dr-jan" className="text-primary underline">
                Work with Dr. Jan Duffy
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </MarketingPageShell>
  )
}

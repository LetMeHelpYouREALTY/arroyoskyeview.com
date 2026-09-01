/**
 * Read the public Calendly booking lookup for this event type.
 * No PAT required. Logs whether Confirmation page is still Calendly-internal
 * (embed/hosted bookings then cannot pass invitee_email to /schedule-confirmed).
 *
 * GET /api/booking/event_types/lookup
 */
const LOOKUP =
  'https://calendly.com/api/booking/event_types/lookup?event_type_slug=buyer-consultation-30-min&profile_slug=drjanduffy'
const EXPECTED_REDIRECT = 'https://www.arroyoskyeview.com/schedule-confirmed'

const res = await fetch(LOOKUP, {
  headers: {
    Accept: 'application/json',
    'User-Agent': 'arroyoskyeview.com-go-live-probe',
  },
})
if (!res.ok) {
  console.log(`Calendly lookup HTTP ${res.status}`)
  process.exit(0)
}

const data = await res.json()
const pageType =
  typeof data.confirmation_page_type === 'string'
    ? data.confirmation_page_type
    : 'unknown'
const redirect = data.redirect_configuration
const redirectUrl =
  redirect && typeof redirect === 'object'
    ? String(redirect.url || redirect.redirect_url || '')
    : ''
const external =
  pageType === 'external' && redirectUrl.startsWith(EXPECTED_REDIRECT)

console.log(
  `Calendly confirmation_page_type=${pageType} redirect=${redirectUrl || 'none'}`,
)
if (external) {
  console.log('Calendly hosted bookings can pass event details to /schedule-confirmed.')
  process.exit(0)
}

console.log(
  `::warning::Calendly event Buyer Consultation still uses an internal confirmation page. In the dashboard: More options → Confirmation page → Redirect to ${EXPECTED_REDIRECT} and enable Pass event details. Embed bookings still need CALENDLY_API_TOKEN.`,
)
process.exit(0)

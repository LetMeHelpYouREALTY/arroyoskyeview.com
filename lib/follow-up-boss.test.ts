import assert from 'node:assert/strict'
import { describe, it, mock } from 'node:test'
import {
  buildContactFubEvent,
  followUpBossAuthHeader,
  sendFollowUpBossEvent,
} from './follow-up-boss.ts'

describe('follow-up-boss', () => {
  it('buildContactFubEvent uses arroyoskyeview.com source and General Inquiry', () => {
    const event = buildContactFubEvent({
      firstName: 'Jane',
      lastName: 'Buyer',
      email: 'jane@example.com',
      phone: '7025550100',
      message: 'Interested in Arroyo',
      formName: 'Contact Us',
      sourceUrl: 'https://www.arroyoskyeview.com/contact-us',
    })

    assert.equal(event.source, 'arroyoskyeview.com')
    assert.equal(event.system, 'arroyoskyeview.com')
    assert.equal(event.type, 'General Inquiry')
    assert.equal(event.person.firstName, 'Jane')
    assert.deepEqual(event.person.tags, ['arroyoskyeview.com', 'Contact Us'])
  })

  it('sendFollowUpBossEvent posts to FUB with Basic auth', async () => {
    const originalKey = process.env.FOLLOW_UP_BOSS_API_KEY
    process.env.FOLLOW_UP_BOSS_API_KEY = 'test-key-only'

    const fetchMock = mock.fn(async (url: string, init?: RequestInit) => {
      assert.equal(url, 'https://api.followupboss.com/v1/events')
      assert.equal(init?.method, 'POST')
      const headers = init?.headers as Record<string, string>
      assert.equal(headers.Authorization, followUpBossAuthHeader('test-key-only'))
      assert.equal(headers['X-System'], 'arroyoskyeview.com')
      return new Response(null, { status: 201 })
    })

    const result = await sendFollowUpBossEvent(
      buildContactFubEvent({
        firstName: 'Test',
        email: 't@example.com',
        formName: 'Unit test',
      }),
      fetchMock as typeof fetch,
    )

    assert.equal(result.ok, true)
    assert.equal(fetchMock.mock.calls.length, 1)

    if (originalKey === undefined) {
      delete process.env.FOLLOW_UP_BOSS_API_KEY
    } else {
      process.env.FOLLOW_UP_BOSS_API_KEY = originalKey
    }
  })
})

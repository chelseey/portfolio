import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchCode, codeLinkMap } from '../src/utils/codeFetcher.js'

beforeEach(() => {
  global.fetch = vi.fn()
})

describe('fetchCode', () => {
  it('returns code text when fetch succeeds', async () => {
    const mockText = '<template>hello</template>'
    global.fetch.mockResolvedValueOnce({ ok: true, text: () => Promise.resolve(mockText) })
    const result = await fetchCode('Home')
    expect(global.fetch).toHaveBeenCalledWith(codeLinkMap['Home'])
    expect(result).toBe(mockText)
  })

  it('returns error when fetch fails', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false })
    const result = await fetchCode('Home')
    expect(result).toMatch(/Error fetching code/)
  })

  it('returns error when network error occurs', async () => {
    global.fetch.mockRejectedValueOnce(new Error('network'))
    const result = await fetchCode('Home')
    expect(result).toMatch(/Error fetching code/)
  })
})

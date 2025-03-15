import '@testing-library/jest-dom/vitest'

import { cleanup, render as viRender } from '@testing-library/react'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'

import { AppProviders } from '@/providers'
import { server } from './vitest-worker-mock'

export function render(ui: React.ReactElement, options = {}) {
  viRender(ui, { wrapper: AppProviders, ...options })
}

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    asPath: '/',
    query: {},
  }),
}))

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close())

afterEach(() => {
  server.resetHandlers()
  cleanup()
})

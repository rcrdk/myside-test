import '@testing-library/jest-dom'

import { server } from './tests/msw-handlers'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

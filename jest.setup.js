import '@testing-library/jest-dom'
import 'cross-fetch/polyfill'

import { server } from './tests/mocking-handler'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

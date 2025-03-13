import { jest } from '@jest/globals'
import { render, screen } from '@testing-library/react'

// import ky from 'ky-universal'

import Home from '@/pages/home'

// jest.mock('ky-universal', () => ({
//   get: jest.fn(),
// }))

beforeEach(() => {
  jest.resetAllMocks()
})

describe('Home', () => {
  it('should fetch data', async () => {
    // const mockResponse = {
    //   status: 'SUCCESS',
    //   message: 'Lorem ipsum',
    //   categories: ['lorem', 'ipsum', 'dolor'],
    // }

    // const mockGet = ky.get as jest.Mock

    // console.log(JSON.stringify(mockGet, null, 2))

    // mockGet.mockImplementation((url) => {
    //   if (url === '/api/data') {
    //     return Promise.resolve({
    //       json: jest.fn().mockResolvedValue(mockResponse),
    //     })
    //   }
    //   return Promise.resolve({
    //     json: jest.fn().mockResolvedValue({}),
    //   })
    // })

    render(<Home />)

    const heading = await screen.findByRole('heading', {
      name: 'Hello, World!',
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })
})

import { http } from 'msw'
import { setupServer } from 'msw/node'

export const handlers = [
  http.get('https://fakestoreapi.in/api/products', () => {
    return new Response(
      JSON.stringify({
        status: 'SUCCESS',
        message: 'Lorem ipsum dolor sit amet',
        products: [],
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }),

  http.get('https://fakestoreapi.in/api/products/category', () => {
    return new Response(
      JSON.stringify({
        status: 'SUCCESS',
        message: 'Lorem ipsum dolor sit amet',
        categories: [],
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }),
]

export const server = setupServer(...handlers)

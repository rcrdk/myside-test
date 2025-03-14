import { http } from 'msw'
import { setupServer } from 'msw/node'

export const handlers = [
  // all products
  http.get('https://fakestoreapi.in/api/products', () => {
    return new Response(
      JSON.stringify({
        status: 'SUCCESS',
        message: 'You have received products.',
        products: [
          {
            id: 1,
            title: 'Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones',
            image: 'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg',
            price: 773,
            description: 'Frequency response: 4 Hz-40,000 Hz',
            brand: 'sony',
            model: 'WH-1000XM3',
            color: 'silver',
            category: 'audio',
            discount: 11,
          },
          {
            id: 47,
            title: 'Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA43CUE60AKLXL (Black)',
            image: 'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694154827301-81+JXgPUDLL._SL1500_.jpg',
            price: 396,
            description: 'Supported apps: Netflix, Prime Video, YouTube, etc.',
            brand: 'samsung',
            model: 'UA43CUE60AKLXL',
            color: 'black',
            category: 'tv',
            discount: 9,
            onSale: true,
          },
          {
            id: 14,
            title: 'Apple iPhone 14 (128 GB) - Blue',
            image: 'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075659827-iPhone 14.jpg',
            price: 809,
            description: 'Advanced camera system for better photos in any light,',
            brand: 'apple',
            model: 'iPhone 14',
            color: 'Blue',
            category: 'mobile',
            popular: true,
          },
        ],
      }),
      { headers: { 'Content-Type': 'application/json' } },
    )
  }),

  // all categories or products by a category
  http.get('https://fakestoreapi.in/api/products/category', ({ params }) => {
    if (params.type) {
      return new Response(
        JSON.stringify({
          status: 'SUCCESS',
          message: `You have received products from the ${params.type} category only.`,
          products: [
            {
              id: 1,
              title: 'Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones',
              image: 'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg',
              price: 773,
              description: 'Frequency response: 4 Hz-40,000 Hz',
              brand: 'sony',
              model: 'WH-1000XM3',
              color: 'silver',
              category: 'audio',
              discount: 11,
              onSale: true,
            },
            {
              id: 6,
              title: 'Xiaomi Wired in-Ear Earphones with Mic, Ultra Deep Bass & Metal Sound Chamber (Blue)',
              image: 'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg',
              price: 5,
              description: 'Ergonomically angled to fit perfectly in your ear canal.',
              brand: 'xiaomi',
              model: 'Mi Earphones Basic Blue',
              color: 'Blue',
              category: 'audio',
              popular: true,
            },
          ],
        }),
        { headers: { 'Content-Type': 'application/json' } },
      )
    }

    return new Response(
      JSON.stringify({
        status: 'SUCCESS',
        message: 'You have received 6 categories.',
        categories: ['tv', 'audio', 'laptop', 'mobile', 'gaming', 'appliances'],
      }),
      { headers: { 'Content-Type': 'application/json' } },
    )
  }),

  // single product
  http.get('https://fakestoreapi.in/api/products/1', () => {
    return new Response(
      JSON.stringify({
        status: 'SUCCESS',
        message: 'You have a single product requested for id 1',
        product: {
          id: 1,
          title: 'Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)',
          image: 'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg',
          price: 773,
          description: 'Industry leading Active Noise Cancellation (ANC) lends a personalized',
          brand: 'sony',
          model: 'WH-1000XM3',
          color: 'silver',
          category: 'audio',
          discount: 11,
          popular: true,
          onSale: true,
        },
      }),
      { headers: { 'Content-Type': 'application/json' } },
    )
  }),
]

export const server = setupServer(...handlers)

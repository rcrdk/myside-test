import { http, HttpResponse } from 'msw'

import { FetchProductResponse } from '@/http/fetch-product'
import { MockedAPI } from '@/lib/api-client'

export const fetchProductMock = http.get<never, never, FetchProductResponse>(MockedAPI(`products/:id`), () => {
  return HttpResponse.json({
    status: 'SUCCESS',
    message: 'Product loaded',
    product: {
      id: 1,
      title: 'Headphone Bluetooth X200',
      image: '/test.jpg',
      price: 199.99,
      description: 'Headphone sem fio com cancelamento de ruído e bateria de longa duração.',
      brand: 'SoundMax',
      model: 'X200',
      color: 'Preto',
      category: 'audio',
      discount: 10,
      popular: true,
      onSale: true,
    },
  })
})

import { http, HttpResponse } from 'msw'

import { FetchCategoriesResponse } from '@/http/fetch-categories'
import { MockedAPI } from '@/lib/api-client'

export const fetchCategoriesMock = http.get<never, never, FetchCategoriesResponse>(
  MockedAPI('products/category'),
  ({ request }) => {
    const url = new URL(request.url)
    const type = url.searchParams.get('type')

    if (type && type === 'audio') {
      return HttpResponse.json({
        status: 'SUCCESS',
        message: 'Product category loaded',
        products: [
          {
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
          {
            id: 2,
            title: 'Caixa de Som Portátil BassBoom',
            image: '/test.jpg',
            price: 149.99,
            description: 'Caixa de som portátil com som potente e resistência à água.',
            brand: 'BassTech',
            model: 'BoomBass',
            color: 'Vermelho',
            category: 'audio',
            popular: true,
          },
          {
            id: 3,
            title: 'Fone de Ouvido Intra-auricular HD',
            image: '/test.jpg',
            price: 79.99,
            description: 'Fone intra-auricular com áudio de alta definição e isolamento acústico.',
            brand: 'AudioWave',
            model: 'HD Pro',
            color: 'Azul',
            category: 'audio',
          },
        ],
      })
    }

    if (type && type === 'tv') {
      return HttpResponse.json({
        status: 'SUCCESS',
        message: 'Product category loaded',
        products: [
          {
            id: 4,
            title: 'Smart TV 4K 50 UltraVision',
            image: '/test.jpg',
            price: 2499.99,
            description: 'Smart TV 4K com painel LED de alta qualidade e integração com assistentes de voz.',
            brand: 'VisionTech',
            model: 'UltraVision 50',
            color: 'Preto',
            category: 'tv',
            discount: 15,
            popular: true,
            onSale: true,
          },
          {
            id: 5,
            title: 'TV OLED 65 Cinematic',
            image: '/test.jpg',
            price: 5999.99,
            description: 'TV OLED de 65 polegadas com HDR avançado e taxa de atualização de 120Hz.',
            brand: 'CinemaView',
            model: 'Cinematic 65',
            color: 'Cinza',
            category: 'tv',
          },
          {
            id: 6,
            title: 'Monitor Gamer 32 144Hz',
            image: '/test.jpg',
            price: 1299.99,
            description: 'Monitor gamer de 32 polegadas com taxa de atualização de 144Hz e tecnologia FreeSync.',
            brand: 'GameVision',
            model: 'ProGamer 32',
            color: 'Preto',
            category: 'tv',
            popular: true,
          },
        ],
      })
    }

    return HttpResponse.json({
      status: 'SUCCESS',
      message: 'Categories loaded',
      categories: ['audio', 'tv'],
    })
  },
)

import { API, ApiPayloadType } from '@/lib/api-client'

type Request = {
  category: string
}

type Response = ApiPayloadType & {
  producs?: {
    id: number
    title: string
    image: string
    price: number
    description: string
    brand: string
    model: string
    color: string
    category: string
    discount: number
    popular?: boolean
  }[]
}

export async function fetchProducts({ category }: Request): Promise<Response | null> {
  try {
    const ApiFetchRoute = category ? 'products/category' : 'products'

    return await API.get(ApiFetchRoute, {
      searchParams: {
        type: category,
        limit: 150,
      },
    }).json<Response>()
  } catch (error) {
    console.error(error)

    return null
  }
}

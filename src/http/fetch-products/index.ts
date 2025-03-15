import { ProductDTO } from '@/DTO/product'
import { API, ApiPayloadType } from '@/lib/api-client'

export type FetchProductsResponse = ApiPayloadType & {
  products?: ProductDTO[]
}

export async function fetchProducts(): Promise<FetchProductsResponse | null> {
  try {
    return await API.get('products', {
      searchParams: {
        limit: 150,
      },
    }).json<FetchProductsResponse>()
  } catch (error) {
    console.error(error)

    return null
  }
}

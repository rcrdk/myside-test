import { ProductDTO } from '@/DTO/product'
import { API, ApiPayloadType } from '@/lib/api-client'

export type FetchProductRequest = {
  id: string
}

export type FetchProductResponse = ApiPayloadType & {
  product?: ProductDTO
}

export async function fetchProduct({ id }: FetchProductRequest): Promise<FetchProductResponse | null> {
  try {
    return await API.get(`products/${id}`).json<FetchProductResponse>()
  } catch (error) {
    console.error(error)

    return null
  }
}

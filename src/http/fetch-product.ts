import { ProductDTO } from '@/DTO/product'
import { API, ApiPayloadType } from '@/lib/api-client'

type Request = {
  id: string
}

type Response = ApiPayloadType & {
  product?: ProductDTO
}

export async function fetchProduct({ id }: Request): Promise<Response | null> {
  try {
    return await API.get(`products/${id}`).json<Response>()
  } catch (error) {
    console.error(error)

    return null
  }
}

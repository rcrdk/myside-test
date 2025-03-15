import { ProductDTO } from '@/DTO/product'
import { API, ApiPayloadType } from '@/lib/api-client'

export type FetchCategoriesRequest = {
  category?: string
}

export type FetchCategoriesResponse = ApiPayloadType & {
  categories?: string[]
  products?: ProductDTO[]
}

export async function fetchCategories({ category }: FetchCategoriesRequest): Promise<FetchCategoriesResponse | null> {
  try {
    const response = await API.get('products/category', {
      searchParams: category && { type: category },
    }).json<FetchCategoriesResponse>()
    return response
  } catch (error) {
    console.error(error)

    return null
  }
}

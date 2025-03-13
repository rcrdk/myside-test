import { API, ApiPayloadType } from '@/lib/api-client'

type Response = ApiPayloadType & {
  categories?: string[]
}

export async function fetchCategories(): Promise<Response | null> {
  try {
    const response = await API.get('products/category').json<Response>()
    return response
  } catch (error) {
    console.error(error)

    return null
  }
}

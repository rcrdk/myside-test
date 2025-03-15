import { useQuery } from '@tanstack/react-query'

import { fetchProducts } from '@/http/fetch-products'

export const useProducts = () => {
  return useQuery({
    queryKey: ['PRODUCTS'],
    queryFn: () => fetchProducts(),
    refetchOnWindowFocus: false,
  })
}

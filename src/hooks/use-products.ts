import { useQuery } from '@tanstack/react-query'

import { fetchProducts } from '@/http/fetch-products'

type Props = {
  category: string
}

export const useProducts = ({ category }: Props) => {
  return useQuery({
    queryKey: ['PRODUCTS', category],
    queryFn: () => fetchProducts({ category }),
    refetchOnWindowFocus: false,
  })
}

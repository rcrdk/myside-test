import { useQuery } from '@tanstack/react-query'

import { fetchCategories } from '@/http/fetch-categories'

export const useCategories = () => {
  return useQuery({
    queryKey: ['CATEGORIES'],
    queryFn: () => fetchCategories(),
  })
}

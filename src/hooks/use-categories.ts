import { useQuery } from '@tanstack/react-query'

import { fetchCategories } from '@/http/fetch-categories'

type Props = {
  category?: string
}

export const useCategories = ({ category }: Props = {}) => {
  return useQuery({
    queryKey: ['CATEGORIES', category ?? null],
    queryFn: () => fetchCategories({ category }),
    refetchOnWindowFocus: false,
  })
}

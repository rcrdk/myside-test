import { useContext } from 'react'

import { ProductFiltersContext } from '@/contexts/product-filters-context'

export const useProductFilters = () => useContext(ProductFiltersContext)

import { useMemo } from 'react'

import { Container } from '@/components/common/container'
import { useProductFilters } from '@/hooks/use-product-filters'
import { useProducts } from '@/hooks/use-products'
import { searchOnString } from '@/utils/search-on-string'

export function ProductList() {
  const { filtersSelected } = useProductFilters()

  const { data } = useProducts({
    category: filtersSelected.category,
  })

  const filterProductsByTitle =
    useMemo(() => {
      return data?.products?.filter((product) => searchOnString(filtersSelected.query, product.title))
    }, [data?.products, filtersSelected.query]) ?? []

  return (
    <Container>
      {filterProductsByTitle.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </Container>
  )
}

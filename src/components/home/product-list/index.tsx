import { useMemo } from 'react'
import { Frown } from 'lucide-react'

import { Container } from '@/components/common/container'
import { useProductFilters } from '@/hooks/use-product-filters'
import { useProducts } from '@/hooks/use-products'
import { paginate } from '@/utils/paginate'
import { searchOnString } from '@/utils/search-on-string'
import { Pagination } from '../pagination'
import { ProductItem } from '../product-item'
import { ProductItemSkeleton } from '../product-item/skeleton'
import styles from './styles.module.scss'

export function ProductList() {
  const { filtersSelected, currentPage } = useProductFilters()

  const { data, isFetching } = useProducts({
    category: filtersSelected.category,
  })

  const filterProducts = useMemo(() => {
    if (isFetching || !data?.products) {
      return {
        items: [],
        totalPages: 0,
      }
    }

    const filteredProductsByTitle = data.products.filter((product) =>
      searchOnString(filtersSelected.query, product.title),
    )

    const paginated = paginate({
      data: filteredProductsByTitle,
      page: currentPage,
    })

    return paginated
  }, [currentPage, data?.products, filtersSelected.query, isFetching])

  const showPagination = filterProducts.totalPages > 1
  const hasNotProducts = filterProducts.items.length === 0

  return (
    <Container className={styles.container}>
      {isFetching && Array.from({ length: 15 }).map((_, i) => <ProductItemSkeleton key={i} />)}

      {filterProducts.items.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      <div className={styles.containerInner}>
        {hasNotProducts && (
          <div className={styles.noResults}>
            <Frown size={64} />
            <p>There are not products with this filter selected.</p>
          </div>
        )}

        {showPagination && (
          <Pagination totalPages={filterProducts.totalPages} totalProducts={data?.products?.length ?? 0} />
        )}
      </div>
    </Container>
  )
}

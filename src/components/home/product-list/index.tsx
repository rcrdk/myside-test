import { useMemo } from 'react'
import { Frown } from 'lucide-react'

import { Container } from '@/components/common/container'
import { useCategories } from '@/hooks/use-categories'
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

  const { data: initialProducts, isFetching: isFetchingProducts } = useProducts()

  const { data: productsByCategory, isFetching: isFetchingProductsByCategory } = useCategories({
    category: filtersSelected.category,
  })

  const products = useMemo(() => {
    if (filtersSelected.category) {
      return {
        items: productsByCategory?.products,
        isFetching: isFetchingProducts,
      }
    }

    return {
      items: initialProducts?.products,
      isFetching: isFetchingProductsByCategory,
    }
  }, [filtersSelected.category, initialProducts, isFetchingProducts, isFetchingProductsByCategory, productsByCategory])

  const filterProducts = useMemo(() => {
    if (products.isFetching || !products.items) {
      return {
        items: [],
        totalPages: 0,
      }
    }

    const filteredProductsByTitle = products.items.filter((product) =>
      searchOnString(filtersSelected.query, product.title),
    )

    const paginated = paginate({
      data: filteredProductsByTitle,
      page: currentPage,
    })

    return paginated
  }, [currentPage, filtersSelected.query, products.isFetching, products.items])

  const showPagination = filterProducts.totalPages > 1
  const hasNotProducts = filterProducts.items.length === 0

  return (
    <Container className={styles.container} data-testid="product-list">
      {products.isFetching && Array.from({ length: 15 }).map((_, i) => <ProductItemSkeleton key={i} />)}

      {filterProducts.items.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      <div className={styles.containerInner}>
        {hasNotProducts && (
          <div className={styles.noResults} data-testid="product-list-empty">
            <Frown size={64} />
            <p>There are not products with this filter selected.</p>
          </div>
        )}

        {showPagination && (
          <Pagination totalPages={filterProducts.totalPages} totalProducts={products.items?.length ?? 0} />
        )}
      </div>
    </Container>
  )
}

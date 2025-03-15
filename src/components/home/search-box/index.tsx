import { memo } from 'react'
import { Search } from 'lucide-react'

import { Button } from '@/components/common/button'
import { Container } from '@/components/common/container'
import { useProductFilters } from '@/hooks/use-product-filters'
import { SearchDropdown } from '../search-dropdown'
import styles from './styles.module.scss'

export function SearchBoxComponent() {
  const { searchQuery, onChangeSearchQuery, onChangeFilters } = useProductFilters()

  return (
    <Container className={styles.container}>
      <h1>
        Shop the Best Products at <span>Unbeatable Prices!</span>
      </h1>
      <p>
        Discover a wide selection of high-quality products, carefully curated to meet your needs. Enjoy seamless
        shopping, fast shipping, and great deals every day!
      </p>

      <form onSubmit={onChangeFilters} className={styles.filters}>
        <input
          type="search"
          autoCorrect="off"
          placeholder="What are you looking for?"
          className={styles.input}
          value={searchQuery}
          onChange={onChangeSearchQuery}
        />

        <div className={styles.divisor} />

        <SearchDropdown />

        <div className={styles.divisor} />

        <Button type="submit" variant="primary" mode="icon" className={styles.buttonIcon} data-testid="filter-button">
          <Search />
        </Button>

        <Button type="submit" variant="primary" className={styles.buttonWithLabel}>
          <Search />
          <span>Search products</span>
        </Button>
      </form>
    </Container>
  )
}

export const SearchBox = memo(SearchBoxComponent)

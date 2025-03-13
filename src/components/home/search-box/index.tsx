import { Search } from 'lucide-react'

import { Button } from '@/components/common/button'
import { useProductFilters } from '@/hooks/use-product-filters'
import { SearchDropdown } from '../search-dropdown'
import styles from './styles.module.scss'

export function SearchBox() {
  const { searchQuery, onChangeSearchQuery, onChangeFilters } = useProductFilters()

  return (
    <search>
      <form onSubmit={onChangeFilters} className={styles.container}>
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

        <Button type="submit" variant="primary" mode="icon" className={styles.buttonIcon}>
          <Search />
        </Button>

        <Button type="submit" variant="primary" className={styles.buttonWithLabel}>
          <Search />
          <span>Search products</span>
        </Button>
      </form>
    </search>
  )
}

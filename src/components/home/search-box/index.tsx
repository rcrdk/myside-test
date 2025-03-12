import { useState } from 'react'
import { Search } from 'lucide-react'

import { Button } from '@/components/common/button'
import { SearchDropdown } from '../search-dropdown'
import styles from './styles.module.scss'

export function SearchBox() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  return (
    <search className={styles.container}>
      <input
        type="search"
        autoCorrect="off"
        placeholder="What are you looking for?"
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className={styles.divisor} />

      <SearchDropdown category={category} onChangeCategory={setCategory} />

      <div className={styles.divisor} />

      <Button variant="primary" mode="icon" className={styles.buttonIcon}>
        <Search />
      </Button>

      <Button variant="primary" className={styles.buttonWithLabel}>
        <Search />
        <span>Search products</span>
      </Button>
    </search>
  )
}

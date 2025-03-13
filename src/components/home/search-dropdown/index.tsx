import { useCallback } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDown } from 'lucide-react'

import { useCategories } from '@/hooks/use-categories'
import { useProductFilters } from '@/hooks/use-product-filters'
import styles from './styles.module.scss'

export function SearchDropdown() {
  const { data, isFetching } = useCategories()
  const { searchCategory, onChangeSearchCategory } = useProductFilters()

  const getItemClassName = useCallback(
    (category: string) => {
      return `${styles.option} ${searchCategory === category ? styles.optionActive : ''}`
    },
    [searchCategory],
  )

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger} disabled={isFetching}>
        <span>{searchCategory || 'All categories'}</span>
        <ChevronDown size={20} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropdown} side="bottom" avoidCollisions={false}>
          <DropdownMenu.Item className={getItemClassName('')} onClick={() => onChangeSearchCategory('')}>
            All Categories
          </DropdownMenu.Item>

          {data?.categories?.map((category) => (
            <DropdownMenu.Item
              className={getItemClassName(category)}
              onClick={() => onChangeSearchCategory(category)}
              key={category}
            >
              {category}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

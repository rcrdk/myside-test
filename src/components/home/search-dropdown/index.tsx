import { useCallback } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDown } from 'lucide-react'

import { useCategories } from '@/hooks/use-categories'
import styles from './styles.module.scss'

type Props = {
  selectedCategory: string
  onChangeCategory: (category: string) => void
}

export function SearchDropdown({ selectedCategory, onChangeCategory }: Props) {
  const { data, isFetching } = useCategories()

  const isActiveClassName = useCallback(
    (category: string) => {
      return `${styles.option} ${selectedCategory === category ? styles.optionActive : ''}`
    },
    [selectedCategory],
  )

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger} disabled={isFetching}>
        <span>{selectedCategory || 'All categories'}</span>
        <ChevronDown size={20} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropdown} side="bottom" avoidCollisions={false}>
          <DropdownMenu.Item className={isActiveClassName('')} onClick={() => onChangeCategory('')}>
            All Categories
          </DropdownMenu.Item>

          {data?.categories?.map((category) => (
            <DropdownMenu.Item
              className={isActiveClassName(category)}
              onClick={() => onChangeCategory(category)}
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

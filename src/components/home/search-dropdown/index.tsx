import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDown } from 'lucide-react'

import styles from './styles.module.scss'

type Props = {
  category: string
  onChangeCategory: (category: string) => void
}

export function SearchDropdown({ category, onChangeCategory }: Props) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger}>
        <span>{category || 'All categories'}</span>
        <ChevronDown size={20} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={styles.dropdown} side="bottom" avoidCollisions={false}>
        <DropdownMenu.Item
          className={`${styles.option} ${category === '' && styles.optionActive}`}
          onClick={() => onChangeCategory('')}
        >
          All Categories
        </DropdownMenu.Item>

        <DropdownMenu.Item
          className={`${styles.option} ${category === 'tv' && styles.optionActive}`}
          onClick={() => onChangeCategory('tv')}
        >
          tv
        </DropdownMenu.Item>

        <DropdownMenu.Item
          className={`${styles.option} ${category === 'audio' && styles.optionActive}`}
          onClick={() => onChangeCategory('audio')}
        >
          audio
        </DropdownMenu.Item>

        <DropdownMenu.Item
          className={`${styles.option} ${category === 'laptop' && styles.optionActive}`}
          onClick={() => onChangeCategory('laptop')}
        >
          laptop
        </DropdownMenu.Item>

        <DropdownMenu.Item
          className={`${styles.option} ${category === 'mobile' && styles.optionActive}`}
          onClick={() => onChangeCategory('mobile')}
        >
          mobile
        </DropdownMenu.Item>

        <DropdownMenu.Item
          className={`${styles.option} ${category === 'gaming' && styles.optionActive}`}
          onClick={() => onChangeCategory('gaming')}
        >
          gaming
        </DropdownMenu.Item>

        <DropdownMenu.Item
          className={`${styles.option} ${category === 'appliances' && styles.optionActive}`}
          onClick={() => onChangeCategory('appliances')}
        >
          appliances
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/common/button'
import { useProductFilters } from '@/hooks/use-product-filters'
import styles from './styles.module.scss'

type Props = {
  totalPages: number
  totalProducts: number
}

export function Pagination({ totalPages, totalProducts }: Props) {
  const { currentPage, onChangePage } = useProductFilters()

  const handlePageChange = useCallback(
    (mode: 'increase' | 'decrease') => {
      onChangePage(mode)

      if (document.documentElement) {
        document.documentElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        })
      }
    },
    [onChangePage],
  )

  return (
    <div className={styles.container}>
      <p className={styles.info}>
        Page {currentPage} of {totalPages} | {totalProducts} results found.
      </p>

      <div className={styles.buttons}>
        <Button
          variant={currentPage === 1 ? 'ghost' : 'primary'}
          disabled={currentPage === 1}
          onClick={() => handlePageChange('decrease')}
        >
          <ChevronLeft />
          Prev
        </Button>

        <Button
          variant={currentPage === totalPages ? 'ghost' : 'primary'}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange('increase')}
        >
          Next
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}

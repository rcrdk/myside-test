import { Skeleton } from '@/components/common/skeleton'
import styles from './styles.module.scss'

export function ProductItemSkeleton() {
  return (
    <div className={styles.container} data-testid="product-item-skeleton">
      <Skeleton className={styles.image} />

      <div className={styles.content}>
        <Skeleton className={styles.skeletonTitle} />
        <Skeleton className={styles.skeletonDescription} />
        <Skeleton className={styles.skeletonDescription} />
        <Skeleton className={styles.skeletonPricing} />
      </div>
    </div>
  )
}

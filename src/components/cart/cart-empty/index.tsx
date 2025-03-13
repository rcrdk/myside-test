import { useRouter } from 'next/router'
import { ArrowRight, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/common/button'
import styles from './styles.module.scss'

export function CartEmpty() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <ShoppingCart size={64} />

      <p className={styles.text}>Your cart is empty. Time to add some goodies!</p>

      <Button variant="primary" onClick={() => router.push('/')}>
        Checkout out our catalog
        <ArrowRight />
      </Button>
    </div>
  )
}

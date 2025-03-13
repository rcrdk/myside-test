import { Eraser, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/common/button'
import { Container } from '@/components/common/container'
import { useCart } from '@/hooks/use-cart'
import styles from './styles.module.scss'

export function CartActions() {
  const { onClearCart, cartTotalItems, cartTotalProductPricing } = useCart()

  if (cartTotalItems === 0) {
    return null
  }

  return (
    <Container className={styles.container}>
      <Button onClick={onClearCart}>
        <Eraser />
        <span>Clear cart</span>
      </Button>

      <Button variant="primary">
        <ShoppingCart />
        <span>Finish purchase</span>
        <small>
          (
          {cartTotalProductPricing.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
          )
        </small>
      </Button>
    </Container>
  )
}

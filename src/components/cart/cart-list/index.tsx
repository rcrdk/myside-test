import { useEffect, useState } from 'react'

import { Container } from '@/components/common/container'
import { useCart } from '@/hooks/use-cart'
import { CartEmpty } from '../cart-empty'
import { CartItem } from '../cart-item'
import styles from './styles.module.scss'

export function CartList() {
  const { cartItems } = useCart()

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted || cartItems.length === 0) {
    return (
      <Container>
        <CartEmpty />
      </Container>
    )
  }

  return (
    <Container className={styles.container}>
      {cartItems.length > 0 && cartItems.map((item) => <CartItem key={item.id} data={item} />)}
    </Container>
  )
}

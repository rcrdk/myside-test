/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ShoppingCart } from 'lucide-react'

import brandImage from '@/assets/myside-brand.svg'
import { useCart } from '@/hooks/use-cart'
import { Button } from '../button'
import { Container } from '../container'
import styles from './styles.module.scss'

export function Header() {
  const { cartTotalItems } = useCart()

  const router = useRouter()

  return (
    <header className={styles.container}>
      <Container className={styles.innerContainer}>
        <Link href="/" prefetch={false}>
          <img src={brandImage.src} alt="MySide" className={styles.brand} />
        </Link>

        <Button variant="ghost" mode="icon" aria-label="Shopping cart" onClick={() => router.push('/cart')}>
          <ShoppingCart size={24} />
          {cartTotalItems > 0 && <span className={styles.cardQuantity}>{cartTotalItems}</span>}
        </Button>
      </Container>
    </header>
  )
}

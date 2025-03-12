import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

import brandImage from '@/assets/myside-brand.svg'
import { Button } from '../button'
import { Container } from '../container'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <Container className={styles.innerContainer}>
        <Image src={brandImage} width={140} height={38} alt="MySide" className={styles.brand} />

        <Button variant="ghost" mode="icon" aria-label="Shopping cart">
          <ShoppingCart size={24} />
          <span className={styles.cardQuantity}>11</span>
        </Button>
      </Container>
    </header>
  )
}

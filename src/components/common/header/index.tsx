import Image from 'next/image'

import brandImage from '@/assets/myside-brand.svg'
import { Container } from '../container'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <Container className={styles.innerContainer}>
        <Image src={brandImage} width={140} height={38} alt="MySide" />
        <span>[cart button]</span>
      </Container>
    </header>
  )
}

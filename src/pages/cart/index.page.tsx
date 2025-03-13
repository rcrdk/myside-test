import Head from 'next/head'

import { CartActions } from '@/components/cart/cart-actions'
import { CartList } from '@/components/cart/cart-list'
import { Container } from '@/components/common/container'
import { Header } from '@/components/common/header'
import styles from './styles.module.scss'

export default function Cart() {
  return (
    <>
      <Head>
        <title>MySide - Shopping Cart</title>
      </Head>

      <div>
        <Header />

        <Container className={styles.container}>
          <h1 className={styles.title}>Shopping Cart</h1>
        </Container>

        <CartList />
        <CartActions />
      </div>
    </>
  )
}

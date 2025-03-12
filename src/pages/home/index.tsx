import Head from 'next/head'

import { Container } from '@/components/common/container'
import { Header } from '@/components/common/header'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>MySide - Products</title>
      </Head>

      <div className={styles.container}>
        <Header />

        <main>
          <Container>
            <h1>Hello, World!</h1>
          </Container>
        </main>
      </div>
    </>
  )
}

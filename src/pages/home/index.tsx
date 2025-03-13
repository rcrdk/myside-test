import Head from 'next/head'

import { Container } from '@/components/common/container'
import { Header } from '@/components/common/header'
import { ProductList } from '@/components/home/product-list'
import { SearchBox } from '@/components/home/search-box'
import { ProductFiltersContextProvider } from '@/contexts/product-filters-context'
import styles from './styles.module.scss'

function HomeComponent() {
  return (
    <>
      <Head>
        <title>MySide - Products</title>
      </Head>

      <Header />

      <main>
        <Container className={styles.heroContainer}>
          <h1>
            Shop the Best Products at <span>Unbeatable Prices!</span>
          </h1>
          <p>
            Discover a wide selection of high-quality products, carefully curated to meet your needs. Enjoy seamless
            shopping, fast shipping, and great deals every day!
          </p>

          <SearchBox />
        </Container>

        <ProductList />
      </main>
    </>
  )
}

export default function Home() {
  return (
    <ProductFiltersContextProvider>
      <HomeComponent />
    </ProductFiltersContextProvider>
  )
}

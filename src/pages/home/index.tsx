import Head from 'next/head'

import { Header } from '@/components/common/header'
import { ProductList } from '@/components/home/product-list'
import { SearchBox } from '@/components/home/search-box'

export default function HomeComponent() {
  return (
    <>
      <Head>
        <title>MySide - Products</title>
      </Head>

      <div>
        <Header />

        <main>
          <SearchBox />
          <ProductList />
        </main>
      </div>
    </>
  )
}

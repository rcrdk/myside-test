// Verificar SSG
// Aplicar na Home
// Usar React Query

import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '@/components/common/container'
import { Header } from '@/components/common/header'
import { ProductDTO } from '@/DTO/product'
import { API, ApiPayloadType } from '@/lib/api-client'
import styles from './styles.module.scss'

export default function Product({ product }: { product: ProductDTO }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>MySide - Product details</title>
        </Head>

        <h1>Loading...</h1>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>MySide - {product.title}</title>
      </Head>

      <div>
        <Header />

        <Container className={styles.container}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.image}</p>
        </Container>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const response = await API.get(`products/${params?.id}`).json<ApiPayloadType & { product: ProductDTO }>()

  if (!response || Object.keys(response.product).length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: { product: response.product },
    revalidate: 60 * 60 * 1, // 1h
  }
}

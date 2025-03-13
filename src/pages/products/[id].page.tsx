import { GetStaticPaths, GetStaticProps } from 'next'

import { Container } from '@/components/common/container'
import { Header } from '@/components/common/header'
import { API } from '@/lib/api-client'

export default function Product({ product }) {
  return (
    <div>
      <Header />

      <Container>
        <h1>{product.title}</h1>
      </Container>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  let product = null

  try {
    const response = await API.get(`products/${params?.id}`).json()
    product = response.product
  } catch {
    return {
      notFound: true,
    }
  }

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: { product },
    revalidate: 60 * 60 * 1, // 1h
  }
}

import { useMemo, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PlusCircle, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/common/button'
import { Container } from '@/components/common/container'
import { Header } from '@/components/common/header'
import { ProductImage } from '@/components/product/product-image'
import { ProductDTO } from '@/DTO/product'
import { useCart } from '@/hooks/use-cart'
import { fetchProduct } from '@/http/fetch-product'
import { splitLineBreaks } from '@/utils/split-line-breaks'
import styles from './styles.module.scss'

export default function Product({ product }: { product: ProductDTO }) {
  const [showFullDescription, setShowFullDescription] = useState(false)

  const { onAddNewProduct } = useCart()

  const router = useRouter()

  const calculateOriginalPrice = useMemo(() => {
    if (!product.discount) {
      return null
    }

    return product.price * (product.discount / 100 + 1)
  }, [product.discount, product.price])

  const productDescription = useMemo(() => {
    const paragraphs = splitLineBreaks(product.description ?? '')

    return {
      intro: paragraphs.at(0),
      hidden: paragraphs.slice(1),
    }
  }, [product.description])

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

  const shouldDisplayReadMore = !showFullDescription && productDescription.hidden?.length

  function handleReadMore() {
    setShowFullDescription((prev) => !prev)
  }

  return (
    <>
      <Head>
        <title>MySide - {product.title}</title>
      </Head>

      <div>
        <Header />

        <section>
          <Container className={styles.container}>
            <ProductImage src={product.image} />

            <div className={styles.info}>
              <h1 className={styles.title}>{product.title}</h1>
              <div className={styles.badgeGroup}>
                <span className={styles.badgeDefault}>{product.category}</span>
                {product.discount && <span className={styles.badgeBranded}>🛍️ {product.discount}% discount</span>}
                {product.popular && <span className={styles.badgeBranded}>🔥 Trending</span>}
              </div>

              <hr className={styles.divisor} />

              <p className={styles.text}>{productDescription.intro}</p>

              {shouldDisplayReadMore && (
                <button className={styles.readMore} onClick={handleReadMore}>
                  <PlusCircle size={20} />
                  Read more
                </button>
              )}

              {showFullDescription &&
                productDescription.hidden?.map((text, index) => (
                  <p className={styles.text} key={index}>
                    {text}
                  </p>
                ))}

              <hr className={styles.divisor} />

              <div className={styles.bottomInfo}>
                <p className={styles.pricing}>
                  {calculateOriginalPrice && (
                    <s className={styles.oldPricing}>
                      {calculateOriginalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </s>
                  )}

                  <strong className={styles.currentPricing}>
                    {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </strong>
                </p>

                <Button variant="primary" onClick={() => onAddNewProduct(product)}>
                  <ShoppingCart />
                  <span>Adicionar ao carrinho</span>
                </Button>
              </div>
            </div>
          </Container>
        </section>
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
  const productId = params?.id ?? ''
  const response = await fetchProduct({ id: productId })

  if (!response?.product) {
    return {
      notFound: true,
    }
  }

  return {
    props: { product: response.product },
    revalidate: 60 * 60 * 1, // 1h
  }
}

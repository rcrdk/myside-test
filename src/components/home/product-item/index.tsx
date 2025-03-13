import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImageOff, Loader } from 'lucide-react'

import { ProductDTO } from '@/DTO/product'
import styles from './styles.module.scss'

type Props = {
  product: ProductDTO
}

export function ProductItem({ product }: Props) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <Link href={`/products/${product.id}`} className={styles.container} prefetch={false}>
      <div className={styles.image}>
        <Image
          src={product.image}
          width={500}
          height={500}
          loading="lazy"
          alt={product.title}
          style={{ opacity: imageError || imageLoading ? 0 : 1 }}
          onLoad={() => setImageLoading(false)}
          onError={() => {
            setImageError(true)
            setImageLoading(false)
          }}
        />

        {imageError && <ImageOff />}
        {imageLoading && <Loader className={styles.spinner} />}
      </div>

      <div className={styles.content}>
        <h2 className={styles.title} title={product.title}>
          {product.title}
        </h2>

        <p className={styles.description}>{product.description}</p>
        <p className={styles.pricing}>
          {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </p>
      </div>
    </Link>
  )
}

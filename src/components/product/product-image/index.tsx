import { useState } from 'react'
import Image from 'next/image'
import { ImageOff, Loader } from 'lucide-react'

import styles from './styles.module.scss'

type Props = {
  src: string
}

export function ProductImage({ src }: Props) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <>
      <div className={styles.container}>
        <Image
          src={src}
          width={800}
          height={800}
          loading="lazy"
          alt=""
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

      <hr className={styles.divisor} />
    </>
  )
}

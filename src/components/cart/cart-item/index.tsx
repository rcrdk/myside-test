import { memo, useMemo, useState } from 'react'
import Image from 'next/image'
import { ImageOff, Loader, MinusCircle, PlusCircle, Trash } from 'lucide-react'

import { Button } from '@/components/common/button'
import { useCart } from '@/hooks/use-cart'
import { CartItem as CartItemDTO } from '@/reducers/cart/actions'
import styles from './styles.module.scss'

type Props = {
  data: CartItemDTO
}

function CartItemComponent({ data }: Props) {
  const { onRemoveProduct, onDecreaseProductQuantity, onIncreaseProductQuantity } = useCart()

  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const calculatePricing = useMemo(() => {
    const unity = data.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    const subtotal = (data.product.price * data.quantity).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })

    return {
      unity,
      subtotal,
    }
  }, [data.product.price, data.quantity])

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={data.product.image}
          width={500}
          height={500}
          loading="lazy"
          alt={data.product.title}
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

      <div className={styles.info}>
        <div>
          <h2 className={styles.title} title={data.product.title}>
            {data.product.title}
          </h2>

          <span className={styles.pricing}>
            <b>Unity:</b> {calculatePricing.unity}
          </span>

          <span className={styles.pricing}>
            <b>Subtotal:</b> {calculatePricing.subtotal} ({data.quantity} un.)
          </span>
        </div>

        <div className={styles.actions}>
          <div className={styles.quantity}>
            <Button
              onClick={() => onDecreaseProductQuantity(data)}
              mode="icon"
              aria-label="Decrease"
              disabled={data.quantity === 1}
            >
              <MinusCircle size={20} />
            </Button>

            <span>{data.quantity}</span>

            <Button onClick={() => onIncreaseProductQuantity(data)} mode="icon" aria-label="Increase">
              <PlusCircle size={20} />
            </Button>
          </div>

          <Button onClick={() => onRemoveProduct(data)} mode="icon" aria-label="Remove">
            <Trash size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export const CartItem = memo(CartItemComponent)

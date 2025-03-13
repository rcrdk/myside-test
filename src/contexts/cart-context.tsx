import { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import { useRouter } from 'next/router'

import { ProductDTO } from '@/DTO/product'
import {
  addProductAction,
  CartItem,
  clearCartAction,
  decreaseProductQuantityAction,
  increaseProductQuantityAction,
  removeProductAction,
} from '@/reducers/cart/actions'
import { cartReducer } from '@/reducers/cart/reducer'

interface CartContextDataProps {
  cartItems: CartItem[]
  cartTotalItems: number
  cartTotalProductPricing: number
  onAddNewProduct: (product: ProductDTO) => void
  onRemoveProduct: (product: CartItem) => void
  onIncreaseProductQuantity: (product: CartItem) => void
  onDecreaseProductQuantity: (product: CartItem) => void
  onClearCart: VoidFunction
}
export const CartContext = createContext<CartContextDataProps>({} as CartContextDataProps)

interface CartContextProviderProps {
  children: React.ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const router = useRouter()

  const [cartTotalItems, setCartTotalItems] = useState(0)
  const [cartTotalProductPricing, setCartTotalProductPricing] = useState(0)

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
    },
    (initialState) => {
      if (typeof window !== 'undefined') {
        const storedStateAsJSON = window.localStorage.getItem('@MYSIDE-1.0.0:card-items')

        if (storedStateAsJSON) {
          return JSON.parse(storedStateAsJSON)
        }
      }

      return initialState
    },
  )

  const cartItems = useMemo(() => cartState.products, [cartState.products])

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('@MYSIDE-1.0.0:card-items', stateJSON)
    }
  }, [cartState])

  const onAddNewProduct = useCallback(
    (product: ProductDTO) => {
      const newProduct: CartItem = {
        id: product.id,
        product,
        quantity: 1,
      }

      dispatch(addProductAction(newProduct))

      router.push('/cart')
    },
    [router],
  )

  const onRemoveProduct = useCallback((product: CartItem) => {
    dispatch(removeProductAction(product))
  }, [])

  const onIncreaseProductQuantity = useCallback((product: CartItem) => {
    dispatch(increaseProductQuantityAction(product))
  }, [])

  const onDecreaseProductQuantity = useCallback((product: CartItem) => {
    dispatch(decreaseProductQuantityAction(product))
  }, [])

  const onClearCart = useCallback(() => {
    dispatch(clearCartAction())
  }, [])

  useEffect(() => {
    setCartTotalItems(cartItems.reduce((previous, current) => previous + current.quantity, 0))

    setCartTotalProductPricing(
      cartItems.reduce((previous, current) => previous + current.quantity * current.product.price, 0),
    )
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotalItems,
        cartTotalProductPricing,
        onAddNewProduct,
        onRemoveProduct,
        onIncreaseProductQuantity,
        onDecreaseProductQuantity,
        onClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

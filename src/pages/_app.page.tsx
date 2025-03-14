import { queryClient } from '@/lib/react-query'

import '@/styles/global.scss'

import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'

import { CartContextProvider } from '@/contexts/cart-context'
import { ProductFiltersContextProvider } from '@/contexts/product-filters-context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductFiltersContextProvider>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </ProductFiltersContextProvider>
    </QueryClientProvider>
  )
}

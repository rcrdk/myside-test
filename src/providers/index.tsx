import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { CartContextProvider } from '@/contexts/cart-context'
import { ProductFiltersContextProvider } from '@/contexts/product-filters-context'
import { queryClient } from '@/lib/react-query'

interface Props {
  children: ReactNode
}

export function AppProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductFiltersContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </ProductFiltersContextProvider>
    </QueryClientProvider>
  )
}

import { QueryClientProvider } from '@tanstack/react-query'
import { AppRouterMockProvider } from 'tests/providers/router'

import { CartContextProvider } from '@/contexts/cart-context'
import { ProductFiltersContextProvider } from '@/contexts/product-filters-context'
import { queryClient } from '@/lib/react-query'

type Props = {
  children: React.ReactNode
}

export function AppMockProviders({ children }: Props) {
  return (
    <AppRouterMockProvider>
      <QueryClientProvider client={queryClient}>
        <ProductFiltersContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </ProductFiltersContextProvider>
      </QueryClientProvider>
    </AppRouterMockProvider>
  )
}

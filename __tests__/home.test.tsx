import { QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { AppRouterContextProviderMock } from 'tests/app-router-context-mock'

import { CartContextProvider } from '@/contexts/cart-context'
import { ProductFiltersContextProvider } from '@/contexts/product-filters-context'
import { queryClient } from '@/lib/react-query'
import Home from '@/pages/home'

describe('Home', () => {
  it('should have main title', async () => {
    render(
      <AppRouterContextProviderMock>
        <QueryClientProvider client={queryClient}>
          <ProductFiltersContextProvider>
            <CartContextProvider>
              <Home />
            </CartContextProvider>
          </ProductFiltersContextProvider>
        </QueryClientProvider>
      </AppRouterContextProviderMock>,
    )

    const heading = await screen.findByRole('heading', {
      name: /Shop the Best Products at/i,
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })
})

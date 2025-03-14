import { render, screen } from '@testing-library/react'
import { AppMockProviders } from 'tests/providers'

import Home from '@/pages/home'

describe('Home', () => {
  it('should have main title', async () => {
    render(
      <AppMockProviders>
        <Home />
      </AppMockProviders>,
    )

    const heading = await screen.findByRole('heading', {
      name: /Shop the Best Products at/i,
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })
})

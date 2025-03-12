import { render, screen } from '@testing-library/react'

import Home from '@/pages/home'

describe('Home', () => {
  it('should render a level one heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'Hello, World!',
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })
})

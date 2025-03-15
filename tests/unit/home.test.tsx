import { fireEvent, screen } from '@testing-library/react'
import { render } from 'tests/vitest-setup'
import { describe, expect, it } from 'vitest'

import Home from '@/pages/home'
import { wait } from '@/utils/wait'

describe('Home', () => {
  it('should list all products', async () => {
    render(<Home />)
    await wait()
    const products = screen.getAllByTestId('product-item')
    expect(products).toHaveLength(6)
  })

  it('should not have products', async () => {
    render(<Home />)

    await wait()

    const input = screen.getByPlaceholderText('What are you looking for?')
    const button = screen.getByTestId('filter-button')

    fireEvent.change(input, {
      target: { value: 'Non existent product' },
    })

    fireEvent.click(button)

    await wait()

    const empty = screen.getByTestId('product-list-empty')

    expect(empty).toBeInTheDocument()
  })
})

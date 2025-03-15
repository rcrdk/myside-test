import { expect, test } from '@playwright/test'

test('Filter products', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const products = page.getByTestId('product-item')
  const input = page.getByPlaceholder('What are you looking for?', { exact: true })
  const button = page.getByTestId('filter-button')

  await page.getByRole('button', { name: 'All categories' }).click()
  await page.getByRole('menuitem', { name: 'audio' }).click()
  await button.click()

  const totalByCategory = await products.count()
  expect(totalByCategory).toEqual(3)

  await input.fill('headphone')
  await button.click()

  const totalByCategoryAndQuery = await products.count()
  expect(totalByCategoryAndQuery).toEqual(1)

  await expect(products).toHaveText(/Headphone Bluetooth X200/)

  await input.fill('non-existent-product')
  await button.click()

  expect(page.getByTestId('product-list-empty')).toBeVisible()
})

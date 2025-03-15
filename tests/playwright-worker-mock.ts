import { setupWorker } from 'msw/browser'

import { fetchCategoriesMock } from '@/http/fetch-categories/mock'
import { fetchProductMock } from '@/http/fetch-product/mock'
import { fetchProductsMock } from '@/http/fetch-products/mock'

export const worker = setupWorker(fetchCategoriesMock, fetchProductMock, fetchProductsMock)

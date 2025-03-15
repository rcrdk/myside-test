import { setupServer } from 'msw/node'

import { fetchCategoriesMock } from '@/http/fetch-categories/mock'
import { fetchProductMock } from '@/http/fetch-product/mock'
import { fetchProductsMock } from '@/http/fetch-products/mock'

const handlers = [fetchCategoriesMock, fetchProductMock, fetchProductsMock]

export const server = setupServer(...handlers)

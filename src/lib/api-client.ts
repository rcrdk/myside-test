import ky from 'ky'

import { env } from './env'

export const API = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
})

import ky from 'ky-universal'

import { env } from './env'

export type ApiPayloadType = {
  status: 'SUCCESS' | 'ERROR' | 'UNAUTHORIZED' | 'FORBIDDEN' | 'NOT-FOUND' | 'BAD-REQUEST'
  message: string
}

export const API = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
})

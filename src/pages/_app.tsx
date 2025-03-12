import { queryClient } from '@/lib/react-query'

import '@/styles/global.scss'

import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

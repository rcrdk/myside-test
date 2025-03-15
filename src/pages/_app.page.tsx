import { AppProviders } from '@/providers'

import '@/styles/global.scss'

import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { enableMSW } from 'tests/playwright-setup'

export default function App({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    async function load() {
      await enableMSW()
      setShow(true)
    }
    load()
  }, [])

  if (!show) {
    return null
  }

  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  )
}

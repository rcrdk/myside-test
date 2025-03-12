import Head from 'next/head'

import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>MySide - Products</title>
      </Head>

      <div className={styles.container}>
        {/* header */}

        <main>
          <h1>Hello, World!</h1>
        </main>

        {/* footer */}
      </div>
    </>
  )
}

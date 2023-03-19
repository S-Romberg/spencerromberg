import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Portfolio site for Spencer Romberg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
            <img
              src="/73934 copy.jpg"
              alt="Vercel Logo"
              className={styles.wall}
            />
            <img
              src="/489 copy.jpg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
            />
            <img
              src="/57715 copy.jpg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
            />
            <img
              src="/57798 copy.jpg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
            />
            <img
              src="/89594 copy.jpg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
            />
      </main>
    </>
  )
}

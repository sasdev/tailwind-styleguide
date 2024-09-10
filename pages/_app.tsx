import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout/layout"
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js" strategy="lazyOnload" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
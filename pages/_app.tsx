import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout/layout"
import Head from 'next/head'

// import 'tw-elements'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
   
    <Head>
      <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js" async></script>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>

    </>
  )
}




<<<<<<< HEAD
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
=======
import Layout from "../components/layout/layout";
import Head from "next/head";
import Script from "next/script";
import PageTransition from "@components/PageTransition";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import "../styles/globals.css"; 

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>BackOffice</title>
      </Head>
      <Script
        src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"
        strategy="lazyOnload"
      />
      <Layout>
        <AnimatePresence mode="wait">
          <PageTransition key={router.route}>
            <Component {...pageProps} />
          </PageTransition>
        </AnimatePresence>
      </Layout>
    </>
  );
>>>>>>> gh-pages
}
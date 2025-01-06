import MainContainer from '../components/MainContainer';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {

  return (
    <MainContainer heading="Your Heading Here" usePadding={true}>
      <Head>
        <title>Styleguide Demo</title>
      </Head>
      <div className="text-center mt-36 mb-10">
        <h1 className="text-6xl">Styleguide Demo</h1>
      </div>

      <div className="flex flex-row">
        <div className="w-2/12 flex-none md:hidden lg:block "></div>
        <div className="flex-1">
          <div className="flex flex-row items-center justify-center mb-6">
            <Image alt="logo" src={`${basePath}/next-logo.png`} className="h-20" width={80} height={80} />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            <Image alt="logo" src={`${basePath}/tailwind-logo.png`} className="h-28" width={112} height={112} />
          </div>
        </div>
        <div className="w-2/12 flex-none md:hidden lg:block "></div>
      </div>

      <div className="flex flex-row">
        <div className="w-2/12 flex-none md:hidden lg:block "></div>

        <div className="flex-1 border border-gray-200 p-4">
          <p className="mb-3">
            This demo app is built using <b>Next.js</b> and <b>Tailwind</b>. Next.js is a framework for building server-rendered React applications, which allows for efficient performance and dynamic updates. Tailwind is a utility-first CSS framework that provides a set of pre-defined CSS classes for building responsive and consistent user interfaces.
          </p>
          <p className="mb-3">
            The app showcases the capabilities of using Next.js for server-side rendering, code-splitting, and dynamic routing. It also demonstrates the power of Tailwind for quickly building responsive and visually consistent layouts, without the need for writing custom CSS.
          </p>
          <p className="mb-3">
            The app is simple, but its design and layout are attractive and modern. Its easy to navigate and user-friendly. The app includes features such as a responsive navigation bar, a hero section, and a clean grid layout for showcasing content. The app is also optimized for SEO and accessibility.
          </p>
        </div>
        <div className="w-2/12 flex-none md:hidden lg:block "></div>
      </div>
    </MainContainer>
  );
}
import Main from '../components/main'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { basePath } from '../next.config.js'

export default function Home() {
    console.log(process.env.basePath)

  return (
        <Main>
            <div className="text-center mt-36 mb-10">
                <h1 className="text-6xl">Styleguide Demo</h1>
            </div>

            <div className="flex flex-row">
                <div className="w-2/12 flex-none md:hidden lg:block "></div>
                <div className="flex-1">
                    <div className="flex flex-row items-center justify-center mb-6">
                        <img alt="logo" src={`${basePath}/next-logo.png`} className="h-20"></img>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                          </svg>
                        <img alt="logo" src={`${basePath}/tailwind-logo.png`}  className="h-28"></img>
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
                        The app is simple, but it&apos;a s design and layout is attractive and modern. It&apos;s easy to navigate and user-friendly. The app includes features such as a responsive navigation bar, a hero section, and a clean grid layout for showcasing content. The app is also optimized for SEO and accessibility.
                    </p>
                    <p className="mb-3">
                        Overall, this demo app serves as a great example of how Next.js and Tailwind can be used together to create efficient and visually appealing web applications.
                    </p>
                </div>
                <div className="w-2/12 flex-none md:hidden lg:block"></div>
            </div>

        </Main>
  )
}

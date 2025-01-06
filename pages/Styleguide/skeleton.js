import React from "react"
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
<<<<<<< HEAD
import Card1 from "../../components/Cards/card1"
=======
import Card1 from "../../components/cards/card1"
>>>>>>> gh-pages
import MainContainer from "../../components/MainContainer"


function skeleton(){
    return(
        <MainContainer heading="Skeleton">

        <div className="Description mb-10">
            Skeletons are used to create a loading state for elements on a website. They are essentially placeholders that are used to simulate the loading of content, and give the appearance that the content is loading dynamically. Skeletons are typically used for elements such as images, paragraphs, and buttons, and are designed to match the layout and styling of the final content. They are often used in conjunction with JavaScript to simulate the loading of content in a non-blocking way, and provide a better user experience by giving the user an indication that the content is on the way.
        </div>

        <Heading2>Example 1</Heading2>
        
        <Card1>
            <div className="p-4 rounded-lg shadow-lg max-w-md bg-white">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </Card1>

        <Heading2>Example 2</Heading2>

        <Card1>
            <div className="p-4 rounded-lg shadow-lg max-w-md bg-white">
                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                    <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                    <div className="w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
                </div>
            </div>
        </Card1>


        <Heading2>Example 3</Heading2>

        <Card1>
            <div className="p-4 rounded-lg shadow-lg max-w-md bg-white">
                <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                    <div className="flex items-center space-x-2 w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>  
                    <div className="flex items-center w-full space-x-2 max-w-[480px]">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[400px]">
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[480px]">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[440px]">
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[360px]">
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </Card1>

        <Heading2>Example 4</Heading2>

        <Card1>
            <div role="status" className="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700 bg-white">
                <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
                    <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4 space-x-3">
                    <svg className="w-14 h-14 text-gray-200 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </Card1>

        <Heading2>Example 5</Heading2>

        <Card1>
            <div role="status" className="p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 bg-white">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex justify-between items-center pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex justify-between items-center pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex justify-between items-center pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex justify-between items-center pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </Card1>

        </MainContainer>
    )
}

export default skeleton
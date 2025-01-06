import React from "react"
import MainContainer from "../../components/MainContainer"
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
import Card1 from "@components/cards/card1"
 
export default function Variants() {
  return (
    <MainContainer>
        <Heading1>Input</Heading1>
        <Heading2>Example 1</Heading2>

        <Card1>
            <div className="flex w-full items-end gap-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>

            </div>
        </Card1>

        <Heading2>Example 2</Heading2>

        <Card1>
            {/* First Name */}
            <div className="flex items-center mb-5">
                <div className="flex-none w-20 mr-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                </div>
                <div className="flex-none">
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
            </div>

            {/* Last Name */}
            <div className="flex items-center">
                <div className="flex-none w-20 mr-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                </div>
                <div>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                </div>
            </div>
        </Card1>


        {/* <!-- This is an example component --> */}
        <Heading2>Example 3</Heading2>

        <Card1>
        <div class="max-w-xl">

        	<label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                </div>
                <label for="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    @
                </span>
                <input type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk" />
            </div>
        	
        </div>
        </Card1>


    </MainContainer>
  );
}
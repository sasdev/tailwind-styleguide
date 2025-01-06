import React from "react"
import { useState, useEffect } from 'react'
import MainContainer from "../../components/MainContainer"
import Heading2 from "../../components/headings/heading2"
import Card1 from "@components/notcards/card1"
import { Tab } from "@headlessui/react"
import Modal from 'react-modal'

function Employees(){
	// Data
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

	// Modals
	const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetch('https://reqres.in/api/users')
              .then((res) => res.json())
              .then((data) => {
                setData(data.data)
                setLoading(false)
              })
        }, 10);
      }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return(
        <MainContainer usePadding={false} >
			<div className="h-full">

                {/* Page Title*/}
                

                {/* View change */}
				<div className="p-2 flex items-center gap-2">

                    <h1 className="inline-block text-xl font-extrabold text-slate-900 tracking-tight">Manage Employees</h1>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 border border-gray-300 rounded-md p-1 text-gray-600 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 border border-gray-300 rounded-md p-1 text-gray-200 cursor-pointer" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                    </svg>
				</div>

                {/* Layout */}
            	<div className="flex flex-row min-h-full">

            	    {/* Left Content */}
            	    <div className="w-64 flex-none">

						{/* Search bar */}
						<div className="border-red-600 p-2 flex items-center">
							<div className="border-yellow-500 w-full mr-2">
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-visible:border-gray-500 outline-none block w-full p-2.5 " placeholder="Search" required />
							</div>
							<div className="border border-gray-300 rounded-md focus:bg-gray-300 cursor-pointer h-10 w-10 flex items-center"
								onClick={() => setShowPopup(true)}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
								</svg>
							</div>

						</div>

						{/* List of users */}
                        <ul className="max-w-md divide-y divide-gray-200 bg-white">
            	        {
            	            data.map((item, index) => (
            	                 <li className="p-3 cursor-pointer  hover:bg-gray-200 " key="">
            	                    <div className="flex items-center space-x-4">
            	                       <div className="flex-shrink-0">
            	                          <img className="w-8 h-8 rounded-full" src={item.avatar} alt="avatar" />
            	                       </div>
            	                       <div className="flex-1 min-w-0">
            	                          <p className="text-sm font-medium text-gray-900 truncate">
            	                            {item.first_name} {item.last_name}
            	                          </p>
            	                          <p className="text-sm text-gray-500 truncate">
            	                            {item.email}
            	                          </p>
            	                       </div>
            	                       <div className="inline-flex items-center text-base font-thin text-gray-500 dark:text-white">
            	                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            	                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            	                         </svg>

            	                       </div>
            	                    </div>
            	                 </li>
            	           ))
            	        }
                        </ul>

            	    </div>

            	    {/* Right content */}
            	    <div className="flex-1 px-4 py-2 bg-slate-200">
            	        
                        {/* Tabs */}
                        <Tab.Group defaultIndex={0}>
    			        	<Tab.List className ="rounded-lg bg-gray-100 inline-flex flex-wrap px-1 py-1 gap-2">
    			        		<Tab className="ui-selected:bg-blue-500 rounded-lg px-3 py-2.5 text-sm font-medium leading-5 text-gray-500 hover:bg-white ui-selected:bg-white ui-selected:text-gray-700 ui-selected:shadow outline-none">Profile</Tab>
    			        		<Tab className="ui-selected:bg-blue-500 rounded-lg px-3 py-2.5 text-sm font-medium leading-5 text-gray-500 hover:bg-white ui-selected:bg-white ui-selected:text-gray-700 ui-selected:shadow outline-none">Tab 2</Tab>
    			        		<Tab className="ui-selected:bg-blue-500 rounded-lg px-3 py-2.5 text-sm font-medium leading-5 text-gray-500 hover:bg-white ui-selected:bg-white ui-selected:text-gray-700 ui-selected:shadow outline-none">Settings</Tab>
    			        	</Tab.List>
    			        	<Tab.Panels className="overflow-hidden bg-white shadow sm:rounded-lg mt-2">

                                {/* Tab 1 */}
    			        		<Tab.Panel>
                                    
                                <div className="">
                                  <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">User`s profile</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                                  </div>
                                  <div className="border-t border-gray-200">
                                    <dl>
                                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                                      </div>
                                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Role</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                                      </div>
                                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                                      </div>
                                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Current Salary</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
                                      </div>
                                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">About</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
                                      </div>
                                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                          <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                              <div className="flex w-0 flex-1 items-center">
                                                {/* <!-- Heroicon name: mini/paper-clip --> */}
                                                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                  <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                                              </div>
                                              <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                              </div>
                                            </li>
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                              <div className="flex w-0 flex-1 items-center">
                                                {/* <!-- Heroicon name: mini/paper-clip --> */}
                                                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                  <path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                                              </div>
                                              <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                              </div>
                                            </li>
                                          </ul>
                                        </dd>
                                      </div>
                                    </dl>
                                  </div>
                                </div>

            	                    {/* <!-- End of about section --> */}


                                </Tab.Panel>
    			        		<Tab.Panel>Content 2</Tab.Panel>
    			        		<Tab.Panel>Content 3</Tab.Panel>

    			        	</Tab.Panels>
    			        </Tab.Group>

            	        





            	    </div>
            	</div>
			</div>

			{/* Modals */}
			<>
                <Modal 
                    isOpen={showPopup} 
                    onRequestClose={() => setShowPopup(false)}
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
                    style={{transform: "translate(-50%, -50%)"}}
                    ariaHideApp={false}
                >

                    {/* Modal Content */}
                    <div className="relative z-10 max-w-md max-h-screen bg-white rounded-lg shadow-md p-4 border-2 border-gray-800">
                        <Heading2>Filter</Heading2>
                        <p className="mb-5">Filter the employees by</p>
                        
						

                        {/* Close Icon */}
                        <button 
                          className="absolute -top-4 -right-4" 
                          onClick={() => setShowPopup(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                                <path fill="white" strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </div>
                    <div 
                        className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-5 "
                        onClick={() => setShowPopup(false)}
                    >
                    </div>
              </Modal>
            </>

        </MainContainer>
    )
}

export default Employees
import Link from "next/link"
import React from "react"
import {useState} from 'react'
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
import Card1 from "../../components/cards/card1"
import MainContainer from "../../components/MainContainer"

function Menu1(){
    const [menuOpen, setMenuOpen] = useState(true)
  
    function toggleMenu(){
        setMenuOpen(!menuOpen)
        console.log("Toggled Menu")
        console.log("Menu is currently " + menuOpen)
    }

    return(
        <MainContainer heading="Menu">
            <Heading1>Menu</Heading1>



			<Heading2>Example 1</Heading2>
            <Card1>
        
        {/* <!-- page --> */}
        <main className="h-96 w-full bg-gray-100 text-gray-700"></main>
            {/* <!-- header page --> */}
            <header className="flex w-full items-center justify-between border-b-2 border-grey-200 bg-white p-2">
                {/* <!-- logo --> */}
                <div className="flex items-center space-x-2">
                    <button type="button" className="border border-grey-200 rounded-md p-1" onClick={toggleMenu}>
                      	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      	  	<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      	</svg>
                    </button>
                    <div>Logo</div>
                </div>

                {/* <!-- button profile --> */}
                <div className="relative">
                    <button type="button" onClick={toggleMenu}
                        className="h-9 w-9 overflow-hidden rounded-full">
                        <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
                    </button>

                    {/* <!-- dropdown profile --> */}
                    <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md hidden"
                x-show="profileOpen" x-transition="true">
                <div className="flex items-center space-x-2 p-2">
                    <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" className="h-9 w-9 rounded-full" />
                    <div className="font-medium">Hafiz Haziq</div>
                </div>

                <div className="flex flex-col space-y-3 p-2">
                    <a href="#" className="transition hover:text-blue-600">My Profile</a>
                    <a href="#" className="transition hover:text-blue-600">Edit Profile</a>
                    <a href="#" className="transition hover:text-blue-600">Settings</a>
                </div>

                <div className="p-2">
                    <button className="flex items-center space-x-2 transition hover:text-blue-600">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                            </path>
                        </svg>
                        <div>Log Out</div>
                    </button>
                </div>
                    </div>
                </div>
            </header>

            {/* <!-- aside --> */}
            <div className="flex h-80">
                <aside className={"flex w-72 flex-col space-y-2 border-r-2 border-grey-200 bg-white p-2 " + (menuOpen ? "show" : "hidden")}
                    x-show="asideOpen">
                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"><i className="bx bx-home"></i></span>
                        <span>Dashboard</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"><i className="bx bx-cart"></i></span>
                        <span>Cart</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
                        <span>Shopping</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"><i className="bx bx-heart"></i></span>
                        <span>My Favourite</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"><i className="bx bx-user"></i></span>
                        <span>Profile</span>
                    </a>
                </aside>

                {/* <!-- main content page --> */}
                <div className="w-full p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quam odit officiis
                    magni doloribus ipsa dolore, dolores nihil accusantium labore, incidunt autem iure quae vitae voluptate,
                    esse asperiores aliquam repellat. Harum aliquid non officiis porro at cumque eaque inventore iure. Modi sunt
                    optio mollitia repellat sed ab quibusdam quos harum!</div>
            </div>


        </Card1>


        <Heading2>Example 2</Heading2>

        <Card1>

		    <aside className="w-full p-6 sm:w-60 bg-gray-200 h-full">
		    	<nav className="space-y-8 text-sm">

		    		<div className="w-12/12 flex items-center">
                    	    <Link className="text-2xl font-semibold" href="/">Next.JS Demo</Link>
                    </div>
		    		<div className="space-y-2">
		    			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Category 1</h2>
		    			<div className="flex flex-col space-y-1">
		    				{/* -- Links -- */}
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
                <div>Link 4</div>
                <div>Link 5</div>

		    			</div>
		    		</div>
        
		    		<div className="space-y-2">
		    			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Category 2</h2>
		    			<div className="flex flex-col space-y-1">
		    				<a rel="noopener noreferrer" href="#">Link 1</a>
		    				<a rel="noopener noreferrer" href="#">Link 2</a>
		    				<a rel="noopener noreferrer" href="#">Link 3</a>
		    				<a rel="noopener noreferrer" href="#">Link 4</a>
		    			</div>
		    		</div>

		    	</nav>
		    </aside>

        </Card1>

        <Heading2>Example 3</Heading2>
        <Card1>
            <div className="w-60 h-full shadow-md bg-white relative" id="sidenavSecExample">
                <div className="pt-4 pb-2 px-6">
                    <a href="#!">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10" alt="Avatar" />
                            </div>
                            <div className="grow ml-3">
                                <p className="text-sm font-semibold text-blue-600">Jason Born</p>
                            </div>
                        </div>
                    </a>
                </div>
                <ul className="relative px-1">
                    <li className="relative">
                         <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                            </svg>
                            <span>Non-collapsible link</span>
                        </a>
                    </li>
                    <li className="relative" id="sidenavSecEx2">
                        <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                              <path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                            </svg>
                            <span>Collapsible item 1</span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                            </svg>
                        </a>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx2" aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                            <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 1</a>
                        </li>
                        <li className="relative">
                            <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 2</a>
                        </li>
                    </ul>
                    </li>
                    <li className="relative" id="sidenavSecEx3">
                        <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx3" aria-expanded="false" aria-controls="collapseSidenavSecEx3">
                             <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                             </svg>
                             <span>Collapsible item 2</span>
                             <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                             </svg>
                        </a>
                        <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx3" aria-labelledby="sidenavSecEx3" data-bs-parent="#sidenavSecExample">
                            <li className="relative">
                                <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 3</a>
                            </li>
                            <li className="relative">
                                <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 4</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr className="my-2" />
                  <ul className="relative px-1">
                    <li className="relative">
                      <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"></path>
                        </svg>
                        <span>Non-collapsible link</span>
                      </a>
                    </li>
                    <li className="relative" id="sidenavXxEx2">
                      <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavXxEx2" aria-expanded="false" aria-controls="collapseSidenavXxEx2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comments" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path>
                        </svg>
                        <span>Collapsible item 3</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                      </a>
                      <ul className="relative accordion-collapse collapse" id="collapseSidenavXxEx2" aria-labelledby="sidenavXxEx2" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                          <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 5</a>
                        </li>
                        <li className="relative">
                          <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 6</a>
                        </li>
                      </ul>
                    </li>
                    <li className="relative" id="sidenavXxEx3">
                      <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavXxEx3" aria-expanded="false" aria-controls="collapseSidenavXxEx3">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
                        </svg>
                        <span>Collapsible item 4</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                      </a>
                      <ul className="relative accordion-collapse collapse" id="collapseSidenavXxEx3" aria-labelledby="sidenavXxEx3" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                          <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 7</a>
                        </li>
                        <li className="relative">
                          <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 8</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="text-center bottom-0 absolute w-full">
                    <hr className="m-0" />
                    <p className="py-2 text-sm text-gray-700">tailwind-elements.com</p>
                  </div>
                </div>

        </Card1>


        <Heading2>Example 4</Heading2>
        <Card1>
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
                {/* <MobileNav open={open} setOpen={setOpen}/> */}
                <div className="w-12/12 flex items-center">
                    <Link className="text-2xl font-semibold" href="/">Next.JS Demo</Link>
                </div>
                <div className="w-9/12 flex items-center">
    
                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        // toggleMenu(!menuToggled)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${menuOpen ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>
    
                    <div className="hidden md:flex w-full justify-between">
                        <a rel="noopener noreferrer" href="#">Link 1</a>
                        <a rel="noopener noreferrer" href="#">Link 2</a>
                        <a rel="noopener noreferrer" href="#">Link 3</a>
                        <a rel="noopener noreferrer" href="#">Link 4</a>
                    </div>
                </div>
        </nav>
        </Card1>



        </MainContainer>
    )
}

export default Menu1
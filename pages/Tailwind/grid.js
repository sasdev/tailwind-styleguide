import React from "react"
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
import Card1 from "../../components/Cards/card1"
import Cards from "../cards"
import Main from "../../components/main"

function grid() {
    return(
        <Main>

        <Heading1>Grid</Heading1>

        <div className="Description mb-10">
        Grids are used to create a flexible and responsive layout for elements on a website. They allow for the easy creation of grid-based layouts, where elements are arranged in rows and columns. Grids in Tailwind CSS are built using CSS Flexbox, which allows for the easy alignment and distribution of elements within the grid. Grids can be customized to change the number of columns, gutter widths, and the alignment of elements within the grid. They also come with a set of responsive classes that allow for the grid to adjust to different screen sizes, allowing for a consistent and responsive layout across different devices.
        </div>

        <Heading2>Example 1</Heading2>

        <Card1>
            <div className="grid grid-cols-12 gap-4 font-mono text-white text-sm text-center font-bold leading-6">
                <div className="p-4 rounded-lg shadow-lg bg-yellow-500 col-start-2 col-span-10">Header</div>
                <div className="p-4 rounded-lg shadow-lg bg-red-500 col-start-2 col-span-2"> Menu
                </div>

                <div className="p-4 rounded-lg bg-stripes-sky col-start-4 col-span-8">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="p-4 rounded-lg bg-sky-500 col-span-12">12</div>
                        <div className="p-4 rounded-lg bg-sky-500 col-span-6">6</div>
                        <div className="p-4 rounded-lg bg-sky-500 col-span-6">6</div>
                        <div className="p-4 rounded-lg bg-sky-500 col-span-3">3</div>
                        <div className="p-4 rounded-lg bg-sky-500 col-span-3">3</div>
                        <div className="p-4 rounded-lg bg-sky-500 col-span-3">3</div>
                        <div className="p-4 rounded-lg bg-sky-500 col-span-3">3</div>
                        <div className="p-4 rounded-lg bg-sky-500 col-span-12">3</div>
                    </div>
                </div>
                <div className="p-4 rounded-lg shadow-lg bg-green-500 col-start-2 col-span-10">Footer</div>
            </div>
        </Card1>



        <Heading2>Example 2</Heading2>

        <Card1>
            <div className="grid grid-cols-6 gap-4 font-mono text-white text-sm text-center font-bold leading-6 mb-10">
                <div className="p-4 rounded-lg bg-stripes-sky"></div>
                <div className="p-4 rounded-lg shadow-lg bg-sky-500 col-start-2 col-span-4">01</div>
                <div className="p-4 rounded-lg bg-stripes-sky"></div>
                <div className="p-4 rounded-lg shadow-lg bg-sky-500 col-start-1 col-end-3">02</div>
                <div className="p-4 rounded-lg bg-stripes-sky"></div>
                <div className="p-4 rounded-lg bg-stripes-sky"></div>
                <div className="p-4 rounded-lg shadow-lg bg-sky-500 col-end-7 col-span-2">03</div>
                <div className="p-4 rounded-lg shadow-lg bg-sky-500 col-start-1 col-end-7">04</div>
            </div>
        </Card1>



        <Heading2>Example 3</Heading2>

        <Card1>
            <div className="grid grid-cols-3 gap-4 text-center font-mono text-white  mb-10">
                <div className="p-4 rounded-lg shadow-lg bg-sky-500">01</div>
                <div className="p-4 rounded-lg shadow-lg bg-sky-500">02</div>
                <div className="p-4 rounded-lg shadow-lg bg-sky-500">03</div>
                <div className="p-4 rounded-lg shadow-lg bg-sky-500 col-span-2">04</div>
                <div className="p-4 rounded-lg shadow-lg bg-sky-500">05</div>
                <div className="p-4 rounded-lg shadow-lg bg-sky-500">06</div>
                <div className="p-4 rounded-lg shadow-lg bg-sky-500 col-span-2">07</div>
            </div>
        </Card1>
   
        </Main>
    )
}

export default grid


import React from "react"
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
import Card1 from "@components/notcards/card1"
import MainContainer from "../../components/MainContainer"

function Flex(){
    return(
        <MainContainer heading="Flex">  

            <div className="Description mb-10">
            Flexbox is used as the underlying layout system for building responsive and flexible grid-based layouts. Flexbox, or the Flexible Box Layout, is a CSS layout module that makes it easy to create flexible and responsive designs. It allows for the easy alignment and distribution of elements within a container. With Flexbox, elements can be aligned both horizontally and vertically, and can be given different proportions of space within the container. Tailwind CSS provides a set of utility classes that make it easy to use Flexbox to create a variety of different layouts, including grid-based layouts, vertical centering, and more. This makes it easy to create flexible and responsive designs that adapt to different screen sizes and devices.
            </div>

            <Heading2>Example 1</Heading2>
            <Card1>
                <div className="flex flex-row">
                  <div className="basis-1/4 border border-gray-400 border-dashed p-4 text-center bg-slate-200 ">basis-1/4</div>
                  <div className="basis-1/4 border border-gray-400 border-dashed p-4 text-center bg-slate-200">basis-1/4</div>
                  <div className="basis-1/2 border border-gray-400 border-dashed p-4 text-center bg-slate-200">basis-1/2</div>
                </div>
            </Card1>

            <Heading2>Example 2</Heading2>
            <Card1>
                <div className="flex flex-row">
                  <div className="w-32 flex-none border border-gray-400 border-dashed p-4 text-center bg-slate-200 ">flex-none</div>
                  {/* <div className="flex-1 border border-gray-400 border-dashed p-4 text-center bg-slate-200">flex-2</div> */}
                  <div className="flex-1 border border-gray-400 border-dashed p-4 text-center bg-slate-200">flex-1</div>
                </div>
            </Card1>

            <Heading2>Example 3</Heading2>
            <Card1>
                <div className="flex flex-row">
                  <div className="w-64 flex-none border border-gray-400 border-dashed p-4 text-center bg-slate-200 md:hidden lg:block ">(Hidden on mobile)</div>
                  {/* <div className="flex-1 border border-gray-400 border-dashed p-4 text-center bg-slate-200">flex-2</div> */}
                  <div className="flex-1 border border-gray-400 border-dashed p-4 text-center bg-slate-200">flex-1</div>
                  <div className="w-64 flex-none border border-gray-400 border-dashed p-4 text-center bg-slate-200 md:hidden lg:block">(Hidden on mobile)</div>
                </div>
            </Card1>

        </MainContainer>
    )
}

export default Flex
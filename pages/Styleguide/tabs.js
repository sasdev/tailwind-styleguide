import React from "react"
import { useState, useEffect } from 'react'
import MainContainer from "../../components/MainContainer"
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
import Card1 from "@components/notcards/card1"
import { Tab } from "@headlessui/react"

export default function TabsDemo() {
    return (
	    <MainContainer>
			<Heading1>Tabs</Heading1>

			<p className="mb-10">Headless-UI is used for the interactivity</p>

			<Heading2>Example 1</Heading2>

			<Card1>
    			<Tab.Group defaultIndex={2}>
    				<Tab.List className ="rounded-lg bg-gray-200 inline-flex flex-wrap px-1 py-1 gap-2">
    					<Tab className="ui-selected:bg-blue-500 rounded-lg px-3 py-2.5 text-sm font-medium leading-5 text-gray-500 hover:bg-white ui-selected:bg-white ui-selected:text-gray-700 ui-selected:shadow outline-none">Tab 1</Tab>
    					<Tab className="ui-selected:bg-blue-500 rounded-lg px-3 py-2.5 text-sm font-medium leading-5 text-gray-500 hover:bg-white ui-selected:bg-white ui-selected:text-gray-700 ui-selected:shadow outline-none">Tab 2</Tab>
    					<Tab className="ui-selected:bg-blue-500 rounded-lg px-3 py-2.5 text-sm font-medium leading-5 text-gray-500 hover:bg-white ui-selected:bg-white ui-selected:text-gray-700 ui-selected:shadow outline-none">Tab 3</Tab>
    				</Tab.List>
    				<Tab.Panels className="p-2 rounded-lg bg-gray-200 mt-2 ">
    					<Tab.Panel>Content 1</Tab.Panel>
    					<Tab.Panel>Content 2</Tab.Panel>
    					<Tab.Panel>Content 3</Tab.Panel>
    				</Tab.Panels>
    			</Tab.Group>
			</Card1>

    	</MainContainer>
    )
}




































/**
 * MainContainer component
 * 
 * This component serves as a wrapper for the main content of the page.
 * It optionally displays a heading and applies padding to the content.
 * 
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be wrapped by the MainContainer
 * @param {string} [props.heading] - The heading to be displayed at the top of the container
 * @param {boolean} [props.usePadding=true] - Whether to apply padding to the container
 * @returns {JSX.Element} The rendered MainContainer component
 */

import React from "react"
import Heading1 from "./headings/heading1"

function MainContainer({children, heading , usePadding = true}){
return(
        <>
            <div className={`flex-1 ${usePadding ? "px-10 pt-5" : "" }`}>
            {heading && <Heading1>{heading}</Heading1>}
                {children}
            </div>

        </>
    )
}

export default MainContainer
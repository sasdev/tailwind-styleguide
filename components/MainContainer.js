// Used as the wrapper for <MainContainer> </MainContainer>

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
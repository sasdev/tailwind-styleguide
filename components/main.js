// Used as the wrapper for <main> </main>

import React from "react"

function Main({children, usePadding = true}){
    return(
        <>
            <main className={`flex-1 ${usePadding ? "px-10 pt-5" : "" }`}>
                {children}
            </main>

        </>
    )
}

export default Main
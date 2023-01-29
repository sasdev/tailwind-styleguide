import React from "react"

function Heading3({children}){
    return(
        <div className="mb-5">
            <h1 className="inline-block text-lg font-extrabold text-slate-900 tracking-tight dark:text-slate-200" >{children}</h1>
        </div>
    )
}

export default Heading3
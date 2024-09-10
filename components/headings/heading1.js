import React from "react"

function Heading1({children}, bold=false){
    return(
        <div className="mb-5">
            <h1 className="inline-block text-3xl font-extrabold text-slate-800 tracking-tight" >{children}</h1>
        </div>
    )
}

export default Heading1
import React from "react";

function Card1({children}){
    return(
        <div className="rounded p-10 bg-slate-100 border-dashed border-gray-400 border mb-10">
            {children}
        </div>
    )
}


export default Card1
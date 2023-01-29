import React from "react";
import Navbar from "../navbar/navbar"

function Layout({children}){
    return(
        <div className="flex">
            <aside className="flex-none w-60 bg-slate-800">
                <Navbar />
            </aside>
            {children}
        </div>
    )
}

// const Layout =({children}) =>{
//     return(
//         <div className="flex">
//             <aside className="flex-none w-60 bg-slate-800">
//                 <Navbar />
//             </aside>
//             <main className="px-10 pt-5 flex-1 max-w-xl">
//                 {children}
//             </main>
//         </div>
//     )
// }

export default Layout
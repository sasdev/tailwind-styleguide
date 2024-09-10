import React from "react";
import Navbar from "../navbar/navbar"

function Layout({children}){
    return (
        <div className="flex">
            <aside className="flex-none w-60 bg-slate-900 min-h-screen fixed">
                <Navbar />
            </aside>
            <div className="flex-1  ml-60">
                {children}
            </div>
        </div>
    );
}

export default Layout
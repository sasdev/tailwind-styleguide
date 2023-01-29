import React from "react"
import Main from "../components/main"
import Heading1 from "../components/headings/heading1"
import Heading2 from "../components/headings/heading2"
import Card1 from "../components/Cards/card1"
import Card2 from "../components/Cards/card2"
import Card3 from "../components/Cards/card3"

function Cards(){
    return(
        <Main>

            <Heading1>Card Examples</Heading1>

            <Card1>
                Card 1
            </Card1>

            <Card2>
                Card 2
            </Card2>

            <Card3>
                Card 3
            </Card3>

            <Card1>
                <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                    <div class="flex items-center space-x-3">
                        <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>
                        <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                    </div>
                    <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
                </a>
            </Card1>

        </Main>
    )
}

export default Cards
import React from "react"
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
import Heading3 from "../../components/headings/heading3"
import Heading4 from "../../components/headings/heading4"
import Heading5 from "../../components/headings/heading5"
import Card1 from "../../components/Cards/card1"
import MainContainer from "../../components/MainContainer"

function typography(){
    return(
        <MainContainer heading="Typography">

            <p className="pb-10">Utilities for controlling the font size of an element.</p>

            <Heading2>Default</Heading2>
            <Card1>
                <p className="text-5xl ...">5xl - The quick brown fox ...</p>
                <p className="text-4xl ...">4xl - The quick brown fox ...</p>
                <p className="text-3xl ...">3xl - The quick brown fox ...</p>
                <p className="text-2xl ...">2xl - The quick brown fox ...</p>
                <p className="text-xl ...">xl - The quick brown fox ...</p>
                <p className="text-base ...">base - The quick brown fox ...</p>
                <p className="text-lg ...">lg - The quick brown fox ...</p>
                <p className="text-sm ...">sm - The quick brown fox ...</p>
                <p className="text-xs ...">xs - The quick brown fox ...</p>
            </Card1>

            <Heading2>Bold</Heading2>
            <Card1>
                <p className="text-5xl font-bold">5xl - The quick brown fox ...</p>
                <p className="text-4xl font-bold">4xl - The quick brown fox ...</p>
                <p className="text-3xl font-bold">3xl - The quick brown fox ...</p>
                <p className="text-2xl font-bold">2xl - The quick brown fox ...</p>
                <p className="text-xl font-bold">xl - The quick brown fox ...</p>
                <p className="text-base font-bold">base - The quick brown fox ...</p>
                <p className="text-lg font-bold">lg - The quick brown fox ...</p>
                <p className="text-sm font-bold">sm - The quick brown fox ...</p>
                <p className="text-xs font-bold">xs - The quick brown fox ...</p>
            </Card1>



        </MainContainer>

    )
}

export default typography
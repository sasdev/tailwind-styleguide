import React from "react"
import MainContainer from "../../components/MainContainer"
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
import Heading3 from "../../components/headings/heading3"
import Card1 from "../../components/cards/card1"

function Cards(){
    return(
        <MainContainer heading="Cards">
    
            <Card1 heading="Example Card 1">
                This card has a heading
            </Card1>

            <Card1 heading="">
                This card has no heading
            </Card1>

            <Card1 heading="Example Card 3">
                This card has a shadow
            </Card1>

            <Card1 heading="Example Card 4" showBorder={false}>
                This card has no border
            </Card1>

            
            <Card1 heading="Example Card 4" showShadow={false}>
                This card has no shadow
            </Card1>

            <Card1 heading="Example Card 5" showPadding={false}>
                This card has no padding
            </Card1>

        </MainContainer>
    )
}

export default Cards
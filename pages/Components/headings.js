import React from "react"
import MainContainer from "../../components/MainContainer"
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
import Heading3 from "../../components/headings/heading3"
import Heading4 from "../../components/headings/heading4"
import Heading5 from "../../components/headings/heading5"
import Card1 from "../../components/cards/card1"

function headings(){
    return(
        <MainContainer heading="Headings" >
            <Card1>
                <Heading1>Components</Heading1> 

                <Heading1>Heading 1</Heading1> 
                <Heading2>Heading 2</Heading2> 
                <Heading3>Heading 2</Heading3> 
                <Heading4>Heading 2</Heading4> 
                <Heading5>Heading 2</Heading5> 
            </Card1>
        </MainContainer>
    )
}

export default headings
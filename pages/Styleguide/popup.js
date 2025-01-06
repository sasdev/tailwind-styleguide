import React from "react"
import MainContainer from "../../components/MainContainer"
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
import Card1 from "../../components/cards/card1"
import Modal from 'react-modal';
import { useState } from "react"

export default function Popup(){
    const [showPopup, setShowPopup] = useState(false);

    return(
        <MainContainer>
            <Heading1>Popup</Heading1>
            <Heading2>Example 1</Heading2>

            <Card1>
                <button onClick={() => setShowPopup(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Show Popup</button>
            </Card1>

            <>
                <Modal 
                    isOpen={showPopup} 
                    onRequestClose={() => setShowPopup(false)}
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
                    style={{transform: "translate(-50%, -50%)"}}
                    ariaHideApp={false}
                >

                    {/* Modal Content */}
                    <div className="relative z-10 max-w-md max-h-screen bg-white rounded-lg shadow-md p-4 border-2 border-gray-800">
                        <Heading2>Popup Heading</Heading2>
                        <p className="mb-5">Sed sed ex eu diam ultrices lobortis in vitae leo. auctor eu in dui. Nam in ante ex. Vestibulum vel odio enim. Mauris accumsan nisi quis nulla congue, eget ornare purus vulputate. Praesent imperdiet faucibus felis, in aliquam felis aliquet ac. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc pulvinar vestibulum massa, non gravida dui tincidunt vel. Morbi ut purus nibh. Sed faucibus mi arcu, at vestibulum sapien varius eget. Aliquam non pretium ligula. Suspendisse id porta urna, a aliquam tortor. Vestibulum id libero et quam sollicitudin posuere eu pretium justo. Donec elementum, risus accumsan sagittis gravida, mi est pharetra nisl, sed fringilla mauris est id libero.</p>
                        <p>Vestibulum eleifend magna leo, sit amet commodo tellus dictum non. nisi accumsan turpis, ut dapibus mauris elit ut massa. Etiam molestie risus a mauris viverra, sit amet finibus metus varius. Quisque aliquam, ipsum ut ullamcorper sollicitudin, turpis nisl porttitor sapien, ac sollicitudin urna risus sit amet enim. Aenean massa erat, rhoncus sit amet venenatis quis, gravida eu augue. Etiam quis risus eu tortor accumsan accumsan. Phasellus commodo purus ut tincidunt feugiat. Vivamus non eros velit.</p>

                        {/* Close Icon */}
                        <button 
                          className="absolute -top-4 -right-4" 
                          onClick={() => setShowPopup(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                                <path fill="white" strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </div>
                    <div 
                        className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-5 "
                        onClick={() => setShowPopup(false)}
                    >
                    </div>
              </Modal>
            </>

        </MainContainer>
    )
}
import React from 'react';
import { Parallax } from 'react-parallax';

const par1 = "/assets/images/cliff-fjord.jpg"
const par2 = "/assets/images/fjord-ice.jpg"
const par3 = "/assets/images/coast.jpg"

function Home () {
    return (
        <div>
            {/* <img src="/assets/images/cliff-fjord.jpg"></img> */}
            <Parallax bgImage={ par1 } strength={500}>
                <div style={{ height: 940 }} className="container">
                    <div className="flex-center text-center">
                        <div className="row h-600">
                        <div>
                            <h1 className="title col display-3 mb-2 mt-50">REISE <span class="font-weight-bold">NORGE</span></h1>
                            <h5 className="subtitle col mb-3 mt-1 text-center">personalized journeys through norway</h5>
                        </div>
                        <div class="scroll">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        </div>
                    </div>
                   
                    
                </div>
            </Parallax>
            <h1>| | |</h1>
            <Parallax bgImage={ par2 } strength={500}>
                <div style={{ height: 940 }}>
                    <div>HTML inside the parallax</div>
                </div>
            </Parallax>
            <h1>| | |</h1>
            <Parallax bgImage={ par3 } strength={500}>
                <div style={{ height: 940 }}>
                    <div>HTML inside the parallax</div>
                </div>
            </Parallax> 
        </div>
    )
}

export default Home
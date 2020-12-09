import React from 'react';
import { Parallax } from 'react-parallax';
import Header from './HeaderComponent';

const par1 = "/assets/images/cliff-fjord2.jpg"
const par2 = "/assets/images/fjord-ice.jpg"
const par3 = "/assets/images/coast.jpg"

function Home () {
    return (
        <div>
            <Header />
            <Parallax bgImage={ par1 } strength={200}>
                <div style={{ height: '55rem' }} className="container">
                    <div className="flex-center text-center">
                        <div className="row h-600">
                        <div>
                            <h1 className="title col display-3 mb-2 mt-50">REISE <span className="font-weight-bold">NORGE</span></h1>
                            <h5 className="subtitle col mb-3 mt-1 text-center">personalized journeys through norway</h5>
                        </div>
                        <div className="scroll">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        </div>
                    </div>
                   
                    
                </div>
            </Parallax>
            <div className="container">
                <div className="row row-content align-items-center">
                    <div className="col-sm-4 order-sm-first col-md-3">
                    <h2 className="text-sm-right">the northern route</h2>
                    </div>
                    <div className="col py-5">
                    <div className="media">
                        <div className="media-body align-self-center">
                        <h3>find the real norway</h3>
                        <p className="d-none d-sm-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim varius pharetra. Nam varius imperdiet quam, nec bibendum lorem blandit sit amet. Nunc libero augue, convallis vel diam id, dictum volutpat ipsum. Nam orci
                            lectus, posuere vitae feugiat nec, malesuada ut tortor. Ut lacinia leo at ultricies tempus. Cras sodales rutrum vehicula. Maecenas consectetur dui mattis luctus finibus. In rutrum pulvinar volutpat. Ut aliquet sed enim sit amet
                            semper. Integer nisl ex, fermentum ut iaculis et, dictum sit amet quam. Pellentesque iaculis lorem pulvinar lectus consectetur feugiat.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            <Parallax bgImage={ par2 } strength={500}>
                <div style={{ height: '55rem' }}>
                    
                </div>
            </Parallax>
            <div className="container">
                <div className="row row-content align-items-center">
                    <div className="col-sm-4 order-sm-last col-md-3">
                    <h2 className="text-sm-right">hvor vil du gå?</h2>
                    </div>
                    <div className="col py-5">
                    <div className="media">
                        <div className="media-body align-self-center">
                        <h3>trips planned by locals</h3>
                        <p className="d-none d-sm-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim varius pharetra. Nam varius imperdiet quam, nec bibendum lorem blandit sit amet. Nunc libero augue, convallis vel diam id, dictum volutpat ipsum. Nam orci
                            lectus, posuere vitae feugiat nec, malesuada ut tortor. Ut lacinia leo at ultricies tempus. Cras sodales rutrum vehicula. Maecenas consectetur dui mattis luctus finibus. In rutrum pulvinar volutpat. Ut aliquet sed enim sit amet
                            semper. Integer nisl ex, fermentum ut iaculis et, dictum sit amet quam. Pellentesque iaculis lorem pulvinar lectus consectetur feugiat.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            <Parallax bgImage={ par3 } strength={500}>
                <div style={{ height: '55rem' }}>
                    
                </div>
            </Parallax> 
        </div>
    )
}

export default Home
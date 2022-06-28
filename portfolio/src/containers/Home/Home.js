import React from 'react';

import "./Home.scss";
// import cityView from '../../assests/cityview.jpg';
import arandas from '../../assests/arandas.png';
import Gallery from '../../components/Gallery';

const Home = () => {
    return (
        <div className="home">
            <div className='h-title'>
                <img className='mainImg' src={arandas} alt="Road map of city" />

                <h1>Gerardo Lopez <span>Arquitecto</span><svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 252.492 252.492" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.492 252.492" role="presentation" aria-hidden="true">
                    <g>
                        <path d="M252.492 117.246H135.246V0h-18v117.246H0v18h117.246v117.246h18V135.246h117.246v-18z"></path>
                    </g>
                </svg></h1>


            </div>

            <div className='h-text'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
                    Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh.
                </p>
            </div>

            <div className='h-gallery'>
                <Gallery />
            </div>

        </div>
    )
};


export default Home;
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

                <h1>Gerardo Lopez <span>Architecto</span></h1>
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
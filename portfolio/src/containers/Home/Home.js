import React from 'react';

import "./Home.scss";
import arandas from '../../assests/arandas.png';
import Gallery from '../../components/Gallery/Gallery';
import Modal from '../../components/Modal/Modal';

const Home = () => {
    return (
        <div className="home">
            <div className='h-title'>
                <img className='mainImg' src={arandas} alt="Road map of city" />

                <h1>Gerardo Lopez<span> Arquitecto<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 252.492 252.492" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.492 252.492" role="presentation" aria-hidden="true">
                        <g>
                            <path d="M252.492 117.246H135.246V0h-18v117.246H0v18h117.246v117.246h18V135.246h117.246v-18z"></path>
                        </g>
                    </svg></span>
                </h1>
            </div>

            <div className='h-text'>
                <p className='h-quote'>
                    “Como arquitecto diseñas para el presente,
                    con una conciencia del pasado,
                    por un futuro que es  esencialmente  desconocido”
                    <br />
                    <span>- Norman Foster</span>
                </p>
            </div>

            <div className='h-gallery'>
                <Gallery />
            </div>

            <Modal />
        </div>
    )
};


export default Home;
import React from 'react';

import headshot from '../../assests/headshot.jpg';
import "./About.scss";

const About = () => {
    return (
        <div className='about'>
            <img src={headshot} alt='Profesional Portrait of Gerardo Lopez' />

            <div className='bio'>
                <h2>Acerca de Mi</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
                    Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
                    Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh.
                </p>
            </div>
        </div>
    )
};


export default About;
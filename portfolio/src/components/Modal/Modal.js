import React, { useContext } from 'react';

import { ProjectsContext } from '../../context/ProjectsContext';
import "./Modal.scss";

const Modal = () => {
    const { dispatch, projects } = useContext(ProjectsContext);

    return (
        <>
            {projects.map((project) => {
                if (project.active === true) {
                    return (
                        <div className='background' key={project.id}>
                            <div className='modal' >
                                <img className='m-img' src={project.image} alt="Project Render" />
                                <div className='m-info'>
                                    <h4>{project.title}</h4>
                                    <p>{project.simpleDescription}</p>

                                    <button>See More...</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
};

export default Modal;
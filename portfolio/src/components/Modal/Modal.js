import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';

import { ProjectsContext } from '../../context/ProjectsContext';
import "./Modal.scss";

const Modal = () => {
    const { dispatch, projects } = useContext(ProjectsContext);

    const deactivateModal = (id) => {
        const deact = projects[id - 1].title;

        dispatch({
            type: "DEACTIVATE_MODAL",
            payload: deact
        })
    }

    return (
        <>
            {projects.map((project) => {
                if (project.active === true) {
                    return (
                        <div className='background' key={project.id}>
                            <div className='modal' >
                                <MdClose className='m-close' onClick={() => deactivateModal(project.id)}/>
                                <img className='m-img' src={project.image} alt="Project Render" />
                                <div className='m-info'>
                                    <h4>{project.title}</h4>
                                    <p>{project.simpleDescription}</p>

                                    <button>Ver mas...</button>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return null;
                }
            })}
        </>
    )
};

export default Modal;
import React, { useState, useContext, useRef } from 'react';
import { MdClose } from 'react-icons/md';

import { ProjectsContext } from '../../context/ProjectsContext';
import "./Modal.scss";

const Modal = () => {
    const { dispatch, projects } = useContext(ProjectsContext);
    let Images = [];

    const hoverHandler = (image, i) => {
        setImg(image);
        refs.current[i].classList.add('active');
        for (var j = 0; j < Images.length; j++) {
            if (i !== j) {
                refs.current[j].classList.remove('active');
            }
        };
    };

    const refs = useRef([]);
    refs.current = [];

    const addRef = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    const deactivateModal = (id) => {
        const deact = projects[id - 1].title;

        setImg(null)

        dispatch({
            type: "DEACTIVATE_MODAL",
            payload: deact
        })
    }



    const fillImages = (project) => {
        Images.push(project.image);
        Images.push(project.floorplan1);
        if (project.floorplan2) {
            Images.push(project.floorplan2);
        }

        if (project.floorplan3) {
            Images.push(project.floorplan3);
        };

        if (project.floorplan4) {
            Images.push(project.floorplan4);
        };

        if (project.floorplan5) {
            Images.push(project.floorplan5);
        };

    };

    const [img, setImg] = useState(Images[0]);

    return (
        <>
            {projects.map((project) => {
                if (project.active === true) {
                    fillImages(project);

                    return (
                        <div className='background' key={project.id}>
                            <div className='modal' >
                                <MdClose className='m-close' onClick={() => {
                                    deactivateModal(project.id);
                                }} />
                                <div className='m-container'>
                                    <div className='m-container-left'>
                                        <div className='left-1'>
                                            {Images.map((image, i) => (
                                                <div
                                                    className='img-wrap'
                                                    key={i}
                                                    onMouseOver={() => hoverHandler(image, i)}
                                                    ref={addRef}
                                                >
                                                    <img src={image} alt="Project render" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className='left-2'>
                                            <img src={img ? img : Images[0]} alt="Project render" />
                                        </div>
                                    </div>
                                    <div className='m-container-right'>
                                        <h4>{project.title}</h4>
                                        <p>{project.mainDescription}</p>
                                    </div>
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
import React, { useContext } from 'react'

// import Modal from '../Modal/Modal';
import { ProjectsContext } from '../../context/ProjectsContext';
import "./Gallery.scss";

const Gallery = () => {
  const { dispatch, projects } = useContext(ProjectsContext);

  const activateModal = (id) => {
    const act = projects[id - 1].title;

    dispatch({
      type: "ACTIVATE_MODAL",
      payload: act
    })
  };

  return (
    <div className='gallery'>
      {projects.map((project) => {
        return (
          <div className='g-item' key={project.id} onClick={() => activateModal(project.id)} >
            <img className='g-img' src={project.image} alt="Project Render" />
            <div className='g-overlay'>
              <div className='g-text'>
                <h4>{project.title}</h4>
                <p>{project.simpleDescription}</p>
              </div>
            </div>
          </div>
        )
      })}
      {/* <Modal /> */}
    </div>
  );
};

export default Gallery;
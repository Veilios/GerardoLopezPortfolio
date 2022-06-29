import React, { useContext } from 'react'

import { ProjectsContext } from '../context/ProjectsContext';
import "./Gallery.scss";

const Gallery = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <div className='gallery'>
      {projects.map((project) => {
        return (
          <div className='g-item'>
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
    </div>
  );
};

export default Gallery;
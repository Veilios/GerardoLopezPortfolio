import React, { createContext, useReducer } from 'react';

import data from "./ProjectsData.json";


const initialState = {
    projects: data
};

const ProjectsReducer = (state, action) => { };

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
    const [state, dispatch] = useReducer(ProjectsReducer, initialState);

    return (
        <ProjectsContext.Provider value={{ projects: state.projects, dispatch }}>
            {props.children}
        </ProjectsContext.Provider>
    );
};
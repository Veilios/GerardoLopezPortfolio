import React, { createContext, useReducer } from 'react';

import data from "./ProjectsData.json";


const initialState = {
    projects: data
};

const ProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ACTIVATE_MODAL":
            return {
                ...state,
                projects: state.projects.map(item => {
                    if(item.title === action.payload) {
                        item.active = true
                    }
                    return item
                })
            }
        default:
            return state;
    }
};

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
    const [state, dispatch] = useReducer(ProjectsReducer, initialState);

    return (
        <ProjectsContext.Provider value={{ projects: state.projects, dispatch }}>
            {props.children}
        </ProjectsContext.Provider>
    );
};
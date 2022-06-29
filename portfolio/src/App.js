import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Cv from './containers/CV/CV';
import Home from './containers/Home/Home';
import { ProjectsProvider } from './context/ProjectsContext';

import './App.scss';


function App() {
  return (
    <ProjectsProvider>
      <Router>
        <div className="App">
          <nav>
            <NavLink to="/" style={({ isActive }) => (isActive ? { color: 'black' } : null)}>Inicio</NavLink>

            <NavLink to="/about" style={({ isActive }) => (isActive ? { color: 'black' } : null)}>Acerca de</NavLink>

            <NavLink to="/cv" style={({ isActive }) => (isActive ? { color: 'black' } : null)}>Resumen</NavLink>

            <NavLink to="/contact" style={({ isActive }) => (isActive ? { color: 'black' } : null)}>Contacto</NavLink>
          </nav>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="contact" element={<Contact />} />
          </Routes>

          <footer>© Todos Derrechos Reseverados, GERARDO LOPEZ</footer>
        </div>
      </Router>
    </ProjectsProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Home from './containers/Home/Home';
import { ProjectsProvider } from './context/ProjectsContext';

import logo from "./assests/logo/clearlogo2.png";

import './App.scss';


function App() {
  const [checked, setChecked] = useState(false)

  return (
    <ProjectsProvider>
      <Router>
        <div className="App">
          <div className='menu'>
            <label htmlFor="toggle">&#9776;</label>
            <input type="checkbox" id="toggle" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>

            <nav>
              <NavLink to="/" style={({ isActive }) => (isActive ? { color: 'rgb(68, 183, 196)' } : null)} onClick={() => setChecked((c) => !c)}>Inicio</NavLink>

              <NavLink to="/about" style={({ isActive }) => (isActive ? { color: 'rgb(68, 183, 196)' } : null)} onClick={() => setChecked((c) => !c)}>Acerca de</NavLink>

              <NavLink to="/contact" style={({ isActive }) => (isActive ? { color: 'rgb(68, 183, 196)' } : null)} onClick={() => setChecked((c) => !c)}>Contacto</NavLink>
            </nav>

            <img src={logo} alt="Logo"/>
          </div>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>

          <footer>© Todos Derrechos Reseverados, GERARDO LOPEZ</footer>
        </div>
      </Router>
    </ProjectsProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Cv from './containers/CV/CV';
import Home from './containers/Home/Home';

import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/" style={({ isActive }) => (isActive ? {color: 'black'} : null)}>Home</NavLink>

          <NavLink to="/about" style={({ isActive }) => (isActive ? {color: 'black'} : null)}>About</NavLink>

          <NavLink to="/cv" style={({ isActive }) => (isActive ? {color: 'black'} : null)}>CV</NavLink>

          <NavLink to="/contact" style={({ isActive }) => (isActive ? {color: 'black'} : null)}>Contact</NavLink>
        </nav>


        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cv" element={<Cv/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>

        <footer>© All Rights Reserved, GERARDO LOPEZ</footer>
      </div>
    </Router>
  );
}

export default App;

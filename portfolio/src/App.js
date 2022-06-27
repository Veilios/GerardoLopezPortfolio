import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/cv">CV</Link>

          <Link to="/contact">Contact</Link>
        </nav>


        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cv" element={<Cv/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

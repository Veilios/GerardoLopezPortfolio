import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

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
          <Route path="/">

          </Route>
          <Route path="/about">

          </Route>
          <Route path="/cv">

          </Route>
          <Route path="contact">

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

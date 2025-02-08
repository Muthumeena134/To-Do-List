// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import News from './Pages/News';
import Sports from './Pages/Sports';
import Button from 'react-bootstrap/Button';

import Entertainment from './Pages/Entertainment';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
          
        </Routes>
      </div>
      <div>
      <Button as="a" variant="primary">
    Button as link
  </Button>
  </div>
    </Router>
    
  );
}

export default App;

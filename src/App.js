// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';

import Home from './Pages/Home';
import News from './Pages/News';
import Sports from './Pages/Sports';
import Entertainment from './Pages/Entertainment';
import RegisterPage from './Pages/RegisterPage';
import SignInPage from './Pages/SignInPage';





function App() {
  return (
    <Router>
     
      
      <Header />
     
      <div className="main-container">
     
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/signin" component={SignInPage} />
           
          </Routes>
         
        </div>
      </div>
    </Router>
  );
}

export default App;

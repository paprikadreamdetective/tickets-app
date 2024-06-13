import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

import './App.css';

import SignIn from './pages/sign_in';
import Home from './pages/home';
function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';

import SignIn from './pages/sign_in';
import Home from './pages/home';
import Tickets from './pages/tickets_home';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
          <Route path="home" element={<Home />}>
            <Route path="tickets_home" element={<Tickets />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

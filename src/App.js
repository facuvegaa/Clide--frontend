import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Login from './components/pages/Login'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' exact element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

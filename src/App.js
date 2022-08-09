import React, {useEffect, useState} from 'react';
import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Feed from './pages/Feed';
import Register from './pages/Register';



function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' exact element={ <Home/> }/>
            <Route path='/login' exact element={<PrivateRoute> <Login/> </PrivateRoute>}/>
            <Route path='/feed' exact element={ <Feed/> }/>
            <Route path='/register' exact element= {<Register/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

import React from 'react'
import './LoginForm.css'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function LoginForm() {
  let{loginUser} = useContext(AuthContext)

  return (
    <div className='back-container'>
        <video src='videos/video-2.mp4' autoPlay loop muted/>
			<div className="login-container">
        <form className='login-form' onSubmit={loginUser}>
          <label className='label-top'>Welcome</label>
          
          {/* <label className='label-log'>Email</label> */}
          <input type='username' name='username' placeholder='Username'/>
          
          {/* <label className='label-log'>Password</label> */}
          <input type='password' name='password' placeholder='Password'/>
          
          <button className='btn-login' type='submit'>Login</button>
        
        </form>
			</div>

    </div>
  )
}

export default LoginForm
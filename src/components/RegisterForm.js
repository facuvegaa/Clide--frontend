import React from 'react'
import './RegisterForm.css'
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

          <input type='email' name='email' placeholder='Email'/>
          
          {/* <label className='label-log'>Password</label> */}
          <input type='password' name='password' placeholder='Password'/>

          
          <label className='label-log' > What type of profile do you want:
            <select>
              <option value = "user"> Register as User </option>
              <option value = "seller"> Register as Company </option>
            </select>
          </label>
          <button className='btn-login' type='submit'>Register</button>
        
        </form>
			</div>

    </div>
  )
}

export default LoginForm
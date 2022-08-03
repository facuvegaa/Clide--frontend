import React from 'react'
import './LoginForm.css'
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async(e) => {
    e.preventDefault()
    let response = await fetch("http://localhost:8000/user/login", {
    method : "POST",
    headers : {
      'Content-Type': 'application/json',
      },
    body : JSON.stringify({
        'email' : email,
        'password' : password
    })});

    let data = await response.json()
    if(response.status === 200){

    }else{
      console.log(data)
      alert(data.detail)
    }
  }
  return (
    <div className='back-container'>
        <video src='videos/video-2.mp4' autoPlay loop muted/>
			<div className="login-container">
        <form className='login-form' onSubmit={submit}>
          <label className='label-top'>Welcome</label>
          
          {/* <label className='label-log'>Email</label> */}
          <input type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} />
          
          {/* <label className='label-log'>Password</label> */}
          <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
          
          <button className='btn-login' type='submit'>Login</button>
        
        </form>
			</div>

    </div>
  )
}

export default LoginForm
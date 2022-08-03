import React from 'react'
import '../App.css'
import {Button} from './Button.js'
import './HeroSection.css'


function HeroSection() {
  return (
      <div className='hero-container'>
          <video src='videos/video-2.mp4' autoPlay loop muted/>
          <h1>CUPONES DE LO QUE QUIERAS!</h1>
          <p>¿Qué estas esperando?</p>
          <div className='hero-btns'>
            <Button link={'register'} className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> 
            Registrate
             </Button>

             {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> 
            Lorem <i className='far fa-play-circle'/>
             </Button> */}
           </div>
      </div>
  )
}

export default HeroSection
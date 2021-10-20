  import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
  
  function HeroSection() {
      return (
          <div className="hero-container">
              <video> </video>
              <h1>ADEVENTURE AWAITS</h1>
              <p>What are you waiting for?</p>
              <div className="hero-btns">
                  <Button className="btns" buttonstyle="btn--outline" buttonsize="btn--large">Get Started</Button>
                  <Button className="btns"  buttonsize="btn--large">Watch Trailor <i className='far fa-play-circle'/></Button>
              </div>
          </div>
      )
  }
  
  export default HeroSection
  
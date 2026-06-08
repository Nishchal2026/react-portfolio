import React from 'react'
import "./hero.css"
import Profile from "../../assets/profile.jpeg"
const Hero = () => {


  return (
    <div className='hero' id='hero'>

        <div className="introduction">
            
            <p>Web Developer,</p>
            <h1>I'm <span>Nishchal</span></h1>
            <h1>BCA Student</h1>
            <p>Hi, I am Nishchal Rathroe living in Gurgaon , Near Delhi and i love
              coding with cofee.
            </p>

        </div>
        <div className="profile">
          <img src={Profile}  height="400px" />
        </div>
      
    </div>
  )
}

export default Hero

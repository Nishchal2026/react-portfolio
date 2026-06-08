import React, { useRef } from 'react'
import "./skill.css"
const Skills = () => {
    
const slide = useRef()
 
let tx = 0 

const moveForward = () => {

  if(tx>-51){
    tx -= 17
    slide.current.style.transform = `translateX(${tx}%)`
  }
  
}
const moveBack = () => {

  if(tx<0){
    tx += 17
  slide.current.style.transform = `translateX(${tx}%)`
  }

}

    return (
    <div id='skills' className='skills-section'>
      <h1>My Skills</h1>
      <button onClick={() => {moveBack()}} className='move-back'>&lt;</button>
      <button onClick={() => {moveForward()}} className='move-forward'>&gt;</button>
      <div className="skills">
        <ul ref={slide}>

       <li>
        <div className="skill">
        <div className="skill-progress">
          <div className="html-progress-bar">
            
          </div>
        </div>
          <span>HTML 5</span>
        </div>
        </li>


       <li>
        <div className="skill">
        <div className="skill-progress">
          <div className="css-progress-bar">

          </div>
        </div>
          <span>CSS</span>
        </div>
        </li>
       <li>
        <div className="skill">
        <div className="skill-progress">
          <div className="javascript-progress-bar">

          </div>
        </div>
          <span>Javascript</span>
        </div>
        </li>
       <li>
        <div className="skill">
        <div className="skill-progress">
          <div className="react-progress-bar">

          </div>
        </div>
          <span>React Js</span>
        </div>
        </li>
       <li>
        <div className="skill">
        <div className="skill-progress">
          <div className="dsa-progress-bar">

          </div>
        </div>
          <span>Basic DSA</span>
        </div>
        </li>
       <li>
        <div className="skill">
        <div className="skill-progress">
          <div className="c-progress-bar">

          </div>
        </div>
          <span>C Language</span>
        </div>
        </li>


        </ul>


          </div>
     
      
    </div>
  )
}

export default Skills

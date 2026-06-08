import React from 'react'
import "./navbar.css"
const Navbar = () => {


  return (
    <nav>
      <h1>Nishchal</h1>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
         
      </ul>
      <button><a href="#contact">Contact Me</a></button>
    </nav>
  )
}

export default Navbar

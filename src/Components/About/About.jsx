import React from 'react'
import Profile from "../../assets/download (1).jpg"
import "./about.css"



const About = () => {



  return (
    <div className='about' id='about' >
      
      <div className="about-img">
        <img src={Profile}  height="400px" />
      </div>
      <div className="about-me">
        <h1>MORE <span>About</span> ME</h1>
        <p>Hi, I’m Nishchal Rathore, a BCA 2nd semester student living 
            in Gurgaon, India. I’m passionate about web development
             and enjoy creating modern, responsive, and user-friendly
              websites using React.js, JavaScript, HTML, and CSS. I
               love learning new technologies and improving my 
               problem-solving skills by building real-world projects.
                Currently, I’m focused on front-end development
                 and continuously exploring React ecosystem concepts
                  like routing, components, hooks, and APIs.
                   My goal is to become a skilled full-stack developer
                    and work on impactful projects that improve user experience.</p>
      </div>

    </div>
  )
}
 
export default About

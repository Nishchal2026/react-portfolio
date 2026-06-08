import React from 'react'
import "./project.css"
import Portfolio from "../../assets/portfolio.jpeg"
import Weather from "../../assets/weather.jpeg"
import Todolist from "../../assets/todolist.jpeg"
import Gradient from "../../assets/gradient.jpeg"
import Quiz from "../../assets/quiz.jpeg"
import Notes from "../../assets/notes.jpeg"
import Form from "../../assets/validation.jpeg"
import Kanban from "../../assets/kanban.jpeg"
const Projects = () => {

  return (
    <div className='projects' id='projects'>

      <h1>Projects</h1>
      <div className="all-projects">

        <div className="project">
         <img src={Quiz} height="160px" width="100%" />
         <div className="project-details">
          <button>Quiz App</button>
          <button><a href="https://github.com/Nishchal2026/Quiz-App" target='_blank'>Source Code</a></button>
         </div>
        </div>

        <div className="project">
         <img src={Form} height="160px" width="100%" />

  <div className="project-details">
          <button>Form</button>
          <button><a href="https://github.com/Nishchal2026/Form-Validation" target='_blank'>Source Code</a></button>
         </div>

        </div>
        <div className="project">
         <img src={Gradient} height="160px" width="100%" />

           <div className="project-details">
          <button>Gradient</button>
          <button><a href="https://github.com/Nishchal2026/Random-Gradient" target='_blank'>Source Code</a></button>
         </div>

        </div>
        <div className="project">
         <img src={Todolist} height="160px" width="100%" />


           <div className="project-details">
          <button>Todo List</button>
          <button><a href="https://github.com/Nishchal2026/To-Do-List" target='_blank'>Source Code</a></button>
         </div>

        </div>
        <div className="project">
         <img src={Notes} height="160px" width="100%" />

           <div className="project-details">
          <button>Notes</button>
          <button><a href="https://github.com/Nishchal2026/Notes-App" target='_blank'>Source Code</a></button>
         </div>

        </div>
        <div className="project">
         <img src={Portfolio} height="160px" width="100%" />

           <div className="project-details">
          <button>Portfolio</button>
          <button><a href="https://github.com/Nishchal2026/react-portfolio" target='_blank'>Source Code</a></button>
         </div>

        </div>
        <div className="project">
         <img src={Kanban} height="160px" width="100%" />

           <div className="project-details">
          <button>Drag and Drop</button>
          <button><a href="https://github.com/Nishchal2026/Draggable-Notes" target='_blank'>Source Code</a></button>
         </div>

        </div>
        <div className="project">
         <img src={Weather} height="160px" width="100%" />

           <div className="project-details">
          <button>Weather App</button>
          <button><a href="https://github.com/Nishchal2026/Weather-App" target='_blank'>Source Code</a></button>
         </div>

        </div>
      </div>
      
    </div>
  )
}

export default Projects

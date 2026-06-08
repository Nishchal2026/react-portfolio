import React from 'react'
import "./education.css"
import education from  "../../assets/education.jpg"
const Education = () => {

  return (
    <div className='education' id='education'> 
      
      <div className="education-image">
        <img src={education} height="400px" width="300px" />
      </div>
      <div className="education-details">
        <h4>My Education</h4>
        <div className="course-details">
          <div className="college-name">
          <h2>Bachelor of Computer Application ( BCA )</h2>
              <button>2025-2028</button>
          </div>
          <p>Amity University Noida</p>
          <span>Semester 1    SGPA : 7.16</span>
          <span>Semester 2    SGPA : 7.00</span>
        </div>
        <div className="school-details">
           <div className="school-name">
            <h2>St. Crispin Sr. Sec. School ( Gurgaon )</h2>
            <button>2022-2023</button>
           </div>
           <p>Class 12th</p>
           <span>Stream : Science ( PCM )</span>
           <span>Percentage : 61.2%</span>
        </div>
      </div>

    </div>
  )
}

export default Education

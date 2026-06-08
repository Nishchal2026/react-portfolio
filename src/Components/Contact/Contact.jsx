import React from 'react'
import "./contact.css"
import Phone from "../../assets/phone.png"
import Email from "../../assets/email.jpg"
import Linkdin from "../../assets/linkdin.png"
import Location from "../../assets/location.jpg"
const Contact = () => {


  return (
    <div className='contact' id='contact'>
      <h1>Let's Connect.</h1>
      <div className="contact-section">
        <div className="contact-details">

            <div className="email-div">
                 <img src={Email}  height="50px" />
                 <div className="email-details">

                 <h2>Email</h2> 
                 <p>nishchalrathore66@gmail.com</p>
                 </div>
            </div>

            <div className="phone-div">
                 <img src={Phone}  height="50px" />
                 <div className="phone-details">

                 <h2>Phone</h2> 
                 <p>+91 928993962</p>
                 </div>
            </div>
            <div className="linkdin-div">
                 <img src={Linkdin}  height="50px" />
                 <div className="linkdin-details">

                 <h2>Linkdin</h2> 
                 <p>linkdin.com</p>
                 </div>

            </div>
            <div className="location-div"> 
                 <img src={Location}  height="50px" />
                 <div className="location-details">

                 <h2>Location</h2> 
                 <p>Gurgaon, India</p>
                 </div>
                 </div>
        </div>
        <div className="contact-form">
            <form>
                <span>Email</span> <br /><br />
                <input type="text" placeholder='Enter email address.....' /><br /><br />
                <span>Message</span> <br /><br />
                <textarea type="text" placeholder='Enter your message.....' />
                <button>Submit Form</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

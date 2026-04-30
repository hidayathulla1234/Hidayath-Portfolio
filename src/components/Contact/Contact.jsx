import React from 'react'
import con from "../../assets/contact.png"
import "./Contact.css"
function Contact() {
  return (
   <div id="contact">
    <div className="leftcontact">
        <img src={con} alt=""/>
    </div>
    <div className="rightcontact">
       <form action="https://formspree.io/f/mnjlewqg" method='POST'>
        <input type="text" name="Username" placeholder='Name'/>
        <input type="email" name="Email" placeholder='Email'/>
        <textarea name='message' id="textarea" placeholder='Message Me'></textarea>
         <input type="submit" id="btn" value="Submit"></input>
        </form>
    </div>
   </div>
  )
}

export default Contact

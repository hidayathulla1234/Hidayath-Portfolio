import React, {useRef} from 'react'
import "./Nav.css"
import {Link} from "react-scroll"
import {useGSAP} from "@gsap/react";
import gsap from 'gsap'

function Nav() {
  let menu=useRef();
  let mobile=useRef();
  useGSAP(()=>{
    let tl=gsap.timeline()
    tl.from("nav h1",{
     y:-100,
     duration:2
    })
    tl.from("nav ul li",{
      y:-100,
      duration:1,
      opacity:0,
      stagger:1
    })
  })
  
  return (
    <nav>
        <h1>PORTFOLIO</h1>
       <ul className='desktopmenu'>
  <li><Link to="home" activeClass="active" spy smooth duration={500}>Home</Link></li>
  <li><Link to="about" activeClass="active" spy smooth duration={500}>About</Link></li>
  <li><Link to="projects" activeClass="active" spy smooth duration={500}>Projects</Link></li>
  <li><Link to="contact" activeClass="active" spy smooth duration={500}>Contact</Link></li>
</ul>
        <div className="hamburger" ref={menu} onClick={()=>{
        mobile.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham") 
         
         
        }}>

          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

            <ul className='mobilemenu' ref={mobile}>
           <li>
           <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}>
            Home
            </Link> 
            </li>{/*linking the buttons if we click the home button it goes to home */}
           <li><Link to="about" activeClass='active' spy={true} smooth={true} duration={500}> About</Link></li>
            <li><Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}> Projects</Link></li>
            <li><Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}> Contact</Link></li>
        </ul>
        </nav>
  )
}

export default Nav

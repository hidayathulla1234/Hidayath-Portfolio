import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import dsa from "../../assets/dsa.png" 
import py from "../../assets/py.png"


function About() {
  return (
    <div id="about">
      <div className="leftabout">

        <div className="circleline">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutdetails">

          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>Name</span>: Shaik Hidayathulla</li>
              <li><span>Age</span>: 22 Years old</li>
             
              <li><span>Gender</span>: Male</li>
              <li><span>Languages</span>: Telugu, Hindi, English, Kannada</li>
              
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>Degree</span>: B.Tech</li>
              <li><span>Branch</span>: CSE (AI)</li>
              <li><span>CGPA</span>: 8.5</li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>MERN Stack Developer</li>
              <li>DSA</li>
              <li>PYTHON</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
        <Card title="DSA" image={dsa}/>
        <Card title="PYTHON DEVELOPER"image={py}/>
    </div>
    </div>
  )
}

export default About
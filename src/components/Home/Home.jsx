import React from 'react'
import "./Home.css"
import man1 from "../../assets/man1.png"
import TypingEffect from 'react-typing-effect';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap'

function Home() {
  



  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">Shaik Hidayathulla</div>

        <div className="line3">
    Backend Developer 
</div>
          <button>HIRE ME</button>
        </div>
      </div>

      <div className="righthome">
        <img src={man1} alt="profile" />
      </div>
    </div>
  )
}

export default Home
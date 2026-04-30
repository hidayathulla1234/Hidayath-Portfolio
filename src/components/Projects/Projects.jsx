import React from 'react'
import Card from '../Card/Card'
import va from "../../assets/va.png";
import fw from "../../assets/fw.png";
import cb from "../../assets/cb.png";
import ise from "../../assets/ise.png";
import br from "../../assets/br.png"

import "./Projects.css" 
   
function Projects() {
  return (
    <div id="projects">
      <h1 id="para">1+ years Experience in Projects</h1>

      <div className="slider">
        <div className="slide-track">

          {/* ORIGINAL */}
          <Card title="VIRTUAL ASSISTANT" image={va}/>
          <Card title="AI POWERED FITNESS WEBSITE" image={fw}/>
          <Card title="AI CHATBOT" image={cb}/>
          <Card title="AI TEXT TO IMAGE" image={ise}/>
          <Card title="AI BACKGROUND REMOVER" image={br}/>

          {/* DUPLICATE (for loop) */}
          <Card title="VIRTUAL ASSISTANT" image={va}/>
          <Card title="AI POWERED FITNESS WEBSITE" image={fw}/>
          <Card title="AI CHATBOT" image={cb}/>
          <Card title="AI TEXT TO IMAGE" image={ise}/>
          <Card title="AI BACKGROUND REMOVER" image={br}/>

        </div>
      </div>
    </div>
  )
}

export default Projects

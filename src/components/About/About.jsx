import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import py from "../../assets/py.png"
import va from "../../assets/va.png"

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-title-container">
        <h2>About Me</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-container">
        <div className="leftabout">
          <div className="circleline">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>

          <div className="aboutdetails">
            <div className="about-block">
              <h3>Professional Summary</h3>
              <p>
                I am a <strong>B.Tech (Hons) in Computer Science Engineering</strong> student with a passion for designing scalable, end-to-end software solutions. I bridge the gap between intuitive user interfaces, high-performance backend systems, and cutting-edge artificial intelligence.
              </p>
            </div>

            <div className="about-block">
              <h3>Core Engineering Focus</h3>
              <div className="focus-tags">
                <span className="focus-tag">Frontend Development</span>
                <span className="focus-tag">Backend Development</span>
                <span className="focus-tag">REST API Development</span>
                <span className="focus-tag">Database Management</span>
                <span className="focus-tag">AI/ML & Deep Learning</span>
                <span className="focus-tag">Generative AI</span>
                <span className="focus-tag">LLM Applications</span>
                <span className="focus-tag">RAG Pipelines</span>
                <span className="focus-tag">AI Agents</span>
                <span className="focus-tag">API Integration</span>
                <span className="focus-tag">Automation Workflows</span>
              </div>
            </div>

            <div className="about-block">
              <h3>Academic Background</h3>
              <ul>
                <li><span>Degree:</span> B.Tech (Hons) — Computer Science Engineering</li>
                <li><span>University:</span> Chhattisgarh Swami Vivekanand Technical University (CSVTU)</li>
                <li><span>Period:</span> 2023 – 2027 | <span>CGPA:</span> 8.12 / 10</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rightabout">
          <Card title="FULL STACK ARCHITECTURE" image={mern} />
          <Card title="AI AGENTS & RAG SYSTEMS" image={va} />
          <Card title="SCALABLE BACKEND & ML" image={py} />
        </div>
      </div>
    </section>
  )
}

export default About
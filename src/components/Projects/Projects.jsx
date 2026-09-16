import React from 'react'
import "./Projects.css"
import va from "../../assets/va.png"
import cb from "../../assets/cb.png"
import fw from "../../assets/fw.png"
import ise from "../../assets/ise.png"
import br from "../../assets/br.png"
import py from "../../assets/py.png"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Multi-Agent Travel Planner",
      description: "Developed an AI-powered multi-agent travel planning application that coordinates specialized agents to generate personalized travel plans, destinations, activities, and recommendations.",
      technologies: ["Python", "LLMs", "AI Agents", "APIs", "FastAPI"],
      image: ise,
      github: "https://github.com/hidayathulla1234"
    },
    {
      id: 2,
      title: "AI Assistant with MCP Server",
      description: "Built an AI assistant using LLMs, FastAPI, and MCP to connect with external tools, APIs, databases, and documents for automated task execution.",
      technologies: ["Python", "FastAPI", "LLMs", "MCP", "REST APIs"],
      image: va,
      github: "https://github.com/hidayathulla1234"
    },
    {
      id: 3,
      title: "AI PDF Chatbot with RAG",
      description: "Developed a Retrieval-Augmented Generation (RAG) chatbot that allows users to upload PDF documents and ask questions using natural language.",
      technologies: ["Python", "LLMs", "RAG", "FastAPI", "PDF Processing", "Vector Database"],
      image: cb,
      github: "https://github.com/hidayathulla1234"
    },
    {
      id: 4,
      title: "Mr. AI Smart Classroom",
      description: "Developed an AI-powered smart classroom application designed to support interactive learning through intelligent assistance and automation.",
      technologies: ["Python", "AI/ML", "Web Technologies", "APIs"],
      image: fw,
      github: "https://github.com/hidayathulla1234"
    },
    {
      id: 5,
      title: "Business Registry Scraper",
      description: "Built a web-based data extraction application that collects and organizes structured business information from online sources for further processing and analysis.",
      technologies: ["Python", "Web Scraping", "Data Processing", "APIs"],
      image: br,
      github: "https://github.com/hidayathulla1234"
    },
    {
      id: 6,
      title: "Explainable ML Crop Recommendation, Yield Forecasting & Profitability Assessment",
      description: "Developed an end-to-end machine learning platform for crop recommendation, yield prediction, and profitability assessment using agricultural data and explainable ensemble machine learning techniques.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "LightGBM", "CatBoost", "SHAP", "FastAPI"],
      image: py,
      github: "https://github.com/hidayathulla1234"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-title-container">
        <h2>Featured Projects</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Real-world applications in multi-agent orchestration, full-stack architectures, RAG systems, and explainable ML.
        </p>
      </div>

      <div className="projects-grid-layout">
        {projects.map((project) => (
          <div key={project.id} className="project-detail-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className="project-image-overlay">
                <span className="project-category-tag">Featured Project</span>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech-tags">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

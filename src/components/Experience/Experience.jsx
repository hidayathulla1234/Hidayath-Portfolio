import React from 'react'
import "./Experience.css"

function Experience() {
  const experiences = [
    {
      role: "Research Intern",
      organization: "IIT Tirupati",
      period: "May 2025 – July 2025",
      projectTitle: "Explainable Machine Learning-Based Crop Recommendation, Yield Forecasting, and Profitability Assessment",
      highlights: [
        "Agricultural dataset processing and comprehensive data cleaning",
        "Advanced feature engineering and multidimensional correlation analysis",
        "Ensemble machine learning models (XGBoost, Random Forest, LightGBM, CatBoost)",
        "Precise crop recommendation and yield forecasting algorithms",
        "Agricultural profitability assessment and economic cost modeling",
        "SHAP (SHapley Additive exPlanations) & PDP model interpretability and explainability",
        "Production RESTful API and web application development using FastAPI"
      ]
    },
    {
      role: "AI Engineer",
      organization: "MPulse Digi AI",
      period: "2025 – Present",
      projectTitle: "AI-Powered Automation, MCP Servers & Enterprise LLM Applications",
      highlights: [
        "End-to-end AI-powered application development using Python and FastAPI",
        "Design and deployment of specialized multi-agent AI assistants",
        "Model Context Protocol (MCP) server development for tool and database orchestration",
        "Retrieval-Augmented Generation (RAG) architecture for PDF document chatbots",
        "Enterprise LLM integration, prompt engineering, and context management",
        "External REST API integration and automated multi-step workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-title-container">
        <h2>Work Experience</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Hands-on engineering experience in machine learning research, full-stack systems, and enterprise AI.
        </p>
      </div>

      <div className="experience-container">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <div className="experience-header">
              <div className="role-company">
                <h3>{exp.role}</h3>
                <span className="company-badge">{exp.organization}</span>
              </div>
              <span className="period-badge">{exp.period}</span>
            </div>

            {exp.projectTitle && (
              <div className="experience-project">
                <strong>Key Focus / Project:</strong> {exp.projectTitle}
              </div>
            )}

            <ul className="experience-highlights">
              {exp.highlights.map((item, hIdx) => (
                <li key={hIdx}>
                  <span className="bullet">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

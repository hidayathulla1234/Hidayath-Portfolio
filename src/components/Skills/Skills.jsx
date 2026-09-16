import React from 'react'
import "./Skills.css"

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]
    },
    {
      title: "Backend Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: ["Python", "Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"]
    },
    {
      title: "Databases",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: ["MySQL", "MongoDB", "SQLite"]
    },
    {
      title: "AI / Machine Learning",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
          <path d="M12 2a10 10 0 0 1 10 10h-10V2z"></path>
          <path d="M12 12 2.1 10.5"></path>
          <path d="M12 12v10"></path>
        </svg>
      ),
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "LLMs",
        "RAG",
        "AI Agents",
        "Computer Vision",
        "Scikit-learn",
        "NumPy",
        "Pandas"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "Jupyter",
        "Google Colab",
        "VS Code",
        "n8n",
        "API Integration",
        "MCP"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-title-container">
        <h2>Technical Skills</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Comprehensive stack spanning modern frontend, backend systems, database management, and AI/ML engineering.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category-card">
            <div className="category-header">
              <span className="category-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
            </div>
            <div className="skills-list">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import React from 'react'
import "./Education.css"

function Education() {
  const educationData = [
    {
      degree: "B.Tech (Hons) — Computer Science Engineering",
      institution: "Chhattisgarh Swami Vivekanand Technical University (CSVTU)",
      duration: "2023 – 2027",
      grade: "CGPA: 8.12 / 10",
      details: "Focusing on artificial intelligence, machine learning algorithms, full stack engineering, advanced data structures, system design, and database architectures."
    },
    {
      degree: "Higher Secondary — MPC (Maths, Physics, Chemistry)",
      institution: "Shastra Junior College",
      duration: "2020 – 2022",
      grade: "Percentage: 93%",
      details: "Strong foundational curriculum in mathematics, physics, and computational problem-solving."
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-title-container">
        <h2>Education</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Academic foundation in computer science, software engineering, and applied sciences.
        </p>
      </div>

      <div className="education-timeline">
        {educationData.map((item, idx) => (
          <div key={idx} className="education-card">
            <div className="education-card-header">
              <div>
                <h3>{item.degree}</h3>
                <span className="institution-name">{item.institution}</span>
              </div>
              <span className="education-period">{item.duration}</span>
            </div>

            <div className="grade-badge">
              <strong>Performance:</strong> {item.grade}
            </div>

            <p className="education-details">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

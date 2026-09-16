import React from "react"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Education from "./components/Education/Education"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className="portfolio-app">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default App
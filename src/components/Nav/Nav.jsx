import React, { useRef } from 'react'
import "./Nav.css"
import { Link } from "react-scroll"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

function Nav() {
  let menu = useRef();
  let mobile = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("nav h1", {
      y: -100,
      duration: 1
    });
    tl.from(".desktopmenu li", {
      y: -50,
      duration: 0.6,
      opacity: 0,
      stagger: 0.1
    });
  });

  const closeMenu = () => {
    if (mobile.current) mobile.current.classList.remove("activemobile");
    if (menu.current) menu.current.classList.remove("activeham");
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <nav>
      <Link to="home" smooth={true} duration={500} className="logo-link" style={{ cursor: "pointer" }}>
        <h1>PORTFOLIO</h1>
      </Link>

      <ul className='desktopmenu'>
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="hamburger"
        ref={menu}
        onClick={() => {
          mobile.current.classList.toggle("activemobile");
          menu.current.classList.toggle("activeham");
        }}
        aria-label="Toggle navigation menu"
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      <ul className='mobilemenu' ref={mobile}>
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav

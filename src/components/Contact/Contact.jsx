import React from 'react'
import "./Contact.css"
import con from "../../assets/contact.png"

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-title-container">
        <h2>Get In Touch</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Have an opportunity, project, or question? Feel free to reach out directly.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info-panel">
          <div className="contact-image-box">
            <img src={con} alt="Contact Hidayathulla Shaik" />
          </div>

          <div className="quick-contact-list">
            <a href="mailto:haihidayathulla@gmail.com" className="contact-item-card">
              <div className="icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-val">haihidayathulla@gmail.com</span>
              </div>
            </a>

            <a href="tel:+916302805203" className="contact-item-card">
              <div className="icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <span className="contact-val">+91 6302805203</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shaik-hidayathulla-9034b12a9"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-card"
            >
              <div className="icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <span className="contact-label">LinkedIn</span>
                <span className="contact-val">shaik-hidayathulla-9034b12a9</span>
              </div>
            </a>

            <a
              href="https://github.com/hidayathulla1234"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-card"
            >
              <div className="icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <span className="contact-label">GitHub</span>
                <span className="contact-val">hidayathulla1234</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-panel">
          <form action="https://formspree.io/f/mnjlewqg" method="POST" className="styled-contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Inquiry / Job Opportunity" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Type your message here..." rows="5" required></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              <span>Send Message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} Hidayathulla Shaik. All rights reserved.</p>
        <p className="footer-role">Full Stack Developer | AI/ML Engineer</p>
      </footer>
    </section>
  )
}

export default Contact

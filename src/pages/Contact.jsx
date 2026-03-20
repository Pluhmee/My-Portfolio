import React, { useState } from "react";
import { motion } from "framer-motion";
import { ownerInfo } from "../data/portfolio";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS integration placeholder
    // Replace with your EmailJS serviceId, templateId, and publicKey
  // ✅ Correct code
try {
  await emailjs.sendForm(
    'service_g5fq8kg',
    'template_ositqtp',   // Template ID
    e.target,
    'wdE1ReQdOfAlZUjri' // ← paste the real one here
  );
  setStatus("success");
  setForm({ name: "", email: "", message: "" });
} catch (err) {
  setStatus("error");
}
  };

  return (
    <main className="contact-page page-wrapper">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Get In Touch</div>
          <h1 className="section-title">
            Let's Build
            <br />
            <span className="gradient-text">Something Together</span>
          </h1>
          <p className="section-subtitle">
            I'm always open to discussing new projects, internship opportunities,
            or just chatting about web development. Reach out!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Hi Pelumi, I'd love to collaborate on..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="spinner" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  className="form-feedback success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  className="form-feedback error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Something went wrong. Please try emailing directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact-info-card">
              <h3>Direct Contact</h3>
              <div className="contact-info-links">
                <a
                  href={`mailto:${ownerInfo.email}`}
                  className="contact-info-item"
                >
                  <div className="contact-item-icon" style={{ background: "rgba(108,99,255,0.12)", color: "#6c63ff" }}>
                    ✉️
                  </div>
                  <div>
                    <span className="contact-item-label">Email</span>
                    <span className="contact-item-value">{ownerInfo.email}</span>
                  </div>
                </a>

                <a
                  href={ownerInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-item"
                >
                  <div className="contact-item-icon" style={{ background: "rgba(255,101,132,0.12)", color: "#ff6584" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-item-label">GitHub</span>
                    <span className="contact-item-value">@Pluhmee</span>
                  </div>
                </a>

                <a
                  href={ownerInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-item"
                >
                  <div className="contact-item-icon" style={{ background: "rgba(0,212,170,0.12)", color: "#00d4aa" }}>
                    💼
                  </div>
                  <div>
                    <span className="contact-item-label">LinkedIn</span>
                    <span className="contact-item-value">adedokun-pelumi</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-availability">
              <div className="avail-dot" />
              <div>
                <h4>Currently Available</h4>
                <p>Open to internships, freelance projects, and collaborations.</p>
              </div>
            </div>

            <div className="contact-response-time">
              <span>⚡</span>
              <p>Typical response time: <strong>within 24 hours</strong></p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

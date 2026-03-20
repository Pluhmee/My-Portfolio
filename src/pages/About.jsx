import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const About = () => {
  return (
    <main className="about-page page-wrapper">
      <div className="container">
        {/* Page Header */}
        <motion.div className="page-header" {...fadeUp()}>
          <div className="section-label">About Me</div>
          <h1 className="section-title">
            The Developer
            <br />
            <span className="gradient-text">Behind the Code</span>
          </h1>
          <p className="section-subtitle">
            A builder, a learner, and a problem-solver — here's my story.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Left: Bio */}
          <div className="about-main">
            <motion.section className="about-section" {...fadeUp(0.1)}>
              <h2>Who I Am</h2>
              <p>
                I'm <strong>Adedokun Jesupelumi Zachariah</strong>, a passionate web developer
                and Computer Science student based in Nigeria. I'm on a mission to build
                scalable, impactful web applications that solve real problems for real people.
              </p>
              <p>
                My journey into web development started with curiosity — a desire to understand
                how the web works and create things that exist beyond my own screen. That curiosity
                has grown into a disciplined practice of building, learning, and iterating.
              </p>
              <p>
                I specialize in full-stack web development with a strong focus on Python/Flask for
                backend systems and modern JavaScript for the frontend. I enjoy working at the
                intersection of functionality and design.
              </p>
            </motion.section>

            <motion.section className="about-section" {...fadeUp(0.2)}>
              <h2>My Developer Journey</h2>
              <div className="timeline">
                {[
                  {
                    year: "2022",
                    title: "Began Programming",
                    desc: "Started with HTML & CSS, built my first static websites and fell in love with the craft.",
                    color: "#6c63ff",
                  },
                  {
                    year: "2023",
                    title: "Explored Python & JavaScript",
                    desc: "Dived into Python scripting and JavaScript interactivity, completed multiple freeCodeCamp certifications.",
                    color: "#ff6584",
                  },
                  {
                    year: "2024",
                    title: "Built Real Applications",
                    desc: "Developed the Digital Staff Management System and Asset Management System using Flask.",
                    color: "#00d4aa",
                  },
                  {
                    year: "2025",
                    title: "Expanding Frontend Skills",
                    desc: "Learning React deeply, integrating AI APIs, and sharpening full-stack capabilities.",
                    color: "#ffb347",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.year}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <div
                      className="timeline-dot"
                      style={{ background: item.color }}
                    />
                    <div className="timeline-body">
                      <div className="timeline-year" style={{ color: item.color }}>
                        {item.year}
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section className="about-section" {...fadeUp(0.3)}>
              <h2>My Mission</h2>
              <blockquote className="about-quote">
                "I want to create digital products that don't just work — they delight,
                empower, and last. Technology should be accessible, purposeful, and beautiful."
              </blockquote>
            </motion.section>
          </div>

          {/* Right: Sidebar */}
          <div className="about-sidebar">
            <motion.div className="sidebar-card" {...fadeUp(0.15)}>
              <h3>Education</h3>
              <div className="edu-item">
                <div className="edu-icon">🎓</div>
                <div>
                  <h4>B.Sc Computer Science</h4>
                  <p>In View</p>
                  <span className="edu-status">Currently Enrolled</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="sidebar-card" {...fadeUp(0.2)}>
              <h3>Core Strengths</h3>
              <ul className="strengths-list">
                {[
                  { icon: "🏗️", text: "System Architecture & Design" },
                  { icon: "🎨", text: "UI/UX Implementation" },
                  { icon: "🔌", text: "REST API Development" },
                  { icon: "🗄️", text: "Database Design" },
                  { icon: "🚀", text: "Project Delivery & Initiative" },
                  { icon: "📚", text: "Continuous Learning" },
                ].map((s) => (
                  <li key={s.text}>
                    <span>{s.icon}</span>
                    {s.text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="sidebar-card sidebar-cta" {...fadeUp(0.25)}>
              <h3>Let's Connect</h3>
              <p>Open to internships, collaborations, and exciting projects.</p>
              <div className="sidebar-links">
                <a
                  href="https://github.com/Pluhmee"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/adedokun-pelumi-080124295"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

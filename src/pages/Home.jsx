import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ownerInfo, projects, skills } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

const floatAnim = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const Home = () => {
  const allFrontendSkills = skills.Frontend.slice(0, 5);

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
          <div className="hero-orb orb-3" />
          <div className="hero-grid" />
        </div>

        <div className="container hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">
              Adedokun
              <br />
              Jesupelumi
            </span>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span>Web Developer</span>
            <span className="role-sep">·</span>
            <span>CS Student</span>
            <span className="role-sep">·</span>
            <span>Problem Solver</span>
          </motion.div>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {ownerInfo.bio}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[
              { num: "3+", label: "Projects" },
              { num: "5+", label: "Certifications" },
              { num: "1+", label: "Year Experience" },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-num">{s.num}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating cards */}
        <div className="hero-floaters">
          <motion.div className="floater floater-1" {...floatAnim}>
            <span>⚛️</span> React
          </motion.div>
          <motion.div
            className="floater floater-2"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>🐍</span> Python
          </motion.div>
          <motion.div
            className="floater floater-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>🔥</span> Flask
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section home-projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label">Featured Work</div>
            <div className="section-header-row">
              <h2 className="section-title">Projects I've Built</h2>
              <Link to="/projects" className="btn btn-outline">
                All Projects →
              </Link>
            </div>
          </motion.div>

          <div className="projects-grid">
            {projects.filter((p) => p.featured).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="section home-skills-preview">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="skills-preview-header"
          >
            <div className="section-label">Tech Stack</div>
            <h2 className="section-title">Tools I Work With</h2>
          </motion.div>

          <div className="skills-ticker-row">
            {Object.entries(skills).flatMap(([cat, items]) =>
              items.map((s) => ({
                ...s,
                category: cat,
              }))
            ).map((skill, i) => (
              <motion.div
                key={`${skill.name}-${i}`}
                className="skill-chip"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05 }}
              >
                <span>{skill.icon}</span>
                {skill.name}
              </motion.div>
            ))}
          </div>

          <div className="skills-cta">
            <Link to="/skills" className="btn btn-outline">
              View All Skills →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section home-about-preview">
        <div className="container">
          <div className="about-preview-grid">
            <motion.div
              className="about-preview-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label">About Me</div>
              <h2 className="section-title">
                A Developer Who
                <br />
                <span className="gradient-text">Builds to Last</span>
              </h2>
              <p className="section-subtitle">
                I'm a passionate Computer Science student from Nigeria building
                scalable web applications. I love combining clean code with great
                design to create impactful digital experiences.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: 28 }}>
                More About Me →
              </Link>
            </motion.div>

            <motion.div
              className="about-preview-cards"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {[
                { icon: "🎓", title: "CS Student", desc: "B.Sc Computer Science in view" },
                { icon: "💡", title: "Problem Solver", desc: "Turning ideas into working products" },
                { icon: "🌍", title: "Based in Nigeria", desc: "Open to remote opportunities" },
                { icon: "🚀", title: "Always Learning", desc: "Exploring new tech every day" },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="about-mini-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  <div className="mini-card-icon">{card.icon}</div>
                  <div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section home-cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-orb" />
            <div className="section-label" style={{ justifyContent: "center" }}>
              Let's Work Together
            </div>
            <h2 className="cta-title">
              Have a Project in Mind?
            </h2>
            <p className="cta-subtitle">
              I'm always excited to collaborate on interesting projects. Whether
              it's a startup idea, internship, or open source contribution — let's talk.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href={`mailto:${ownerInfo.email}`} className="btn btn-outline">
                adedokunpelumi0@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;

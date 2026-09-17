import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/data";
import "./Skills.css";

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

const categoryColors = {
  Frontend: "#6c63ff",
  Backend:  "#ff6584",
  Database: "#00d4aa",
  Tools:    "#ffb347",
};

const Skills = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? skills
    : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Tech Stack</div>
          <h2 className="section-title">
            Tools in My
            <span className="grad-text"> Developer Toolkit</span>
          </h2>
          <p className="section-sub">
            Skills built through real projects, certifications, and continuous practice.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="skills-filters"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
              style={
                active === cat && cat !== "All"
                  ? { background: categoryColors[cat], borderColor: categoryColors[cat] }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills-grid"
          layout
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="skill-logo-wrap">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="skill-logo"
                  style={
                    skill.name === "Flask" || skill.name === "GitHub"
                      ? { filter: "var(--logo-invert)" }
                      : {}
                  }
                />
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-cat"
                style={{ color: categoryColors[skill.category] || "var(--accent)" }}
              >
                {skill.category}
              </div>

              {/* Progress bar */}
              <div className="skill-bar-track">
                <motion.div
                  className="skill-bar-fill"
                  style={{ background: categoryColors[skill.category] || "var(--accent)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.04 + 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
              <div className="skill-level"
                style={{ color: categoryColors[skill.category] || "var(--accent)" }}
              >
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning banner */}
        <motion.div
          className="learning-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="learning-icon">🌱</span>
          <div>
            <strong>Currently exploring:</strong>{" "}
            <span className="learning-items">
              TypeScript (deepening) · Next.js · Docker · AWS Fundamentals
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

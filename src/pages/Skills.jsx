import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import "./Skills.css";

const categoryColors = {
  Frontend: "#6c63ff",
  Backend: "#ff6584",
  Tools: "#ffb347",
  Databases: "#00d4aa",
};

const SkillBar = ({ skill, color, index }) => {
  return (
    <motion.div
      className="skill-bar-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="skill-bar-header">
        <div className="skill-bar-name">
          <span className="skill-emoji">{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
        <span className="skill-level-text" style={{ color }}>
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.07 + 0.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Object.keys(skills)];

  const displaySkills =
    activeCategory === "All"
      ? skills
      : { [activeCategory]: skills[activeCategory] };

  return (
    <main className="skills-page page-wrapper">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Technical Skills</div>
          <h1 className="section-title">
            Tools in My
            <br />
            <span className="gradient-text">Developer Toolkit</span>
          </h1>
          <p className="section-subtitle">
            Skills built through real projects, certifications, and
            countless hours of practice and exploration.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="filter-bar"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              style={
                activeCategory === cat && cat !== "All"
                  ? { background: categoryColors[cat], borderColor: categoryColors[cat] }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-sections">
          {Object.entries(displaySkills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              className="skills-category-block"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <div className="skills-category-header">
                <div
                  className="category-dot"
                  style={{ background: categoryColors[category] }}
                />
                <h2
                  className="skills-category-title"
                  style={{ color: categoryColors[category] }}
                >
                  {category}
                </h2>
              </div>

              <div className="skills-card">
                {/* Icon Cards Row */}
                <div className="skill-icons-row">
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className="skill-icon-card"
                      style={{
                        borderColor:
                          skill.level >= 80
                            ? `${categoryColors[category]}40`
                            : "var(--border)",
                      }}
                      whileHover={{ scale: 1.06, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      custom={i}
                    >
                      <div className="skill-icon-emoji">{skill.icon}</div>
                      <div className="skill-icon-name">{skill.name}</div>
                      <div
                        className="skill-icon-level"
                        style={{ color: categoryColors[category] }}
                      >
                        {skill.level >= 85
                          ? "Expert"
                          : skill.level >= 70
                          ? "Proficient"
                          : "Learning"}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bars */}
                <div className="skill-bars-list">
                  {items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      color={categoryColors[category]}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Now Banner */}
        <motion.div
          className="learning-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="learning-banner-icon">🌱</div>
          <div>
            <h3>Always Learning</h3>
            <p>
              Currently exploring: <strong>TypeScript</strong>,{" "}
              <strong>Next.js</strong>, <strong>Docker</strong>, and{" "}
              <strong>AWS fundamentals</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Skills;

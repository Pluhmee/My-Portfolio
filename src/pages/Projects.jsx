import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

const categories = ["All", "Frontend", "Backend", "Fullstack"];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <main className="projects-page page-wrapper">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">My Work</div>
          <h1 className="section-title">
            Projects I've
            <br />
            <span className="gradient-text">Built & Shipped</span>
          </h1>
          <p className="section-subtitle">
            A collection of web applications and systems I've developed,
            from management platforms to AI-powered tools.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="filter-bar"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="projects-grid-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.length === 0 ? (
              <div className="empty-state">
                <span>🔍</span>
                <p>No projects in this category yet.</p>
              </div>
            ) : (
              filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA - more coming */}
        <motion.div
          className="projects-more-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>More projects in progress — follow along on GitHub</p>
          <a
            href="https://github.com/Pluhmee"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            View GitHub Profile →
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;

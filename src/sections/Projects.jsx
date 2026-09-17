import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, ArrowSquareOut, Globe } from "@phosphor-icons/react";
import { projects } from "../data/data";
import "./Projects.css";

const categories = ["All", "Frontend", "Fullstack", "Backend"];

const ProjectCard = ({ p, i }) => {
  const [iframeErr, setIframeErr] = useState(false);
  const hasLive = p.demo && p.demo !== "#";

  return (
    <motion.div
      className="proj-card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: i * 0.09 }}
      whileHover={{ y: -6 }}
    >
      <div className="proj-preview">
        {hasLive && !iframeErr ? (
          <>
            <iframe
              src={p.demo}
              title={p.title}
              className="proj-iframe"
              loading="lazy"
              scrolling="no"
              tabIndex="-1"
              onError={() => setIframeErr(true)}
            />
            <div className="proj-preview-overlay">
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="visit-btn"
              >
                <Globe size={15} weight="fill" />
                Open Live Site
                <ArrowSquareOut size={13} weight="bold" />
              </a>
            </div>
          </>
        ) : (
          <div
            className="proj-placeholder"
            style={{
              background: `linear-gradient(135deg, ${p.color}18, ${p.color}06)`,
            }}
          >
            <div className="placeholder-browser">
              <div className="pb-bar">
                <span className="pb-dot" style={{ background: "#ff5f57" }} />
                <span className="pb-dot" style={{ background: "#febc2e" }} />
                <span className="pb-dot" style={{ background: "#28c840" }} />
                <div className="pb-url">
                  {hasLive ? p.demo : "localhost:5000"}
                </div>
              </div>
              <div className="pb-body">
                <span className="pb-icon">{p.icon}</span>
                <span className="pb-label">
                  {hasLive ? "Preview blocked by server" : "Not deployed yet"}
                </span>
                {hasLive && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="pb-visit"
                    style={{ color: p.color, borderColor: `${p.color}40` }}
                  >
                    <Globe size={13} weight="fill" />
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        {hasLive && (
          <div className="live-badge">
            <span className="live-dot" />
            Live
          </div>
        )}
      </div>

      <div className="proj-accent" style={{ background: p.color }} />

      <div className="proj-body">
        <div className="proj-top-row">
          <div
            className="proj-icon-wrap"
            style={{ background: `${p.color}18`, color: p.color }}
          >
            {p.icon}
          </div>
          <div className="proj-actions">
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="proj-action-btn"
              aria-label="GitHub"
            >
              <GithubLogo size={16} weight="fill" />
            </a>
            {hasLive && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="proj-action-btn"
                aria-label="Live site"
              >
                <ArrowSquareOut size={15} weight="bold" />
              </a>
            )}
          </div>
        </div>

        <div className="proj-cat" style={{ color: p.color }}>
          {p.category}
        </div>
        <h3 className="proj-title">{p.title}</h3>
        <p className="proj-desc">{p.desc}</p>

      <div className="proj-tech">
  {p.tech.map((t) => (
    <span key={t.name} className="tech-tag">
      {t.logo ? (
        <img
          src={t.logo}
          alt={t.name}
          className="tech-logo"
          style={
            t.name === "Flask" || t.name === "Vercel"
              ? { filter: "var(--logo-invert)" }
              : {}
          }
        />
      ) : (
        <span className="tech-dot" />
      )}
      {t.name}
    </span>
  ))}
</div>
      </div>

      <div
        className="proj-glow"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${p.color}15, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">My Work</div>
          <h2 className="section-title">
            Projects I've
            <span className="grad-text"> Built & Shipped</span>
          </h2>
          <p className="section-sub">
            Real-world applications built with production-ready code.
          </p>
        </motion.div>

        <motion.div
          className="proj-filters"
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
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} p={p} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="proj-github-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>More projects on my GitHub</p>
          <a
            href="https://github.com/Pluhmee"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <GithubLogo size={16} weight="fill" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

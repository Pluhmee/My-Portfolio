import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      {/* ── Live Preview ── */}
      <div className="project-preview">

        {project.liveUrl && !iframeError ? (
          <>
            {/* Loading shimmer while iframe loads */}
            {!iframeLoaded && (
              <div
                className="preview-shimmer"
                style={{
                  background: `linear-gradient(135deg, ${project.color}18, ${project.color}06)`,
                }}
              >
                <div className="shimmer-browser">
                  <div className="shimmer-bar" />
                  <div className="shimmer-bar short" />
                  <div className="shimmer-bar" />
                </div>
                <span className="shimmer-icon">{project.icon}</span>
              </div>
            )}

            <iframe
              src={project.liveUrl}
              title={project.title}
              className={`project-iframe ${iframeLoaded ? "loaded" : ""}`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeError(true)}
              scrolling="no"
              tabIndex="-1"
            />
          </>
        ) : (
          // Fallback placeholder if no URL or iframe blocked
          <div
            className="project-preview-placeholder"
            style={{
              background: `linear-gradient(135deg, ${project.color}18, ${project.color}06)`,
            }}
          >
            <div className="placeholder-browser">
              <div className="browser-bar">
                <span className="browser-dot" style={{ background: "#ff5f57" }} />
                <span className="browser-dot" style={{ background: "#febc2e" }} />
                <span className="browser-dot" style={{ background: "#28c840" }} />
                <div className="browser-url">
                  {project.demo !== "#" ? project.demo : "localhost:5000"}
                </div>
              </div>
              <div className="browser-body">
                <span className="placeholder-icon">{project.icon}</span>
                <span className="placeholder-label">
                  {project.demo === "#" ? "Deploy to preview" : "Preview unavailable"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="project-preview-overlay">
          
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="overlay-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          {project.demo && project.demo !== "#" && (
            
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="overlay-btn overlay-btn-primary"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Site
            </a>
          )}
        </div>

        {/* Live badge */}
        {project.liveUrl && (
          <div className="live-badge">
            <span className="live-dot" />
            Live
          </div>
        )}
      </div>

      {/* ── Card Body ── */}
      <div className="project-card-body">
        <div className="project-card-top">
          <div className="project-category" style={{ color: project.color }}>
            {project.category}
          </div>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

      <div
        className="project-card-glow"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}18, transparent 70%)` }}
      />
    </motion.div>
  );
};

export default ProjectCard;          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              aria-label="Live Demo"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-category" style={{ color: project.color }}>
          {project.category}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        className="project-card-glow"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}18, transparent 70%)` }}
      />
    </motion.div>
  );
};

export default ProjectCard;

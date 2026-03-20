import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";
import "./Certifications.css";

const Certifications = () => {
  return (
    <main className="certs-page page-wrapper">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Achievements</div>
          <h1 className="section-title">
            Certifications &
            <br />
            <span className="gradient-text">Credentials</span>
          </h1>
          <p className="section-subtitle">
            Verified learning milestones from globally recognized platforms and
            institutions.
          </p>
        </motion.div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="cert-card-accent"
                style={{ background: cert.color }}
              />
              <div className="cert-card-body">
                <div
                  className="cert-badge"
                  style={{
                    background: `${cert.color}18`,
                    color: cert.color,
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  🏅 Certified
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-org">{cert.org}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
              <div className="cert-card-footer">
                <a
                  href={cert.link}
                  className="cert-view-btn"
                  style={{ color: cert.color, borderColor: `${cert.color}40` }}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          className="certs-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { num: certifications.length, label: "Certifications Earned" },
            { num: "4+", label: "Platforms" },
            { num: "2023–2026", label: "Learning Period" },
          ].map((stat) => (
            <div key={stat.label} className="certs-stat">
              <div className="certs-stat-num gradient-text">{stat.num}</div>
              <div className="certs-stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Certifications;

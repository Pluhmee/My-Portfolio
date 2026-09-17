import React from "react";
import { motion } from "framer-motion";
import { Seal, ArrowSquareOut } from "@phosphor-icons/react";
import { certifications } from "../data/data";
import "./Certifications.css";

const Certifications = () => (
  <section id="certifications" className="section certs-section">
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">Achievements</div>
        <h2 className="section-title">
          Certifications &
          <span className="grad-text"> Credentials</span>
        </h2>
      </motion.div>

      <div className="certs-grid">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div
              className="cert-top"
              style={{ background: `linear-gradient(135deg, ${cert.color}16, ${cert.color}05)` }}
            >
              <div
                className="cert-seal"
                style={{ color: cert.color, background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
              >
                <Seal size={22} weight="duotone" />
              </div>
              <div className="cert-year">{cert.year}</div>
            </div>

            <div className="cert-body">
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-org">{cert.org}</div>
              <p className="cert-detail">{cert.detail}</p>
            </div>

            <div className="cert-footer" style={{ borderColor: `${cert.color}20` }}>
              <a
                href="#"
                className="cert-btn"
                style={{ color: cert.color, borderColor: `${cert.color}30` }}
              >
                View Certificate
                <ArrowSquareOut size={13} weight="bold" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;

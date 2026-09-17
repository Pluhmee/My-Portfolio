import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap, MapPin, EnvelopeSimple,
  Phone, Code, Rocket, Brain, UsersThree,
} from "@phosphor-icons/react";
import { owner, education } from "../data/data";
import "./About.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
});

const strengths = [
  { icon: <Code size={20} weight="duotone" />, title: "Clean Architecture", desc: "Scalable, maintainable code with proper patterns" },
  { icon: <Rocket size={20} weight="duotone" />, title: "Fast Delivery", desc: "From idea to production efficiently" },
  { icon: <Brain size={20} weight="duotone" />, title: "Problem Solver", desc: "Breaking down complex problems logically" },
  { icon: <UsersThree size={20} weight="duotone" />, title: "Team Player", desc: "Collaborative and adaptable in any environment" },
];

const About = () => (
  <section id="about" className="section about-section">
    <div className="container">
      <motion.div {...fadeUp(0)} className="section-header">
        <div className="section-tag">About Me</div>
        <h2 className="section-title">
          The Developer
          <span className="grad-text"> Behind the Code</span>
        </h2>
      </motion.div>

      <div className="about-grid">
        {/* Left — Bio */}
        <motion.div {...fadeUp(0.1)} className="about-bio-col">
          <div className="about-card">
            <p className="about-p">
              I'm <strong>Adedokun Jesupelumi Zachariah</strong>, a full-stack web developer
              and Computer Science graduate from Lagos State University (LASU) with a
              Second Class Honours (Upper Division).
            </p>
            <p className="about-p">
              My development journey started with curiosity about how the web works.
              That curiosity became a discipline — I've since built real-world systems
              including staff management platforms, school websites, e-commerce backends,
              and academic supervision tools.
            </p>
            <p className="about-p">
              I specialize in Python/Flask backends, React frontends, and REST API
              design. I care deeply about code quality, user experience, and shipping
              products that actually solve problems.
            </p>

            {/* Quick info */}
            <div className="about-info-list">
              {[
                { icon: <MapPin size={16} weight="fill" />, label: "Location", value: owner.location },
                { icon: <EnvelopeSimple size={16} weight="fill" />, label: "Email", value: owner.email },
                { icon: <Phone size={16} weight="fill" />, label: "Phone", value: owner.phone },
                { icon: <GraduationCap size={16} weight="fill" />, label: "Degree", value: "B.Sc Computer Science" },
              ].map((item) => (
                <div key={item.label} className="info-row">
                  <span className="info-icon">{item.icon}</span>
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <div className="about-right-col">
          {/* Education */}
          <motion.div {...fadeUp(0.15)} className="about-card edu-card">
            <h3 className="card-title">
              <GraduationCap size={18} weight="duotone" />
              Education
            </h3>
            {education.map((ed, i) => (
              <div key={i} className="edu-item">
                <div className="edu-icon">{ed.icon}</div>
                <div>
                  <div className="edu-degree">{ed.degree}</div>
                  <div className="edu-school">{ed.school}</div>
                  <div className="edu-grade">{ed.grade}</div>
                </div>
                <div className="edu-year">{ed.year}</div>
              </div>
            ))}
          </motion.div>

          {/* Strengths */}
          <motion.div {...fadeUp(0.2)}>
            <div className="strengths-grid">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="strength-card"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="strength-icon">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

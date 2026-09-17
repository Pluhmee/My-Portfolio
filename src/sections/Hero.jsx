import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  ArrowDown,
} from "@phosphor-icons/react";
import { owner } from "../data/data";
import "./Hero.css";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero-section">
      {/* Background */}
      <div className="hero-bg" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        {/* LEFT */}
        <motion.div
          className="hero-left"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="hero-badge">
            <span className="badge-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1 variants={fadeUp} className="hero-title">
            <Typewriter
              onInit={(tw) => {
                tw
                  .changeDelay(42)
                  .typeString("Hi, I'm ")
                  .typeString(
                    '<span class="grad-text">Adedokun<br/>Jesupelumi</span>'
                  )
                  .start();
              }}
              options={{
                cursor: "|",
                wrapperClassName: "tw-wrap",
                cursorClassName: "tw-cursor",
              }}
            />
          </motion.h1>

          <motion.div variants={fadeUp} className="hero-role">
            <span>Full-Stack Developer</span>
            <span className="sep">·</span>
            <span>CS Graduate</span>
            <span className="sep">·</span>
            <span>Lagos, Nigeria</span>
          </motion.div>

          <motion.p variants={fadeUp} className="hero-bio">
            {owner.bio}
          </motion.p>

          <motion.div variants={fadeUp} className="hero-ctas">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("projects")}
            >
              View Projects
              <ArrowDown size={15} weight="bold" />
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-socials">
            <a
              href={owner.github}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <GithubLogo size={20} weight="fill" />
            </a>
            <a
              href={owner.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={20} weight="fill" />
            </a>
            <a
              href={`mailto:${owner.email}`}
              className="social-link"
              aria-label="Email"
            >
              <EnvelopeSimple size={20} weight="fill" />
            </a>
            <span className="social-line" />
            <span className="social-handle">@Pluhmee</span>
          </motion.div>
        </motion.div>

        {/* RIGHT — Photo */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.88, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="photo-frame">
            {/* Rotating ring */}
            <div className="ring ring-1" />
            <div className="ring ring-2" />

            {/* Glow */}
            <div className="photo-glow" />

           

            {/* Image */}
            <div className="photo-wrap">
              <img
                src="/pelumi.jpg"
                alt="Adedokun Jesupelumi Zachariah"
                className="photo"
              />
              <div className="photo-overlay" />
            </div>

            {/* Floating chips */}
            <motion.div
              className="chip chip-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                width="16"
              />
              React
            </motion.div>
            <motion.div
              className="chip chip-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                width="16"
              />
              Python
            </motion.div>
            <motion.div
              className="chip chip-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                alt="Flask"
                width="16"
                style={{ filter: "invert(1)" }}
              />
              Flask
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        className="scroll-cue"
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;

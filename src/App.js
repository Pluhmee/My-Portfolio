import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import "./styles/globals.css";
import "./App.css";

/* ── Cinematic Load Screen ── */
const LoadScreen = ({ onDone }) => {
  const [phase, setPhase] = useState(0);
  // phase 0 → counting, phase 1 → name reveal, phase 2 → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 900);
    const t2 = setTimeout(() => setPhase(2), 2000);
    const t3 = setTimeout(onDone, 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <motion.div
      className="load-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Progress bar */}
      <motion.div
        className="load-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: phase >= 2 ? 1 : 0.65 }}
        transition={{ duration: phase >= 2 ? 0.4 : 0.9, ease: "easeOut" }}
      />

      <div className="load-content">
        {/* Code tag animation */}
        <motion.div
          className="load-tag load-tag-open"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: phase >= 0 ? 0.4 : 0, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          &lt;portfolio&gt;
        </motion.div>

        {/* Name */}
        <motion.div
          className="load-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 20 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="load-first">Adedokun</span>
          <span className="load-last">Jesupelumi</span>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="load-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 1 ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full-Stack Web Developer
        </motion.div>

        <motion.div
          className="load-tag load-tag-close"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: phase >= 0 ? 0.4 : 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          &lt;/portfolio&gt;
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="load-corner tl" />
      <div className="load-corner tr" />
      <div className="load-corner bl" />
      <div className="load-corner br" />
    </motion.div>
  );
};

/* ── Main App ── */
function App() {
  const { theme, toggleTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  // Skip loader on repeat visits
  const hasVisited = sessionStorage.getItem("pv2-visited");
  const showLoader = !hasVisited;

  const handleLoadDone = () => {
    sessionStorage.setItem("pv2-visited", "1");
    setLoaded(true);
  };

  useEffect(() => {
    if (!showLoader) setLoaded(true);
  }, [showLoader]);

  return (
    <>
      <AnimatePresence>
        {!loaded && showLoader && (
          <LoadScreen key="loader" onDone={handleLoadDone} />
        )}
      </AnimatePresence>

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;

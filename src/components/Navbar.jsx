import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, List, X } from "@phosphor-icons/react";
import { navLinks } from "../data/data";
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="nav-inner container">
          <button className="nav-logo" onClick={() => handleNav("#home")}>
            <span className="logo-lt">&lt;</span>
            <span>Pelumi</span>
            <span className="logo-lt">/&gt;</span>
          </button>

          <ul className="nav-links">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    className={`nav-link ${active === id ? "active" : ""}`}
                    onClick={() => handleNav(link.href)}
                  >
                    {link.label}
                    {active === id && (
                      <motion.span
                        className="nav-dot"
                        layoutId="nav-active-dot"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark"
                  ? <Sun size={18} weight="fill" />
                  : <Moon size={18} weight="fill" />}
              </motion.span>
            </button>

            <a
              href="/resume-2025.pdf"
              className="btn btn-primary nav-cv"
              download="Adedokun_Jesupelumi_CV.pdf"
            >
              Download CV
            </a>

            <button
              className="icon-btn hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                className={`mobile-link ${active === link.href.replace("#", "") ? "active" : ""}`}
                onClick={() => handleNav(link.href)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href="/resume-2025.pdf"
              className="btn btn-primary"
              download="Adedokun_Jesupelumi_CV.pdf"
              style={{ marginTop: 8 }}
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

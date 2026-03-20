import React from "react";
import { Link } from "react-router-dom";
import { ownerInfo } from "../data/portfolio";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span style={{ color: "var(--accent-primary)" }}>&lt;</span>
              Pelumi
              <span style={{ color: "var(--accent-primary)" }}>/&gt;</span>
            </Link>
            <p className="footer-tagline">
              Building the web, one commit at a time.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li><a href={ownerInfo.github} target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href={ownerInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href={`mailto:${ownerInfo.email}`}>Email</a></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Adedokun Jesupelumi Zachariah. Built with React & ♥</p>
          <p className="footer-status">
            <span className="status-dot" />
            Available for opportunities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

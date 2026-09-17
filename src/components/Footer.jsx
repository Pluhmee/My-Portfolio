import React from "react";
import { GithubLogo, LinkedinLogo, EnvelopeSimple, Heart } from "@phosphor-icons/react";
import { owner } from "../data/data";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <button className="footer-logo" onClick={() => scrollTo("home")}>
            <span style={{ color: "var(--accent)" }}>&lt;</span>
            Pelumi
            <span style={{ color: "var(--accent)" }}>/&gt;</span>
          </button>
          <p>Building the web, one commit at a time.</p>
        </div>

        <div className="footer-socials">
          <a href={owner.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubLogo size={20} weight="fill" />
          </a>
          <a href={owner.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinLogo size={20} weight="fill" />
          </a>
          <a href={`mailto:${owner.email}`} aria-label="Email">
            <EnvelopeSimple size={20} weight="fill" />
          </a>
        </div>

        <div className="footer-copy">
          © {year} Adedokun Jesupelumi · Made with{" "}
          <Heart size={13} weight="fill" style={{ color: "var(--accent-2)", display: "inline" }} />{" "}
          in Lagos
        </div>
      </div>
    </footer>
  );
};

export default Footer;

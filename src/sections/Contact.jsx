import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  EnvelopeSimple, GithubLogo, LinkedinLogo,
  MapPin, PaperPlaneTilt, CheckCircle, WarningCircle,
} from "@phosphor-icons/react";
import { owner } from "../data/data";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");
  try {
    await emailjs.sendForm(
      "service_g5fq8kg",
      "template_ositqtp",
      e.target,
      "wdE1ReQdOfAlZUjri"
    );
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus("error");
  }
};

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's Build
            <span className="grad-text"> Something Together</span>
          </h2>
          <p className="section-sub">
            Open to internships, freelance projects, and collaborations.
            I respond within 24 hours.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={6}
                  placeholder="Hi Pelumi, I'd like to discuss..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <><span className="spinner" /> Sending...</>
                ) : (
                  <><PaperPlaneTilt size={16} weight="fill" /> Send Message</>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  className="form-msg success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={18} weight="fill" />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  className="form-msg error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <WarningCircle size={18} weight="fill" />
                  Something went wrong. Email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact-info-card">
              <h3>Direct Contact</h3>
              {[
                {
                  icon: <EnvelopeSimple size={18} weight="fill" />,
                  label: "Email",
                  value: owner.email,
                  href: `mailto:${owner.email}`,
                  color: "#6c63ff",
                },
                {
                  icon: <GithubLogo size={18} weight="fill" />,
                  label: "GitHub",
                  value: "@Pluhmee",
                  href: owner.github,
                  color: "#ff6584",
                },
                {
                  icon: <LinkedinLogo size={18} weight="fill" />,
                  label: "LinkedIn",
                  value: "adedokun-pelumi",
                  href: owner.linkedin,
                  color: "#00d4aa",
                },
                {
                  icon: <MapPin size={18} weight="fill" />,
                  label: "Location",
                  value: owner.location,
                  href: null,
                  color: "#ffb347",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`contact-row ${!item.href ? "no-link" : ""}`}
                >
                  <div
                    className="contact-row-icon"
                    style={{ background: `${item.color}18`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="contact-row-label">{item.label}</div>
                    <div className="contact-row-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="avail-card">
              <div className="avail-dot" />
              <div>
                <h4>Currently Available</h4>
                <p>Open to internships, freelance & collaborations.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

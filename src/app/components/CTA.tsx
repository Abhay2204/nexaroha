"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BottomHighlight {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const highlights: BottomHighlight[] = [
  {
    title: "Quick Response",
    desc: "We typically respond within 24 hours.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    desc: "We keep you updated every step of the way.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Result Oriented",
    desc: "We focus on outcomes that drive real growth.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Long Term Partner",
    desc: "We grow with you as your trusted design partner.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Global Collaboration",
    desc: "Working with clients around the world.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="section-wrapper container" style={{ paddingBottom: 0 }}>
      
      {/* Top 12-Column Grid Split (4-4-4 Layout) */}
      <div className="grid-12" style={{ alignItems: "start" }}>
        
        {/* Left Column (Sticky info panel - spans 4 columns) */}
        <div className="sticky-sidebar reveal-fade-in">
          <div className="badge">
            <span className="badge-dot" />
            <span>Let's Work Together</span>
          </div>
          <h2
            className="fw-headline"
            style={{
              fontSize: "3.5rem",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Your Next<br />
            <span
              style={{
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
                background: "linear-gradient(135deg, #4800F4 0%, #E100F5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Growth Partner.
            </span>
          </h2>
          <p className="fw-description" style={{ marginBottom: "3rem" }}>
            We partner with ambitious brands and visionary leaders to create meaningful digital experiences
            that drive real growth.
          </p>

          {/* Quick Contact Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* Let's start a project link */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#4800F4",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(72,0,244,0.3)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.95rem", fontWeight: 650, color: "var(--foreground)" }}>Let's start a project</span>
                <a href="mailto:hello@nexaroha.com" style={{ fontSize: "0.85rem", color: "var(--text-muted)", transition: "color 0.3s ease" }} className="footer-link">
                  hello@nexaroha.com
                </a>
              </div>
            </div>

            {/* Book a consultation link */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#4800F4",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(72,0,244,0.3)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.95rem", fontWeight: 650, color: "var(--foreground)" }}>Book a free consultation</span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>We'll discuss your ideas and make a plan.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Middle Column - White Form Card (spans 4 columns) */}
        <div className="cta-middle-col reveal-fade-in">
          <div
            style={{
              backgroundColor: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "3rem 2.5rem",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.03)",
              width: "100%",
            }}
          >
            <h3 style={{ fontSize: "1.6rem", fontWeight: 500, marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>
              Tell us about your project
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.4 }}>
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Name Input */}
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "1rem 3rem 1rem 1.25rem",
                    borderRadius: "10px",
                    border: "1px solid var(--border)",
                    backgroundColor: "transparent",
                    fontSize: "0.9rem",
                    color: "var(--foreground)",
                    outline: "none",
                  }}
                />
                <span style={{ position: "absolute", right: "1.25rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
              </div>

              {/* Email Input */}
              <div style={{ position: "relative" }}>
                <input
                  type="email"
                  placeholder="Work Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "1rem 3rem 1rem 1.25rem",
                    borderRadius: "10px",
                    border: "1px solid var(--border)",
                    backgroundColor: "transparent",
                    fontSize: "0.9rem",
                    color: "var(--foreground)",
                    outline: "none",
                  }}
                />
                <span style={{ position: "absolute", right: "1.25rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
              </div>

              {/* Company Input */}
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "1rem 3rem 1rem 1.25rem",
                    borderRadius: "10px",
                    border: "1px solid var(--border)",
                    backgroundColor: "transparent",
                    fontSize: "0.9rem",
                    color: "var(--foreground)",
                    outline: "none",
                  }}
                />
                <span style={{ position: "absolute", right: "1.25rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </span>
              </div>

              {/* Project Details Textarea */}
              <div style={{ position: "relative" }}>
                <textarea
                  placeholder="Tell us about your project"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "1rem 1.25rem",
                    borderRadius: "10px",
                    border: "1px solid var(--border)",
                    backgroundColor: "transparent",
                    fontSize: "0.9rem",
                    color: "var(--foreground)",
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "1.1rem",
                  borderRadius: "10px",
                  border: "none",
                  background: "linear-gradient(135deg, #4800F4 0%, #E100F5 100%)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  boxShadow: "0 6px 20px rgba(147, 0, 245, 0.25)",
                  transition: "transform 0.3s ease",
                }}
                className="btn-magnetic-effect"
              >
                <span>{submitted ? "Message Sent!" : "Send Message"}</span>
                {!submitted && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                )}
              </button>

              {/* Privacy Warning Subtext */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center", marginTop: "0.5rem" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  We respect your privacy. No spam, ever.
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - White background floating device mockup (spans 4 columns) */}
        <div className="cta-right-col reveal-fade-in">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/17.5",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#ffffff", // clean white background
            }}
          >
            <Image
              src="/images/growth_showcase.png"
              alt="Device mockups layout on clean white background"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

      </div>

      <div
        className="highlights-strip-row light reveal-stagger"
        style={{
          backgroundColor: "#f9f9fb", // Soft gray light background strip
          "--border": "rgba(0,0,0,0.06)",
        } as React.CSSProperties}
      >
        {highlights.map((hl, index) => (
          <div key={index} className="highlights-strip-card">
            <div style={{ width: "2rem", height: "2rem", display: "flex", alignItems: "center", color: "#4800F4" }}>
              {hl.icon}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--foreground)" }}>{hl.title}</h4>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.5, color: "var(--text-muted)" }}>{hl.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

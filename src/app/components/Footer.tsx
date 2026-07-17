"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {
  const [istTime, setIstTime] = useState("12:00 PM");

  useEffect(() => {
    const update = () => {
      setIstTime(new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric", minute: "numeric", hour12: true,
      }).format(new Date()));
    };
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: "var(--background)",
      borderTop: "1px solid var(--border)",
      paddingTop: "6rem",
      paddingBottom: "4rem",
    }}>
      <div className="container">

        {/* Top grid */}
        <div className="grid-12" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "5rem" }}>

          {/* Brand */}
          <div className="footer-col-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "2.25rem", height: "2.25rem", position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <Image src="/images/logo.png" alt="Nexaroha Logo" fill style={{ objectFit: "cover" }} />
              </div>
              <span style={{ fontSize: "1.25rem", fontWeight: 650, letterSpacing: "-0.02em" }}>Nexaroha</span>
            </div>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "280px" }}>
              India's premium digital design & development studio. Crafting pixel-perfect websites, CRMs, and e-commerce experiences.
            </p>
            {/* India flag + city */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
              <span style={{ fontSize: "1rem" }}>🇮🇳</span>
              <span>Made in India &nbsp;·&nbsp; Serving Globally</span>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col-links">
            <span style={{ fontSize: "0.8rem", fontWeight: 650, letterSpacing: "0.15em", color: "var(--text-muted)", textTransform: "uppercase" }}>Services</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["UI/UX Design", "Website Development", "E-Commerce Stores", "Custom CRMs", "SEO & Growth", "Mobile Apps"].map(s => (
                <a key={s} href="#services" className="footer-link"
                  style={{ fontSize: "0.9rem", color: "var(--foreground)", textDecoration: "none" }}>{s}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="footer-col-links">
            <span style={{ fontSize: "0.8rem", fontWeight: 650, letterSpacing: "0.15em", color: "var(--text-muted)", textTransform: "uppercase" }}>Company</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Featured Work", href: "#work" },
                { label: "Our Process", href: "#services" },
                { label: "Pricing", href: "#pricing" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Get in Touch", href: "#contact" },
              ].map(l => (
                <a key={l.label} href={l.href} className="footer-link"
                  style={{ fontSize: "0.9rem", color: "var(--foreground)", textDecoration: "none" }}>{l.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col-links">
            <span style={{ fontSize: "0.8rem", fontWeight: 650, letterSpacing: "0.15em", color: "var(--text-muted)", textTransform: "uppercase" }}>Contact</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="mailto:hello@nexaroha.com" className="footer-link"
                style={{ fontSize: "0.9rem", color: "var(--foreground)", textDecoration: "none" }}>hello@nexaroha.com</a>
              <a href="tel:+919999999999" className="footer-link"
                style={{ fontSize: "0.9rem", color: "var(--foreground)", textDecoration: "none" }}>+91 99999 99999</a>
              <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                India (Remote-First)<br />Available across all time zones
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="footer-col-links">
            <span style={{ fontSize: "0.8rem", fontWeight: 650, letterSpacing: "0.15em", color: "var(--text-muted)", textTransform: "uppercase" }}>Follow Us</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Behance", href: "https://behance.net" },
                { label: "GitHub", href: "https://github.com" },
                { label: "Twitter / X", href: "https://twitter.com" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-link"
                  style={{ fontSize: "0.9rem", color: "var(--foreground)", textDecoration: "none" }}>{s.label}</a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "1.5rem",
          paddingTop: "2.5rem", paddingBottom: "2.5rem",
          fontSize: "0.85rem", color: "var(--text-muted)",
        }}>
          <span>© {year} Nexaroha. All rights reserved. &nbsp;·&nbsp; GST-registered · Made in India 🇮🇳</span>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {/* Live IST clock */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                backgroundColor: "#34c759", boxShadow: "0 0 8px #34c759",
                display: "inline-block",
              }} />
              <span>IST — {istTime}</span>
            </div>
            <a href="#" className="footer-link" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" className="footer-link" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Terms & Conditions</a>
          </div>
        </div>

        {/* Big logotype */}
        <div style={{
          width: "100%", position: "relative", aspectRatio: "12/2.5",
          marginTop: "3rem", opacity: 0.9, userSelect: "none", pointerEvents: "none",
        }}>
          <Image src="/nexaroha.png" alt="NEXAROHA" fill style={{ objectFit: "contain" }} />
        </div>

      </div>
    </footer>
  );
}

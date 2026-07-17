"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "drawer-open" : ""}`}>
      {/* Logo & Brand text */}
      <div className="logo" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Image
          src="/images/logo.png"
          alt="Nexaroha Logo"
          width={28}
          height={28}
          style={{ objectFit: "contain" }}
          priority
        />
        <span style={{ fontWeight: 650, letterSpacing: "-0.02em", fontSize: "1.25rem", color: "var(--foreground)" }}>
          Nexaroha
        </span>
      </div>

      {/* Nav Links - static spacing for smooth transition */}
      <nav className="nav-links" style={{ gap: "2.25rem" }}>
        <a href="#work" className="nav-link">Featured Works</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* Get in touch CTA */}
      <button
        className="btn-contact"
        onClick={() => window.location.href = "#contact"}
        style={{
          borderRadius: isScrolled ? "30px" : "0px",
          transition: "border-radius 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span>Get in touch</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" />
          <polyline points="4 2 9.5 2 9.5 7.5" />
        </svg>
      </button>

      {/* Mobile Menu Toggle Button */}
      <button
        className={`mobile-menu-btn ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Glassmorphism Menu Drawer */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav-links">
          <a href="#work" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Featured Works
          </a>
          <a href="#services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </a>
          <a href="#pricing" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
          <button
            className="btn-contact-mobile"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.location.href = "#contact";
            }}
          >
            <span>Get in touch</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" />
              <polyline points="4 2 9.5 2 9.5 7.5" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  logo: string;
  metricVal: string;
  metricLabel: string;
  chartPath: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Nexaroha transformed our digital presence and helped us achieve results beyond what we imagined.",
    author: "Arjun Mehta",
    role: "Co-Founder & CEO, Auré",
    logo: "AURÉ",
    metricVal: "+148%",
    metricLabel: "Engagement Rate",
    chartPath: "M 0 25 Q 25 10 50 20 T 100 5",
  },
  {
    quote: "They understood our vision perfectly and brought it to life with incredible attention to detail.",
    author: "Neha Kapoor",
    role: "Marketing Director, Wanderly",
    logo: "Wanderly",
    metricVal: "+92%",
    metricLabel: "Conversion Lift",
    chartPath: "M 0 25 Q 30 5 60 15 T 100 2",
  },
  {
    quote: "Professional, responsive and highly talented. The entire experience was seamless.",
    author: "Rohan Das",
    role: "Product Head, Frame",
    logo: "Frame",
    metricVal: "98.4",
    metricLabel: "UX Score Index",
    chartPath: "M 0 28 Q 20 15 50 18 T 100 8",
  },
  {
    quote: "The new website not only looks stunning but also performs exceptionally well.",
    author: "Sneha Iyer",
    role: "Founder, Studio Mirai",
    logo: "Mirai",
    metricVal: "100/100",
    metricLabel: "Lighthouse Performance",
    chartPath: "M 0 20 Q 30 18 60 8 T 100 0",
  },
  {
    quote: "Nexaroha is more than a design partner — they're an extension of our team.",
    author: "Vikram S.",
    role: "CTO, Nexus Finance",
    logo: "Nexus Finance",
    metricVal: "4.8x",
    metricLabel: "Scalability Factor",
    chartPath: "M 0 26 Q 25 12 50 22 T 100 4",
  },
  {
    quote: "Their strategic approach and creativity helped us stand out in a crowded market.",
    author: "Ananya Rao",
    role: "Brand Lead, Elementa",
    logo: "Elementa",
    metricVal: "+320%",
    metricLabel: "Brand Equity",
    chartPath: "M 0 22 Q 35 15 70 8 T 100 1",
  },
];

const getBrandLogo = (logo: string) => {
  switch (logo) {
    case "AURÉ":
      return (
        <svg width="60" height="15" viewBox="0 0 100 25" fill="none" style={{ color: "#4800F4" }}>
          <polygon points="10 5, 20 20, 30 5, 25 5, 20 15, 15 5" fill="currentColor" />
          <text x="38" y="17" fill="currentColor" fontSize="12" fontWeight="800" letterSpacing="0.1em">AURÉ</text>
        </svg>
      );
    case "Wanderly":
      return (
        <svg width="80" height="15" viewBox="0 0 120 25" fill="none" style={{ color: "#4800F4" }}>
          <path d="M10 20 L20 5 L30 15 L40 10 L50 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="58" y="17" fill="currentColor" fontSize="11" fontWeight="800" letterSpacing="0.05em">Wanderly</text>
        </svg>
      );
    case "Frame":
      return (
        <svg width="65" height="15" viewBox="0 0 100 25" fill="none" style={{ color: "#4800F4" }}>
          <rect x="10" y="5" width="15" height="15" stroke="currentColor" strokeWidth="2" />
          <text x="35" y="17" fill="currentColor" fontSize="11" fontWeight="800" letterSpacing="0.08em">FRAME</text>
        </svg>
      );
    case "Mirai":
      return (
        <svg width="65" height="15" viewBox="0 0 100 25" fill="none" style={{ color: "#4800F4" }}>
          <circle cx="15" cy="12" r="3" fill="currentColor" />
          <circle cx="25" cy="12" r="3" fill="currentColor" />
          <circle cx="35" cy="12" r="3" fill="currentColor" />
          <text x="48" y="17" fill="currentColor" fontSize="11" fontWeight="800" letterSpacing="0.08em">MIRAI</text>
        </svg>
      );
    case "Nexus Finance":
      return (
        <svg width="85" height="15" viewBox="0 0 130 25" fill="none" style={{ color: "#4800F4" }}>
          <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="22" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
          <text x="38" y="17" fill="currentColor" fontSize="11" fontWeight="800" letterSpacing="0.05em">NEXUS</text>
        </svg>
      );
    case "Elementa":
      return (
        <svg width="80" height="15" viewBox="0 0 120 25" fill="none" style={{ color: "#4800F4" }}>
          <rect x="10" y="5" width="15" height="15" rx="3" fill="currentColor" />
          <text x="14" y="16" fill="#ffffff" fontSize="10" fontWeight="900">E</text>
          <text x="35" y="17" fill="currentColor" fontSize="11" fontWeight="800" letterSpacing="0.08em">ELEMENTA</text>
        </svg>
      );
    default:
      return <span>{logo}</span>;
  }
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoChangeTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto-changing interval (4.5s)
  const startAutoChange = () => {
    stopAutoChange();
    autoChangeTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
  };

  const stopAutoChange = () => {
    if (autoChangeTimer.current) {
      clearInterval(autoChangeTimer.current);
    }
  };

  useEffect(() => {
    startAutoChange();
    return () => stopAutoChange();
  }, []);

  const handleNext = () => {
    stopAutoChange();
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    startAutoChange();
  };

  const handlePrev = () => {
    stopAutoChange();
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startAutoChange();
  };

  const currentItem = testimonials[activeIndex];

  return (
    <section className="section-wrapper" style={{ paddingBottom: "6rem", background: "var(--background)" }}>
      <div className="container">
        
        {/* Top columns layout: Left details text, Right white iPhone */}
        <div className="grid-12" style={{ alignItems: "center" }}>
          
          {/* Left Column: Testimonial details (spans 6 columns) */}
          <div className="testimonial-left-col">
            
            <div>
              <div className="badge" style={{ marginBottom: "1.5rem" }}>
                <span className="badge-dot" />
                <span>Testimonials</span>
              </div>
              <h2
                className="fw-headline"
                style={{
                  fontSize: "3.5rem",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  color: "var(--foreground)",
                }}
              >
                Trusted by visionaries.<br />
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
                  Built on trust.
                </span>
              </h2>
            </div>

            {/* Testimonial Quote display */}
            <div style={{ minHeight: "160px" }}>
              <blockquote
                key={activeIndex}
                style={{
                  fontSize: "2rem",
                  fontFamily: "Georgia, serif",
                  lineHeight: 1.35,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                  marginBottom: "2rem",
                }}
                className="animate-fade-in"
              >
                “{currentItem.quote}”
              </blockquote>
            </div>

            {/* Client Bio Info Row (Clean Minimal style - displaying logo.png next to author details!) */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
              
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {/* Nexaroha Logo Symbol */}
                <div style={{ width: "2.25rem", height: "2.25rem", position: "relative", borderRadius: "50%", overflow: "hidden", border: "1px solid var(--border)", backgroundColor: "#ffffff", flexShrink: 0 }}>
                  <Image src="/images/logo.png" alt="Nexaroha Logo" fill style={{ objectFit: "contain" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                  <span style={{ fontSize: "1.1rem", fontWeight: 555, color: "var(--foreground)" }}>
                    {currentItem.author}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    {currentItem.role}
                  </span>
                </div>
              </div>

              {/* Brand Logo text display */}
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 650,
                  letterSpacing: "0.15em",
                  color: "var(--foreground)",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans)",
                  opacity: 0.8,
                }}
              >
                {currentItem.logo}
              </div>

            </div>

            {/* Slider Navigation controls (Arrows + Index) */}
            <div className="testimonials-nav" style={{ marginTop: "1rem" }}>
              <button
                onClick={handlePrev}
                className="btn-testimonial-nav"
                aria-label="Previous Testimonial"
                style={{ width: "2.75rem", height: "2.75rem", border: "1px solid var(--border)", color: "var(--foreground)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="btn-testimonial-nav"
                aria-label="Next Testimonial"
                style={{ width: "2.75rem", height: "2.75rem", border: "1px solid var(--border)", color: "var(--foreground)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <span
                style={{
                  marginLeft: "1rem",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                }}
              >
                0{activeIndex + 1} / 0{testimonials.length}
              </span>
            </div>

          </div>

          {/* Right Column: Coded White Apple iPhone Mockup (Dynamic screen details) */}
          <div className="testimonial-right-col">
            
            {/* White Apple iPhone bezel frame */}
            <div
              style={{
                position: "relative",
                width: "280px",
                aspectRatio: "9/19.2",
                backgroundColor: "#ffffff",
                borderRadius: "44px",
                padding: "0.75rem",
                boxShadow: "0 30px 70px rgba(0, 0, 0, 0.08), 0 0 0 10px #f4f4f5, 0 0 0 11px rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.03)",
              }}
            >
              {/* Dynamic Island Notch */}
              <div
                style={{
                  position: "absolute",
                  top: "1.1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "6rem",
                  height: "1.2rem",
                  backgroundColor: "#000000",
                  borderRadius: "12px",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 0.6rem",
                }}
              >
                <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)" }} />
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#34c759", opacity: 0.8 }} />
              </div>

              {/* iPhone Screen Area - clean light background OS */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #fbfbfe 0%, #f4f3ff 100%)",
                  borderRadius: "36px",
                  padding: "2rem 1.25rem 1.25rem 1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                {/* Phone Status Bar (Dark mode icons for light screen) */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    fontSize: "0.65rem",
                    fontFamily: "var(--font-mono)",
                    color: "rgba(0, 0, 0, 0.6)",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span>9:41</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <svg width="10" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
                      <line x1="22" y1="11" x2="22" y2="13" />
                    </svg>
                  </div>
                </div>

                {/* iPhone App Screen Contents (dynamic visual elements) */}
                <div
                  key={activeIndex}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "1rem 0",
                  }}
                  className="animate-fade-in"
                >
                  {/* Brand Header Label */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "25px",
                    }}
                  >
                    {getBrandLogo(currentItem.logo)}
                  </div>

                  {/* Circular Growth Progress Meter Ring */}
                  <div style={{ position: "relative", width: "110px", height: "110px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="100%" height="100%" viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)" }}>
                      <circle cx="18" cy="18" r="15.91" fill="none" stroke="#e6e6e6" strokeWidth="2.5" />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.91"
                        fill="none"
                        stroke="url(#purpleGrad)"
                        strokeWidth="3"
                        strokeDasharray="80 20"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        style={{ transition: "all 0.5s ease" }}
                      />
                      <defs>
                        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4800F4" />
                          <stop offset="100%" stopColor="#E100F5" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Inner Value */}
                    <div style={{ position: "absolute", display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111111", letterSpacing: "-0.02em" }}>
                        {currentItem.metricVal}
                      </span>
                      <span style={{ fontSize: "0.55rem", color: "#888888", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "2px" }}>
                        Growth
                      </span>
                    </div>
                  </div>

                  {/* Company Logo Card (Replaces the mini graph) */}
                  <div
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "14px",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      border: "1px solid rgba(72, 0, 244, 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.35rem",
                      boxShadow: "0 4px 12px rgba(72, 0, 244, 0.03)",
                    }}
                  >
                    <div style={{ width: "28px", height: "28px", position: "relative" }}>
                      <Image
                        src="/images/logo.png"
                        alt="Nexaroha Logo"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        background: "linear-gradient(135deg, #4800F4 0%, #E100F5 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Nexaroha
                    </span>
                  </div>

                  {/* Testimonial Quote Bubble Card */}
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      borderRadius: "14px",
                      padding: "1rem",
                      width: "100%",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.75rem",
                        lineHeight: 1.4,
                        color: "#333333",
                        textAlign: "center",
                        fontStyle: "italic",
                        margin: 0,
                      }}
                    >
                      "{currentItem.quote.length > 70 ? `${currentItem.quote.substring(0, 70)}...` : currentItem.quote}"
                    </p>
                  </div>

                </div>

                {/* Bottom Home Indicator Bar */}
                <div
                  style={{
                    width: "4.5rem",
                    height: "3.5px",
                    backgroundColor: "rgba(0, 0, 0, 0.15)",
                    borderRadius: "2px",
                    margin: "0 auto",
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

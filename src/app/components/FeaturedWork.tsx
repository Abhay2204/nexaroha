"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Project {
  num: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tag: string; // matches filter categories
}

const projects: Project[] = [
  {
    num: "01",
    title: "Zentra Banking",
    category: "Dashboards",
    tag: "Dashboards",
    description: "Banking made beautifully simple. Experience next-gen digital banking with intelligent features that make life easier.",
    image: "/images/zentra_mockup.png",
    link: "#case-zentra",
  },
  {
    num: "02",
    title: "Nexus Platform",
    category: "SaaS Dashboard",
    tag: "SaaS",
    description: "Build, manage, and scale your SaaS product infrastructure faster with our high-frequency data streams.",
    image: "/projects/flowcrm.png",
    link: "#case-nexus",
  },
  {
    num: "03",
    title: "Luumi Studio",
    category: "E-Commerce Website",
    tag: "E-Commerce",
    description: "Timeless design meets unmatched comfort. Discover curated luxury furniture assets crafted to last.",
    image: "/images/furniture_bento.png",
    link: "#case-luumi",
  },
  {
    num: "04",
    title: "Mindful Mobile",
    category: "Mobile Apps",
    tag: "Mobile Apps",
    description: "A wellness application for a better you. Focused interface guiding daily meditation and tracking breathing rhythms.",
    image: "/images/abstract_bento.png",
    link: "#case-mindful",
  },
  {
    num: "05",
    title: "Vista Analytics",
    category: "Dashboards",
    tag: "Dashboards",
    description: "Multi-layered analytics board translating deep database structures into clean, actionable business decisions.",
    image: "/projects/growthengine.png",
    link: "#case-vista",
  },
  {
    num: "06",
    title: "Outline Agency",
    category: "Portfolio Website",
    tag: "Web Design",
    description: "Branding that leaves a mark. A digital showcase representing physical identity and graphic architecture.",
    image: "/images/branding_bento.png",
    link: "#case-outline",
  },
  {
    num: "07",
    title: "Swift Deliver",
    category: "Mobile Apps",
    tag: "Mobile Apps",
    description: "Fleet tracking and routing systems built to streamline delivery logistics with real-time sync overlays.",
    image: "/projects/swiftdeliver.png",
    link: "#case-swift",
  },
  {
    num: "08",
    title: "Velo Commerce",
    category: "E-Commerce Website",
    tag: "E-Commerce",
    description: "Robust B2B digital commerce engines built with fast caching layers and flexible cart flows.",
    image: "/projects/velocommerce.png",
    link: "#case-velo",
  },
];

const categories = ["All", "Web Design", "Mobile Apps", "Dashboards", "E-Commerce", "SaaS"];

interface HighlightItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const highlights: HighlightItem[] = [
  {
    title: "User-Centered Design",
    desc: "Every decision is made with the user in mind.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Clean & Intuitive",
    desc: "Interfaces that are easy to learn and delightful to use.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 12 12 22 22 12" />
      </svg>
    ),
  },
  {
    title: "Pixel Perfect",
    desc: "Precision in every detail for a flawless experience.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Accessible by Design",
    desc: "Inclusive experiences for every user.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Scalable & Flexible",
    desc: "Design systems that grow with your product.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(1); // Defaults to index 1 (Nexus Platform) just like the mockup (which shows 02/08!)
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredProjects = projects.filter((p) => {
    if (filterCategory === "All") return true;
    return p.tag === filterCategory;
  });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const currentProject = projects[activeIndex];

  return (
    <section id="work" className="section-wrapper container" style={{ paddingBottom: 0 }}>
      {/* Isolated Top Row: Sidebar + Devices Showcase */}
      <div className="grid-12" style={{ alignItems: "start" }}>
        
        {/* Left Column (Sticky info panel - bounded by this parent container) */}
        <div className="sticky-sidebar">
          <div className="badge">
            <span className="badge-dot" />
            <span>Featured Projects</span>
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
            Designing interfaces people{" "}
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
              love to use.
            </span>
          </h2>
          <p className="fw-description" style={{ marginBottom: "2.5rem", minHeight: "80px" }}>
            {currentProject.description}
          </p>

          <a href="#contact" className="fw-view-all" style={{ marginBottom: "4rem" }}>
            <span>View all projects</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          {/* Slider Arrow Navigation Controls */}
          <div className="testimonials-nav" style={{ marginTop: "2rem" }}>
            <button
              onClick={handlePrev}
              className="btn-testimonial-nav"
              aria-label="Previous Project"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="btn-testimonial-nav"
              aria-label="Next Project"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <span
              style={{
                marginLeft: "1.25rem",
                fontSize: "0.85rem",
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
              }}
            >
              0{activeIndex + 1} / 0{projects.length}
            </span>
          </div>
        </div>

        {/* Right Column (Category filters & active image mockups) */}
        <div style={{ gridColumn: "span 8", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          
          {/* Category Filter Tabs positioned at the top right */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "2rem", width: "100%" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "0.85rem",
                  fontWeight: filterCategory === cat ? "600" : "450",
                  color: filterCategory === cat ? "var(--foreground)" : "var(--text-muted)",
                  cursor: "pointer",
                  paddingBottom: "0.5rem",
                  borderBottom: filterCategory === cat ? "2px solid var(--foreground)" : "2px solid transparent",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.05em",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Large Devices Rendering Frame */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/10",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              backgroundColor: "#f5f5f7",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.04)",
            }}
          >
            <Image
              key={activeIndex}
              src={currentProject.image}
              alt={`${currentProject.title} mockup illustration`}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
              className="animate-fade-in"
              priority
            />
          </div>
        </div>

      </div>

      {/* Horizontal list of 5 filtered project cards at the bottom */}
      <div
        className="grid-12"
        style={{
          marginTop: "6rem",
          borderTop: "1px solid var(--border)",
          paddingTop: "4rem",
          alignItems: "stretch",
          position: "relative",
        }}
      >
        {/* Left Vertical Label */}
        <div
          style={{
            gridColumn: "span 1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            borderRight: "1px solid var(--border)",
            paddingRight: "1.5rem",
          }}
        >
          <div
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "0.75rem",
              fontWeight: 650,
              letterSpacing: "0.15em",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              alignSelf: "center",
              marginTop: "1.5rem",
            }}
          >
            Featured Projects
          </div>
        </div>

        {/* 5 Project Columns */}
        <div style={{ gridColumn: "span 11", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.5rem" }}>
          {projects.slice(1, 6).map((item, index) => {
            const actualIndex = index + 1; // Index in the projects array
            const isProjectActive = activeIndex === actualIndex;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(actualIndex)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  cursor: "pointer",
                  opacity: isProjectActive ? 1 : 0.4,
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: "1.25rem",
                  borderRadius: "12px",
                  border: isProjectActive ? "1px solid var(--border)" : "1px solid transparent",
                  backgroundColor: isProjectActive ? "var(--background)" : "transparent",
                  boxShadow: isProjectActive ? "0 10px 30px rgba(0,0,0,0.03)" : "none",
                }}
              >
                {/* Image Box */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/10",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    backgroundColor: "#f5f5f7",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 15vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Info Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--foreground)" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.category}</p>
                </div>

                {/* Arrow indicator pointing right */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
                  <div
                    style={{
                      width: "1.75rem",
                      height: "1.75rem",
                      borderRadius: "50%",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--foreground)",
                      backgroundColor: isProjectActive ? "var(--foreground)" : "transparent",
                      borderColor: isProjectActive ? "var(--foreground)" : "var(--border)",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isProjectActive ? "var(--background)" : "currentColor"}
                      strokeWidth="2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dark Highlights Bottom Footer Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          marginTop: "6rem",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          backgroundColor: "#000000",
          color: "#ffffff",
          marginLeft: "-3.5rem",
          marginRight: "-3.5rem",
          width: "calc(100% + 7rem)",
          "--border": "rgba(255,255,255,0.08)",
          "--text-muted": "#888888",
        } as React.CSSProperties}
      >
        {highlights.map((hl, index) => (
          <div
            key={index}
            style={{
              padding: "4rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              borderRight: index < 4 ? "1px solid var(--border)" : "none",
            }}
          >
            <div style={{ width: "2rem", height: "2rem", display: "flex", alignItems: "center", color: "#ffffff" }}>
              {hl.icon}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 500, color: "#ffffff" }}>{hl.title}</h4>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.5, color: "var(--text-muted)" }}>{hl.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

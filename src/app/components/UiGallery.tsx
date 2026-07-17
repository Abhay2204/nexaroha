"use client";

import React, { useState } from "react";
import Image from "next/image";

interface GalleryCard {
  image: string;
  title: string;
  category: string;
  spanClass: string;
  tag: string; // Web Design, Mobile Apps, Dashboards, E-Commerce, SaaS
}

const galleryCards: GalleryCard[] = [
  {
    image: "/projects/flowcrm.png",
    title: "NexaBank Dashboard",
    category: "Banking reimagined for the future.",
    spanClass: "span-2",
    tag: "Dashboards",
  },
  {
    image: "/projects/meditrack.png",
    title: "Mindful App",
    category: "Mindful moments, better you.",
    spanClass: "span-1",
    tag: "Mobile Apps",
  },
  {
    image: "/images/furniture_bento.png",
    title: "Haven Armchair",
    category: "Modern furniture for beautiful living.",
    spanClass: "span-1",
    tag: "E-Commerce",
  },
  {
    image: "/projects/growthengine.png",
    title: "Pulse SaaS",
    category: "SaaS control re-engineered.",
    spanClass: "span-1",
    tag: "SaaS",
  },
  {
    image: "/staircase.png",
    title: "Wander CH",
    category: "Explore beyond borders.",
    spanClass: "span-tall",
    tag: "Web Design",
  },
  {
    image: "/projects/swiftdeliver.png",
    title: "Payvo Finance",
    category: "Payments made simple.",
    spanClass: "span-1",
    tag: "Mobile Apps",
  },
  {
    image: "/projects/velocommerce.png",
    title: "Taskly Board",
    category: "Productivity that drives progress.",
    spanClass: "span-1",
    tag: "SaaS",
  },
];

const categories = ["All Works", "Web Design", "Mobile Apps", "Dashboards", "E-Commerce", "SaaS"];

export default function UiGallery() {
  const [filterCategory, setFilterCategory] = useState("All Works");

  const filteredCards = galleryCards.filter((card) => {
    if (filterCategory === "All Works") return true;
    if (filterCategory === "Web Design" && card.tag === "Web Design") return true;
    if (filterCategory === "Mobile Apps" && card.tag === "Mobile Apps") return true;
    if (filterCategory === "Dashboards" && card.tag === "Dashboards") return true;
    if (filterCategory === "E-Commerce" && card.tag === "E-Commerce") return true;
    if (filterCategory === "SaaS" && card.tag === "SaaS") return true;
    return false;
  });

  return (
    <section className="section-wrapper container" style={{ paddingBottom: "6rem" }}>
      
      {/* 12-Column Grid Wrapper */}
      <div className="grid-12" style={{ alignItems: "start" }}>
        
        {/* Left Column - Gallery text info & metrics (spans 4 columns) */}
        <div className="sticky-sidebar reveal-fade-in">
          <div className="badge">
            <span className="badge-dot" style={{ backgroundColor: "#4800F4" }} />
            <span style={{ color: "#4800F4" }}>UI/UX Gallery</span>
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
            Designs that<br />connect.<br />
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
              Experiences that stay.
            </span>
          </h2>
          <p className="fw-description" style={{ marginBottom: "3rem" }}>
            A showcase of our UI/UX design work across websites, mobile apps, dashboards and digital products
            that create impact.
          </p>

          {/* Circle Arrow Action Button Link */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "5rem" }}>
            <a
              href="#contact"
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--foreground)",
                transition: "all 0.3s ease",
              }}
              className="btn-testimonial-nav"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <span style={{ fontSize: "0.95rem", fontWeight: 650, color: "var(--foreground)" }}>
              View all projects
            </span>
          </div>

          {/* Bottom Metrics column details */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "1px solid var(--border)",
              paddingTop: "3rem",
              gap: "1.5rem",
            }}
          >
            {/* Metric 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4800F4" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>120+</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>Projects Completed</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4800F4" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>80+</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>Happy Clients</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4800F4" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>6+</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Filters Header & Bento grid of cards (spans 8 columns) */}
        <div className="ui-gallery-content reveal-fade-in">
          
          {/* Top header navigation filter row */}
          <div className="ui-gallery-filter-row">
            
            {/* Category tabs */}
            <div className="ui-gallery-tabs">
              {categories.map((cat) => {
                const isActive = filterCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    style={{
                      background: "transparent",
                      border: isActive ? "1px solid #4800F4" : "1px solid transparent",
                      borderRadius: "30px",
                      padding: "0.5rem 1rem",
                      fontSize: "0.85rem",
                      fontWeight: isActive ? "600" : "450",
                      color: isActive ? "#4800F4" : "var(--text-muted)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isActive && <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4800F4" }} />}
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* View All projects outline button on the right */}
            <button
              onClick={() => window.location.href = "#contact"}
              style={{
                backgroundColor: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "30px",
                padding: "0.5rem 1.25rem",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--foreground)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.3s ease",
              }}
              className="btn-testimonial-nav"
            >
              <span>View All Projects</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>

          <div className="gallery-bento-grid reveal-stagger">
            {filteredCards.map((card, index) => (
              <div key={index} className={`gallery-bento-card ${card.spanClass}`}>
                
                {/* Background Screenshot Image (fully bright, no text on top!) */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes={card.spanClass === "span-2" ? "(max-width: 1024px) 100vw, 40vw" : "(max-width: 1024px) 50vw, 20vw"}
                  style={{
                    objectFit: "cover",
                    opacity: 1,
                  }}
                  className="animate-fade-in"
                  priority={index < 2}
                />

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

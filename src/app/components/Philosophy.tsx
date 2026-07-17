"use client";

import React from "react";
import Image from "next/image";

interface PhilosophyPillar {
  num: string;
  title: string;
  desc: string;
  image: string;
}

const pillars: PhilosophyPillar[] = [
  {
    num: "01",
    title: "Human First",
    desc: "We design for emotions, connections, and accessibility. Every interface should feel intuitive, welcoming, and serve human needs first.",
    image: "/staircase.png",
  },
  {
    num: "02",
    title: "Purpose Driven",
    desc: "Form follows function. We construct solutions that drive actual metrics, solve real business problems, and deliver meaningful outcomes.",
    image: "/sculpture.png",
  },
  {
    num: "03",
    title: "Timeless & Obsessive",
    desc: "We create with longevity in mind, obsessing over micro-details—from typography kerning to layout spacing—to build digital products that endure.",
    image: "/architecture.png",
  },
];

export default function Philosophy() {
  return (
    <section className="section-wrapper container" style={{ paddingBottom: "6rem" }}>
      
      {/* 12-Column Grid Layout */}
      <div className="grid-12" style={{ alignItems: "start" }}>
        
        {/* Left Column (Sticky info panel - spans 5 columns) */}
        <div className="sticky-sidebar reveal-fade-in">
          <div className="badge">
            <span className="badge-dot" style={{ backgroundColor: "#4800F4" }} />
            <span style={{ color: "#4800F4" }}>Our Philosophy</span>
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
            Good design<br />isn't just seen.<br />
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
              It's felt.
            </span>
          </h2>
          <p className="fw-description" style={{ marginBottom: "2.5rem" }}>
            We believe great digital experiences are built on clarity, purpose and attention to detail.
            Our work is guided by principles that put people first and deliver lasting value.
          </p>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: 650,
              color: "var(--foreground)",
              textDecoration: "none",
              borderBottom: "1.5px solid var(--foreground)",
              paddingBottom: "3px",
            }}
          >
            <span>Explore our approach</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        <div className="philosophy-right-col reveal-stagger">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: "100%",
              }}
            >
              {/* Premium image panel: 100% bright, NO overlays, NO text masking */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/10",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.04)",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  style={{
                    objectFit: "cover",
                  }}
                  priority={index === 0}
                />
              </div>

              {/* Title & Description row underneath the image */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: "1.5rem",
                  paddingTop: "0.5rem",
                }}
              >
                {/* Pillar number count */}
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#4800F4",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {pillar.num}
                </span>

                {/* Text details */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 500,
                      letterSpacing: "-0.03em",
                      color: "var(--foreground)",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "var(--text-muted)",
                      maxWidth: "560px",
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

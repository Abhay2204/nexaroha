"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Pillar {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const pillars: Pillar[] = [
  {
    num: "01",
    title: "Next-Gen Web & App Engineering",
    subtitle: "High-Performance Digital Platforms",
    description:
      "We build ultra-fast Next.js web applications, scalable platforms, and mobile apps engineered for speed, high uptime, and seamless user experiences.",
    tags: ["Next.js & React", "Mobile Apps", "Full-Stack SaaS", "API & Cloud"],
  },
  {
    num: "02",
    title: "UI/UX & Product Design Systems",
    subtitle: "Conversion-Focused Interfaces",
    description:
      "We craft intuitive, psychology-driven user interfaces and scalable design systems. Every screen is designed with clear intent to turn visitors into loyal customers.",
    tags: ["Product Design", "Design Systems", "Interactive Prototypes", "Micro-Interactions"],
  },
  {
    num: "03",
    title: "Hyper-Growth & Lead Generation",
    subtitle: "Data-Driven Acquisition Engines",
    description:
      "We architect end-to-end growth funnels, conversion rate optimization (CRO), and automated lead pipelines that scale customer acquisition predictably.",
    tags: ["Growth Funnels", "Conversion Rate Optimization", "Automated Pipelines", "Analytics"],
  },
  {
    num: "04",
    title: "Technical SEO & Search Dominance",
    subtitle: "100% Core Web Vitals & Organic Reach",
    description:
      "We build search-first architectures that dominate competitive rankings. Zero layout shifts, instant load speeds, and structured schema for top visibility.",
    tags: ["Technical SEO", "Core Web Vitals", "Semantic Search", "Organic Rankings"],
  },
  {
    num: "05",
    title: "Brand Positioning & Identity",
    subtitle: "Category-Leading Brand Authority",
    description:
      "We shape modern brand narratives, editorial aesthetics, and digital design language that command authority and differentiate you in competitive markets.",
    tags: ["Brand Narrative", "Visual Identity", "Editorial Design", "Market Positioning"],
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="services" className="section-wrapper container grid-12 what-we-do-section">
      <div className="sticky-sidebar reveal-fade-in what-we-do-sidebar">
        <div>
          <div className="badge">
            <span className="badge-dot" style={{ backgroundColor: "#4800F4" }} />
            <span style={{ color: "#4800F4" }}>Section 01 // Capabilities</span>
          </div>
          <h2
            className="stat-number"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            What We Do
          </h2>
          <p
            style={{
              fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: "320px",
            }}
          >
            As your next-gen growth partners, we fuse engineering, design, and growth systems to scale your business.
          </p>
        </div>

        {/* Desktop-only subtle brand mark */}
        <div className="what-we-do-sidebar-logo">
          <Image
            src="/images/logo.png"
            alt="Nexaroha Brand Symbol"
            width={120}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="services-list reveal-stagger">
        {pillars.map((pillar, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`service-accordion-item ${isActive ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
              aria-label={`${pillar.title} pillar details`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
            >
              <div className="service-header">
                <div className="service-header-left">
                  <span className="service-num text-gradient">{pillar.num}</span>
                  <div className="service-title-wrap">
                    <h3 className="service-title">{pillar.title}</h3>
                    <span className="service-subtitle">{pillar.subtitle}</span>
                  </div>
                </div>

                <div className="service-icon-trigger" aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>

              <div className="service-content">
                <p className="service-description">{pillar.description}</p>
                <div className="service-tags">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


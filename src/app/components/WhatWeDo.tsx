"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Pillar {
  num: string;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    num: "01",
    title: "UI/UX",
    description: "We craft premium user interfaces and pixel-perfect design systems. We design with intent, building logical, high-converting customer journeys that feel effortless to navigate.",
  },
  {
    num: "02",
    title: "Web Experiences",
    description: "High-performance, creative engineering. We specialize in building fast-loading frontends, smooth WebGL/canvas animations, and clean, modular architectures that scale.",
  },
  {
    num: "03",
    title: "Mobile Applications",
    description: "Intuitive, high-performance mobile interfaces. We develop robust iOS and Android experiences utilizing native optimizations and high-fidelity micro-interactions.",
  },
  {
    num: "04",
    title: "Brand Identity",
    description: "Timeless brand assets. We establish editorial layout systems, custom typography guides, and minimal vector logos that convey luxury and authority.",
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="services" className="section-wrapper container grid-12">
      <div className="sticky-sidebar reveal-fade-in" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div className="badge">
            <span className="badge-dot" />
            <span>Section 01</span>
          </div>
          <h2 className="stat-number" style={{ fontSize: "2rem", fontWeight: 500, letterSpacing: "-0.03em", marginBottom: "0" }}>
            What We Do
          </h2>
        </div>

        {/* Logo anchored to bottom of sidebar */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            maxWidth: "160px",
            marginTop: "3rem",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Nexaroha"
            fill
            style={{ objectFit: "contain", objectPosition: "left bottom" }}
          />
        </div>
      </div>

      <div className="services-list reveal-stagger">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className={`service-accordion-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            tabIndex={0}
            role="button"
            aria-expanded={activeIndex === index}
            aria-label={`${pillar.title} pillar details`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveIndex(index);
              }
            }}
          >
            <div className="service-header">
              <span className="service-num text-gradient">{pillar.num}</span>
              <h3 className="service-title">{pillar.title}</h3>
              <div className="service-icon-trigger" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

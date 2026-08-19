"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Post {
  date: string;
  title: string;
  image: string;
  link: string;
}

const posts: Post[] = [
  {
    date: "14 JUL 2026",
    title: "The Next-Gen Acquisition Funnel: Converting Inbound Traffic to Pipeline",
    image: "/images/growth_foundation.png",
    link: "#contact",
  },
  {
    date: "02 JUN 2026",
    title: "100% Core Web Vitals: The Definitive Guide to Frontend Speed & SEO Rank",
    image: "/images/seo_dominance.png",
    link: "#contact",
  },
  {
    date: "18 MAY 2026",
    title: "Design Systems That Scale: Building Cohesive Multi-Platform SaaS Products",
    image: "/images/brand_identity_clean.png",
    link: "#contact",
  },
];

export default function Insights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use clientX/Y for fixed positioning
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="section-wrapper container">
      {/* Flat Non-Sticky Header Block */}
      <div className="reveal-fade-in" style={{ marginBottom: "5rem" }}>
        <div className="badge" style={{ marginBottom: "1.5rem" }}>
          <span className="badge-dot" />
          <span>Journal</span>
        </div>
        <h2
          className="fw-headline"
          style={{
            fontSize: "3.5rem",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
        >
          Selected Insights & Journal
        </h2>
      </div>

      <div ref={containerRef} className="insights-list reveal-stagger">
        {posts.map((post, index) => (
          <div
            key={index}
            className="insight-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => window.location.href = post.link}
            tabIndex={0}
            role="button"
            aria-label={`Read post: ${post.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                window.location.href = post.link;
              }
            }}
          >
            <span className="insight-date">{post.date}</span>
            <h3 className="insight-title">{post.title}</h3>
            <span className="insight-arrow-icon" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </div>
        ))}

        {/* Floating cursor image reveals */}
        {posts.map((post, index) => (
          <div
            key={`img-${index}`}
            className="insight-floating-img"
            style={{
              top: mousePos.y,
              left: mousePos.x + 30, // Offset to the right of cursor
              opacity: hoveredIndex === index ? 1 : 0,
              transform: `translate(-50%, -50%) scale(${hoveredIndex === index ? 1 : 0.6})`,
              pointerEvents: "none",
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={280}
              height={180}
              priority
              sizes="280px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

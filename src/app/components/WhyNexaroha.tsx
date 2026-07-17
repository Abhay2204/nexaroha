"use client";

import React, { useEffect, useState, useRef } from "react";

interface PaneFeature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const features: PaneFeature[] = [
  {
    title: "Strategic Thinking",
    desc: "We start with clarity and build strategies that align with your business goals.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Exceptional Design",
    desc: "We craft intuitive interfaces and memorable experiences that connect with people.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Modern Development",
    desc: "We build fast, scalable and future-ready solutions using the latest technologies.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Growth Focused",
    desc: "Every decision we make is centered around driving measurable impact and long-term growth.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Reliable & Transparent",
    desc: "Clear communication, on-time delivery and complete transparency — always.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Long-Term Partnership",
    desc: "We grow when you grow. We're with you at every step of your journey.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const stats: StatItem[] = [
  {
    value: 50,
    suffix: "+",
    label: "Award-Winning Projects",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    value: 8,
    suffix: "+",
    label: "Years of Excellence",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    value: 500,
    suffix: "+",
    label: "Global Clients",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support & Collaboration",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

// Helper component for count-up metrics in view
function StatCounter({ endVal, trigger }: { endVal: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;
    const duration = 1500; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progressTime = timestamp - startTimestamp;
      const progressPercent = Math.min(progressTime / duration, 1);
      
      // easeOutExpo function
      const easeVal = progressPercent === 1 ? 1 : 1 - Math.pow(2, -10 * progressPercent);
      
      setCount(Math.floor(easeVal * endVal));

      if (progressPercent < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [endVal, trigger]);

  return <span>{count}</span>;
}

export default function WhyNexaroha() {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-wrapper" style={{ paddingBottom: 0 }}>
      {/* Top Split 12-Column Grid */}
      <div className="container grid-12" style={{ borderBottom: "none" }}>
        
        {/* Left column (Sticky info panel + scaled hero composition crosshair) */}
        <div className="sticky-sidebar">
          <div className="badge">
            <span className="badge-dot" />
            <span>Why Nexaroha</span>
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
            We combine strategy, design and technology to create digital experiences that drive{" "}
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
              real growth.
            </span>
          </h2>
          <p className="fw-description" style={{ marginBottom: "2.5rem" }}>
            We're not just a design studio. We're your next growth partner, invested in your success.
          </p>

          <a href="#contact" className="fw-view-all">
            <span>Let's work together</span>
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

          {/* Scaled composition crosshair lines */}
          <div className="why-composition" aria-hidden="true">
            <div className="why-comp-line-h" />
            <div className="why-comp-line-v" />
            <div className="why-comp-dot" />
          </div>
        </div>

        {/* Right column (3x2 Pane grid layout) */}
        <div className="why-grid" style={{ gridColumn: "span 8" }}>
          <div className="why-pane-grid">
            {features.map((feature, index) => (
              <div key={index} className="why-pane-card">
                <div className="why-pane-icon">{feature.icon}</div>
                <div className="why-pane-info">
                  <h3 className="why-pane-title">{feature.title}</h3>
                  <p className="why-pane-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom full-width dark stats panel */}
      <div ref={statsRef} className="why-stats-dark">
        <div className="why-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="why-stat-col">
              <div className="why-stat-icon-circle">{stat.icon}</div>
              <div className="why-stat-val">
                <StatCounter endVal={stat.value} trigger={startCount} />
                {stat.suffix}
              </div>
              <div className="why-stat-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

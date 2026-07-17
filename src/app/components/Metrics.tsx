"use client";

import React, { useEffect, useRef, useState } from "react";

interface Metric {
  label: string;
  endValue: number;
  suffix: string;
}

const metrics: Metric[] = [
  { label: "Award Projects", endValue: 50, suffix: "+" },
  { label: "Global Clients", endValue: 120, suffix: "+" },
  { label: "Countries Served", endValue: 18, suffix: "" },
  { label: "Years Excellence", endValue: 8, suffix: "" },
  { label: "Client CSAT Score", endValue: 99, suffix: "%" },
  { label: "Performance Score", endValue: 100, suffix: "/100" },
];

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // Count up only once
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="section-wrapper container">
      <div className="badge">
        <span className="badge-dot" />
        <span>Section 05</span>
      </div>
      <h2 className="stat-number" style={{ fontSize: "2rem", fontWeight: 500, letterSpacing: "-0.03em", marginBottom: "4rem" }}>
        Selected Metrics
      </h2>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-val text-gradient">
              <CountUpNumber end={metric.endValue} trigger={startCount} />
              {metric.suffix}
            </div>
            <div className="metric-lbl">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CountUpNumber({ end, duration = 1500, trigger }: { end: number; duration?: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return <>{count}</>;
}

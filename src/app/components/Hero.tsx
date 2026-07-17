"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

type StepId = "strategy" | "design" | "seo" | "development" | "growth";

const steps: { id: StepId; label: string; sub: string }[] = [
  { id: "strategy",    label: "Strategy",    sub: "Research & Planning" },
  { id: "design",      label: "Design",      sub: "UI/UX & Branding" },
  { id: "seo",         label: "SEO",         sub: "On-Page Optimised" },
  { id: "development", label: "Development", sub: "Clean, Fast Code" },
  { id: "growth",      label: "Growth",      sub: "Analytics & Scaling" },
];

const hoverTags = [
  "UI/UX Design", "Responsive", "E-Commerce", "CRMs",
  "Mobile Apps", "SEO", "Growth", "SaaS", "Branding",
  "Web Apps", "Performance", "100% SEO",
];

interface TrailItem {
  id: number;
  x: number;
  y: number;
  tag: string;
  opacity: number;
}

let tagCursor = 0;

export default function Hero() {
  const [activeStep, setActiveStep] = useState<StepId>("strategy");
  const [trail, setTrail]           = useState<TrailItem[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollAngle, setScrollAngle] = useState(0);
  const [scrollDir, setScrollDir]     = useState<"down" | "up">("down");
  const trailIdRef  = useRef(0);
  const lastPos     = useRef({ x: -999, y: -999 });
  const frameRef    = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  // Scroll listener — rotates ring, detects bottom
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      const delta = sy - lastScrollY.current;
      lastScrollY.current = sy;
      setScrollAngle((prev) => prev + delta * 0.5);
      setScrollDir(delta >= 0 ? "down" : "up");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fade out trail items
  useEffect(() => {
    if (!isHovering && trail.length === 0) return;
    const decay = () => {
      setTrail((prev) => {
        const next = prev
          .map((t) => ({ ...t, opacity: t.opacity - 0.018 }))
          .filter((t) => t.opacity > 0);
        return next;
      });
      frameRef.current = requestAnimationFrame(decay);
    };
    frameRef.current = requestAnimationFrame(decay);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [isHovering, trail.length]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const dx = Math.abs(e.clientX - lastPos.current.x);
    const dy = Math.abs(e.clientY - lastPos.current.y);
    if (dx < 65 && dy < 65) return; // spawn only every 65px of movement
    lastPos.current = { x: e.clientX, y: e.clientY };
    const tag = hoverTags[tagCursor % hoverTags.length];
    tagCursor++;
    setTrail((prev) => [
      ...prev.slice(-10),
      { id: ++trailIdRef.current, x: e.clientX, y: e.clientY, tag, opacity: 1 },
    ]);
  }, []);

  return (
    /* 3-column grid: [left text] [center image] [right timeline] */
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 120px",
        minHeight: "100vh",
        paddingTop: "5rem",
        paddingLeft: "clamp(1.5rem, 4vw, 5rem)",
        paddingRight: "clamp(1rem, 2vw, 2rem)",
        position: "relative",
        alignItems: "center",
        gap: "0",
      }}
    >

      {/* ── Col 1: Left text ── */}
      <div className="animate-fade-up" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingRight: "2rem", maxWidth: "540px" }}>

        <div className="badge">
          <span className="badge-dot" style={{ backgroundColor: "#4800F4" }} />
          <span style={{ color: "#4800F4" }}>AWARD-WINNING DESIGN STUDIO</span>
        </div>

        <h1 style={{
          fontSize: "clamp(3rem, 5.5vw, 6rem)",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          fontWeight: 800,
          margin: 0,
          position: "relative",
        }}>
          Designing<br />Digital<br />Experiences<br />

          <div style={{ position: "relative", display: "inline-block", marginTop: "0.15rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "1rem", whiteSpace: "nowrap" }}>
              <span style={{
                fontStyle: "italic", fontFamily: "Georgia, serif",
                background: "linear-gradient(135deg, #4800F4, #E100F5)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>That Matter</span>
              <span className="hero-arrow-circle" style={{ margin: 0, flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </span>
            {/* Underline */}
            <svg width="100%" height="10" viewBox="0 0 300 10" fill="none"
              style={{ position: "absolute", bottom: "-8px", left: 0 }}>
              <path d="M0,5 Q75,9 150,5 T300,5" stroke="url(#uG)" strokeWidth="3" strokeLinecap="round" fill="none" />
              <defs>
                <linearGradient id="uG" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4800F4" /><stop offset="100%" stopColor="#E100F5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </h1>

        <div style={{ height: "1px", background: "var(--border)", width: "60px", marginTop: "1rem" }} />

        <p style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--text-muted)", lineHeight: 1.6, margin: 0, maxWidth: "400px" }}>
          We craft premium UI/UX, responsive websites, CRMs and e-commerce stores for forward-thinking Indian brands. Every pixel tells a story.
        </p>

        <div className="hero-ctas" style={{ marginTop: "0.5rem" }}>
          <button className="btn-talk" onClick={() => (window.location.href = "#contact")}>
            <span>Let's Talk</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="2.5" y1="9.5" x2="9.5" y2="2.5" /><polyline points="4 2 9.5 2 9.5 7.5" />
            </svg>
          </button>
          <a href="#work" className="btn-work-text">
            <span className="underline-text">View Our Work</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Col 2: Centre image ── */}
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", height: "100%" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div style={{
          position: "relative",
          width: "100%",
          height: "620px",
          maxWidth: "620px",
          cursor: "none",
          WebkitMaskImage: "radial-gradient(ellipse 88% 88% at 50% 48%, black 38%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 88% 88% at 50% 48%, black 38%, transparent 100%)",
        }}>
          <Image
            src="/images/hero_floating_cards_new.png"
            alt="3D floating UI cards showcasing digital design work"
            fill
            style={{ objectFit: "contain", objectPosition: "center top" }}
            priority
          />
        </div>
      </div>

      {/* ── Col 3: Vertical timeline ── */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100%",
        paddingLeft: "1rem",
        position: "relative",
      }}>
        {/* Vertical connecting line */}
        <div style={{
          position: "absolute",
          left: "calc(1rem + 3px)",
          top: "calc(50% - 100px)",
          height: "200px",
          width: "1px",
          background: "linear-gradient(to bottom, transparent, var(--border) 20%, var(--border) 80%, transparent)",
          pointerEvents: "none",
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative" }}>
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                style={{
                  background: "transparent", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  padding: 0, textAlign: "left",
                }}
              >
                {/* Dot */}
                <div style={{
                  width: "7px", height: "7px",
                  borderRadius: "2px",
                  flexShrink: 0,
                  background: isActive ? "#4800F4" : "transparent",
                  border: isActive ? "none" : "1.5px solid #c0c0cc",
                  transition: "all 0.25s ease",
                }} />
                {/* Label */}
                <div>
                  <div style={{
                    fontSize: "0.7rem",
                    fontWeight: isActive ? 700 : 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--foreground)" : "var(--text-muted)",
                    lineHeight: 1,
                    transition: "color 0.25s ease",
                  }}>
                    {step.label}
                  </div>
                  {isActive && (
                    <div style={{
                      fontSize: "0.6rem", color: "#4800F4", marginTop: "3px",
                      fontWeight: 500, letterSpacing: "0.03em",
                    }}>
                      {step.sub}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Scroll badge ── */}
      <div style={{
        position: "fixed", right: "2.5rem", bottom: "2.5rem",
        width: "88px", height: "88px",
        display: "flex", alignItems: "center", justifyContent: "center",
        userSelect: "none", zIndex: 50,
      }}>
        {/* Rotating text ring only */}
        <div style={{
          position: "absolute",
          width: "100%", height: "100%",
          transform: `rotate(${scrollAngle}deg)`,
          transition: "transform 0.1s linear",
        }}>
          <svg viewBox="0 0 120 120" width="100%" height="100%">
            <path id="circlePath2" d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="none" />
            <text fill="var(--text-muted)" fontSize="10" fontWeight="500" letterSpacing="0.2em">
              <textPath href="#circlePath2" startOffset="0%">SCROLL TO EXPLORE • SCROLL TO EXPLORE •</textPath>
            </text>
          </svg>
        </div>
        {/* Static arrow — does NOT rotate */}
        <div style={{
          color: "var(--foreground)",
          fontSize: "1rem",
          zIndex: 2,
          lineHeight: 1,
        }}>
          {scrollDir === "up" ? "↑" : "↓"}
        </div>
      </div>

      {/* ── Mouse trail tags ── */}
      {trail.map((item) => (
        <div key={item.id} style={{
          position: "fixed",
          left: item.x, top: item.y,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none", zIndex: 99999,
          color: "#4800F4",
          fontSize: "0.65rem", fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          whiteSpace: "nowrap", opacity: item.opacity,
          userSelect: "none",
        }}>
          {item.tag}
        </div>
      ))}

    </section>
  );
}

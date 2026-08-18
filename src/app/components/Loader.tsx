"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Sentence {
  kicker: string;
  words: { text: string; highlight?: boolean }[];
  size: "xl" | "lg" | "md";
}

const SENTENCES: Sentence[] = [
  {
    kicker: "01 // INTRODUCTION",
    size: "xl",
    words: [
      { text: "Hi," },
      { text: "we" },
      { text: "are" },
      { text: "Nexaroha.", highlight: true },
    ],
  },
  {
    kicker: "02 // IDENTITY",
    size: "xl",
    words: [
      { text: "Your" },
      { text: "next-gen" },
      { text: "growth", highlight: true },
      { text: "partners." },
    ],
  },
  {
    kicker: "03 // PHILOSOPHY",
    size: "lg",
    words: [
      { text: "We" },
      { text: "turn" },
      { text: "bold" },
      { text: "ideas" },
      { text: "into" },
      { text: "market", highlight: true },
      { text: "leaders." },
    ],
  },
  {
    kicker: "04 // ARSENAL",
    size: "md",
    words: [
      { text: "Lead" },
      { text: "Generation." },
      { text: "Top" },
      { text: "SEO." },
      { text: "Conversion", highlight: true },
      { text: "Design." },
    ],
  },
  {
    kicker: "05 // STANDARD",
    size: "lg",
    words: [
      { text: "Built" },
      { text: "for" },
      { text: "brands" },
      { text: "that" },
      { text: "refuse", highlight: true },
      { text: "to" },
      { text: "settle." },
    ],
  },
  {
    kicker: "06 // READY",
    size: "xl",
    words: [
      { text: "Welcome" },
      { text: "to" },
      { text: "Nexaroha.", highlight: true },
    ],
  },
];

export default function Loader() {
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  const [localTime, setLocalTime] = useState("");
  const [currentIndex, setCurrentIndex] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const masterTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // Allow user to tap/click to fast-forward loader if desired
  const handleFastForward = () => {
    if (masterTimelineRef.current && masterTimelineRef.current.progress() < 0.95) {
      masterTimelineRef.current.timeScale(4);
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // Dynamic clock
    const updateClock = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);

    // Prevent page scroll while loader runs
    document.body.style.overflow = "hidden";

    // GSAP context ensures clean scoping & cleanup in React
    const ctx = gsap.context(() => {
      const master = gsap.timeline({
        onComplete: () => {
          setIsLoaderActive(false);
          document.body.style.overflow = "";
        },
      });

      masterTimelineRef.current = master;

      // 1. Grid structure entrance
      master.to(".loader-grid-line-v", { scaleY: 1, stagger: 0.04, duration: 0.7, ease: "power3.out" }, 0);
      master.to(".loader-grid-line-h", { scaleX: 1, stagger: 0.04, duration: 0.7, ease: "power3.out" }, 0.1);
      master.to(".loader-grid-glow-v, .loader-grid-glow-h", { opacity: 0.35, duration: 0.5 }, 0.25);

      // Scanners traveling
      gsap.fromTo(".loader-grid-glow-v-1", { y: "-200px" }, { y: "100vh", duration: 3.2, repeat: -1, ease: "none", delay: 0.1 });
      gsap.fromTo(".loader-grid-glow-v-2", { y: "-200px" }, { y: "100vh", duration: 2.8, repeat: -1, ease: "none", delay: 0.8 });
      gsap.fromTo(".loader-grid-glow-v-3", { y: "-200px" }, { y: "100vh", duration: 3.6, repeat: -1, ease: "none", delay: 0.4 });
      gsap.fromTo(".loader-grid-glow-h-1", { x: "-200px" }, { x: "100vw", duration: 4.0, repeat: -1, ease: "none", delay: 0.3 });
      gsap.fromTo(".loader-grid-glow-h-2", { x: "-200px" }, { x: "100vw", duration: 4.8, repeat: -1, ease: "none", delay: 1.1 });

      // Corner metadata
      master.to(".loader-meta", { opacity: 0.65, y: 0, stagger: 0.05, duration: 0.5, ease: "power2.out" }, 0.2);

      // Footer progress & counter fade in
      master.to(".cine-footer-status", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0.3);

      // Snappy responsive timings (slightly faster on mobile for great UX)
      const lineInDuration = isMobile ? 0.42 : 0.55;
      const lineHoldDuration = isMobile ? 0.65 : 0.85;
      const lineOutDuration = isMobile ? 0.32 : 0.4;
      const interGap = isMobile ? 0.06 : 0.08;

      let timeCursor = 0.35;
      const totalSentences = SENTENCES.length;

      // Continuous progress bar fill across all sentences
      const totalAnimationTime = totalSentences * (lineInDuration + lineHoldDuration + lineOutDuration + interGap);
      master.to(".cine-progress-bar", {
        width: "100%",
        duration: totalAnimationTime,
        ease: "none",
      }, timeCursor);

      // Loop through each sentence
      SENTENCES.forEach((_, idx) => {
        const lineSelector = `.cine-line-${idx}`;
        const kickerSelector = `.cine-line-${idx} .cine-kicker`;
        const wordsSelector = `.cine-line-${idx} .cine-word`;

        // Update counter state
        master.add(() => {
          setCurrentIndex(idx + 1);
        }, timeCursor);

        // Make line container visible and animate in
        master.set(lineSelector, { visibility: "visible", opacity: 1 }, timeCursor);

        // Kicker fade in
        master.fromTo(
          kickerSelector,
          { opacity: 0, y: 15, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.4, ease: "power3.out" },
          timeCursor
        );

        // Words staggered lift with blur removal
        master.fromTo(
          wordsSelector,
          { opacity: 0, y: isMobile ? 22 : 32, filter: "blur(8px)", scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            stagger: isMobile ? 0.04 : 0.05,
            duration: lineInDuration,
            ease: "power3.out",
          },
          timeCursor + 0.04
        );

        // Hold sentence on screen
        timeCursor += lineInDuration + lineHoldDuration;

        // Smoothly dissolve sentence out (lift + subtle expansion + blur)
        master.to(
          lineSelector,
          {
            opacity: 0,
            y: isMobile ? -16 : -24,
            filter: "blur(8px)",
            scale: 1.02,
            duration: lineOutDuration,
            ease: "power2.in",
          },
          timeCursor
        );

        // Hide after dissolved
        master.set(lineSelector, { visibility: "hidden" }, timeCursor + lineOutDuration);

        // Advance cursor to next sentence
        timeCursor += lineOutDuration + interGap;
      });

      // Brief cinematic breath after final sentence
      timeCursor += 0.2;

      // Fade out background UI elements (grid, meta, footer)
      master.to(
        [
          ".loader-meta",
          ".cine-footer-status",
          ".loader-grid-line-v",
          ".loader-grid-line-h",
          ".loader-grid-glow-v",
          ".loader-grid-glow-h",
        ],
        {
          opacity: 0,
          y: -20,
          duration: 0.45,
          stagger: 0.03,
          ease: "power3.in",
        },
        timeCursor
      );

      // Slide up curtain panels in elegant stagger
      master.to(
        ".curtain-panel",
        {
          yPercent: -100,
          stagger: isMobile ? 0.05 : 0.07,
          duration: isMobile ? 0.9 : 1.1,
          ease: "power4.inOut",
        },
        timeCursor + 0.12
      );
    }, containerRef);

    return () => {
      document.body.style.overflow = "";
      clearInterval(timerId);
      ctx.revert();
    };
  }, []);

  if (!isLoaderActive) return null;

  return (
    <div
      ref={containerRef}
      className="loader-wrapper active"
      onClick={handleFastForward}
      title="Tap anywhere to skip"
    >
      {/* 6-Layered Curtain Panels (Reveals website underneath) */}
      <div className="curtain-container" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="curtain-panel" />
        ))}
      </div>

      {/* Structural Architectural Grid Lines */}
      <div className="curtain-container" aria-hidden="true" style={{ zIndex: 2 }}>
        {[16.666, 33.333, 50, 66.666, 83.333].map((left, idx) => (
          <div key={`v-${idx}`} className="loader-grid-line-v" style={{ left: `${left}vw` }} />
        ))}
        {[25, 50, 75].map((top, idx) => (
          <div key={`h-${idx}`} className="loader-grid-line-h" style={{ top: `${top}vh` }} />
        ))}
      </div>

      {/* Purple Glowing Grid Scanners */}
      <div className="curtain-container" aria-hidden="true" style={{ zIndex: 3 }}>
        <div className="loader-grid-glow-v loader-grid-glow-v-1" style={{ left: "16.666vw" }} />
        <div className="loader-grid-glow-v loader-grid-glow-v-2" style={{ left: "50vw" }} />
        <div className="loader-grid-glow-v loader-grid-glow-v-3" style={{ left: "83.333vw" }} />
        <div className="loader-grid-glow-h loader-grid-glow-h-1" style={{ top: "25vh" }} />
        <div className="loader-grid-glow-h loader-grid-glow-h-2" style={{ top: "75vh" }} />
      </div>

      {/* Editorial Corner Metadata */}
      <div className="loader-meta top-left">
        <span>LOC // MUMBAI, IN</span>
        <span>SYS // {localTime || "—"}</span>
      </div>
      <div className="loader-meta top-right">
        <span>PROJECT // NEXAROHA</span>
        <span>BUILD // V1.0_PROD</span>
      </div>
      <div className="loader-meta bottom-left">
        <span>STACK // NEXTJS_REACT</span>
        <span>ANIM // GSAP_MOTION</span>
      </div>
      <div className="loader-meta bottom-right">
        <span>MODE // AGENCY_GROWTH</span>
        <span>STATUS // 100%_OPTIMIZED</span>
      </div>

      {/* ── Center Cinematic Sentences Stage ── */}
      <div className="cine-stage" aria-live="polite">
        {SENTENCES.map((item, idx) => (
          <div
            key={idx}
            className={`cine-line cine-line-${idx}`}
          >
            <div className="cine-kicker">
              <span className="cine-kicker-dot" />
              <span>{item.kicker}</span>
            </div>

            <h2 className={`cine-headline cine-size-${item.size}`}>
              {item.words.map((w, wIdx) => (
                <span
                  key={wIdx}
                  className={`cine-word ${w.highlight ? "cine-gradient-text" : ""}`}
                >
                  {w.text}
                </span>
              ))}
            </h2>
          </div>
        ))}
      </div>

      {/* ── Bottom Progress & Slide Counter ── */}
      <div className="cine-footer-status" style={{ opacity: 0, transform: "translateY(10px)" }}>
        <span className="cine-counter">
          0{currentIndex} / 0{SENTENCES.length}
        </span>
        <div className="cine-progress-track">
          <div className="cine-progress-bar" />
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Loader() {
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  const [percent, setPercent] = useState(0);
  const [localTime, setLocalTime] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const bulletsRef = useRef<HTMLUListElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile (disable loader on screen width <= 768px)
    if (window.innerWidth <= 768) {
      setIsLoaderActive(false);
      return;
    }

    // Set dynamic local time ticking
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      });
      setLocalTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Disable scrolling during load
    document.body.style.overflow = "hidden";

    // Loader Timeline
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 0.8 },
      onComplete: () => {
        setIsLoaderActive(false);
        document.body.style.overflow = "";
      },
    });

    // 1. Grid Lines staggered scale-in to build structural feel
    tl.to(".loader-grid-line-v", { scaleY: 1, stagger: 0.05, duration: 0.8 }, 0);
    tl.to(".loader-grid-line-h", { scaleX: 1, stagger: 0.05, duration: 0.8 }, 0.1);
    tl.to(".loader-coord-label", { opacity: 0.25, scale: 1, stagger: 0.03, duration: 0.6 }, 0.2);

    // 1.5. Infinite looping scanners for technical layout grid
    tl.to(".loader-grid-glow-v, .loader-grid-glow-h", { opacity: 0.35, duration: 0.6 }, 0.3);
    
    gsap.fromTo(".loader-grid-glow-v-1", 
      { y: "-200px" }, 
      { y: "100vh", duration: 3.2, repeat: -1, ease: "none", delay: 0.1 }
    );
    gsap.fromTo(".loader-grid-glow-v-2", 
      { y: "-200px" }, 
      { y: "100vh", duration: 2.8, repeat: -1, ease: "none", delay: 0.8 }
    );
    gsap.fromTo(".loader-grid-glow-v-3", 
      { y: "-200px" }, 
      { y: "100vh", duration: 3.6, repeat: -1, ease: "none", delay: 0.4 }
    );

    gsap.fromTo(".loader-grid-glow-h-1", 
      { x: "-200px" }, 
      { x: "100vw", duration: 4.0, repeat: -1, ease: "none", delay: 0.3 }
    );
    gsap.fromTo(".loader-grid-glow-h-2", 
      { x: "-200px" }, 
      { x: "100vw", duration: 4.8, repeat: -1, ease: "none", delay: 1.1 }
    );

    // 2. Metadata details fade in at corners
    tl.to(".loader-meta", { opacity: 0.6, y: 0, stagger: 0.05, duration: 0.6 }, 0.2);

    // 3. Entrance of Brand Logo and Name
    tl.to(logoRef.current, { opacity: 1, scale: 1, rotate: 0, y: 0 }, 0.3);
    tl.to(brandRef.current, { opacity: 1, y: 0 }, "-=0.5");

    // 4. Entrance of positioning headlines and copy
    tl.to(titleRef.current, { opacity: 1, y: 0 }, "-=0.4");
    tl.to(descRef.current, { opacity: 1, y: 0 }, "-=0.4");

    // 5. Entrance of bullet points list
    tl.to(bulletsRef.current, { opacity: 1, y: 0 }, "-=0.4");

    // 6. Entrance of Progress counter panel
    tl.to(progressRef.current, { opacity: 1, y: 0 }, "-=0.4");

    // 7. Animate Percentage progress counter ticking directly with progress fill bar
    const counterObj = { val: 0 };
    tl.to(
      counterObj,
      {
        val: 100,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          setPercent(Math.floor(counterObj.val));
        },
      },
      "-=0.4"
    );
    tl.to(".loader-progress-bar-fill", { scaleX: 1, duration: 1.6, ease: "power2.out" }, "-=1.6");

    // 8. Staged Pause to showcase loading completion
    tl.to({}, { duration: 0.6 });

    // 9. Fade out all text, loader, coordinates, glow elements and grid metadata
    tl.to(
      [
        contentRef.current,
        ".loader-meta",
        ".loader-grid-line-v",
        ".loader-grid-line-h",
        ".loader-coord-label",
        ".loader-grid-glow-v",
        ".loader-grid-glow-h",
      ],
      {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.05,
        ease: "power4.in",
      }
    );

    // 10. Staggered Slide up of the 6 curtain columns (revealing homepage)
    tl.to(
      ".curtain-panel",
      {
        yPercent: -100,
        stagger: 0.08,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "-=0.2"
    );

    return () => {
      // Re-enable scrolling in case component unmounts early
      document.body.style.overflow = "";
      clearInterval(interval);
      tl.kill();
    };
  }, []);

  if (!isLoaderActive) return null;

  return (
    <div ref={containerRef} className="loader-wrapper active">
      {/* 6-Layered Curtain Panels */}
      <div className="curtain-container" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="curtain-panel" />
        ))}
      </div>

      {/* Structural Blueprint Grid Lines */}
      <div className="curtain-container" aria-hidden="true" style={{ zIndex: 2 }}>
        {/* Vertical lines */}
        {[16.666, 33.333, 50, 66.666, 83.333].map((leftVal, idx) => (
          <div key={`v-${idx}`} className="loader-grid-line-v" style={{ left: `${leftVal}vw` }} />
        ))}
        {/* Horizontal lines */}
        {[25, 50, 75].map((topVal, idx) => (
          <div key={`h-${idx}`} className="loader-grid-line-h" style={{ top: `${topVal}vh` }} />
        ))}
      </div>

      {/* Purple Glowing Scanners traveling along grid lines */}
      <div className="curtain-container" aria-hidden="true" style={{ zIndex: 3 }}>
        <div className="loader-grid-glow-v loader-grid-glow-v-1" style={{ left: "16.666vw" }} />
        <div className="loader-grid-glow-v loader-grid-glow-v-2" style={{ left: "50vw" }} />
        <div className="loader-grid-glow-v loader-grid-glow-v-3" style={{ left: "83.333vw" }} />
        
        <div className="loader-grid-glow-h loader-grid-glow-h-1" style={{ top: "25vh" }} />
        <div className="loader-grid-glow-h loader-grid-glow-h-2" style={{ top: "75vh" }} />
      </div>

      {/* Subtle Coordinate Marks at Intersections */}
      <div className="loader-coord-label" style={{ left: "16.666vw", top: "25vh", transform: "translate(-50%, -100%)" }}>[X.01_Y.25]</div>
      <div className="loader-coord-label" style={{ left: "50vw", top: "25vh", transform: "translate(-50%, -100%)" }}>[X.03_Y.25]</div>
      <div className="loader-coord-label" style={{ left: "83.333vw", top: "25vh", transform: "translate(-50%, -100%)" }}>[X.05_Y.25]</div>
      <div className="loader-coord-label" style={{ left: "33.333vw", top: "50vh", transform: "translate(-50%, -100%)" }}>[X.02_Y.50]</div>
      <div className="loader-coord-label" style={{ left: "66.666vw", top: "50vh", transform: "translate(-50%, -100%)" }}>[X.04_Y.50]</div>
      <div className="loader-coord-label" style={{ left: "16.666vw", top: "75vh", transform: "translate(-50%, -100%)" }}>[X.01_Y.75]</div>
      <div className="loader-coord-label" style={{ left: "50vw", top: "75vh", transform: "translate(-50%, -100%)" }}>[X.03_Y.75]</div>
      <div className="loader-coord-label" style={{ left: "83.333vw", top: "75vh", transform: "translate(-50%, -100%)" }}>[X.05_Y.75]</div>

      {/* Corner Editorial Metadata */}
      <div className="loader-meta top-left">
        <span>LOC // MUMBAI, IN</span>
        <span>SYS // {localTime || "21:58:00 IST"}</span>
      </div>
      <div className="loader-meta top-right">
        <span>PROJECT // NEXAROHA</span>
        <span>BUILD // V1.0_PROD</span>
      </div>
      <div className="loader-meta bottom-left">
        <span>STACK // NEXTJS_REACT</span>
        <span>ANIM // GSAP_LENIS</span>
      </div>
      <div className="loader-meta bottom-right">
        <span>EST_TIME // 3.5s</span>
        <span>SEO // 100%_PASS</span>
      </div>

      {/* Loader Centered Content Card */}
      <div ref={contentRef} className="loader-content">
        
        {/* Logo and Brand Text */}
        <div className="loader-logo-wrap">
          <div ref={logoRef} className="loader-logo-img" style={{ opacity: 0, transform: "scale(0.8) rotate(-10deg)" }}>
            <Image
              src="/images/logo.png"
              alt="Nexaroha Logo Symbol"
              width={96}
              height={96}
              priority
            />
          </div>
          <div ref={brandRef} className="loader-brand-img" style={{ opacity: 0, transform: "translateY(15px)" }}>
            <Image
              src="/nexaroha.png"
              alt="Nexaroha Logo Text"
              width={220}
              height={55}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* Text Positioning Panel */}
        <div className="loader-text-panel">
          <h3 ref={titleRef} className="loader-title" style={{ opacity: 0, transform: "translateY(20px)" }}>
            We are your next growth partner
          </h3>
          <p ref={descRef} className="loader-desc" style={{ opacity: 0, transform: "translateY(20px)" }}>
            We develop digital products and premium design systems that are clean, fast, and search-optimized.
          </p>
        </div>

        {/* Highlight Bullets */}
        <ul ref={bulletsRef} className="loader-bullets" style={{ opacity: 0, transform: "translateY(20px)" }}>
          {[
            "Lead Generation",
            "100% SEO",
            "Top Ranking",
            "Responsive Design",
          ].map((item) => (
            <li key={item} className="loader-bullet-item">
              <span className="loader-bullet-dot" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Ticking Percentage Counter & Bar */}
        <div ref={progressRef} className="loader-progress-wrap">
          <span className="loader-progress-counter">
            {percent < 10 ? `0${percent}` : percent}%
          </span>
          <div className="loader-progress-bar">
            <div className="loader-progress-bar-fill" />
          </div>
        </div>

      </div>
    </div>
  );
}

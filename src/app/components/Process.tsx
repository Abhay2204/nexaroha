"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface ProcessStep {
  num: string;
  name: string;
  text: string;
  details: string;
  image: string;
  icon: React.ReactNode;
}

interface ProcessHighlight {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    num: "01",
    name: "Discover",
    text: "We start by understanding your goals, audience, and challenges through deep research and open collaboration.",
    details: "We conduct brand audits, stakeholder workshops, and competitor research. This establishes the product vision, mapping user journeys and identifying core technical constraints before writing a single line of code.",
    image: "/projects/flowcrm.png",
    icon: (
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
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Strategy",
    text: "We define the right strategy, craft a roadmap, and align every detail to create maximum value and clarity.",
    details: "We blueprint the system architecture, select the tech stack, and structure the content model. We design a detailed release plan and align design/engineering tracks to minimize future refactoring.",
    image: "/projects/growthengine.png",
    icon: (
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
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Design",
    text: "We design intuitive, elegant interfaces and seamless experiences that connect brands with people.",
    details: "We create high-fidelity UI systems based on Swiss design principles—prioritizing strict typographic grids, layout hierarchy, and micro-interactions. We deliver interactive prototypes for user verification.",
    image: "/projects/meditrack.png",
    icon: (
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
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 6V12L16 14" />
      </svg>
    ),
  },
  {
    num: "04",
    name: "Develop",
    text: "We build with clean code and scalable solutions that are fast, secure, and future-ready.",
    details: "We translate designs into clean, modular Next.js components. We optimize bundle size, leverage static rendering, and implement smooth animations (Lenis/GSAP) for premium, high-performance web experiences.",
    image: "/projects/swiftdeliver.png",
    icon: (
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
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "05",
    name: "SEO Optimization",
    text: "We optimize site structure, semantic HTML, schemas, and metadata to maximize search engine visibility.",
    details: "We implement dynamic JSON-LD schemas, configure search crawling parameters (sitemaps, robots.txt), and optimize headings structure. We target perfect 100/100 Lighthouse SEO audit scores.",
    image: "/projects/velocommerce.png",
    icon: (
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
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    num: "06",
    name: "Launch",
    text: "We test, refine, and launch with precision — ensuring everything works flawlessly, everywhere.",
    details: "We run end-to-end browser compatibility testing, speed audits, and accessibility compliance validation (WCAG AA). Once verified, we deploy to production with zero-downtime integration.",
    image: "/images/grayscale_curves.png",
    icon: (
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
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
];

const highlights: ProcessHighlight[] = [
  {
    title: "Collaborative",
    desc: "We work closely with you at every step.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
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
  {
    title: "Transparent",
    desc: "Clear communication and real-time updates.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Results-Driven",
    desc: "Every decision is made with impact in mind.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
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
    title: "Future-Focused",
    desc: "We build solutions that grow with your brand.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -40% 0px", // triggers when items scroll past viewport center
      threshold: 0.15,
    };

    const stepElements = document.querySelectorAll(".process-step-row");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
          setActiveStep(index);
          const pct = (index / (steps.length - 1)) * 100;
          setProgress(pct);
        }
      });
    }, observerOptions);

    stepElements.forEach((el) => observer.observe(el));

    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const currentStep = steps[activeStep] || steps[0];

  return (
    <section className="section-wrapper container" style={{ paddingBottom: 0 }}>
      {/* Isolated Row Wrapper to bound Sticky Sidebar within the top section */}
      <div className="grid-12" style={{ alignItems: "start" }}>
        
        {/* Left Column - Sticky Details Panel */}
        <div className="sticky-sidebar reveal-fade-in">
          <div className="badge">
            <span className="badge-dot" />
            <span>Step {currentStep.num}</span>
          </div>
          
          {/* Dynamic Header & Rich Details */}
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
            {currentStep.name}
          </h2>
          <p className="fw-description" style={{ marginBottom: "2.5rem", minHeight: "80px" }}>
            {currentStep.details}
          </p>

          <a href="#contact" className="fw-view-all">
            <span>Start a Project</span>
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

          {/* Static Grayscale Curves Image */}
          <div className="process-left-media-wrap">
            <Image
              src="/images/grayscale_curves.png"
              alt="Process abstract curves backdrop"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Right Column - Scrollable Timeline Steps */}
        <div ref={containerRef} className="process-timeline reveal-stagger">
          {/* Progress track line indicator */}
          <div className="process-timeline-line" />
          <div
            className="process-timeline-progress"
            style={{ height: `${progress * 0.9}%` }}
          />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`process-step-row ${activeStep === index ? "active" : ""}`}
              data-index={index}
            >
              {/* Column 1: Circle number step + link line (outside the glass card) */}
              <div className="process-timeline-circle-col">
                <div className="process-circle">{step.num}</div>
                <div className="process-connector-line" />
              </div>

              {/* Column 2: Glass Card container (wraps details and icon outline) */}
              <div className="process-step-card-content">
                <div className="process-step-info">
                  <h3 className="process-step-name">{step.name}</h3>
                  <p className="process-step-text">{step.text}</p>
                </div>

                <div className="process-step-icon-wrap" aria-hidden="true">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Highlights Row */}
      <div className="process-bottom-highlights reveal-stagger">
        {highlights.map((hl, index) => (
          <div key={index} className="process-hl-card">
            <div className="process-hl-icon-wrap" aria-hidden="true">
              {hl.icon}
            </div>
            <div className="process-hl-info">
              <h4 className="process-hl-title">{hl.title}</h4>
              <p className="process-hl-desc">{hl.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

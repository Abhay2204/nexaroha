import React from "react";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="stats-section animate-fade-up delay-300">
      <div className="stat-item">
        <div className="stat-number text-gradient">50+</div>
        <div className="stat-title">
          AWARD-WINNING <br /> PROJECTS
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-number text-gradient">8</div>
        <div className="stat-title">
          YEARS OF <br /> DESIGN EXCELLENCE
        </div>
      </div>
      <div className="stat-image-container">
        <Image
          src="/architecture.png"
          alt="Minimalist Swiss architecture close-up"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="stat-image"
        />
      </div>
      <div className="stat-item">
        <div className="stat-number text-gradient">500+</div>
        <div className="stat-title">
          GLOBAL <br /> CLIENTS
        </div>
      </div>
      <div className="stat-arrow-col">
        <button className="btn-arrow-right" aria-label="Next Section">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
}


import React from "react";

const clientLogos = [
  "HELVETIA",
  "KRONOS LABS",
  "APEX GL",
  "VERTIGO CH",
  "NORDIC GROUP",
  "ZURICH DIGITAL",
  "LUCERNE SE",
  "BASEL FIN",
];

// Duplicate the array for a seamless loop
const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

export default function Clients() {
  return (
    <section className="section-wrapper container" style={{ borderBottom: "none" }}>
      <div className="badge">
        <span className="badge-dot" />
        <span>Section 07</span>
      </div>
      <h2 className="stat-number" style={{ fontSize: "2rem", fontWeight: 500, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
        Selected Clients
      </h2>

      <div className="marquee-container">
        <div className="marquee-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="marquee-logo">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

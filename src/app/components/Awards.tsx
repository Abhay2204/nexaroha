import React from "react";

interface Award {
  platform: string;
  category: string;
  year: string;
}

const awards: Award[] = [
  { platform: "Awwwards", category: "Site of the Day — Apex Towers", year: "2026" },
  { platform: "Awwwards", category: "Honorable Mention — Mono Horizon", year: "2026" },
  { platform: "CSS Design Awards", category: "Best UI/UX Design — Apex Towers", year: "2026" },
  { platform: "FWA", category: "FWA of the Day — Mono Horizon", year: "2026" },
  { platform: "CSS Design Awards", category: "Best Innovation — Helvetia Studio", year: "2025" },
  { platform: "Behance", category: "Featured in Interaction — Helvetia App", year: "2025" },
  { platform: "Dribbble", category: "Editorial UI Design Collection Showcase", year: "2024" },
];

export default function Awards() {
  return (
    <section className="section-wrapper container grid-12">
      <div className="sticky-sidebar reveal-fade-in">
        <div className="badge">
          <span className="badge-dot" />
          <span>Section 08</span>
        </div>
        <h2 className="stat-number" style={{ fontSize: "2rem", fontWeight: 500, letterSpacing: "-0.03em" }}>
          Awards & Recognition
        </h2>
      </div>

      <div className="awards-grid reveal-stagger">
        {awards.map((award, index) => (
          <div key={index} className="award-row">
            <span className="award-platform">{award.platform}</span>
            <span className="award-category">{award.category}</span>
            <span className="award-year">{award.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

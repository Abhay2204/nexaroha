"use client";

import React from "react";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="animate-fade-up"
      style={{
        padding: "8rem 0",
        borderBottom: "1px solid var(--border)",
        background: "var(--background)",
      }}
    >
      <div className="container">

        {/* Section Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "5rem" }}>
          <div className="badge">
            <span className="badge-dot" style={{ backgroundColor: "#4800F4" }} />
            <span style={{ color: "#4800F4" }}>Transparent Pricing</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: 0,
                maxWidth: "600px",
                color: "var(--foreground)",
              }}
            >
              Tailored Plans For Your Next Growth Stage.
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                maxWidth: "380px",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              No hidden fees. Premium design, SEO & engineering — built right the first time, so you never have to redo it.
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            alignItems: "stretch",
          }}
          className="pricing-grid"
        >

          {/* ===== Card 1: Personal ===== */}
          <div className="pricing-card" style={{
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            padding: "3rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                    Personal
                  </span>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>For startups &amp; solopreneurs</div>
                </div>
                <span style={{
                  background: "rgba(72,0,244,0.07)",
                  color: "#4800F4",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>Starter</span>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em" }}>₹5,000</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>/ onwards</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
                  E-Commerce: ₹8,000 – ₹12,000 &nbsp;|&nbsp; CRM: ₹5,000 – ₹10,000
                </div>
              </div>

              <div style={{ height: "1px", background: "var(--border)", marginBottom: "2rem" }} />

              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Custom company portfolio website",
                  "Mobile-first responsive design",
                  "100% SEO on-page optimisation",
                  "Google Analytics & Search Console setup",
                  "Contact form with email integration",
                  "1-month post-launch support",
                  "Free domain connection & SSL",
                  "Hosting included (1 year)",
                  "Performance-optimised loading (<2s)",
                  "WhatsApp / social media link integration",
                ].map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.88rem", color: "var(--foreground)", lineHeight: 1.4 }}>
                    <span style={{ color: "#4800F4", fontWeight: 700, marginTop: "1px", flexShrink: 0 }}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => window.location.href = "#contact"}
              className="pricing-btn"
              style={{
                marginTop: "2.5rem",
                width: "100%",
                background: "transparent",
                border: "1px solid var(--foreground)",
                color: "var(--foreground)",
                borderRadius: "30px",
                padding: "0.9rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Get Started →
            </button>
          </div>

          {/* ===== Card 2: Business (Featured) ===== */}
          <div className="pricing-card featured" style={{
            background: "#fff",
            border: "2px solid #4800F4",
            borderRadius: "24px",
            padding: "3rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 24px 60px rgba(72,0,244,0.08)",
            position: "relative",
            transform: "scale(1.02)",
          }}>
            {/* Most Popular pill */}
            <div style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg, #4800F4, #E100F5)",
              color: "#fff",
              padding: "0.25rem 1.1rem",
              borderRadius: "20px",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>Most Popular</div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4800F4" }}>
                    Business Suite
                  </span>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>For growing companies</div>
                </div>
                <span style={{
                  background: "rgba(72,0,244,0.07)",
                  color: "#4800F4",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>All-in-One</span>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em" }}>₹10K – ₹20K</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
                  Includes all 3 Personal packages combined
                </div>
              </div>

              <div style={{ height: "1px", background: "var(--border)", marginBottom: "2rem" }} />

              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Everything in Personal plan",
                  "Full e-commerce + CRM integrated",
                  "Advanced UI/UX design & audit",
                  "Technical SEO + schema markup",
                  "Multi-page responsive web application",
                  "Admin dashboard with login system",
                  "Payment gateway integration (Razorpay / Stripe)",
                  "Inventory & order management system",
                  "2 months dedicated post-launch support",
                  "Automated email & WhatsApp notifications",
                  "Speed & Core Web Vitals optimisation",
                  "Google Maps & GMB profile integration",
                ].map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.88rem", color: "var(--foreground)", lineHeight: 1.4 }}>
                    <span style={{ color: "#4800F4", fontWeight: 700, marginTop: "1px", flexShrink: 0 }}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => window.location.href = "#contact"}
              style={{
                marginTop: "2.5rem",
                width: "100%",
                background: "linear-gradient(135deg, #4800F4, #E100F5)",
                border: "none",
                color: "#fff",
                borderRadius: "30px",
                padding: "0.95rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 10px 24px rgba(72,0,244,0.2)",
                transition: "all 0.3s ease",
              }}
            >
              Choose Suite →
            </button>
          </div>

          {/* ===== Card 3: Custom / Enterprise ===== */}
          <div className="pricing-card" style={{
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            padding: "3rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                    Custom
                  </span>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>For large enterprises</div>
                </div>
                <span style={{
                  background: "rgba(72,0,244,0.07)",
                  color: "#4800F4",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>Bespoke</span>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em" }}>Let's Talk</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
                  Custom scope, timeline & pricing
                </div>
              </div>

              <div style={{ height: "1px", background: "var(--border)", marginBottom: "2rem" }} />

              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Everything in Business Suite",
                  "Fully bespoke product from scratch",
                  "API integrations with any third-party tool",
                  "Custom ERP / SaaS platform build",
                  "Multi-language & multi-region support",
                  "Advanced data analytics dashboard",
                  "Role-based access control (RBAC) system",
                  "3 months free post-launch service",
                  "Dedicated account manager",
                  "Monthly strategy & performance reviews",
                  "Priority SLA response (<4 hrs)",
                  "NDAs & white-label delivery available",
                ].map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.88rem", color: "var(--foreground)", lineHeight: 1.4 }}>
                    <span style={{ color: "#4800F4", fontWeight: 700, marginTop: "1px", flexShrink: 0 }}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => window.location.href = "#contact"}
              className="pricing-btn"
              style={{
                marginTop: "2.5rem",
                width: "100%",
                background: "transparent",
                border: "1px solid var(--foreground)",
                color: "var(--foreground)",
                borderRadius: "30px",
                padding: "0.9rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Let's Discuss →
            </button>
          </div>

        </div>

        {/* Bottom trust note */}
        <div style={{
          marginTop: "3.5rem",
          padding: "2rem 2.5rem",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(72,0,244,0.02)",
        }}>
          {[
            { icon: "✓", text: "100% SEO on all plans" },
            { icon: "✓", text: "Fully responsive & mobile-first" },
            { icon: "✓", text: "No hidden charges" },
            { icon: "✓", text: "Indian GST invoices provided" },
            { icon: "✓", text: "Razorpay / UPI payments accepted" },
          ].map((t) => (
            <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: "var(--foreground)", fontWeight: 500 }}>
              <span style={{ color: "#4800F4", fontWeight: 700 }}>{t.icon}</span>
              <span>{t.text}</span>
            </div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .pricing-card.featured {
            transform: none !important;
          }
        }
        .pricing-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .pricing-card:hover {
          box-shadow: 0 20px 50px rgba(0,0,0,0.06);
        }
        .pricing-btn:hover {
          background: var(--foreground) !important;
          color: var(--background) !important;
        }
      `}</style>
    </section>
  );
}

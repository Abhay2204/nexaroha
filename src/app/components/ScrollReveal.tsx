"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Instantly reveal all elements
      document.querySelectorAll(".reveal-fade-in, .reveal-stagger").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -8% 0px", // Trigger when element is slightly inside viewport
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Stop observing once animation has run once
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal-fade-in, .reveal-stagger");
      elements.forEach((el) => observer.observe(el));
    };

    // Run initial observation
    observeElements();

    // Re-run observation when content dynamically changes or page re-renders
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

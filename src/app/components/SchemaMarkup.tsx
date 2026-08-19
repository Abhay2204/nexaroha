import React from "react";

export default function SchemaMarkup() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nexaroha",
    "url": "https://nexaroha.com",
    "logo": "https://nexaroha.com/logo.png",
    "sameAs": [
      "https://github.com/nexaroha",
      "https://linkedin.com/company/nexaroha",
      "https://twitter.com/nexaroha"
    ],
    "description": "Nexaroha — Your Next-Gen Growth Partners. Engineering high-converting web applications, UI/UX design systems, and digital growth engines."
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nexaroha — Your Next-Gen Growth Partners",
    "url": "https://nexaroha.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nexaroha.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Next-Gen Web & App Engineering, UI/UX Design, Lead Generation, SEO Dominance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nexaroha",
      "image": "https://nexaroha.com/images/growth_foundation.png",
      "telephone": "+1-000-000-0000",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bahnhofstrasse 10",
        "addressLocality": "Zurich",
        "postalCode": "8001",
        "addressCountry": "CH"
      }
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design & Engineering Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Experiences"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

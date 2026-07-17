import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhatWeDo from "./components/WhatWeDo";
import FeaturedWork from "./components/FeaturedWork";
import Process from "./components/Process";
import WhyNexaroha from "./components/WhyNexaroha";
import Philosophy from "./components/Philosophy";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Insights from "./components/Insights";
import UiGallery from "./components/UiGallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="main-wrapper">
      <Header />
      <Hero />
      <Stats />
      <WhatWeDo />
      <FeaturedWork />
      <Process />
      <WhyNexaroha />
      <Philosophy />
      <Clients />
      <Pricing />
      <Testimonials />
      <Insights />
      <UiGallery />
      <CTA />
      <Footer />
    </main>
  );
}



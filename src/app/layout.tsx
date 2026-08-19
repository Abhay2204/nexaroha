import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import SchemaMarkup from "./components/SchemaMarkup";
import Loader from "./components/Loader";
import ScrollReveal from "./components/ScrollReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexaroha — Your Next-Gen Growth Partners | Web, UI/UX & Lead Gen",
  description: "We are your next-gen growth partners. We engineer high-converting web applications, pixel-perfect UI/UX design systems, and automated lead generation engines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <ScrollReveal />
        <Loader />
        <a href="#main-content" className="sr-only">Skip to content</a>
        <div className="ambient-glow" aria-hidden="true" />
        <SchemaMarkup />
        <CustomCursor />
        <SmoothScroll>
          <div id="main-content">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}


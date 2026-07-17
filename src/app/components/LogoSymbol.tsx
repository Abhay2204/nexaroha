import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function LogoSymbol({ width = 36, height = 36, className = "" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="nexarohaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4800F4" />
          <stop offset="50%" stopColor="#9300F5" />
          <stop offset="100%" stopColor="#E100F5" />
        </linearGradient>
      </defs>
      
      {/* Left Top Segment */}
      <path
        d="M10 20 C10 11.16, 17.16 4, 26 4 H35 V32 L10 57 V20 Z"
        fill="url(#nexarohaGrad)"
      />
      
      {/* Left Bottom Segment */}
      <path
        d="M10 72 L35 47 V106 H26 C17.16 106, 10 98.84, 10 90 V72 Z"
        fill="url(#nexarohaGrad)"
      />

      {/* Middle Diagonal bar */}
      <path
        d="M42 4 H58 L90 86 C91 89, 90 94, 86 94 H70 L38 12 C37 9, 38 4, 42 4 Z"
        fill="url(#nexarohaGrad)"
        opacity="0.95"
      />

      {/* Right Top Segment */}
      <path
        d="M65 4 H74 C82.84 4, 90 11.16, 90 20 V47 L65 22 V4 Z"
        fill="url(#nexarohaGrad)"
      />

      {/* Right Bottom Segment */}
      <path
        d="M65 62 L90 87 V90 C90 98.84, 82.84 106, 74 106 H65 V62 Z"
        fill="url(#nexarohaGrad)"
      />
    </svg>
  );
}

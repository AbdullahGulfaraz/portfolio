// components/providers/SmoothScroll.tsx
"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

// Global reference so any button can smoothly scroll instantly
export let lenisInstance: Lenis | null = null;

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
};
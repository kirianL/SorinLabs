"use client";

import { useEffect } from "react";

export function VHFix() {
  useEffect(() => {
    // Function to calculate and update --vh variable
    const updateVH = () => {
      // We use innerHeight because svh/lvh might still be inaccurate 
      // in some older in-app browsers due to how they report heights.
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Calculate on mount
    updateVH();
    let lastWidth = window.innerWidth;

    // Listen for resize events. Throttled and filtered to avoid scroll jumps
    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      // On mobile, scrolling often fires resize events because the address bar hides.
      // We ONLY want to update the VH if the width changes (orientation change).
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        clearTimeout(timeout);
        timeout = setTimeout(updateVH, 150);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  // This component doesn't render anything
  return null;
}

"use client";

import { useEffect } from "react";

export default function MathRenderer() {
  useEffect(() => {
    const renderMath = () => {
      if (typeof window !== "undefined" && (window as any).renderMathInElement) {
        try {
          (window as any).renderMathInElement(document.body, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: false },
            ],
            throwOnError: false,
          });
        } catch (err) {
          console.error("KaTeX auto-render error:", err);
        }
      }
    };

    // Run immediately
    renderMath();

    // Also run after a short timeout to cover any client-side hydration delays
    const timer = setTimeout(renderMath, 200);
    const timer2 = setTimeout(renderMath, 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return null;
}

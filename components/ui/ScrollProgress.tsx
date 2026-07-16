"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const level = Math.min(9, Math.floor(progress / 10) + 1);
  const subLevel = Math.floor(progress) % 10;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      <span className="pixel-text text-[8px] text-space-green hidden sm:inline">
        LV-{level}-{subLevel}
      </span>
      <div className="w-16 sm:w-24 h-3 border-2 border-space-green bg-space-black">
        <div
          className="h-full bg-space-green transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

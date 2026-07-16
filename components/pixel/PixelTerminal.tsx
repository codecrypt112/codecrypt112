"use client";

import { useEffect, useState } from "react";

interface PixelTerminalProps {
  lines: string[];
  className?: string;
  typing?: boolean;
  prompt?: string;
}

export default function PixelTerminal({
  lines,
  className = "",
  typing = true,
  prompt = ">",
}: PixelTerminalProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (!typing) {
      setVisibleLines(lines);
      return;
    }
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    if (currentChar >= line.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentChar((prev) => prev + 1);
    }, 20 + Math.random() * 35);
    return () => clearTimeout(timer);
  }, [currentLine, currentChar, lines, typing]);

  return (
    <div className={`font-mono text-sm md:text-base text-amber ${className}`}>
      {visibleLines.map((line, i) => (
        <div key={i} className="leading-relaxed">
          <span className="text-teal mr-2">{prompt}</span>
          {line}
        </div>
      ))}
      {currentLine < lines.length && (
        <div className="leading-relaxed">
          <span className="text-teal mr-2">{prompt}</span>
          {lines[currentLine].slice(0, currentChar)}
          <span className="animate-blink">█</span>
        </div>
      )}
    </div>
  );
}

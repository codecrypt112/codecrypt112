# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Vikash V's full-stack, gamified 8-bit space-themed portfolio with Next.js 14, GSAP ScrollTrigger, Three.js, Sanity CMS, and MDX blogging.

**Architecture:** Next.js 14 App Router monolith. Single-page scroll narrative with GSAP ScrollTrigger sections. Sanity Studio embedded at `/studio`. Three.js via React Three Fiber. All pixel-art visuals sourced from Figma community file.

**Tech Stack:** Next.js 14, TypeScript, TailwindCSS, GSAP ScrollTrigger, React Three Fiber, Sanity.io, next-mdx-remote

---

## Phase 1: Project Scaffold & Core Config

### Task 1: Initialize Next.js project with all dependencies

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`

- [ ] **Step 1: Scaffold Next.js with TypeScript**

```bash
cd /home/killermachine/Desktop/Proj/portfolio
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --no-turbopack --use-pnpm
```

- [ ] **Step 2: Install all dependencies**

```bash
cd /home/killermachine/Desktop/Proj/portfolio
pnpm add gsap @gsap/react next-mdx-remote @sanity/client @sanity/image-url @portabletext/react react-icons @react-three/fiber @react-three/drei three
pnpm add -D @types/three @sanity/types sanity
```

- [ ] **Step 3: Configure tailwind.config.ts for pixel fonts and space palette**

Update `tailwind.config.ts`:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./studio/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          black: "#0a0a1a",
          navy: "#0d1b3e",
          purple: "#6b3fa0",
          star: "#f0f0ff",
          green: "#4eff4e",
          orange: "#ff8c00",
          blue: "#4fc3f7",
          red: "#ff4444",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        mono: ["VT323", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scanline: "scanline 8s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: scaffold Next.js with tailwind, fonts, all dependencies"
```

---

### Task 2: Create base layout with CRT overlay and fonts

**Files:**
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `components/ui/CrtOverlay.tsx`
- Create: `components/ui/Nav.tsx`
- Create: `public/fonts/` (download instructions)

- [ ] **Step 1: Write globals.css with CRT effects and pixel utility classes**

`app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

@layer base {
  * {
    image-rendering: pixelated;
    -webkit-font-smoothing: none;
  }
  
  html {
    scroll-behavior: auto;
    background: #0a0a1a;
    color: #f0f0ff;
  }
  
  ::selection {
    background: #4eff4e;
    color: #0a0a1a;
  }
}

@layer components {
  .pixel-border {
    border: 4px solid;
    border-image: repeating-linear-gradient(
      90deg,
      #4fc3f7 0px,
      #4fc3f7 4px,
      transparent 4px,
      transparent 8px
    ) 4;
    box-shadow: 
      inset 0 0 20px rgba(79, 195, 247, 0.1),
      0 0 20px rgba(79, 195, 247, 0.2);
  }
  
  .pixel-card {
    @apply bg-space-navy pixel-border p-6;
    image-rendering: pixelated;
  }
  
  .crt-overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 2px,
      transparent 2px,
      transparent 4px
    );
  }
  
  .crt-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 60%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
  
  .pixel-text {
    font-family: 'Press Start 2P', monospace;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
    letter-spacing: -0.05em;
  }
  
  .typewriter {
    font-family: 'VT323', monospace;
    font-size: 1.25rem;
  }
  
  .scanline {
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.05) 50%
    );
    background-size: 100% 4px;
  }
}

@layer utilities {
  .text-glow-green {
    text-shadow: 0 0 10px #4eff4e, 0 0 20px #4eff4e, 0 0 40px #4eff4e;
  }
  .text-glow-blue {
    text-shadow: 0 0 10px #4fc3f7, 0 0 20px #4fc3f7;
  }
  .text-glow-purple {
    text-shadow: 0 0 10px #6b3fa0, 0 0 20px #6b3fa0;
  }
}
```

- [ ] **Step 2: Create CRT overlay component**

`components/ui/CrtOverlay.tsx`:
```tsx
"use client";

export default function CrtOverlay() {
  return <div className="crt-overlay" aria-hidden="true" />;
}
```

- [ ] **Step 3: Create navigation**

`components/ui/Nav.tsx`:
```tsx
"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "START", href: "#title" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "MISSIONS", href: "#missions" },
  { label: "RESEARCH", href: "#research" },
  { label: "TIMELINE", href: "#timeline" },
  { label: "LOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [active, setActive] = useState("START");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-black/90 backdrop-blur-sm pixel-border border-t-0 border-l-0 border-r-0 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="pixel-text text-space-green text-xs">VIKASH_V.EXE</span>
        <ul className="hidden lg:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-[10px] pixel-text transition-colors ${
                  active === item.label
                    ? "text-space-green text-glow-green"
                    : "text-space-star/60 hover:text-space-green"
                }`}
                onClick={() => setActive(item.label)}
              >
                [{item.label}]
              </a>
            </li>
          ))}
        </ul>
        <button className="lg:hidden pixel-text text-xs text-space-green">
          [MENU]
        </button>
      </div>
    </nav>
  );
}
```

- [ ] **Step 4: Create root layout**

`app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import CrtOverlay from "@/components/ui/CrtOverlay";
import Nav from "@/components/ui/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikash V | Applied Research Scientist & Full-Stack Engineer",
  description: "Portfolio of Vikash V — Applied Research Scientist, Full-Stack Engineer, and Builder of Production Systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-space-black text-space-star antialiased">
        <CrtOverlay />
        <Nav />
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Clean up default page**

Replace `app/page.tsx`:
```tsx
export default function Home() {
  return <main className="min-h-screen" />;
}
```

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat: base layout with CRT overlay, nav, pixel design tokens"
```

---

## Phase 2: Figma Asset Extraction

### Task 3: Export Figma assets as sprites

- [ ] **Step 1: Download space background from Figma**

Use Figma MCP `download_assets` to get the space background (frame `9:4157`) as PNG at 2x scale.

```bash
# Download via the Figma MCP asset URLs (collected from get_design_context)
# Save to public/sprites/space-bg.png, space-stars.png, planets.png
```

- [ ] **Step 2: Create sprite manifest**

`public/sprites/manifest.json`:
```json
{
  "background": "/sprites/space-bg.png",
  "stars": "/sprites/space-stars.png",
  "planets": "/sprites/planets.png",
  "astronaut": "/sprites/astronaut.png"
}
```

- [ ] **Step 3: Create SpriteImage component for pixel-perfect rendering**

`components/ui/SpriteImage.tsx`:
```tsx
import Image from "next/image";
import { CSSProperties } from "react";

interface SpriteImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  style?: CSSProperties;
}

export default function SpriteImage({ src, alt, width, height, className, priority, style }: SpriteImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ imageRendering: "pixelated", ...style }}
      unoptimized
    />
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: Figma sprite assets and SpriteImage component"
```

---

## Phase 3: Pixel Design System

### Task 4: Build pixel UI primitives

**Files:**
- Create: `components/pixel/PixelText.tsx`
- Create: `components/pixel/PixelButton.tsx`
- Create: `components/pixel/PixelCard.tsx`
- Create: `components/pixel/PixelDivider.tsx`
- Create: `components/pixel/PixelStatBar.tsx`
- Create: `components/pixel/PixelTerminal.tsx`

- [ ] **Step 1: PixelText — retro typography wrapper**

`components/pixel/PixelText.tsx`:
```tsx
type PixelVariant = "h1" | "h2" | "h3" | "body" | "mono" | "caption";

interface PixelTextProps {
  variant?: PixelVariant;
  children: React.ReactNode;
  className?: string;
  glow?: "green" | "blue" | "purple" | "none";
  as?: keyof JSX.IntrinsicElements;
}

const variantStyles: Record<PixelVariant, string> = {
  h1: "pixel-text text-3xl md:text-5xl lg:text-7xl leading-relaxed",
  h2: "pixel-text text-xl md:text-3xl lg:text-4xl leading-relaxed",
  h3: "pixel-text text-base md:text-xl lg:text-2xl",
  body: "font-mono text-lg md:text-xl",
  mono: "font-mono text-base",
  caption: "pixel-text text-[10px] md:text-xs",
};

const glowStyles: Record<string, string> = {
  green: "text-glow-green",
  blue: "text-glow-blue",
  purple: "text-glow-purple",
  none: "",
};

export default function PixelText({
  variant = "body",
  children,
  className = "",
  glow = "none",
  as: Tag = "span",
}: PixelTextProps) {
  return (
    <Tag className={`${variantStyles[variant]} ${glowStyles[glow]} ${className}`}>
      {children}
    </Tag>
  );
}
```

- [ ] **Step 2: PixelButton**

`components/pixel/PixelButton.tsx`:
```tsx
"use client";

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  disabled?: boolean;
}

const variantClasses = {
  primary: "bg-space-green text-space-black hover:bg-space-green/80 border-space-green",
  secondary: "bg-transparent text-space-blue border-space-blue hover:bg-space-blue/10",
  danger: "bg-space-red text-white border-space-red hover:bg-space-red/80",
};

export default function PixelButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}: PixelButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        pixel-text text-xs px-6 py-3 border-4
        ${variantClasses[variant]}
        transition-all active:translate-y-1
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{ imageRendering: "pixelated" }}
    >
      {children}
    </button>
  );
}
```

- [ ] **Step 3: PixelCard**

`components/pixel/PixelCard.tsx`:
```tsx
interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "blue" | "purple" | "green" | "none";
}

const glowMap = {
  blue: "shadow-[0_0_20px_rgba(79,195,247,0.2)] border-space-blue/50",
  purple: "shadow-[0_0_20px_rgba(107,63,160,0.2)] border-space-purple/50",
  green: "shadow-[0_0_20px_rgba(78,255,78,0.2)] border-space-green/50",
  none: "",
};

export default function PixelCard({ children, className = "", glow = "none" }: PixelCardProps) {
  return (
    <div className={`pixel-card ${glowMap[glow]} ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 4: PixelDivider**

`components/pixel/PixelDivider.tsx`:
```tsx
interface PixelDividerProps {
  variant?: "solid" | "dashed" | "double";
  color?: string;
}

export default function PixelDivider({ variant = "solid", color = "space-blue" }: PixelDividerProps) {
  const patterns = {
    solid: `border-t-4 border-${color}`,
    dashed: `border-t-4 border-dashed border-${color}`,
    double: `border-t-2 border-b-2 border-${color} h-2`,
  };

  return <div className={`w-full my-8 ${patterns[variant]}`} />;
}
```

- [ ] **Step 5: PixelStatBar — RPG-style HP/stat bar**

`components/pixel/PixelStatBar.tsx`:
```tsx
interface PixelStatBarProps {
  label: string;
  value: number;
  max?: number;
  color?: "green" | "blue" | "purple" | "orange";
}

const colorMap = {
  green: "bg-space-green",
  blue: "bg-space-blue",
  purple: "bg-space-purple",
  orange: "bg-space-orange",
};

export default function PixelStatBar({ label, value, max = 100, color = "green" }: PixelStatBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="pixel-text text-[8px] text-space-star/80">{label}</span>
        <span className="pixel-text text-[8px] text-space-star/60">{value}/{max}</span>
      </div>
      <div className="w-full h-4 border-2 border-space-star/30 bg-space-black relative">
        <div
          className={`h-full ${colorMap[color]} transition-all duration-1000`}
          style={{ width: `${pct}%` }}
        />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(0,0,0,0.1)_3px,rgba(0,0,0,0.1)_6px)]" />
      </div>
    </div>
  );
}
```

- [ ] **Step 6: PixelTerminal — retro terminal text display**

`components/pixel/PixelTerminal.tsx`:
```tsx
"use client";

import { useEffect, useState } from "react";

interface PixelTerminalProps {
  lines: string[];
  className?: string;
  typing?: boolean;
}

export default function PixelTerminal({ lines, className = "", typing = true }: PixelTerminalProps) {
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
    }, 30 + Math.random() * 30);
    return () => clearTimeout(timer);
  }, [currentLine, currentChar, lines, typing]);

  return (
    <div className={`font-mono text-lg md:text-xl text-space-green ${className}`}>
      {visibleLines.map((line, i) => (
        <div key={i} className="leading-relaxed">
          <span className="text-space-blue mr-2">&gt;</span>
          {line}
        </div>
      ))}
      {currentLine < lines.length && (
        <div className="leading-relaxed">
          <span className="text-space-blue mr-2">&gt;</span>
          {lines[currentLine].slice(0, currentChar)}
          <span className="animate-blink">█</span>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: pixel design system — Text, Button, Card, Divider, StatBar, Terminal"
```

---

## Phase 4: Scroll Infrastructure & Starfield

### Task 5: GSAP ScrollTrigger setup and Three.js starfield

**Files:**
- Create: `lib/gsap.ts`
- Create: `components/three/Starfield.tsx`
- Create: `components/ui/ScrollProgress.tsx`

- [ ] **Step 1: GSAP registry setup**

`lib/gsap.ts`:
```ts
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

- [ ] **Step 2: Three.js starfield background**

`components/three/Starfield.tsx`:
```tsx
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Stars({ count = 1000 }) {
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.02;
      meshRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#f0f0ff"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function Starfield() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.1} />
        <Stars count={800} />
      </Canvas>
    </div>
  );
}
```

- [ ] **Step 3: Scroll progress indicator**

`components/ui/ScrollProgress.tsx`:
```tsx
"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      <span className="pixel-text text-[8px] text-space-green">
        LEVEL {Math.floor(progress / 10) + 1}-{Math.floor(progress) % 10 + 1}
      </span>
      <div className="w-24 h-3 border-2 border-space-green bg-space-black">
        <div
          className="h-full bg-space-green transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Update root layout to include Starfield and ScrollProgress**

Edit `app/layout.tsx` to add Starfield and ScrollProgress inside the body:
```tsx
import Starfield from "@/components/three/Starfield";
import ScrollProgress from "@/components/ui/ScrollProgress";

// Inside body, before {children}:
<Starfield />
// Inside body, after {children}:
<ScrollProgress />
```

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: GSAP ScrollTrigger setup, Three.js starfield, scroll progress"
```

---

## Phase 5: Hero & About Sections

### Task 6: Title Screen (Hero)

**Files:**
- Create: `components/sections/TitleScreen.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Build TitleScreen with GSAP timeline**

`components/sections/TitleScreen.tsx`:
```tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import PixelText from "@/components/pixel/PixelText";
import PixelButton from "@/components/pixel/PixelButton";

export default function TitleScreen() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(".title-char", 
        { opacity: 0, y: 50, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1 }
      )
      .fromTo(".title-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(".title-cta",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.2"
      );

      gsap.to(".title-astronaut", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const nameChars = "VIKASH V".split("");

  return (
    <section
      id="title"
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4"
    >
      <div className="text-center space-y-8">
        <div className="flex gap-2 justify-center flex-wrap">
          {nameChars.map((char, i) => (
            <span
              key={i}
              className="title-char pixel-text text-4xl md:text-7xl lg:text-9xl text-space-green text-glow-green"
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </div>

        <div className="title-subtitle">
          <PixelText variant="h2" glow="blue">
            APPLIED RESEARCH SCIENTIST
          </PixelText>
          <PixelText variant="body" className="block mt-2 text-space-star/70">
            Full-Stack Engineer &bull; Builder &bull; Space Explorer
          </PixelText>
        </div>

        <div className="title-cta pt-8">
          <PixelButton onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            [ PRESS START ]
          </PixelButton>
        </div>
      </div>

      <div className="absolute bottom-8 title-astronaut">
        <div className="pixel-text text-4xl animate-bounce">🧑‍🚀</div>
      </div>

      <div className="absolute bottom-2 pixel-text text-[8px] text-space-star/40 animate-blink">
        ▼ SCROLL TO CONTINUE ▼
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update page.tsx**

```tsx
import TitleScreen from "@/components/sections/TitleScreen";

export default function Home() {
  return (
    <main>
      <TitleScreen />
    </main>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: hero title screen with GSAP intro animation"
```

---

### Task 7: About Section (RPG Character Stats)

**Files:**
- Create: `components/sections/About.tsx`

- [ ] **Step 1: Build About section**

`components/sections/About.tsx`:
```tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import PixelText from "@/components/pixel/PixelText";
import PixelCard from "@/components/pixel/PixelCard";
import PixelStatBar from "@/components/pixel/PixelStatBar";
import PixelDivider from "@/components/pixel/PixelDivider";

const STATS = [
  { label: "FRONTEND", value: 95, color: "green" as const },
  { label: "BACKEND", value: 90, color: "blue" as const },
  { label: "AI/ML", value: 85, color: "purple" as const },
  { label: "CYBERSEC", value: 80, color: "orange" as const },
  { label: "BLOCKCHAIN", value: 75, color: "green" as const },
  { label: "DEVOPS", value: 85, color: "blue" as const },
];

const ACHIEVEMENTS = [
  "ISRO Young Scientist Award (2019)",
  "4 NPM Packages Published",
  "Published RFID Research Paper",
  "1st Place — Code Debugging (2023)",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-card",
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="min-h-screen flex items-center relative z-10 px-4 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <PixelText variant="h2" glow="green" className="text-center mb-16 block">
          [ CHARACTER SELECT ]
        </PixelText>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bio Card */}
          <PixelCard glow="green" className="about-card">
            <PixelText variant="h3" glow="green">VIKASH V</PixelText>
            <PixelText variant="mono" className="block mt-2 text-space-blue">
              CLASS: Applied Research Scientist
            </PixelText>
            <PixelText variant="mono" className="block text-space-star/60 mt-1">
              LVL: 22 &bull; HP: 100/100 &bull; MP: ∞
            </PixelText>
            <PixelDivider color="space-green" variant="dashed" />
            <PixelText variant="body" className="text-space-star/80">
              Applied Research Scientist and full-stack engineer building production systems
              across MERN/JAMstack, blockchain, and IoT. Published researcher in RFID and AI.
              Currently driving R&D at Nuvai AI Solutions.
            </PixelText>
          </PixelCard>

          {/* Stats Card */}
          <PixelCard glow="blue" className="about-card space-y-4">
            <PixelText variant="h3" glow="blue">[ STATS ]</PixelText>
            {STATS.map((stat) => (
              <PixelStatBar
                key={stat.label}
                label={stat.label}
                value={stat.value}
                color={stat.color}
              />
            ))}
          </PixelCard>

          {/* Achievements Card */}
          <PixelCard glow="purple" className="about-card lg:col-span-2">
            <PixelText variant="h3" glow="purple">[ ACHIEVEMENTS UNLOCKED ]</PixelText>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach} className="flex items-center gap-3">
                  <span className="text-space-green pixel-text text-sm">★</span>
                  <PixelText variant="mono" className="text-space-star/80">{ach}</PixelText>
                </div>
              ))}
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import About from "@/components/sections/About";

// Add after TitleScreen:
<About />
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: about section with RPG stat cards and achievements"
```

---

## Phase 6-7: Continue with remaining sections...

### Task 8: Skill Tree Section

**Files:**
- Create: `components/sections/SkillTree.tsx`

Complete skill tree with branches for all skill categories, animated progress bars, GSAP pinning.

### Task 9: Mission Log (Projects)

**Files:**
- Create: `components/sections/MissionLog.tsx`

Horizontal-scroll pixel cards for: Deployable Search Engine, IoT Monitor, Self-Driving Vehicle, Web3 Platform, plus NPM packages.

### Task 10: Research Section (Three.js Orbits)

**Files:**
- Create: `components/sections/Research.tsx`
- Create: `components/three/OrbitSystem.tsx`

Three.js orbit scene with publications as orbiting planets.

### Task 11: Timeline Section

**Files:**
- Create: `components/sections/Timeline.tsx`

Career timeline: Nuvai AI → SharpAbacus → XploreITCorp → Litztech → Nxtlogic → Education.

### Task 12: Blog Section

**Files:**
- Create: `components/sections/CaptainsLog.tsx`
- Create: `app/blog/page.tsx`
- Create: `app/blog/[slug]/page.tsx`

Terminal-style blog index and MDX post rendering.

### Task 13: Contact & Credits

**Files:**
- Create: `components/sections/Transmission.tsx`
- Create: `components/sections/Credits.tsx`
- Create: `app/api/contact/route.ts`

Contact form with terminal aesthetic, credits with achievements high-score table.

---

## Phase 8: Sanity CMS

### Task 14: Sanity setup, schemas, and studio

**Files:**
- Create: `sanity.config.ts`
- Create: `studio/sanity.config.ts`
- Create: `studio/schemas/blogPost.ts`
- Create: `studio/schemas/project.ts`
- Create: `studio/schemas/experience.ts`
- Create: `studio/schemas/skill.ts`
- Create: `studio/schemas/publication.ts`
- Create: `lib/sanity.ts`

### Task 15: Data fetching and rendering

Connect all sections to Sanity data, with fallback static data from resume.

---

## Phase 9: Polish & Deploy

### Task 16: Responsive, loading states, error pages, SEO

### Task 17: Vercel deployment

---

## Execution Strategy

Each task produces a working commit. Total: ~17 tasks across 9 phases.
Approximate timeline: Phases 1-4 (foundation), Phases 5-7 (sections), Phase 8 (CMS), Phase 9 (polish).

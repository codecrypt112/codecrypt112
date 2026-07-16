"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { motion } from "framer-motion";

const LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/codecrypt112",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vikaash-frontend/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:skpvikaash@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const HIGHLIGHTS = [
  { label: "ISRO Young Scientist", value: "Research" },
  { label: "4 NPM packages", value: "Open Source" },
  { label: "Published RFID research", value: "Paper" },
  { label: "Google Cyber certified", value: "Security" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-label", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".hero-name", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        .fromTo(".hero-tagline", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.4")
        .fromTo(".hero-links a", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.06 }, "-=0.3")
        .fromTo(".hero-badge", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.05 }, "-=0.2")
        .fromTo(".hero-cta", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.08 }, "-=0.2");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-[100dvh] flex items-center relative px-5 sm:px-8 lg:px-10 pt-24 pb-20"
    >
      {/* Subtle gradient orb background */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #10b981 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[1200px] mx-auto">
        <p className="hero-label section-label mb-6">
          Applied Research Scientist / Full-Stack Engineer
        </p>

        <h1 className="hero-name heading-xl text-[clamp(2.5rem,8vw,5.5rem)] mb-6">
          Vikash
          <span className="text-accent">.</span>V
        </h1>

        <p className="hero-tagline body-text text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          I build dependable software for the web, mobile, and embedded systems
          &mdash; then poke at it until I find a faster, cleaner, or safer way to
          do the same thing again. Currently leading applied research at Nuvai AI.
        </p>

        <div className="hero-links flex gap-3 mb-10">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-border-hover hover:bg-surface transition-all active:scale-[0.96]"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.label}
              className="hero-badge flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-surface border border-border"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" aria-hidden="true" />
              <span className="text-[13px] text-text-secondary font-medium">{h.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="hero-cta inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium text-sm rounded-lg hover:bg-accent-hover transition-colors active:scale-[0.98]"
          >
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
          <Link
            href="/blog"
            className="hero-cta inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary font-medium text-sm rounded-lg hover:text-text-primary hover:border-border-hover hover:bg-surface transition-all active:scale-[0.98]"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

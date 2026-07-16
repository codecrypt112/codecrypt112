"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const PACKAGES = [
  {
    name: "cache-composer",
    version: "2.0.0",
    desc: "Multi-layer caching with memory, Redis, and file-store strategies. Auto-invalidation, cache warming, and a real-time analytics dashboard. Adopted by 15+ production apps.",
    downloads: "15+ apps",
  },
  {
    name: "reverse-stackoverflow",
    version: "2.0.0",
    desc: "AI-powered CLI code reviewer that asks junior-developer-friendly questions. NLP-driven, context-aware suggestions. v2 published on npm.",
    downloads: "CLI tool",
  },
  {
    name: "optimix-image-pipeline",
    version: "2.0.0",
    desc: "Modern image pipeline: WebP / AVIF, responsive generation, CDN integration, batch processing for automated workflows. v2 published on npm.",
    downloads: "Image pipeline",
  },
  {
    name: "onboard-flow-engine",
    version: "1.4.0",
    desc: "Framework-agnostic onboarding engine for product tours, interactive tooltips, and progress checklists. Zero runtime dependencies. Adopted by 10+ SaaS apps.",
    downloads: "10+ apps",
  },
];

function CopyInstall({ pkg }: { pkg: string }) {
  const [copied, setCopied] = useState(false);
  const cmd = `npm i ${pkg}`;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
    } catch {
      /* clipboard unavailable in some browsers */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="flex items-stretch rounded-lg border border-border bg-bg overflow-hidden group/code">
      <span className="px-3 flex items-center text-accent/60 border-r border-border font-mono text-sm select-none">
        $
      </span>
      <code className="px-3 py-2 font-mono text-xs text-text-secondary flex-1 truncate flex items-center gap-1.5">
        npm i <span className="text-accent">{pkg}</span>
      </code>
      <button
        type="button"
        onClick={onCopy}
        aria-label={`Copy install command for ${pkg}`}
        className="px-3 border-l border-border font-mono text-xs text-text-muted hover:text-accent hover:bg-accent-muted transition-colors active:scale-[0.96]"
      >
        {copied ? "done" : "copy"}
      </button>
    </div>
  );
}

export default function NPMSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pkg-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ref.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="open-source" ref={ref} className="py-32 md:py-48 px-5 sm:px-8 lg:px-10 relative">
      <div className="max-w-[1200px] mx-auto">
        <p className="section-label mb-3">Open Source</p>
        <h2 className="heading-lg text-2xl md:text-4xl mb-4 tracking-tight">
          NPM packages
        </h2>
        <p className="body-text mb-12 text-[15px]">
          Open-source libraries I maintain. Built with TypeScript, designed
          to solve real problems, published on npm.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className="pkg-card card p-6 md:p-7">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="w-8 h-8 rounded-lg bg-accent-muted text-accent flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m7.5 4.27 9 5.15" />
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-text-primary tracking-tight font-mono">
                  {pkg.name}
                </h3>
                <span className="text-[10px] font-mono text-accent bg-accent-muted px-2 py-0.5 rounded-md">
                  v{pkg.version}
                </span>
              </div>

              <p className="body-text text-sm leading-relaxed mb-5">
                {pkg.desc}
              </p>

              <CopyInstall pkg={pkg.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

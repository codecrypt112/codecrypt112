"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const EXPERIENCES = [
  {
    company: "Nuvai AI Solutions Pvt. Ltd",
    role: "Applied Research Scientist — I",
    date: "Jan 2026 – Present",
    desc: "Contributing to R&D initiatives and the delivery of AI/ML solutions. Managing research infrastructure, including compute environments and tooling for experimentation and training. Working on model optimization and training pipelines.",
    highlight: "currently here",
    current: true,
  },
  {
    company: "XploreITCorp",
    role: "Cybersecurity Intern",
    date: "Jun 2025 – Jul 2025",
    desc: "Conducted security assessments and penetration testing on internal applications. Identified, documented, and helped remediate critical vulnerabilities. Automated routine security scans with custom Python scripts.",
    highlight: "security auditing",
    current: false,
  },
  {
    company: "SharpAbacus Learning",
    role: "Full Stack Development Intern",
    date: "Jul 2024 – Mar 2025",
    desc: "Developed interactive features for a learning platform using Svelte, Tailwind, MongoDB, and Node.js. Built gamified modules with the Canvas API and WebSockets to enhance student engagement.",
    highlight: "full-stack development",
    current: false,
  },
  {
    company: "Litztech Pvt Ltd",
    role: "MERN Stack Development Intern",
    date: "Feb 2023",
    desc: "Integrated application performance monitoring with New Relic. Optimized database queries using Redis caching and created comprehensive test suites using Jest and Cypress.",
    highlight: "backend & testing",
    current: false,
  },
  {
    company: "Nxtlogic Software Solutions",
    role: "Full Stack Development Intern",
    date: "Jan 2023",
    desc: "Built backend services using ASP.NET Core and MySQL. Developed responsive, performant landing pages and collaborated with a development team under agile methodologies.",
    highlight: "web services",
    current: false,
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".xp-item",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
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
    <section id="experience" ref={ref} className="py-32 md:py-48 px-5 sm:px-8 lg:px-10 relative">
      <div className="max-w-[1200px] mx-auto">
        <p className="section-label mb-3">Trajectory</p>
        <h2 className="heading-lg text-2xl md:text-4xl mb-12 tracking-tight">
          Where I&apos;ve worked
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border hidden md:block" aria-hidden="true" />

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company} className="xp-item relative md:pl-10">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-8">
                  <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center ${
                    exp.current
                      ? "border-accent bg-accent/10"
                      : "border-border bg-surface"
                  }`}>
                    {exp.current && (
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
                    )}
                  </div>
                </div>

                <div className="card p-6 md:p-8 hover:-translate-y-[2px]">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-text-primary tracking-tight mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-accent font-medium">
                        {exp.role}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-text-muted whitespace-nowrap mt-1">
                      {exp.date}
                    </span>
                  </div>

                  <p className="body-text text-[15px] leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  {exp.highlight && (
                    <span className="tag">
                      {exp.highlight}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

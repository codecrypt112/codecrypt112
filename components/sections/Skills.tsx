"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const CATEGORIES = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C / C++", "Java", "Solidity", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Svelte", "React Native", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Flask", "ASP.NET Core", "GraphQL", "WebSocket"],
  },
  {
    name: "Infrastructure",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "CI / CD"],
  },
  {
    name: "Security",
    skills: ["Pen-testing", "Burp Suite", "Metasploit", "Wireshark", "Nmap", "OWASP ZAP"],
  },
  {
    name: "AI & Blockchain",
    skills: ["TensorFlow", "Computer Vision", "IoT / Arduino", "Solidity", "Hardhat", "Web3.js"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-row",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
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
    <section id="skills" ref={ref} className="py-32 md:py-48 px-5 sm:px-8 lg:px-10 relative">
      <div className="max-w-[1200px] mx-auto">
        <p className="section-label mb-3">Stack</p>
        <h2 className="heading-lg text-2xl md:text-4xl mb-4 tracking-tight">
          Tools I reach for
        </h2>
        <p className="body-text mb-12 text-[15px]">
          A working set of languages, frameworks, and infrastructure tools
          &mdash; what I use day-to-day and what I&apos;ve shipped with.
        </p>

        <div className="space-y-0">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="skill-row grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6 border-b border-border group"
            >
              <div className="md:col-span-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-text-primary tracking-tight">
                  {cat.name}
                </h3>
              </div>
              <div className="md:col-span-9 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

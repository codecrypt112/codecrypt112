"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const PROJECTS = [
  {
    name: "Deployable Search Engine",
    tech: ["Flask", "OpenSearch", "Redis", "Docker"],
    desc: "Production-grade web search engine using Flask microservices and OpenSearch. Features distributed caching with Redis and Docker containerization for horizontal scalability, achieving a query response time of 150ms.",
    metric: "2024",
  },
  {
    name: "React Native IoT Monitor",
    tech: ["React Native", "Firebase", "WebSocket", "TensorFlow"],
    desc: "Real-time IoT monitoring dashboard for tracking concurrent sensor connections. Uses WebSockets for live streams, Redux for state management, and TensorFlow for anomaly detection across 1,000+ devices.",
    metric: "Personal Project",
  },
  {
    name: "Autonomous Self-Driving Vehicle",
    tech: ["Python", "TensorFlow", "Arduino", "OpenCV"],
    desc: "Scale autonomous vehicle utilizing a behavioral cloning CNN. Controlled by an Arduino-based hardware platform running a 40ms control loop, with OpenCV for lane detection and obstacle avoidance.",
    metric: "Coursework",
  },
  {
    name: "Web3 Freelancing Platform",
    tech: ["Solidity", "Ethereum", "React", "MetaMask"],
    desc: "Decentralized freelancer marketplace on Ethereum. Implements Solidity escrow smart contracts to automate milestone-based payments and dispute resolution without intermediaries.",
    metric: "Personal Project",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj-card",
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

  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" ref={ref} className="py-32 md:py-48 px-5 sm:px-8 lg:px-10 relative">
      <div className="max-w-[1200px] mx-auto">
        <p className="section-label mb-3">Selected Work</p>
        <h2 className="heading-lg text-2xl md:text-4xl mb-12 tracking-tight">
          Projects I&apos;ve shipped
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured project — large card */}
          <article className="proj-card lg:col-span-3 card p-8 md:p-10 group hover:-translate-y-[2px]">
            <div className="flex items-baseline justify-between mb-6">
              <span className="section-label text-accent/80">Featured</span>
              <span className="font-mono text-xs text-text-muted bg-surface-2 px-2.5 py-1 rounded-md">
                {featured.metric}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-4 tracking-tight leading-snug">
              {featured.name}
            </h3>
            <p className="body-text leading-relaxed mb-8 text-[15px]">
              {featured.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </article>

          {/* Smaller stack */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.map((proj) => (
              <article
                key={proj.name}
                className="proj-card card p-6 group hover:-translate-y-[2px] flex-1"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-mono text-xs text-text-muted bg-surface-2 px-2.5 py-1 rounded-md">
                    {proj.metric}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-3 tracking-tight leading-snug">
                  {proj.name}
                </h3>
                <p className="body-text text-sm leading-relaxed mb-4">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span key={t} className="tag text-[10px]">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

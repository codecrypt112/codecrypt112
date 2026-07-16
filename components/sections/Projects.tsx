"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const PROJECTS = [
  {
    name: "Deployable Search Engine",
    tech: ["Flask", "OpenSearch", "Redis", "Docker"],
    desc: "Production-grade web search engine using Flask microservices and OpenSearch. Distributed caching with Redis and Docker containerization for horizontal scalability. Custom ranking reduced query response time from 250 ms to 150 ms across 50k+ daily active users.",
    metric: "150ms queries",
  },
  {
    name: "React Native IoT Monitor",
    tech: ["React Native", "Firebase", "WebSocket", "TensorFlow"],
    desc: "Real-time IoT monitoring at 99.9% uptime across 1,000+ concurrent sensor connections. ML anomaly detection prevented 95% of potential equipment failures; WebSocket + Redux cut data latency by 60%.",
    metric: "99.9% uptime",
  },
  {
    name: "Autonomous Self-Driving Vehicle",
    tech: ["Python", "TensorFlow", "Arduino", "OpenCV"],
    desc: "Behaviour-cloning CNN trained on 20,000+ hours of simulated driving. Arduino-controlled hardware with a 40 ms control loop. Computer vision for lane detection, obstacle avoidance, and traffic-sign recognition.",
    metric: "40ms loop",
  },
  {
    name: "Web3 Freelancing Platform",
    tech: ["Solidity", "Ethereum", "React", "MetaMask"],
    desc: "Decentralised freelancer marketplace on Ethereum. Escrow smart contracts with milestone payments and dispute resolution \u2014 no intermediaries, cross-border by default.",
    metric: "On-chain",
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

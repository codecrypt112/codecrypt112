"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const PRODUCTS = [
  {
    name: "FineTune Studio",
    type: "SaaS Platform",
    desc: "A no-code platform to create, customise, and deploy fine-tuned AI models. Visual prompt builder, RAG-based document grounding, OpenAI-compatible API endpoints, and side-by-side model comparison.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind", "OpenAI", "RAG"],
    link: "https://finetune-studio.onrender.com",
    linkLabel: "Visit",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v8l4-2" />
        <circle cx="12" cy="14" r="8" />
      </svg>
    ),
  },
  {
    name: "Halo Tasks",
    type: "Mobile App",
    desc: "A full-featured task app with voice notes, smart deadline notifications, burnout monitoring, Razorpay subscriptions, and Firebase real-time sync. Built for people who need more than a basic to-do list.",
    tech: ["React Native", "Expo", "Firebase", "Razorpay", "Node.js", "MongoDB"],
    link: null,
    linkLabel: "In stores",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <line x1="12" x2="12.01" y1="18" y2="18" />
      </svg>
    ),
  },
];

export default function Products() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.15,
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
    <section id="products" ref={ref} className="py-32 md:py-48 px-5 sm:px-8 lg:px-10 relative">
      <div className="max-w-[1200px] mx-auto">
        <p className="section-label mb-3">Products</p>
        <h2 className="heading-lg text-2xl md:text-4xl mb-12 tracking-tight">
          Things in production
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="product-card card p-7 md:p-8 group hover:-translate-y-[2px]"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-muted text-accent flex items-center justify-center border border-accent/20">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-secondary mt-0.5">
                      {product.type}
                    </p>
                  </div>
                </div>
                {product.link ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-text-muted hover:text-accent border border-border hover:border-accent/30 px-3 py-1.5 rounded-lg transition-all"
                  >
                    {product.linkLabel}
                    <span className="ml-1">&rarr;</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono text-text-muted border border-border px-3 py-1.5 rounded-lg">
                    {product.linkLabel}
                  </span>
                )}
              </div>

              <p className="body-text text-[15px] leading-relaxed mb-6">
                {product.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {product.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

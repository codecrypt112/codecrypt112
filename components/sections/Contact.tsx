"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-panel",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom-=80",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (r.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else throw new Error();
    } catch {
      setStatus("error");
    }
  };

  const fieldBase =
    "w-full bg-bg border border-border text-text-primary text-sm p-3.5 rounded-lg placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all";

  return (
    <section ref={ref} id="contact" className="py-32 md:py-48 px-5 sm:px-8 lg:px-10 relative">
      <div className="max-w-[1200px] mx-auto">
        <p className="section-label mb-3">Reach Out</p>
        <h2 className="heading-lg text-2xl md:text-4xl mb-12 tracking-tight">
          Let&apos;s talk
        </h2>

        <div className="contact-panel grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left: text + channels */}
          <div className="space-y-8">
            <p className="body-text text-[15px] leading-relaxed">
              I&apos;m open to full-stack engineering, applied research, and
              security roles &mdash; and happy to chat about side projects,
              open-source, or interesting problems in general.
            </p>

            <div>
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
                Direct channels
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:skpvikaash@gmail.com"
                    className="inline-flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors group"
                  >
                    <svg className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    skpvikaash@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/codecrypt112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors group"
                  >
                    <svg className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    github.com/codecrypt112
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vikaash-frontend/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors group"
                  >
                    <svg className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    linkedin.com/in/vikaash-frontend
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                Response
              </p>
              <p className="text-sm text-text-muted">
                I usually reply within 48 hours. Serious inquiries get
                priority; everything else still gets a reply.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="card p-6 md:p-8">
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-muted flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-text-primary mb-2">
                  Message sent
                </p>
                <p className="text-sm text-text-secondary">
                  I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    className={fieldBase}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@domain.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                    className={fieldBase}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="What would you like to talk about?"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    required
                    className={`${fieldBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3.5 bg-accent text-white font-medium text-sm rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "error"
                      ? "Error — try again"
                      : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Vikash V
          </p>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="font-mono text-xs text-text-muted hover:text-accent transition-colors">
              Blog
            </Link>
            <a
              href="https://github.com/codecrypt112"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

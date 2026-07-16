"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="blog-nav">
        <div className="blog-nav-left">
          <button
            className="menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              color: "var(--blog-text)",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
          <Link href="/blog" className="blog-nav-logo">
            VIKASH<span>.LOG</span>
          </Link>
        </div>
        <ul className="blog-nav-links">
          <li>
            <Link href="/blog">Home</Link>
          </li>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <>
          <div
            className="mobile-sidebar-overlay"
            onClick={() => setMobileOpen(false)}
          />
          <div className={`mobile-sidebar open`}>
            <button
              className="mobile-sidebar-close"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div style={{ marginTop: "2rem" }}>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <li>
                  <Link
                    href="/blog"
                    style={{ color: "var(--blog-text)", textDecoration: "none", fontFamily: "var(--blog-font-mono)", fontSize: "0.9rem" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    style={{ color: "var(--blog-text-secondary)", textDecoration: "none", fontFamily: "var(--blog-font-mono)", fontSize: "0.9rem" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

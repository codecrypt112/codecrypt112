import type { Metadata } from "next";
import Link from "next/link";
import SubNav from "@/components/blog/SubNav";
import "./blog.css";

export const metadata: Metadata = {
  title: "Vikash V | Blog",
  description:
    "Personal blog by Vikash V — thoughts on engineering, research, security, and open source.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg pt-16">
      {/* Blog sub-header */}
      <div className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Portfolio
          </Link>
          <SubNav />
        </div>
      </div>

      <main className="max-w-[1100px] mx-auto px-5 sm:px-8 py-12 md:py-16">
        {children}
      </main>

      <footer className="border-t border-border">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-6">
          <p className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Vikash V
          </p>
        </div>
      </footer>
    </div>
  );
}


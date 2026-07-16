"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { sanityClient } from "@/lib/sanity";
import { LOCAL_POSTS } from "@/lib/blogPosts";

const COUNT_QUERY = `count(*[_type == "blogPost"])`;
const TAGS_QUERY = `*[_type == "blogPost" && defined(tags)].tags[]`;

export default function BlogSidebar() {
  const searchParams = useSearchParams();
  const activeCat = searchParams.get("category") || "All";
  const [postCount, setPostCount] = useState(LOCAL_POSTS.length);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const localTags = Array.from(new Set(LOCAL_POSTS.flatMap((p) => p.tags))).sort();
    setCategories(localTags);

    sanityClient.fetch<number>(COUNT_QUERY)
      .then((count) => {
        if (count > 0) setPostCount(count);
      })
      .catch(() => {
        setPostCount(LOCAL_POSTS.length);
      });

    sanityClient.fetch<string[]>(TAGS_QUERY)
      .then((tags) => {
        if (tags && tags.length > 0) {
          const unique = Array.from(new Set(tags)).sort();
          setCategories(unique);
        }
      })
      .catch(() => {
        setCategories(localTags);
      });
  }, []);

  return (
    <aside className="blog-sidebar space-y-8">
      <div className="sidebar-widget p-6 rounded-2xl bg-surface border border-border">
        <h3 className="sidebar-widget-title text-sm font-mono font-semibold text-text-primary border-b border-border pb-3 mb-4 flex items-center justify-between">
          <span>{"// ABOUT"}</span>
          <span className="text-xs text-text-muted">01</span>
        </h3>
        <p className="sidebar-about-text text-sm text-text-secondary leading-relaxed">
          I am Vikash. Welcome to my corner of the internet. I write about
          engineering, security research, malware analysis, and constant-time cryptography.
        </p>
      </div>

      <div className="sidebar-widget p-6 rounded-2xl bg-surface border border-border">
        <h3 className="sidebar-widget-title text-sm font-mono font-semibold text-text-primary border-b border-border pb-3 mb-4 flex items-center justify-between">
          <span>{"// STATS"}</span>
          <span className="text-xs text-text-muted">02</span>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-surface-2 border border-border text-center">
            <span className="block text-2xl font-semibold text-accent font-mono">{postCount}</span>
            <span className="text-[10px] uppercase font-mono text-text-muted">Posts</span>
          </div>
          <div className="p-3 rounded-xl bg-surface-2 border border-border text-center">
            <span className="block text-2xl font-semibold text-accent font-mono">{categories.length}</span>
            <span className="text-[10px] uppercase font-mono text-text-muted">Tags</span>
          </div>
        </div>
      </div>

      <div className="sidebar-widget p-6 rounded-2xl bg-surface border border-border">
        <h3 className="sidebar-widget-title text-sm font-mono font-semibold text-text-primary border-b border-border pb-3 mb-4 flex items-center justify-between">
          <span>{"// CATEGORIES"}</span>
          <span className="text-xs text-text-muted">03</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 ${
              activeCat === "All"
                ? "bg-accent/10 border-accent text-accent shadow-[0_0_8px_rgba(16,185,129,0.1)]"
                : "bg-surface-2 border-border text-text-muted hover:text-text-secondary hover:border-border-hover"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 ${
                activeCat === cat
                  ? "bg-accent/10 border-accent text-accent shadow-[0_0_8px_rgba(16,185,129,0.1)]"
                  : "bg-surface-2 border-border text-text-muted hover:text-text-secondary hover:border-border-hover"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}


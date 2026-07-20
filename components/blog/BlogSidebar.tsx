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
    <aside className="blog-sidebar space-y-6">
      {/* About Widget */}
      <div className="sidebar-widget p-6 rounded-2xl bg-surface/30 backdrop-blur-md border border-border/80 hover:border-border transition-colors duration-300">
        <h3 className="sidebar-widget-title text-xs font-mono font-bold text-text-primary border-b border-border/60 pb-3 mb-4 flex items-center justify-between">
          <span className="tracking-wider">{"// AUTHOR"}</span>
          <span className="text-[10px] text-accent font-semibold tracking-widest">01</span>
        </h3>
        <div className="space-y-3">
          <p className="sidebar-about-text text-xs text-text-secondary leading-relaxed">
            I am Vikash, an Applied Research Scientist specializing in ML infrastructure, optimization, and secure systems design.
          </p>
          <p className="sidebar-about-text text-xs text-text-muted leading-relaxed">
            Here I share deep dives, research notes, and reflections on code, security, and compiling imagination.
          </p>
        </div>
      </div>

      {/* Stats Widget */}
      <div className="sidebar-widget p-6 rounded-2xl bg-surface/30 backdrop-blur-md border border-border/80 hover:border-border transition-colors duration-300">
        <h3 className="sidebar-widget-title text-xs font-mono font-bold text-text-primary border-b border-border/60 pb-3 mb-4 flex items-center justify-between">
          <span className="tracking-wider">{"// STATS"}</span>
          <span className="text-[10px] text-accent font-semibold tracking-widest">02</span>
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-surface-2/30 border border-border/60 text-center hover:border-accent/20 transition-colors">
            <span className="block text-2xl font-bold text-accent font-mono tracking-tight">{postCount}</span>
            <span className="text-[9px] uppercase font-mono text-text-muted tracking-wider">Articles</span>
          </div>
          <div className="p-4 rounded-xl bg-surface-2/30 border border-border/60 text-center hover:border-accent/20 transition-colors">
            <span className="block text-2xl font-bold text-accent font-mono tracking-tight">{categories.length}</span>
            <span className="text-[9px] uppercase font-mono text-text-muted tracking-wider">Tags</span>
          </div>
        </div>
      </div>

      {/* Quick Links / Resources */}
      <div className="sidebar-widget p-6 rounded-2xl bg-surface/30 backdrop-blur-md border border-border/80 hover:border-border transition-colors duration-300">
        <h3 className="sidebar-widget-title text-xs font-mono font-bold text-text-primary border-b border-border/60 pb-3 mb-4 flex items-center justify-between">
          <span className="tracking-wider">{"// INDEX"}</span>
          <span className="text-[10px] text-accent font-semibold tracking-widest">03</span>
        </h3>
        <ul className="space-y-2 text-xs font-mono">
          <li>
            <Link href="/blog/log" className="flex items-center justify-between text-text-muted hover:text-text-primary transition-colors py-1">
              <span>stream.devlog</span>
              <span className="text-accent">➔</span>
            </Link>
          </li>
          <li>
            <Link href="/blog/goals" className="flex items-center justify-between text-text-muted hover:text-text-primary transition-colors py-1">
              <span>milestones.json</span>
              <span className="text-accent">➔</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

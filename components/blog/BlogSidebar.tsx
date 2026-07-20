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
      {/* Stats Widget */}
      <div className="sidebar-widget p-6 rounded-2xl bg-surface/30 backdrop-blur-md border border-border/80 hover:border-border transition-colors duration-300">
        <h3 className="sidebar-widget-title text-xs font-mono font-bold text-text-primary border-b border-border/60 pb-3 mb-4 flex items-center justify-between">
          <span className="tracking-wider">{"// STATS"}</span>
          <span className="text-[10px] text-accent font-semibold tracking-widest">01</span>
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
    </aside>
  );
}

import { NextResponse } from "next/server";

const POSTS = [
  { slug: "llm-quantization-research", title: "LLM Quantization: Making Large Models Run on Small Hardware", date: "2026-03-20", tags: ["ai", "research"], excerpt: "A deep dive into quantization techniques that reduce model size by 75% while maintaining 95% accuracy." },
  { slug: "penetration-testing-lessons", title: "Penetration Testing 101: Lessons from 50+ Critical Vulnerabilities", date: "2025-08-10", tags: ["security"], excerpt: "What I learned finding and exploiting vulnerabilities in enterprise applications." },
  { slug: "npm-package-design-philosophy", title: "The Art of NPM Package Design", date: "2025-02-01", tags: ["javascript", "open-source"], excerpt: "Principles for building framework-agnostic, zero-dependency packages." },
  { slug: "building-search-engine", title: "Building a Production Search Engine from Scratch", date: "2024-12-15", tags: ["backend", "search"], excerpt: "How I architected a search engine serving 50,000+ daily users with OpenSearch and Redis." },
];

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blog.haripriya.org";
  const items = POSTS.map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      ${post.tags.map((t) => `<category>${escapeXml(t)}</category>`).join("\n      ")}
    </item>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Vikash V's Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Personal blog by Vikash V — thoughts on engineering, security research, AI, and open source.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/api/blog-feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

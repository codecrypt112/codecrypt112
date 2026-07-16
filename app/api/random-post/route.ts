import { NextResponse } from "next/server";

const SLUGS = [
  "llm-quantization-research",
  "penetration-testing-lessons",
  "npm-package-design-philosophy",
  "building-search-engine",
];

export async function GET() {
  const slug = SLUGS[Math.floor(Math.random() * SLUGS.length)];
  return NextResponse.redirect(new URL(`/blog/${slug}`, process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
}

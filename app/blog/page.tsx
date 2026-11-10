import Link from "next/link";
import { Suspense } from "react";
import { LOCAL_POSTS, BlogPost } from "@/lib/blogPosts";
import { sanityClient, urlFor } from "@/lib/sanity";
import BlogSidebar from "@/components/blog/BlogSidebar";

interface SanityPost {
  title: string;
  slug: { current: string };
  publishedAt: string;
  tags: string[];
  summary: string;
  coverImage: any;
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityClient.fetch<SanityPost[]>(
      `*[_type == "blogPost" && slug.current != "test-blog"] | order(publishedAt desc) {
        title,
        slug,
        "publishedAt": publishedAt,
        "tags": coalesce(tags, []),
        summary,
        coverImage
      }`
    );
    const sanityPosts: BlogPost[] = [];
    if (posts && posts.length > 0) {
      posts.forEach((p) => {
        let imageUrl: string | null = null;
        if (p.coverImage) {
          try {
            imageUrl = urlFor(p.coverImage).url();
          } catch {
            // ignore
          }
        }
        sanityPosts.push({
          slug: p.slug.current,
          title: p.title,
          date: p.publishedAt ? p.publishedAt.slice(0, 10) : "",
          tags: p.tags,
          summary: p.summary || "",
          readTime: "5 min read",
          content: "",
          coverImage: imageUrl,
        });
      });
    }
    const allPosts = [...LOCAL_POSTS, ...sanityPosts];
    const seen = new Set();
    const uniquePosts = allPosts.filter((post) => {
      const duplicate = seen.has(post.slug);
      seen.add(post.slug);
      return !duplicate;
    });
    return uniquePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (e) {
    // Fallback to local posts
  }
  return LOCAL_POSTS;
}

function getCardPlaceholder(slug: string) {
  if (slug === "jack-of-all-trades") {
    return (
      <div className="relative w-full h-full min-h-[140px] flex items-center justify-center overflow-hidden">
        {/* Node connections */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px]" />
        <svg width="100%" height="100%" viewBox="0 0 100 60" className="w-full h-full max-w-[140px] opacity-40 group-hover:opacity-60 transition-opacity duration-300">
          <circle cx="50" cy="30" r="3" fill="#10b981" />
          <circle cx="50" cy="30" r="10" fill="none" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="50" y1="30" x2="25" y2="15" stroke="#10b981" strokeWidth="0.5" />
          <line x1="50" y1="30" x2="75" y2="15" stroke="#10b981" strokeWidth="0.5" />
          <line x1="50" y1="30" x2="75" y2="45" stroke="#10b981" strokeWidth="0.5" />
          <line x1="50" y1="30" x2="25" y2="45" stroke="#10b981" strokeWidth="0.5" />
          <circle cx="25" cy="15" r="2" fill="#10b981" />
          <circle cx="75" cy="15" r="2" fill="#10b981" />
          <circle cx="75" cy="45" r="2" fill="#10b981" />
          <circle cx="25" cy="45" r="2" fill="#10b981" />
          <text x="50" y="55" textAnchor="middle" fill="#888" fontSize="4" fontFamily="monospace">multitasking_state.bin</text>
        </svg>
      </div>
    );
  }
  if (slug === "the-real-resume") {
    return (
      <div className="relative w-full h-full min-h-[140px] flex items-center justify-center overflow-hidden">
        {/* Horizontal rules */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:100%_16px]" />
        <svg width="100%" height="100%" viewBox="0 0 100 60" className="w-full h-full max-w-[140px] opacity-40 group-hover:opacity-60 transition-opacity duration-300">
          <line x1="20" y1="10" x2="20" y2="50" stroke="#10b981" strokeWidth="0.5" />
          <circle cx="20" cy="18" r="1.5" fill="#10b981" />
          <circle cx="20" cy="30" r="1.5" fill="#10b981" />
          <circle cx="20" cy="42" r="1.5" fill="#10b981" />
          <line x1="30" y1="18" x2="80" y2="18" stroke="#10b981" strokeWidth="1" opacity="0.8" />
          <line x1="30" y1="22" x2="60" y2="22" stroke="#888" strokeWidth="0.5" />
          <line x1="30" y1="30" x2="75" y2="30" stroke="#10b981" strokeWidth="1" opacity="0.8" />
          <line x1="30" y1="34" x2="50" y2="34" stroke="#888" strokeWidth="0.5" />
          <line x1="30" y1="42" x2="85" y2="42" stroke="#10b981" strokeWidth="1" opacity="0.8" />
          <text x="50" y="55" textAnchor="middle" fill="#888" fontSize="4" fontFamily="monospace">unwritten_points.log</text>
        </svg>
      </div>
    );
  }
  if (slug === "museum-of-failures") {
    return (
      <div className="relative w-full h-full min-h-[140px] flex items-center justify-center overflow-hidden">
        {/* Subtle dot matrix background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px]" />
        <svg width="100%" height="100%" viewBox="0 0 100 60" className="w-full h-full max-w-[140px] opacity-40 group-hover:opacity-60 transition-opacity duration-300">
          {/* Main trunk */}
          <line x1="15" y1="30" x2="45" y2="30" stroke="#10b981" strokeWidth="0.8" />
          <circle cx="15" cy="30" r="1.5" fill="#10b981" />
          
          {/* Branch 1 - aborted idea (upper) */}
          <path d="M 30 30 Q 38 18 55 18" fill="none" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="53" y1="16" x2="57" y2="20" stroke="#10b981" strokeWidth="0.8" />
          <line x1="57" y1="16" x2="53" y2="20" stroke="#10b981" strokeWidth="0.8" />
          <circle cx="30" cy="30" r="1.5" fill="#10b981" />

          {/* Trunk continuation */}
          <line x1="45" y1="30" x2="68" y2="30" stroke="#10b981" strokeWidth="0.8" />
          <circle cx="45" cy="30" r="1.5" fill="#10b981" />

          {/* Branch 2 - aborted idea (lower) */}
          <path d="M 45 30 Q 53 42 70 42" fill="none" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="68" y1="40" x2="72" y2="44" stroke="#10b981" strokeWidth="0.8" />
          <line x1="72" y1="40" x2="68" y2="44" stroke="#10b981" strokeWidth="0.8" />

          {/* Branch 3 - dead end at trunk */}
          <line x1="68" y1="30" x2="85" y2="30" stroke="#10b981" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
          <line x1="83" y1="28" x2="87" y2="32" stroke="#10b981" strokeWidth="0.8" />
          <line x1="87" y1="28" x2="83" y2="32" stroke="#10b981" strokeWidth="0.8" />

          <text x="50" y="55" textAnchor="middle" fill="#888" fontSize="4" fontFamily="monospace">graveyard_of_trying.git</text>
        </svg>
      </div>
    );
  }
  // Default abstract visual representation
  return (
    <div className="relative w-full h-full min-h-[140px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:12px_12px]" />
      <svg width="100%" height="100%" viewBox="0 0 100 60" className="w-full h-full max-w-[140px] opacity-40 group-hover:opacity-60 transition-opacity duration-300">
        <path d="M 10 40 Q 30 10, 50 30 T 90 20" fill="none" stroke="#10b981" strokeWidth="0.5" />
        <circle cx="50" cy="30" r="1" fill="#10b981" />
        <text x="50" y="50" textAnchor="middle" fill="#888" fontSize="4" fontFamily="monospace">research_plot.env</text>
      </svg>
    </div>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const allPosts = await getPosts();
  const activeCategory = searchParams?.category;

  // Filter posts if category is specified
  const posts = activeCategory
    ? allPosts.filter((post) =>
        post.tags.some(
          (tag) => tag.toLowerCase() === activeCategory.toLowerCase()
        )
      )
    : allPosts;

  // Compute tag counts
  const tagCounts: { [key: string]: number } = {};
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  const tags = Object.keys(tagCounts).sort();

  // Asymmetric structure: If no category filter, first post is Featured. Rest go into Grid.
  const hasFeatured = !activeCategory && posts.length > 0;
  const featuredPost = hasFeatured ? posts[0] : null;
  const gridPosts = hasFeatured ? posts.slice(1) : posts;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
      <div className="space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
              {activeCategory ? `// category: ${activeCategory}` : "// research writings"}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            Research &amp; Writings
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-xl leading-relaxed">
            Technical writeups on machine learning systems, optimization, research infrastructure, and compiler engineering.
          </p>
        </header>

        {/* Category Filter Navigation */}
        <div className="border-y border-border/60 py-3 flex items-center justify-between z-20 relative">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none max-w-full">
            <Link
              href="/blog"
              className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 shrink-0 ${
                !activeCategory
                  ? "bg-accent/10 border-accent/30 text-accent"
                  : "bg-surface-2/40 border-border text-text-muted hover:text-text-primary hover:border-border-hover"
              }`}
            >
              All ({allPosts.length})
            </Link>
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?category=${encodeURIComponent(tag)}`}
                className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 shrink-0 ${
                  activeCategory?.toLowerCase() === tag.toLowerCase()
                    ? "bg-accent/10 border-accent/30 text-accent"
                    : "bg-surface-2/40 border-border text-text-muted hover:text-text-primary hover:border-border-hover"
                }`}
              >
                {tag} ({tagCounts[tag]})
              </Link>
            ))}
          </div>
        </div>

        {/* Posts Content */}
        <div className="space-y-12">
          {posts.length === 0 ? (
            <div className="p-12 rounded-3xl border border-dashed border-border text-center space-y-4 bg-surface/10">
              <span className="font-mono text-[10px] text-text-muted">ERR: EMPTY_STREAM</span>
              <p className="text-sm text-text-secondary">
                No matching writings found under &ldquo;{activeCategory}&rdquo;.
              </p>
              <Link href="/blog" className="inline-block text-xs font-mono text-accent hover:underline">
                [ reset_filter ]
              </Link>
            </div>
          ) : (
            <>
              {/* Featured Post Card */}
              {featuredPost && (
                <article className="group relative overflow-hidden rounded-3xl bg-surface/20 backdrop-blur-sm border border-border/80 hover:border-accent/25 hover:shadow-[0_0_40px_rgba(16,185,129,0.03)] transition-all duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] min-h-[300px]">
                    <div className="relative overflow-hidden border-b md:border-b-0 md:border-r border-border/60 bg-surface-2/10">
                      {featuredPost.coverImage ? (
                        <img
                          src={featuredPost.coverImage}
                          alt={featuredPost.title}
                          className="object-cover w-full h-full min-h-[200px] md:min-h-full opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-6 min-h-[200px] md:min-h-full">
                          {getCardPlaceholder(featuredPost.slug)}
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
                          <time dateTime={featuredPost.date}>
                            {new Date(featuredPost.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                          <span>•</span>
                          <span>{featuredPost.readTime}</span>
                        </div>

                        <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors duration-300">
                          <Link href={`/blog/${featuredPost.slug}`} className="focus:outline-none">
                            {/* Stretch hit area for card */}
                            <span className="absolute inset-0 hidden md:block" />
                            {featuredPost.title}
                          </Link>
                        </h2>

                        <p className="text-xs lg:text-sm text-text-secondary leading-relaxed">
                          {featuredPost.summary}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/40 z-10">
                        <div className="flex flex-wrap gap-1.5">
                          {featuredPost.tags.map((tag) => (
                            <Link
                              key={tag}
                              href={`/blog?category=${encodeURIComponent(tag)}`}
                              className="px-2.5 py-0.5 rounded bg-surface-2/60 border border-border text-[9px] font-mono text-text-muted hover:text-accent hover:border-accent/20 transition-colors"
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>

                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent"
                        >
                          Read Post <span className="group-hover:translate-x-1 transition-transform duration-300">➔</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Grid of Other/All Posts */}
              {gridPosts.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {gridPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-surface/20 border border-border hover:border-accent/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-surface-2/10">
                        {post.coverImage ? (
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-103 transition-all duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center p-4">
                            {getCardPlaceholder(post.slug)}
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </time>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2">
                            <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                              <span className="absolute inset-0" />
                              {post.title}
                            </Link>
                          </h3>

                          <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                            {post.summary}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/40 z-10">
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((tag) => (
                              <Link
                                key={tag}
                                href={`/blog?category=${encodeURIComponent(tag)}`}
                                className="px-2 py-0.5 rounded bg-surface-2/60 border border-border text-[9px] font-mono text-text-muted hover:text-accent hover:border-accent/20 transition-colors"
                              >
                                {tag}
                              </Link>
                            ))}
                          </div>

                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-accent">
                            Read <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <aside className="hidden lg:block space-y-8">
        <Suspense fallback={<div className="p-6 rounded-2xl border border-border bg-surface animate-pulse h-60" />}>
          <BlogSidebar />
        </Suspense>
      </aside>
    </div>
  );
}

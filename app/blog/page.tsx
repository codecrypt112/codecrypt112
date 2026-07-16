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

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 md:gap-12">
      <div className="space-y-12">
        <header className="space-y-4">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
            {activeCategory ? `// logs / category: ${activeCategory}` : "// logs"}
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-text-primary tracking-tight">
            Research &amp; Writings
          </h1>
          <p className="text-text-secondary text-base max-w-xl leading-relaxed">
            Deep dives into software engineering, security research, binary analysis, 
            and constant-time cryptography.
          </p>
        </header>

        <div className="space-y-10 pt-4">
          {posts.length === 0 ? (
            <div className="p-8 rounded-2xl border border-dashed border-border text-center space-y-3">
              <span className="font-mono text-xs text-text-muted">ERR: NO_ENTRIES_FOUND</span>
              <p className="text-sm text-text-secondary">
                No articles matches category &ldquo;{activeCategory}&rdquo;.
              </p>
              <Link href="/blog" className="text-xs font-mono text-accent hover:underline">
                [ Clear Filters ]
              </Link>
            </div>
          ) : (
            posts.map((post) => (
              <article 
                key={post.slug}
                className="group relative flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-surface border border-border hover:border-accent/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.02)] transition-all duration-300"
              >
                <div className="flex-1 space-y-3">
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

                  <h2 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0 rounded-2xl" />
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 z-10">
                    {post.tags.map((tag) => (
                      <Link 
                        key={tag}
                        href={`/blog?category=${encodeURIComponent(tag)}`}
                        className="px-2.5 py-0.5 rounded-md bg-surface-2 border border-border text-xs font-mono text-text-muted hover:text-accent hover:border-accent/30 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {post.coverImage && (
                  <div className="relative w-full md:w-48 aspect-[16/10] rounded-xl overflow-hidden border border-border shrink-0 bg-surface-1">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </div>

      <aside className="hidden md:block space-y-8">
        <Suspense fallback={<div className="p-6 rounded-2xl border border-border bg-surface animate-pulse h-60" />}>
          <BlogSidebar />
        </Suspense>
      </aside>
    </div>
  );
}


import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { sanityClient, urlFor } from "@/lib/sanity";
import { LOCAL_POSTS } from "@/lib/blogPosts";

interface PostData {
  title: string;
  date: string;
  tags: string[];
  bodyRaw: unknown;
  content: string | null;
  coverImage: string | null;
}

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  title,
  "date": publishedAt,
  "tags": coalesce(tags, []),
  "bodyRaw": body,
  coverImage
}`;

const ALL_SLUGS_QUERY = `*[_type == "blogPost" && defined(slug.current)].slug.current`;

async function getPost(slug: string): Promise<PostData | null> {
  if (slug === "test-blog") return null;

  // 1. Try looking in local database first
  const local = LOCAL_POSTS.find((p) => p.slug === slug);
  if (local) {
    return {
      title: local.title,
      date: local.date,
      tags: local.tags,
      bodyRaw: null,
      content: local.content,
      coverImage: local.coverImage || null,
    };
  }

  // 2. Try fetching from Sanity
  try {
    const post = await sanityClient.fetch<{
      title: string;
      date: string;
      tags: string[];
      bodyRaw: unknown;
      coverImage: any;
    } | null>(POST_QUERY, { slug });
    if (post) {
      let imageUrl: string | null = null;
      if (post.coverImage) {
        try {
          imageUrl = urlFor(post.coverImage).url();
        } catch {
          // ignore builder errors
        }
      }
      return {
        title: post.title,
        date: post.date,
        tags: post.tags,
        bodyRaw: post.bodyRaw,
        content: null,
        coverImage: imageUrl,
      };
    }
  } catch {
    // Fail silently
  }

  return null;
}

function blocksToText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) return "";
      return block.children
        .map((child: { text?: string }) => child.text || "")
        .join("");
    })
    .join("\n\n");
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Log Not Found — Vikash V" };
  const desc = post.content ? post.content.slice(0, 160) : blocksToText(post.bodyRaw).slice(0, 160);
  return {
    title: `${post.title} — Vikash V`,
    description: desc,
  };
}

export async function generateStaticParams() {
  const paramsList = LOCAL_POSTS.map((p) => ({ slug: p.slug }));
  try {
    const sanitySlugs = await sanityClient.fetch<string[]>(ALL_SLUGS_QUERY);
    if (sanitySlugs && sanitySlugs.length > 0) {
      paramsList.push(...sanitySlugs.map((s) => ({ slug: s })));
    }
  } catch {
    // Fail silently
  }
  return paramsList;
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="space-y-8">
      <div>
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m15 18-6-6 6-6" />
          </svg>
          RETURN TO LOGS
        </Link>
      </div>

      <header className="space-y-4">
        <div className="text-xs font-mono text-text-muted">
          <span>{formattedDate}</span>
        </div>
        
        <h1 className="text-2xl md:text-4xl font-semibold text-text-primary tracking-tight leading-tight">
          {post.title}
        </h1>

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 rounded-md bg-surface-2 border border-border text-xs font-mono text-text-muted">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {post.coverImage && (
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-border bg-surface-1">
          <img
            src={post.coverImage}
            alt={post.title}
            className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      )}

      <hr className="border-border" />

      <div className="blog-post-body prose prose-invert max-w-none">
        {post.content ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : post.bodyRaw ? (
          <PortableTextRenderer blocks={post.bodyRaw} />
        ) : (
          <p className="text-text-muted">No content available.</p>
        )}
      </div>
    </div>
  );
}

function PortableTextRenderer({ blocks }: { blocks: unknown }) {
  if (!Array.isArray(blocks)) return null;

  return (
    <>
      {blocks.map((block, i) => {
        if (block._type === "block" && block.children) {
          const text = block.children
            .map((child: { text?: string; marks?: string[] }) => {
              let t = child.text || "";
              if (child.marks?.includes("strong")) t = `<strong>${t}</strong>`;
              if (child.marks?.includes("em")) t = `<em>${t}</em>`;
              return t;
            })
            .join("");

          const Tag = block.style === "h2" ? "h2" : block.style === "h3" ? "h3" : block.style === "blockquote" ? "blockquote" : "p";

          if (block.style === "blockquote") {
            return <blockquote key={block._key || i} dangerouslySetInnerHTML={{ __html: text }} />;
          }

          return <Tag key={block._key || i} dangerouslySetInnerHTML={{ __html: text }} />;
        }

        if (block._type === "image" && block.asset) {
          return (
            <div key={block._key || i} className="my-6">
              <img
                src={`https://cdn.sanity.io/images/qgpkolae/production/${block.asset._ref
                  .replace("image-", "")
                  .replace("-jpg", ".jpg")
                  .replace("-png", ".png")
                  .replace("-webp", ".webp")}`}
                alt={block.alt || ""}
                className="max-w-full rounded-xl border border-border"
              />
            </div>
          );
        }

        return null;
      })}
    </>
  );
}

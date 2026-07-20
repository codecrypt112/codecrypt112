import { Suspense } from "react";
import { sanityClient } from "@/lib/sanity";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { LOCAL_DEVLOGS } from "@/lib/devlogs";
import MathRenderer from "@/components/blog/MathRenderer";

interface SanityDevlog {
  timestamp: string;
  type: "INFO" | "SUCCESS" | "DEBUG" | "NOTE";
  content: string;
}

async function getDevlogs(): Promise<SanityDevlog[]> {
  let sanityLogs: SanityDevlog[] = [];
  try {
    sanityLogs = await sanityClient.fetch<SanityDevlog[]>(
      `*[_type == "devlog"] | order(timestamp desc)`
    );
  } catch (e) {
    // Fail silently
  }

  // Merge local devlogs and sanity devlogs, then sort by timestamp descending
  const allLogs = [...sanityLogs, ...LOCAL_DEVLOGS];
  return allLogs.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}

export default async function DevlogPage() {
  const logs = await getDevlogs();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 md:gap-12">
      <div className="space-y-12">
        <header className="space-y-4">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
            {"// devlog_stream"}
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-text-primary tracking-tight">
            Developer Log
          </h1>
          <p className="text-text-secondary text-base max-w-xl leading-relaxed">
            Micro-updates on research projects, bug investigations, readings, and current
            focus areas.
          </p>
        </header>

        {logs.length === 0 ? (
          <div className="p-8 rounded-2xl border border-dashed border-border text-center space-y-3 bg-surface/30 pt-4">
            <span className="font-mono text-xs text-text-muted">ERR: NO_LOGS_FOUND</span>
            <p className="text-sm text-text-secondary">
              No devlog entries have been recorded in the CMS yet.
            </p>
          </div>
        ) : (
          <div className="relative border-l border-border pl-6 ml-3 space-y-8 pt-4">
            {logs.map((log, idx) => {
              let badgeColor = "bg-accent/10 text-accent border-accent/20";
              if (log.type === "INFO") badgeColor = "bg-blue-500/10 text-blue-400 border-blue-500/20";
              if (log.type === "DEBUG") badgeColor = "bg-purple-500/10 text-purple-400 border-purple-500/20";
              if (log.type === "NOTE") badgeColor = "bg-zinc-500/10 text-text-secondary border-zinc-500/20";

              return (
                <div key={idx} className="relative space-y-2">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full border border-bg bg-accent shadow-[0_0_8px_var(--accent)]" />

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="text-text-muted">
                      {log.timestamp ? log.timestamp.slice(0, 16).replace("T", " ") : ""}
                    </span>
                    <span className={`px-2 py-0.5 rounded border text-[10px] uppercase font-bold tracking-wider ${badgeColor}`}>
                      {log.type}
                    </span>
                  </div>

                  <div
                    className="text-sm text-text-secondary leading-relaxed bg-surface/50 border border-border p-4 rounded-xl prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: log.content }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      <aside className="hidden md:block space-y-8">
        <Suspense fallback={<div className="p-6 rounded-2xl border border-border bg-surface animate-pulse h-60" />}>
          <BlogSidebar />
        </Suspense>
      </aside>
      <MathRenderer />
    </div>
  );
}

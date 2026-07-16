import { Suspense } from "react";
import { sanityClient } from "@/lib/sanity";
import BlogSidebar from "@/components/blog/BlogSidebar";

interface SanityGoal {
  text: string;
  completed: boolean;
  category: string;
  order: number;
}

async function getGoals(): Promise<SanityGoal[]> {
  try {
    return await sanityClient.fetch<SanityGoal[]>(
      `*[_type == "goal"] | order(order asc)`
    );
  } catch (e) {
    return [];
  }
}

export default async function GoalsPage() {
  const goals = await getGoals();

  // Group goals by category
  const categoriesMap = goals.reduce((acc, goal) => {
    const cat = goal.category || "GENERAL";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(goal);
    return acc;
  }, {} as Record<string, SanityGoal[]>);

  const categoryList = Object.entries(categoriesMap).map(([title, items], idx) => ({
    title,
    code: String(idx + 1).padStart(2, "0"),
    items,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 md:gap-12">
      <div className="space-y-12">
        <header className="space-y-4">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
            {"// target_list"}
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-text-primary tracking-tight">
            Personal &amp; Tech Goals
          </h1>
          <p className="text-text-secondary text-base max-w-xl leading-relaxed">
            A transparent checklist tracking my engineering challenges, security milestones,
            and personal development.
          </p>
        </header>

        <div className="space-y-8 pt-4">
          {categoryList.length === 0 ? (
            <div className="p-8 rounded-2xl border border-dashed border-border text-center space-y-3 bg-surface/30">
              <span className="font-mono text-xs text-text-muted">ERR: NO_GOALS_FOUND</span>
              <p className="text-sm text-text-secondary">
                No goals have been recorded in the CMS yet.
              </p>
            </div>
          ) : (
            categoryList.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-2xl bg-surface border border-border space-y-4 hover:border-accent/10 transition-all duration-300"
              >
                <h2 className="flex items-center justify-between border-b border-border pb-3 text-sm font-mono font-semibold text-text-primary">
                  <span>{`[${cat.code}] ${cat.title}`}</span>
                  <span className="text-xs text-text-muted">
                    {cat.items.filter((i) => i.completed).length}/{cat.items.length} DONE
                  </span>
                </h2>

                <ul className="space-y-3 font-mono text-sm">
                  {cat.items.map((item, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 transition-opacity duration-200 ${
                        item.completed ? "text-text-muted" : "text-text-secondary"
                      }`}
                    >
                      <span
                        className={`shrink-0 font-bold ${
                          item.completed ? "text-accent" : "text-text-muted"
                        }`}
                      >
                        {item.completed ? "[x]" : "[ ]"}
                      </span>
                      <span className={item.completed ? "line-through decoration-text-muted/30" : ""}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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

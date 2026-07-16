"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubNav() {
  const pathname = usePathname();

  const links = [
    { href: "/blog", label: "Articles", pattern: /^\/blog$/ },
    { href: "/blog/log", label: "Devlog", pattern: /^\/blog\/log/ },
    { href: "/blog/goals", label: "Goals", pattern: /^\/blog\/goals/ },
  ];

  return (
    <nav className="flex items-center gap-6 font-mono text-xs">
      {links.map((link) => {
        const isActive = link.pattern.test(pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative py-1 transition-colors duration-200 ${
              isActive
                ? "text-accent font-semibold"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            <span className="relative z-10">
              {isActive ? `[ ${link.label} ]` : link.label}
            </span>
            {isActive && (
              <span className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-accent shadow-[0_0_8px_var(--accent)]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

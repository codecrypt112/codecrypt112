"use client";

import Link from "next/link";

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  disabled?: boolean;
  href?: string;
}

// Variants use the new amber-terminal tokens. `space-blue` and `space-purple`
// style names are preserved as aliases so older call sites keep compiling.
const variantClasses: Record<NonNullable<PixelButtonProps["variant"]>, string> = {
  primary:
    "bg-amber text-dark-bg hover:bg-amber/85 border-amber focus-visible:bg-amber/85",
  secondary:
    "bg-transparent text-teal border-teal hover:bg-teal hover:text-dark-bg focus-visible:bg-teal focus-visible:text-dark-bg",
  danger:
    "bg-danger text-text-primary border-danger hover:bg-danger/85 focus-visible:bg-danger/85",
};

export default function PixelButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  href,
}: PixelButtonProps) {
  const classes = `
    pixel-text text-[10px] md:text-xs px-5 py-3 border-2
    ${variantClasses[variant]}
    transition-colors active:translate-y-0.5
    disabled:opacity-50 disabled:cursor-not-allowed
    inline-flex items-center justify-center gap-2 cursor-pointer
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg
    ${className}
  `;

  if (href) {
    // Internal route → Next.js Link, external → anchor.
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={classes} style={{ imageRendering: "pixelated" }}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={{ imageRendering: "pixelated" }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={{ imageRendering: "pixelated" }}
    >
      {children}
    </button>
  );
}

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "blue" | "purple" | "green" | "orange" | "none";
}

// Map legacy glow names onto amber-terminal tokens:
//   blue / green → teal accent
//   purple / orange → amber accent
//   none → no decoration
const glowMap: Record<NonNullable<PixelCardProps["glow"]>, string> = {
  blue: "border-teal/40 hover:border-teal/70",
  purple: "border-amber/40 hover:border-amber/70",
  green: "border-teal/40 hover:border-teal/70",
  orange: "border-amber/40 hover:border-amber/70",
  none: "border-text-muted/20",
};

export default function PixelCard({
  children,
  className = "",
  glow = "none",
}: PixelCardProps) {
  return (
    <div
      className={`pixel-card bg-surface border ${glowMap[glow]} transition-colors ${className}`}
    >
      {children}
    </div>
  );
}

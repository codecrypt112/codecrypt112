type PixelVariant = "h1" | "h2" | "h3" | "body" | "mono" | "caption";

interface PixelTextProps {
  variant?: PixelVariant;
  children: React.ReactNode;
  className?: string;
  glow?: "green" | "blue" | "purple" | "orange" | "none";
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "em" | "small" | "label";
}

const variantStyles: Record<PixelVariant, string> = {
  h1: "pixel-text text-2xl md:text-4xl lg:text-5xl leading-relaxed",
  h2: "pixel-text text-lg md:text-2xl lg:text-3xl leading-relaxed",
  h3: "pixel-text text-sm md:text-base lg:text-lg",
  body: "font-mono text-sm md:text-base",
  mono: "font-mono text-sm md:text-base",
  caption: "pixel-text text-[9px] md:text-[10px]",
};

// Glow variant maps legacy neon names to amber-terminal tokens:
//   green / blue → teal
//   purple / orange → amber
//   none → no glow
const glowStyles: Record<NonNullable<PixelTextProps["glow"]>, string> = {
  green: "text-teal",
  blue: "text-teal",
  purple: "text-amber",
  orange: "text-amber",
  none: "",
};

export default function PixelText({
  variant = "body",
  children,
  className = "",
  glow = "none",
  as: Tag = "span",
}: PixelTextProps) {
  return (
    <Tag className={`${variantStyles[variant]} ${glowStyles[glow]} ${className}`}>
      {children}
    </Tag>
  );
}

interface PixelDividerProps {
  variant?: "solid" | "dashed" | "double";
  color?: string;
}

// Accept any colour name, but default to amber. The full class string is built
// without dynamic Tailwind interpolation so the JIT compiler can statically
// pick up the candidate classes.
const COLOR_CLASSES: Record<string, string> = {
  amber: "border-amber/60",
  teal: "border-teal/60",
  "text-muted": "border-text-muted/40",
};

export default function PixelDivider({
  variant = "solid",
  color = "amber",
}: PixelDividerProps) {
  const colorClass = COLOR_CLASSES[color] ?? COLOR_CLASSES.amber;

  const patterns: Record<NonNullable<PixelDividerProps["variant"]>, string> = {
    solid: `border-t-2 ${colorClass}`,
    dashed: `border-t-2 border-dashed ${colorClass}`,
    double: `border-t-2 border-b-2 ${colorClass} h-2`,
  };

  return <div className={`w-full my-6 ${patterns[variant]}`} />;
}

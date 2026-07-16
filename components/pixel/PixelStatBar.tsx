interface PixelStatBarProps {
  label: string;
  value: number;
  max?: number;
  color?: "green" | "blue" | "purple" | "orange";
}

// Map legacy colour names onto amber-terminal tokens:
//   green / blue → teal
//   purple / orange → amber
const colorMap: Record<NonNullable<PixelStatBarProps["color"]>, string> = {
  green: "bg-teal",
  blue: "bg-teal",
  purple: "bg-amber",
  orange: "bg-amber",
};

export default function PixelStatBar({
  label,
  value,
  max = 100,
  color = "green",
}: PixelStatBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1.5">
        <span className="pixel-text text-[8px] md:text-[9px] text-text-primary/70">
          {label}
        </span>
        <span className="pixel-text text-[8px] md:text-[9px] text-text-muted">
          {value}/{max}
        </span>
      </div>
      <div className="w-full h-3 md:h-4 border border-text-muted/30 bg-dark-bg relative overflow-hidden">
        <div
          className={`h-full ${colorMap[color]} transition-all duration-1000 ease-out`}
          style={{ width: `${pct}%` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(0,0,0,0.18)_3px,rgba(0,0,0,0.18)_6px)] pointer-events-none"
        />
      </div>
    </div>
  );
}

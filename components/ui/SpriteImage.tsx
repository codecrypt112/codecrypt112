import Image from "next/image";
import type { CSSProperties } from "react";

interface SpriteImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  style?: CSSProperties;
}

export default function SpriteImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
  style,
}: SpriteImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ imageRendering: "pixelated", ...style }}
      unoptimized
    />
  );
}

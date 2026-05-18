/**
 * OptimizedImage.tsx
 * Next.js Image component wrapper for Core Web Vitals optimization
 */

import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  quality = 75,
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "auto" : "async"}
      onError={(e) => {
        console.warn(`Image failed to load: ${src}`, e);
      }}
    />
  );
}

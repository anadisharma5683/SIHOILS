'use client';

import Image from 'next/image';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  style?: React.CSSProperties;
}

const ImageOptimized = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  style,
}: ImageOptimizedProps) => {
  // For local images, we can use the public directory
  const imageSrc = src.startsWith('/') ? src : src;
  
  return (
    <div className={twMerge(clsx('relative', className))} style={{ width, height, ...style }}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes={`(max-width: 768px) 100vw, ${width}px`}
        quality={quality}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
};

export default ImageOptimized;
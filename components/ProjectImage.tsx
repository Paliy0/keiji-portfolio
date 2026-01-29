'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function ProjectImage({
  src,
  alt,
  fill = true,
  className = '',
  priority = false,
}: ProjectImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 bg-muted flex items-center justify-center">
        <span className="text-secondary/50 text-sm uppercase tracking-widest text-center px-4">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      onError={() => setError(true)}
      priority={priority}
    />
  );
}

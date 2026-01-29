'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  year: string;
  description?: string;
}

interface ProjectCardProps {
  project: Project;
  onPlay?: (project: Project) => void;
}

function PlaceholderThumbnail({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 bg-muted flex items-center justify-center">
      <span className="text-secondary/50 text-sm uppercase tracking-widest">
        {title}
      </span>
    </div>
  );
}

export default function ProjectCard({ project, onPlay }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="group relative aspect-video cursor-pointer overflow-hidden bg-muted"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlay?.(project)}
    >
      {/* Thumbnail */}
      {!imageError ? (
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          onError={() => setImageError(true)}
        />
      ) : (
        <PlaceholderThumbnail title={project.title} />
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-background/60 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Play Button */}
      {project.videoUrl && (
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-foreground/90 flex items-center justify-center hover:bg-accent transition-colors">
            <Play className="w-6 h-6 text-background ml-1" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div
          className={`transform transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <span className="text-xs uppercase tracking-widest text-accent">
            {project.category}
          </span>
          <h3 className="text-xl font-serif mt-1">{project.title}</h3>
          <span className="text-sm text-secondary">{project.year}</span>
        </div>
      </div>

      {/* Always visible title (mobile) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent md:hidden">
        <span className="text-xs uppercase tracking-widest text-accent">
          {project.category}
        </span>
        <h3 className="text-lg font-serif">{project.title}</h3>
      </div>
    </article>
  );
}

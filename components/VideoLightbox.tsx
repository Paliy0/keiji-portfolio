'use client';

import { useEffect, useCallback, useMemo } from 'react';
import { X } from 'lucide-react';
import type { Project } from './ProjectCard';

interface VideoLightboxProps {
  project: Project | null;
  onClose: () => void;
}

function getVideoEmbedUrl(url: string): string | null {
  // YouTube
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  }

  return null;
}

export default function VideoLightbox({ project, onClose }: VideoLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleKeyDown]);

  const embedUrl = useMemo(() => {
    if (!project?.videoUrl) return null;
    return getVideoEmbedUrl(project.videoUrl);
  }, [project?.videoUrl]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />

      {/* Close Button */}
      <button
        className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-border hover:border-foreground transition-colors"
        onClick={onClose}
        aria-label="Close video"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Video Container */}
      <div
        className="relative z-10 w-full max-w-6xl mx-4 aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-muted rounded-lg overflow-hidden">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={project.title}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-secondary">
              Video not available
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="absolute -bottom-20 left-0 right-0 text-center">
          <h3 className="text-2xl font-serif">{project.title}</h3>
          <p className="text-secondary mt-1">
            {project.category} &middot; {project.year}
          </p>
        </div>
      </div>
    </div>
  );
}

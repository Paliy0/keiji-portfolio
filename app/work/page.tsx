'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard, { Project } from '@/components/ProjectCard';
import VideoLightbox from '@/components/VideoLightbox';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Short Film', 'Music Video', 'Commercial', 'Documentary'];

const projects: Project[] = [
  {
    id: '1',
    title: 'Midnight in Tokyo',
    category: 'Short Film',
    thumbnail: '/images/project-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    year: '2024',
    description: 'A neo-noir exploration of solitude in the neon-lit streets of Tokyo.',
  },
  {
    id: '2',
    title: 'Urban Pulse',
    category: 'Music Video',
    thumbnail: '/images/project-2.jpg',
    videoUrl: 'https://vimeo.com/123456789',
    year: '2024',
    description: 'High-energy visual for electronic artist NOVA.',
  },
  {
    id: '3',
    title: 'Origins',
    category: 'Documentary',
    thumbnail: '/images/project-3.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    year: '2023',
    description: 'An intimate look at indigenous communities preserving their traditions.',
  },
  {
    id: '4',
    title: 'Velocity',
    category: 'Commercial',
    thumbnail: '/images/project-4.jpg',
    videoUrl: 'https://vimeo.com/123456789',
    year: '2023',
    description: 'Automotive campaign for premium electric vehicles.',
  },
  {
    id: '5',
    title: 'Echoes',
    category: 'Short Film',
    thumbnail: '/images/project-5.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    year: '2023',
    description: 'A meditation on memory and loss set in coastal California.',
  },
  {
    id: '6',
    title: 'Rise',
    category: 'Music Video',
    thumbnail: '/images/project-6.jpg',
    videoUrl: 'https://vimeo.com/123456789',
    year: '2022',
    description: 'Choreography-driven visual for Grammy-nominated artist.',
  },
  {
    id: '7',
    title: 'The Craft',
    category: 'Documentary',
    thumbnail: '/images/project-7.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    year: '2022',
    description: 'Following master artisans keeping traditional crafts alive.',
  },
  {
    id: '8',
    title: 'Momentum',
    category: 'Commercial',
    thumbnail: '/images/project-8.jpg',
    videoUrl: 'https://vimeo.com/123456789',
    year: '2022',
    description: 'Brand campaign for athletic apparel company.',
  },
  {
    id: '9',
    title: 'Parallel Lines',
    category: 'Short Film',
    thumbnail: '/images/project-9.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    year: '2021',
    description: 'Two strangers whose lives intersect on a cross-country train.',
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.work-hero',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Filter buttons animation
      gsap.fromTo(
        '.filter-btn',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power3.out',
          delay: 0.4,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate grid items when filter changes
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, [activeCategory]);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center work-hero">
            <span className="text-accent text-sm uppercase tracking-widest">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mt-4 mb-6 text-balance">
              Selected Work
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              A curated collection of projects that showcase my approach to visual storytelling across different genres and formats.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`filter-btn px-5 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-foreground text-background'
                    : 'bg-transparent text-secondary border border-border hover:border-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 md:pb-32 lg:pb-40">
        <div className="container">
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPlay={setSelectedProject}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-secondary">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Lightbox */}
      <VideoLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

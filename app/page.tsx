'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Film, Camera, Sparkles } from 'lucide-react';
import Hero from '@/components/Hero';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Film,
    title: 'Film Production',
    description:
      'From concept to final cut, I bring stories to life with cinematic precision and creative vision.',
  },
  {
    icon: Camera,
    title: 'Commercial Work',
    description:
      'Brand films and commercials that connect with audiences and elevate your message.',
  },
  {
    icon: Sparkles,
    title: 'Music Videos',
    description:
      'Visual experiences that complement and amplify the emotion of your music.',
  },
];

const featuredProjects = [
  {
    id: '1',
    title: 'Midnight in Tokyo',
    category: 'Short Film',
    thumbnail: '/images/project-1.jpg',
  },
  {
    id: '2',
    title: 'Urban Pulse',
    category: 'Music Video',
    thumbnail: '/images/project-2.jpg',
  },
  {
    id: '3',
    title: 'Origins',
    category: 'Documentary',
    thumbnail: '/images/project-3.jpg',
  },
];

export default function Home() {
  const introRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro section animation
      gsap.fromTo(
        '.intro-text',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 80%',
          },
        }
      );

      // Services stagger animation
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          },
        }
      );

      // Projects stagger animation
      gsap.fromTo(
        '.project-item',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Hero />

      {/* Intro Section */}
      <section ref={introRef} className="py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center intro-text">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-balance">
              Creating Visual Stories That Resonate
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              I&apos;m Keiji, a filmmaker and visual storyteller with a passion for
              crafting narratives that move people. With over a decade of
              experience in film production, I&apos;ve had the privilege of bringing
              countless stories to life—from intimate documentaries to
              large-scale commercial productions.
            </p>
            <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
              Learn More About Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 sm:py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent text-sm uppercase tracking-widest">
              What I Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mt-4 text-balance">
              Services & Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="service-card p-6 sm:p-8 border border-border bg-background hover:border-accent transition-colors duration-300 items-center text-center"
                >
                  <Icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-secondary leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section ref={projectsRef} className="py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="text-accent text-sm uppercase tracking-widest">
                Featured Work
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mt-4 text-balance">
                Selected Projects
              </h2>
            </div>
            <Link
              href="/work"
              className="text-secondary hover:text-foreground transition-colors flex items-center gap-2 self-start lg:self-auto"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href="/work"
                className="project-item group relative aspect-[4/3] overflow-hidden bg-muted"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs uppercase tracking-widest text-accent">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-serif mt-1">{project.title}</h3>
                  </div>
                </div>
                {/* Mobile always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent md:hidden">
                  <span className="text-xs uppercase tracking-widest text-accent">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-serif">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary leading-relaxed mb-8">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss
              how we can bring your vision to life.
            </p>
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

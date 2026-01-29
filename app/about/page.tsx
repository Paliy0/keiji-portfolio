'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Clock, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '150+', label: 'Projects Completed' },
  { icon: Award, value: '25+', label: 'Awards Won' },
  { icon: Globe, value: '30+', label: 'Countries Filmed' },
];

const skills = [
  'Cinematography',
  'Directing',
  'Color Grading',
  'Motion Graphics',
  'Sound Design',
  'Video Editing',
  'Drone Operation',
  'Lighting Design',
];

const clients = [
  'Nike',
  'Apple',
  'Netflix',
  'Sony Music',
  'Red Bull',
  'National Geographic',
];

export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.about-hero-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Story section animation
      gsap.fromTo(
        '.story-content',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.story-image',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        }
      );

      // Skills animation
      gsap.fromTo(
        '.skill-item',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="about-hero-content max-w-4xl">
            <span className="text-accent text-sm uppercase tracking-widest">
              About Me
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mt-4 mb-6">
              The Story Behind the Lens
            </h1>
            <p className="text-xl text-secondary max-w-2xl">
              A passionate filmmaker dedicated to capturing moments that matter and creating visual experiences that leave lasting impressions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="story-content space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif">
                Crafting Visual Narratives Since 2014
              </h2>
              <div className="space-y-4 text-secondary">
                <p>
                  My journey into filmmaking began with a borrowed camera and an insatiable curiosity about how stories could be told through moving images. What started as a hobby quickly became an obsession, leading me to study film at UCLA and eventually launch my career in Los Angeles.
                </p>
                <p>
                  Over the past decade, I&apos;ve had the privilege of working on projects that span the globe—from intimate documentary work in remote villages to high-energy commercial productions for major brands. Each project has taught me something new about the art of visual storytelling.
                </p>
                <p>
                  My approach is simple: listen deeply, collaborate openly, and never stop pushing creative boundaries. I believe that the best films come from genuine human connection and a willingness to take risks in pursuit of something beautiful.
                </p>
              </div>
              <Link href="/contact" className="btn-primary inline-block">
                Work With Me
              </Link>
            </div>
            <div className="story-image relative aspect-[4/5] bg-muted overflow-hidden">
              <Image
                src="/images/about-portrait.jpg"
                alt="Keiji - Filmmaker"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="stat-item text-center">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-serif text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent text-sm uppercase tracking-widest">
                Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mt-4">
                Skills & Capabilities
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-item px-6 py-3 border border-border hover:border-accent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-accent text-sm uppercase tracking-widest">
              Trusted By
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mt-4">
              Brands I&apos;ve Worked With
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clients.map((client) => (
              <span
                key={client}
                className="text-2xl md:text-3xl font-serif text-secondary/50 hover:text-foreground transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Ready to Tell Your Story?
            </h2>
            <p className="text-lg text-secondary mb-8">
              I&apos;m always excited to take on new projects and collaborate with
              passionate people. Let&apos;s create something extraordinary together.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

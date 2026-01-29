'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Play } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showReel?: boolean;
}

export default function Hero({
  title = "Cinematic Storytelling",
  subtitle = "I craft visual narratives that captivate audiences and bring stories to life through the lens.",
  showReel = true,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: Show poster image only */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/images/hero-poster.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 video-overlay" />
        </div>
        
        {/* Desktop: Show video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="md:block hidden absolute inset-0 video-overlay" />
      </div>

      {/* Location Badge */}
      <div className="absolute top-28 left-6 md:left-12 z-10">
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-sm tracking-wide">Los Angeles, CA</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container flex items-center justify-center">
        <div className="max-w-4xl text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-tight text-balance">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/work" className="btn-primary">
              View My Work
            </Link>
            {showReel && (
              <button className="btn-secondary flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Reel
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-secondary">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent" />
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Mail, MapPin, Phone, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@keiji.film',
    href: 'mailto:hello@keiji.film',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (310) 555-0123',
    href: 'tel:+13105550123',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Los Angeles, CA',
    href: null,
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Contact() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.contact-hero',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Form animation
      gsap.fromTo(
        '.contact-form-container',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.4,
        }
      );

      // Info animation
      gsap.fromTo(
        '.contact-info-container',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.4,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="contact-hero max-w-4xl">
            <span className="text-accent text-sm uppercase tracking-widest">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mt-4 mb-6">
              Let&apos;s Work Together
            </h1>
            <p className="text-xl text-secondary max-w-2xl">
              Have a project in mind? I&apos;d love to hear about it. Fill out the form below or reach out directly—let&apos;s create something extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Form */}
            <div className="contact-form-container">
              <h2 className="text-2xl font-serif mb-8">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="contact-info-container">
              <h2 className="text-2xl font-serif mb-8">Contact Info</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center border border-border rounded-full shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-secondary uppercase tracking-wider mb-1">
                          {info.label}
                        </p>
                        <p className="text-lg">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a
                      key={info.label}
                      href={info.href}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm text-secondary uppercase tracking-wider mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-12 p-6 border border-border bg-muted/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm uppercase tracking-wider">
                    Currently Available
                  </span>
                </div>
                <p className="text-secondary">
                  I&apos;m currently accepting new projects for Q1 2025. Let&apos;s discuss your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

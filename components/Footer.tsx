import Link from 'next/link';
import { Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:hello@keiji.film', icon: Mail, label: 'Email' },
];

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-serif tracking-wider">
              KEIJI
            </Link>
            <p className="text-secondary text-sm max-w-xs leading-relaxed">
              Filmmaker & Visual Storyteller based in Los Angeles. Creating cinematic experiences that move people.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm uppercase tracking-widest text-secondary">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm uppercase tracking-widest text-secondary">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-secondary">
              hello@keiji.film
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary">
            &copy; {currentYear} Keiji Films. All rights reserved.
          </p>
          <p className="text-sm text-secondary">
            Crafted with passion in Los Angeles
          </p>
        </div>
      </div>
    </footer>
  );
}

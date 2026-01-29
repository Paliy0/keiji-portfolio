"use client"

import { Mail, Instagram, Linkedin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="contact" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div 
            ref={leftRef}
            className={`transition-all duration-700 ease-out ${
              leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6 text-balance">
              {"Let's work together on your next project."}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Available for commercial projects, weddings, and creative collaborations. 
              {"I'd love to hear about your vision."}
            </p>
          </div>

          <div 
            ref={rightRef}
            className={`flex flex-col justify-center transition-all duration-700 ease-out delay-150 ${
              rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-8">
              <div className="group">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Email
                </p>
                <a 
                  href="mailto:hello@youremail.com" 
                  className="text-lg text-foreground hover:text-muted-foreground transition-colors relative inline-block after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                >
                  hello@youremail.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Social
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 hover:scale-110 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="mailto:hello@youremail.com"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 hover:scale-110 transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Location
                </p>
                <p className="text-foreground">
                  Your City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-border/50" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className={`text-lg font-medium tracking-tight text-foreground hover:text-muted-foreground transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          Your Name
        </Link>
        <div className="flex items-center gap-8">
          <Link 
            href="#work" 
            className={`text-sm text-muted-foreground hover:text-foreground transition-all duration-500 delay-100 relative after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            Work
          </Link>
          <Link 
            href="#contact" 
            className={`text-sm text-muted-foreground hover:text-foreground transition-all duration-500 delay-200 relative after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            Contact
          </Link>
          <div className={`transition-all duration-500 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

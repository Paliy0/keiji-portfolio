"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <p 
          className={`text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Videographer & Photographer
        </p>
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-8 text-balance transition-all duration-700 ease-out delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Crafting visual stories that captivate and inspire.
        </h1>
        <p 
          className={`text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Based in Your City. Available for creative projects worldwide.
        </p>
      </div>
      <a 
        href="#work" 
        className={`mt-16 text-muted-foreground hover:text-foreground transition-all duration-700 ease-out delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        aria-label="Scroll to work section"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  )
}

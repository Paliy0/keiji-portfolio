"use client"

import { Play, X } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface VideoItem {
  id: string
  title: string
  category: string
  thumbnail: string
  videoUrl: string
}

const videos: VideoItem[] = [
  {
    id: "1",
    title: "Brand Story",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "2",
    title: "Wedding Film",
    category: "Wedding",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "3",
    title: "Product Launch",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
]

function VideoCard({ video, index, onClick }: { video: VideoItem; index: number; onClick: () => void }) {
  const { ref, isVisible } = useScrollAnimation<HTMLButtonElement>({ threshold: 0.2 })
  
  return (
    <button
      ref={ref}
      onClick={onClick}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group relative aspect-[4/3] overflow-hidden rounded-lg bg-card cursor-pointer text-left transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <img
        src={video.thumbnail || "/placeholder.svg"}
        alt={video.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center border border-foreground/20 scale-75 group-hover:scale-100 transition-transform duration-500">
          <Play className="w-6 h-6 text-foreground ml-1" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
          {video.category}
        </p>
        <h3 className="text-lg font-medium text-foreground">
          {video.title}
        </h3>
      </div>
    </button>
  )
}

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Video Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              index={index}
              onClick={() => setSelectedVideo(video)} 
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">Close</span>
              <X className="w-4 h-4" />
            </button>
            <iframe
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}

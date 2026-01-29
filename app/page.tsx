import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VideoSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

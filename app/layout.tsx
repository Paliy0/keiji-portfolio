import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keiji.film"),
  title: {
    default: "Keiji | Filmmaker & Visual Storyteller",
    template: "%s | Keiji Films",
  },
  description:
    "Award-winning filmmaker and visual storyteller based in Los Angeles. Specializing in cinematic storytelling, commercials, music videos, and documentary filmmaking.",
  keywords: [
    "filmmaker",
    "cinematographer",
    "visual storyteller",
    "Los Angeles",
    "video production",
    "commercial director",
    "music video director",
    "documentary filmmaker",
  ],
  authors: [{ name: "Keiji" }],
  creator: "Keiji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keiji.film",
    siteName: "Keiji Films",
    title: "Keiji | Filmmaker & Visual Storyteller",
    description:
      "Award-winning filmmaker and visual storyteller based in Los Angeles. Creating cinematic experiences that move people.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keiji Films",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keiji | Filmmaker & Visual Storyteller",
    description:
      "Award-winning filmmaker and visual storyteller based in Los Angeles.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <SmoothScroll>
          <Navigation />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

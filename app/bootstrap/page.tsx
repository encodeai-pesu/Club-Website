import { Sidebar } from "@/components/sidebar"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BootstrapPage() {
  const images = [
    "/Bootstrap/boot.jpg",
    "/Bootstrap/boot_.jpg",
    "/Bootstrap/boot__.jpg",
    "/Bootstrap/bootstrap.jpg"
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-black">
          {/* Hero Section with Video Background */}
          <section className="relative h-screen overflow-hidden border-b-4 border-white">
            <video
              autoPlay
              muted
              loop
              sandbox="allow-same-origin allow-scripts"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="https://res.cloudinary.com/dfmn6uww9/video/upload/v1766860203/Encode.ai_Bootstrap_TV_lts1qg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex h-full flex-col items-start justify-start px-6 py-16 lg:px-8">
              <Link href="/events" className="mb-6 inline-flex items-center gap-2 text-white hover:text-[rgb(255,102,0)]">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Events</span>
              </Link>
              <div className="mt-auto mb-20">
                <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight text-white lg:text-6xl">Bootstrap Workshop</h1>
                <p className="max-w-2xl text-lg font-mono leading-relaxed text-white">
                  Encode.AI's Freshers Bootstrap Event was designed to welcome and engage new students from the 2025-29 batch through interactive AI-themed activities. The event was held from 25th to 29th August (excluding 27th), providing an immersive introduction to artificial intelligence concepts and fostering teamwork among freshers. Below are some of the pictures from our event.
                </p>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-white">Event Highlights</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {images.map((image, index) => (
                <div key={index} className="rounded-none border-2 border-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <img src={image} alt={`Bootstrap Workshop - ${index + 1}`} className="h-96 w-full object-cover" />
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Encode AI" className="h-8 w-8 rounded-none border-2 border-white" />
                  <span className="text-xl font-bold uppercase tracking-tight text-white">Encode.AI</span>
                </div>
                <p className="text-sm font-mono text-white">© 2025 Encode.AI. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

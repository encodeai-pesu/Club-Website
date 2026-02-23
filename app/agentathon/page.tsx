import { Sidebar } from "@/components/sidebar"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AgentathonPage() {
  const images = [
    "/Agentathon/AG_4.JPG",
    "/Agentathon/AG_5.JPG",
    "/Agentathon/AG_6.JPG",
    "/Agentathon/AG_7.JPG",
    "/Agentathon/AG_8.JPG",
    "/Agentathon/AG_9.JPG",
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-black">
          {/* Header */}
          <section className="border-b-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <Link href="/events" className="mb-6 inline-flex items-center gap-2 text-white hover:text-[rgb(255,102,0)]">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Events</span>
              </Link>
              <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight text-white lg:text-6xl">Agentathon</h1>
              <p className="max-w-2xl text-lg font-mono leading-relaxed text-white">
                A 10-hour hackathon focused on building Agentic AI solutions. Teams of exactly 4 members competed for prizes worth ₹20,000, building autonomous, goal-driven AI agents across real-world problem domains.
              </p>
            </div>
          </section>

          {/* Gallery */}
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-white">Event Highlights</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {images.map((image, index) => (
                <div key={index} className="rounded-none border-2 border-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <img src={image} alt={`Agentathon - ${index + 1}`} className="h-96 w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/agentathon/winners"
                className="inline-flex items-center gap-2 text-[rgb(255,102,0)] hover:text-white font-mono text-sm font-bold uppercase"
              >
                View Winners <ExternalLink className="h-4 w-4" />
              </Link>
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
                <p className="text-sm font-mono text-white">© 2026 Encode.AI. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

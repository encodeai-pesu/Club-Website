"use client"

import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Calendar, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AgentathonRegistration() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-black">
          {/* Header */}
          <section className="border-b-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <Link href="/agentathon" className="inline-flex items-center gap-2 text-[rgb(255,102,0)] hover:text-white font-mono text-sm font-bold uppercase mb-6">
                <ArrowLeft className="h-4 w-4" />
                Back to Event Details
              </Link>
              <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight text-white lg:text-6xl">
                Agentathon Registration
              </h1>
            </div>
          </section>

          {/* Closed Message */}
          <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
            <div className="rounded-none border-2 border-white bg-black p-12 text-center shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
              <div className="mb-8 inline-flex items-center gap-3 rounded-none border-2 border-white bg-[rgb(255,102,0)] px-6 py-3 text-sm font-bold uppercase tracking-wider">
                <Calendar className="h-5 w-5 text-black" />
                <span className="text-black">Event Completed</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white lg:text-5xl">
                Registrations Closed
              </h2>
              <p className="mb-8 font-mono text-lg text-white">
                Thank you for your interest! Agentathon was held on January 31, 2026. 
                Registrations are now closed.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/events">
                  <Button size="lg" className="gap-2">
                    <Users className="h-5 w-5" />
                    View Upcoming Events
                  </Button>
                </Link>
                <Link href="/agentathon">
                  <Button size="lg" variant="outline">
                    View Event Details
                  </Button>
                </Link>
              </div>
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

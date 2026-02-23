"use client"

import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { Calendar, MapPin, Trophy, Zap, Brain, Code, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AgentathonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date("2026-01-31T08:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-black">
          {/* Hero Section */}
          <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 inline-flex items-center gap-3 rounded-none border-2 border-white bg-[rgb(255,102,0)] px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <Zap className="h-5 w-5 text-black" />
                <span className="text-black">10 Hour Challenge</span>
              </div>
              <h1 className="mb-8 max-w-4xl text-6xl font-bold uppercase tracking-tight text-white lg:text-8xl">
                Agentathon 2026
              </h1>
              <p className="mb-6 max-w-3xl text-2xl font-bold uppercase tracking-wide text-[rgb(255,102,0)]">
                Agentic AI Revolution
              </p>
              <p className="mb-12 max-w-2xl text-lg font-mono leading-relaxed text-white">
                Build autonomous, goal-driven AI agents that can reason, plan, and act across real-world problem domains. 
                10 hours to create intelligent systems that make an impact.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <Link href="/agentathon/register">
                  <Button size="lg" className="gap-2">
                    Register Now <Trophy className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#about">
                  <Button size="lg" variant="outline">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Event Details */}
          <section className="border-t-4 border-white bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-none border-2 border-white bg-black p-8 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  <Calendar className="mb-4 h-12 w-12 text-[rgb(255,102,0)]" />
                  <h3 className="mb-2 text-xl font-bold uppercase text-white">Date</h3>
                  <p className="font-mono text-sm text-white">January 31, 2026</p>
                </div>
                <div className="rounded-none border-2 border-white bg-black p-8 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  <MapPin className="mb-4 h-12 w-12 text-[rgb(255,102,0)]" />
                  <h3 className="mb-2 text-xl font-bold uppercase text-white">Venue</h3>
                  <p className="font-mono text-sm text-white">BE Block, 13th floor</p>
                </div>
                <div className="rounded-none border-2 border-white bg-black p-8 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  <Trophy className="mb-4 h-12 w-12 text-[rgb(255,102,0)]" />
                  <h3 className="mb-2 text-xl font-bold uppercase text-white">Prize Pool</h3>
                  <p className="font-mono text-sm text-white">₹20,000 + Mentor Support</p>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section id="about" className="border-t-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white lg:text-5xl">
                  About Agentathon
                </h2>
              </div>
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-none border-2 border-white bg-[rgb(255,102,0)]">
                    <Brain className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold uppercase text-white">Agentic AI Focus</h3>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Build autonomous, goal-driven AI agents that can reason, plan, and act across real-world problem domains. 
                    The hackathon emphasizes system design, agent architecture, and practical impact rather than model training alone.
                  </p>
                </div>
                <div className="rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-none border-2 border-white bg-[rgb(255,102,0)]">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold uppercase text-white">Team Structure</h3>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Teams of exactly 4 members are required. Open to students, independent hackers, and early-stage founders. 
                    Inter-college teams are permitted. Collaborate to build something extraordinary in just 10 hours.
                  </p>
                </div>
              </div>
              <div className="mt-8 rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <h3 className="mb-4 text-2xl font-bold uppercase text-white">Problem Tracks</h3>
                <p className="mb-6 font-mono text-sm leading-relaxed text-white">
                  Choose one of the following tracks to build your Agentic AI solution:
                </p>
                <ul className="space-y-4 font-mono text-sm text-white">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <div>
                      <span className="font-bold text-[rgb(255,102,0)]">Education & Knowledge Management:</span>
                      <span className="ml-1">Agent-based systems for learning support, teaching assistance, or knowledge organization</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <div>
                      <span className="font-bold text-[rgb(255,102,0)]">Finance & Personal / Business Tools:</span>
                      <span className="ml-1">Agents for financial analysis, budgeting, forecasting, or decision support</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <div>
                      <span className="font-bold text-[rgb(255,102,0)]">Social Impact & Community Services:</span>
                      <span className="ml-1">Agentic solutions addressing accessibility, sustainability, or public welfare challenges</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <div>
                      <span className="font-bold text-[rgb(255,102,0)]">Developer Productivity & Tooling:</span>
                      <span className="ml-1">Tools and agents that improve software development workflows and collaboration</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <div>
                      <span className="font-bold text-[rgb(255,102,0)]">Personal Wellness & Lifestyle:</span>
                      <span className="ml-1">Agents focused on health monitoring, habit formation, fitness, or lifestyle automation</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-8 rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <h3 className="mb-4 text-2xl font-bold uppercase text-white">Submission Requirements</h3>
                <p className="mb-4 font-mono text-sm leading-relaxed text-white">
                  Teams are required to submit a 10–12 slide presentation covering:
                </p>
                <ul className="space-y-2 font-mono text-sm text-white">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <span>Problem statement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <span>Proposed solution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <span>Agent architecture and workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <span>Expected impact and feasibility</span>
                  </li>
                </ul>
                <p className="mt-4 font-mono text-sm leading-relaxed text-white">
                  <span className="text-[rgb(255,102,0)] font-bold">Note:</span> Please name your PDF file with your team name (e.g., TeamName.pdf)
                </p>
              </div>
            </div>
          </section>

          {/* Countdown Timer */}
          <section className="border-t-4 border-white bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="text-center">
                <h2 className="mb-12 text-4xl font-bold uppercase tracking-tight text-white lg:text-5xl">
                  Event Starts In
                </h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  <div className="rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    <div className="mb-2 text-6xl font-bold text-[rgb(255,102,0)]">{timeLeft.days}</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-white">Days</div>
                  </div>
                  <div className="rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    <div className="mb-2 text-6xl font-bold text-[rgb(255,102,0)]">{timeLeft.hours}</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-white">Hours</div>
                  </div>
                  <div className="rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    <div className="mb-2 text-6xl font-bold text-[rgb(255,102,0)]">{timeLeft.minutes}</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-white">Minutes</div>
                  </div>
                  <div className="rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                    <div className="mb-2 text-6xl font-bold text-[rgb(255,102,0)]">{timeLeft.seconds}</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-white">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Registration CTA Section */}
          <section className="border-t-4 border-white">
            <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
              <div className="rounded-none border-2 border-white bg-black p-12 text-center shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
                <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white lg:text-5xl">
                  Ready to Build the Future?
                </h2>
                <p className="mb-8 font-mono text-lg text-white">
                  Secure your spot in this 10-hour on-site Agentic AI hackathon
                </p>
                <Link href="/agentathon/register">
                  <Button size="lg" className="gap-2">
                    Register Your Team Now <Trophy className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Quick Help Section */}
          <section className="border-t-4 border-white bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white lg:text-5xl">
                  Need Help?
                </h2>
                <p className="mx-auto max-w-2xl text-lg font-mono text-white">
                  Our team is here to assist you with any questions
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-none border-2 border-white bg-black p-8 text-center shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  <Users className="mx-auto mb-4 h-12 w-12 text-[rgb(255,102,0)]" />
                  <h3 className="mb-2 text-lg font-bold uppercase text-white">Akshat</h3>
                  <p className="mb-3 font-mono text-xs text-[rgb(255,102,0)]">Club Head</p>
                  <p className="font-mono text-sm text-white">+91 77956 82043</p>
                </div>
                <div className="rounded-none border-2 border-white bg-black p-8 text-center shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  <Users className="mx-auto mb-4 h-12 w-12 text-[rgb(255,102,0)]" />
                  <h3 className="mb-2 text-lg font-bold uppercase text-white">Vinitha</h3>
                  <p className="mb-3 font-mono text-xs text-[rgb(255,102,0)]">Club Head</p>
                  <p className="font-mono text-sm text-white">+91 79755 92930</p>
                </div>
                <div className="rounded-none border-2 border-white bg-black p-8 text-center shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  <Users className="mx-auto mb-4 h-12 w-12 text-[rgb(255,102,0)]" />
                  <h3 className="mb-2 text-lg font-bold uppercase text-white">Rahul</h3>
                  <p className="mb-3 font-mono text-xs text-[rgb(255,102,0)]">AIML Domain Head</p>
                  <p className="font-mono text-sm text-white">+91 82965 52126</p>
                </div>
                <div className="rounded-none border-2 border-white bg-black p-8 text-center shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  <Users className="mx-auto mb-4 h-12 w-12 text-[rgb(255,102,0)]" />
                  <h3 className="mb-2 text-lg font-bold uppercase text-white">Pratham</h3>
                  <p className="mb-3 font-mono text-xs text-[rgb(255,102,0)]">AIML Domain Head</p>
                  <p className="font-mono text-sm text-white">+91 63664 13693</p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="mb-4 font-mono text-sm text-white">Or reach us via email</p>
                <a href="mailto:agentathon@encodeai.com" className="font-mono text-lg font-bold text-[rgb(255,102,0)] hover:underline">
                  pesu.encodeai@gmail.com
                </a>
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

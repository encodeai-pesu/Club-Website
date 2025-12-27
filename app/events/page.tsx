import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react"

interface Event {
  id: string
  title: string
  description: string
  date: string
  time?: string
  // location: string
  featured?: boolean
  link?: string
  detailLink?: string
}

const upcomingEvents: Event[] = [
  {
    id: "algomania-3",
    title: "Algomania 3.0",
    description: "48-hour hackathon focused on building innovative AI solutions for real-world problems. Teams of 3-5 members will compete for prizes worth $10,000.",
    date: "March 15-17, 2025",
    time: "9:00 AM - 9:00 PM",
    // location: "Tech Hub Building, Room 301",
    featured: true,
    link: "/hackathon"
  }
]

const pastEvents: Event[] = [
  {
    id: "algomania-1",
    title: "Algomania 1.0",
    description: "The inaugural Algomania event that kicked off our competitive programming and algorithmic problem-solving series. Members showcased their coding skills and algorithmic thinking.",
    date: "2024",
    // location: "",
    detailLink: "/algomania-1"
  },
  {
    id: "algomania-2",
    title: "Algomania 2.0",
    description: "Encode.AI's competitive coding event held on 15th March 2025. It consisted of solving 20 coding questions in a given time, taking into consideration both speed and accuracy.",
    date: "March 15, 2025",
    // location: "",
    detailLink: "/algomania-2"
  },
  {
    id: "bootstrap-workshop",
    title: "Bootstrap Workshop",
    description: "Encode.AI's Freshers Bootstrap Event designed to welcome and engage new students from the 2025-29 batch through interactive AI-themed activities. Held from 25th to 29th August (excluding 27th), providing an immersive introduction to artificial intelligence concepts.",
    date: "August 25-29, 2025",
    // location: "",
    detailLink: "/bootstrap"
  },
  {
    id: "nlp-workshop",
    title: "NLP Workshop",
    description: "Comprehensive hands-on workshop focused on demystifying BERT—from understanding the core transformer architecture to deploying fine-tuned models for tasks like sentiment analysis and classification.",
    date: "2025",
    // location: "",
    detailLink: "/nlp-workshop"
  }
]

export default function EventsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-black">
          {/* Header */}
          <section className="border-b-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight text-white lg:text-6xl">Events</h1>
              <p className="max-w-2xl text-lg font-mono leading-relaxed text-white">
                Join us for workshops, hackathons, and networking events. Stay connected with the AI community.
              </p>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-white">Upcoming Events</h2>
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h3 className="mb-4 text-3xl font-bold uppercase text-white">{event.title}</h3>
                      <p className="font-mono text-sm leading-relaxed text-white">
                        {event.description}
                      </p>
                    </div>
                    {event.featured && (
                      <div className="rounded-none border-2 border-white bg-[rgb(255,102,0)] px-4 py-2 text-sm font-bold uppercase text-black">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="mb-8 space-y-3 border-t-2 border-white pt-6">
                    <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                      <Calendar className="h-5 w-5" />
                      <span>{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                        <Clock className="h-5 w-5" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {/* <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                      <MapPin className="h-5 w-5" />
                      <span>{event.location}</span>
                    </div> */}
                  </div>
                  {event.link ? (
                    <a href={event.link}>
                      <Button className="gap-2">
                        Register Now <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" className="gap-2">
                      Register Now <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section className="border-t-4 border-white bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
              <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-white">Past Events</h2>
              <div className="space-y-6">
                {pastEvents.map((event) => (
                  <div key={event.id} className="rounded-none border-2 border-white bg-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-shadow">
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="text-xl font-bold uppercase text-white">{event.title}</h3>
                      <span className="font-mono text-sm font-bold text-white">{event.date}</span>
                    </div>
                    <p className="mb-4 font-mono text-sm leading-relaxed text-white">
                      {event.description}
                    </p>
                    {event.detailLink && (
                      <a href={event.detailLink} className="inline-flex items-center gap-2 text-[rgb(255,102,0)] hover:text-white font-mono text-sm font-bold uppercase">
                        View Details <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Encode AI" className="h-8 w-8 rounded-none border-2 border-white" />
                  <span className="text-xl font-bold uppercase tracking-tight text-white">encode ai</span>
                </div>
                <p className="text-sm font-mono text-white">© 2025 encode ai. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react"

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
              <div className="rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="mb-4 text-3xl font-bold uppercase text-white">AI Hackathon 2025</h3>
                    <p className="font-mono text-sm leading-relaxed text-white">
                      48-hour hackathon focused on building innovative AI solutions for real-world problems. Teams of
                      3-5 members will compete for prizes worth $10,000.
                    </p>
                  </div>
                  <div className="rounded-none border-2 border-white bg-[rgb(255,102,0)] px-4 py-2 text-sm font-bold uppercase text-black">
                    Featured
                  </div>
                </div>
                <div className="mb-8 space-y-3 border-t-2 border-white pt-6">
                  <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                    <Calendar className="h-5 w-5" />
                    <span>March 15-17, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                    <Clock className="h-5 w-5" />
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                    <MapPin className="h-5 w-5" />
                    <span>Tech Hub Building, Room 301</span>
                  </div>
                </div>
                <a href="/hackathon">
                  <Button className="gap-2">
                    Register Now <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-6">
                  <h3 className="mb-4 text-2xl font-bold uppercase text-white">Introduction to Large Language Models</h3>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Hands-on workshop covering the fundamentals of LLMs, prompt engineering, and fine-tuning techniques.
                    Perfect for beginners and intermediate learners.
                  </p>
                </div>
                <div className="mb-8 space-y-3 border-t-2 border-white pt-6">
                  <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                    <Calendar className="h-5 w-5" />
                    <span>February 28, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                    <Clock className="h-5 w-5" />
                    <span>6:00 PM - 8:30 PM</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                    <MapPin className="h-5 w-5" />
                    <span>Online (Zoom)</span>
                  </div>
                </div>
                <Button variant="outline" className="gap-2">
                  Register Now <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <div className="rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="mb-6">
                  <h3 className="mb-4 text-2xl font-bold uppercase text-white">Guest Speaker: Dr. Emily Zhang</h3>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Join us for an inspiring talk by Dr. Emily Zhang, AI Research Scientist at OpenAI, discussing the
                    future of AI safety and alignment.
                  </p>
                </div>
                <div className="mb-8 space-y-3 border-t-2 border-white pt-6">
                  <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                    <Calendar className="h-5 w-5" />
                    <span>March 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                    <Clock className="h-5 w-5" />
                    <span>7:00 PM - 8:30 PM</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-sm font-bold text-white">
                    <MapPin className="h-5 w-5" />
                    <span>Main Auditorium</span>
                  </div>
                </div>
                <Button variant="outline" className="gap-2">
                  Register Now <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Past Events */}
          <section className="border-t-4 border-white bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
              <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-white">Past Events</h2>
              <div className="space-y-6">
                <div className="rounded-none border-2 border-white bg-black p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xl font-bold uppercase text-white">Winter AI Workshop Series</h3>
                    <span className="font-mono text-sm font-bold text-white">January 2025</span>
                  </div>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Five-week series covering neural networks, computer vision, NLP, reinforcement learning, and
                    generative AI. Over 200 members participated with hands-on coding sessions and project
                    presentations.
                  </p>
                </div>

                <div className="rounded-none border-2 border-white bg-black p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xl font-bold uppercase text-white">Fall Hackathon 2024</h3>
                    <span className="font-mono text-sm font-bold text-white">November 2024</span>
                  </div>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    24-hour hackathon where 50 teams built AI-powered solutions for sustainability challenges. Winning
                    projects included an AI-driven waste sorting system and a carbon footprint prediction model.
                  </p>
                </div>

                <div className="rounded-none border-2 border-white bg-black p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xl font-bold uppercase text-white">Industry Networking Night</h3>
                    <span className="font-mono text-sm font-bold text-white">October 2024</span>
                  </div>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Evening networking event with 15 AI professionals from leading tech companies. Members had the
                    opportunity to discuss career paths, interview tips, and industry trends.
                  </p>
                </div>

                <div className="rounded-none border-2 border-white bg-black p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xl font-bold uppercase text-white">Deep Learning Fundamentals Workshop</h3>
                    <span className="font-mono text-sm font-bold text-white">September 2024</span>
                  </div>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Comprehensive 3-hour workshop introducing neural network architectures, backpropagation, and
                    optimization techniques. Participants built their first neural network from scratch using PyTorch.
                  </p>
                </div>

                <div className="rounded-none border-2 border-white bg-black p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xl font-bold uppercase text-white">AI Ethics Panel Discussion</h3>
                    <span className="font-mono text-sm font-bold text-white">August 2024</span>
                  </div>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Panel featuring AI researchers, ethicists, and policy experts discussing bias in AI systems, privacy
                    concerns, and responsible AI development practices.
                  </p>
                </div>
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

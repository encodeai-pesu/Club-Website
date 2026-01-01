import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Sparkles, Brain, Rocket, MessageSquare } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-black">
          {/* Hero Section */}
          <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 inline-flex items-center gap-3 rounded-none border-2 border-white bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <Sparkles className="h-5 w-5 text-[rgb(255,102,0)]" />
                <span className="text-white">Building the future of AI</span>
              </div>
              <h1 className="mb-8 max-w-4xl text-5xl font-bold uppercase tracking-tight text-white lg:text-7xl">
                Where innovation meets intelligence
              </h1>
              <p className="mb-12 max-w-2xl text-lg font-mono text-white lg:text-xl">
                A community of AI enthusiasts, developers, and innovators pushing the boundaries of artificial
                intelligence through hands-on learning and real-world projects.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </section>

          <section className="border-t-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="mb-20 text-center">
                <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white lg:text-5xl">What We Do</h2>
                <p className="mx-auto max-w-2xl text-lg font-mono text-white">
                  encode ai is dedicated to exploring and advancing artificial intelligence through collaborative
                  learning and practical application
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-6 rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-none border-2 border-white bg-[rgb(255,102,0)]">
                    <Brain className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white">AI Workshops</h3>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Regular hands-on workshops covering machine learning, deep learning, NLP, computer vision, and the
                    latest AI frameworks.
                  </p>
                </div>
                <div className="flex flex-col gap-6 rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-none border-2 border-white bg-[rgb(255,102,0)]">
                    <Code className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white">Build Projects</h3>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Collaborate on real-world AI applications, from chatbots and recommendation systems to autonomous
                    agents and generative AI.
                  </p>
                </div>
                <div className="flex flex-col gap-6 rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-none border-2 border-white bg-[rgb(255,102,0)]">
                    <Rocket className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white">Hackathons</h3>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Participate in exciting AI hackathons and competitions where you can showcase your skills and win
                    prizes.
                  </p>
                </div>
                <div className="flex flex-col gap-6 rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-none border-2 border-white bg-[rgb(255,102,0)]">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white">Networking</h3>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Connect with fellow AI enthusiasts, industry professionals, and potential collaborators in a vibrant
                    community.
                  </p>
                </div>
                <div className="flex flex-col gap-6 rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-none border-2 border-white bg-[rgb(255,102,0)]">
                    <MessageSquare className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white">Guest Speakers</h3>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Learn from industry experts and researchers through talks, panels, and Q&A sessions about
                    cutting-edge AI developments.
                  </p>
                </div>
                <div className="flex flex-col gap-6 rounded-none border-2 border-white bg-black p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-none border-2 border-white bg-[rgb(255,102,0)]">
                    <Sparkles className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white">Research Groups</h3>
                  <p className="font-mono text-sm leading-relaxed text-white">
                    Join specialized research groups focusing on specific AI domains like reinforcement learning, GANs,
                    and transformer models.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t-4 border-white bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
              <div className="mb-20 text-center">
                <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white lg:text-5xl">Our Heads</h2>
                <p className="mx-auto max-w-2xl text-lg font-mono text-white">
                  Meet the dedicated members leading encode ai and fostering innovation
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 h-40 w-40 rounded-none border-2 border-white bg-[rgb(255,102,0)] shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]" />
                  <h3 className="mb-2 text-lg font-bold uppercase text-white">Vinitha U S</h3>
                  <p className="mb-3 text-sm font-bold uppercase text-[rgb(255,102,0)]">Club Head</p>
                  <p className="text-sm font-mono leading-relaxed text-white">
                    ML Engineer passionate about democratizing AI education
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 h-40 w-40 rounded-none border-2 border-white bg-[rgb(255,102,0)] shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]" />
                  <h3 className="mb-2 text-lg font-bold uppercase text-white">Akshat Tripathi</h3>
                  <p className="mb-3 text-sm font-bold uppercase text-[rgb(255,102,0)]">Club Head</p>
                  <p className="text-sm font-mono leading-relaxed text-white">
                    Computer Vision researcher with focus on real-time applications
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="border-y-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
              <div className="grid gap-12 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-4 text-6xl font-bold uppercase text-[rgb(255,102,0)]">100+</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white">Active Members</div>
                </div>
                <div className="text-center border-x-2 border-white">
                  <div className="mb-4 text-6xl font-bold uppercase text-[rgb(255,102,0)]">25+</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="mb-4 text-6xl font-bold uppercase text-[rgb(255,102,0)]">6+</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white">Industry Partners</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          {/* <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-8 max-w-3xl text-5xl font-bold uppercase tracking-tight text-white lg:text-6xl">
                Ready to start your AI journey?
              </h2>
              <p className="mb-12 max-w-2xl text-lg font-mono leading-relaxed text-white">
                Join encode ai today and become part of a thriving community pushing the boundaries of artificial
                intelligence.
              </p>
              <Button size="lg" className="gap-2">
                Join the Community <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </section> */}

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

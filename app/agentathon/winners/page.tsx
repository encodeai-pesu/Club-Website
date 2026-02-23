import { Sidebar } from "@/components/sidebar"
import { ArrowLeft, Trophy } from "lucide-react"
import Link from "next/link"

const winners = [
    {
        place: "1st Place",
        team: "Andu Pandu Society",
        pdf: "/Agentathon/1.pdf",
    },
    {
        place: "2nd Place",
        team: "Traceops",
        pdf: "/Agentathon/2.pdf",
    },
    {
        place: "3rd Place",
        team: "Drishti",
        pdf: "/Agentathon/3.pdf",
    },
]

export default function AgentathonWinnersPage() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1 md:ml-64">
                <div className="min-h-screen bg-black">

                    {/* Header */}
                    <section className="border-b-4 border-white">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <Link
                                href="/agentathon"
                                className="mb-6 inline-flex items-center gap-2 text-white hover:text-[rgb(255,102,0)]"
                            >
                                <ArrowLeft className="h-5 w-5" />
                                <span>Back to Agentathon</span>
                            </Link>

                            <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight text-white lg:text-6xl">
                                Agentathon Winners
                            </h1>

                            <p className="max-w-2xl text-lg font-mono text-white">
                                Celebrating the top teams who built outstanding Agentic AI solutions at Agentathon 2026.
                            </p>
                        </div>
                    </section>

                    {/* Winners */}
                    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                        <div className="space-y-12">
                            {winners.map((winner, index) => (
                                <div
                                    key={index}
                                    className="rounded-none border-2 border-white bg-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
                                >
                                    <div className="flex items-center gap-4 border-b-2 border-white px-8 py-6">
                                        <Trophy className="h-6 w-6 text-[rgb(255,102,0)] flex-shrink-0" />
                                        <div>
                                            <p className="font-mono text-sm font-bold uppercase text-[rgb(255,102,0)]">
                                                {winner.place}
                                            </p>
                                            <h2 className="text-2xl font-bold uppercase text-white">
                                                {winner.team}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Inline PDF Viewer */}
                                    <div className="w-full h-[600px] bg-white">
                                        <iframe
                                            src={winner.pdf}
                                            title={`${winner.team} Certificate`}
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="border-t-4 border-white">
                        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/logo.png"
                                        alt="Encode AI"
                                        className="h-8 w-8 border-2 border-white"
                                    />
                                    <span className="text-xl font-bold uppercase text-white">
                                        Encode.AI
                                    </span>
                                </div>

                                <p className="text-sm font-mono text-white">
                                    © 2026 Encode.AI. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>
        </div>
    )
}

"use client"

import React, { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Code2 } from "lucide-react"

const WEBHOOK_URL =
    "https://script.google.com/macros/s/AKfycbwoMB9s4i_a0gZKGADRaDcO3gjplMQ_kAyv_Ta7ZM-ICD2R5D93zyextBrmWf4K8iCrkw/exec"

interface TeamMember {
    name: string
    college: string
    srn: string
    phone: string
    leetcode: string
    codeforces: string
    codechef: string
    isPesuHostellite: boolean
}

interface TeamLeader extends TeamMember {
    email: string
}

const emptyLeader = (): TeamLeader => ({
    name: "",
    email: "",
    college: "",
    srn: "",
    phone: "",
    leetcode: "",
    codeforces: "",
    codechef: "",
    isPesuHostellite: false,
})

const emptyMember = (): TeamMember => ({
    name: "",
    college: "",
    srn: "",
    phone: "",
    leetcode: "",
    codeforces: "",
    codechef: "",
    isPesuHostellite: false,
})

export default function AlgomaniaRegistration() {
    const [teamName, setTeamName] = useState("")
    const [teamLeader, setTeamLeader] = useState<TeamLeader>(emptyLeader())
    const [member1, setMember1] = useState<TeamMember>(emptyMember())
    const [member2, setMember2] = useState<TeamMember>(emptyMember())
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const showError = (message: string) => {
        setErrorMessage(message)
        setShowErrorModal(true)
    }

    const validateMember = (member: TeamMember, label: string): string | null => {
        if (!member.name) return `Please fill in ${label}'s full name`
        if (!member.college) return `Please fill in ${label}'s college name`
        if (!member.srn) return `Please fill in ${label}'s SRN / Student ID`
        if (!member.phone) return `Please fill in ${label}'s phone number`
        // Coding profiles are optional — no validation needed
        return null
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsSubmitting(true)

        // Validate team name
        if (!teamName.trim()) {
            showError("Please enter a team name")
            setIsSubmitting(false)
            return
        }

        // Validate team leader
        if (!teamLeader.email) {
            showError("Please fill in the Team Leader's email")
            setIsSubmitting(false)
            return
        }
        const leaderError = validateMember(teamLeader, "Team Leader")
        if (leaderError) {
            showError(leaderError)
            setIsSubmitting(false)
            return
        }

        // Validate members
        const m1Error = validateMember(member1, "Member 1")
        if (m1Error) {
            showError(m1Error)
            setIsSubmitting(false)
            return
        }

        const m2Error = validateMember(member2, "Member 2")
        if (m2Error) {
            showError(m2Error)
            setIsSubmitting(false)
            return
        }

        try {
            // Build URLSearchParams — required for no-cors POST to Google Apps Script
            // (application/x-www-form-urlencoded is a CORS-safelisted content type)
            const params = new URLSearchParams()
            params.append("teamName", teamName)
            // Team Leader
            params.append("leaderName", teamLeader.name)
            params.append("leaderEmail", teamLeader.email)
            params.append("leaderCollege", teamLeader.college)
            params.append("leaderSrn", teamLeader.srn)
            params.append("leaderPhone", teamLeader.phone)
            params.append("leaderLeetcode", teamLeader.leetcode)
            params.append("leaderCodeforces", teamLeader.codeforces)
            params.append("leaderCodechef", teamLeader.codechef)
            params.append("leaderHostellite", teamLeader.isPesuHostellite ? "Yes" : "No")
            // Member 1
            params.append("member1Name", member1.name)
            params.append("member1College", member1.college)
            params.append("member1Srn", member1.srn)
            params.append("member1Phone", member1.phone)
            params.append("member1Leetcode", member1.leetcode)
            params.append("member1Codeforces", member1.codeforces)
            params.append("member1Codechef", member1.codechef)
            params.append("member1Hostellite", member1.isPesuHostellite ? "Yes" : "No")
            // Member 2
            params.append("member2Name", member2.name)
            params.append("member2College", member2.college)
            params.append("member2Srn", member2.srn)
            params.append("member2Phone", member2.phone)
            params.append("member2Leetcode", member2.leetcode)
            params.append("member2Codeforces", member2.codeforces)
            params.append("member2Codechef", member2.codechef)
            params.append("member2Hostellite", member2.isPesuHostellite ? "Yes" : "No")
            params.append("submittedAt", new Date().toISOString())

            // Send to Google Sheets webhook (no-cors, form-encoded)
            await fetch(WEBHOOK_URL, {
                method: "POST",
                mode: "no-cors",
                body: params,
            })

            // no-cors means we can't read the response, so optimistically show success
            setShowSuccessModal(true)

            // Reset form
            setTeamName("")
            setTeamLeader(emptyLeader())
            setMember1(emptyMember())
            setMember2(emptyMember())
        } catch (error) {
            console.error("Submission error:", error)
            showError("An error occurred. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const renderMemberForm = (
        member: TeamMember,
        setMember: React.Dispatch<React.SetStateAction<TeamMember>>,
        title: string,
        prefix: string,
        includeEmail?: { value: string; onChange: (v: string) => void }
    ) => (
        <div className="space-y-6 rounded-none border-2 border-white bg-zinc-950 p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <h3 className="text-xl font-bold uppercase tracking-tight text-[rgb(255,102,0)]">
                {title} <span className="text-red-500">*</span>
            </h3>

            <div className="space-y-4">
                {/* Full Name */}
                <div>
                    <Label htmlFor={`${prefix}-name`}>
                        Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id={`${prefix}-name`}
                        value={member.name}
                        onChange={(e) => setMember({ ...member, name: e.target.value })}
                        placeholder="Enter full name"
                        required
                        className="mt-2"
                    />
                </div>

                {/* Email – only for leader */}
                {includeEmail && (
                    <div>
                        <Label htmlFor={`${prefix}-email`}>
                            Email ID <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id={`${prefix}-email`}
                            type="email"
                            value={includeEmail.value}
                            onChange={(e) => includeEmail.onChange(e.target.value)}
                            placeholder="email@example.com"
                            required
                            className="mt-2"
                        />
                    </div>
                )}

                {/* College */}
                <div>
                    <Label htmlFor={`${prefix}-college`}>
                        College Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id={`${prefix}-college`}
                        value={member.college}
                        onChange={(e) => setMember({ ...member, college: e.target.value })}
                        placeholder="Enter college name"
                        required
                        className="mt-2"
                    />
                </div>

                {/* SRN */}
                <div>
                    <Label htmlFor={`${prefix}-srn`}>
                        SRN / Student ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id={`${prefix}-srn`}
                        value={member.srn}
                        onChange={(e) => setMember({ ...member, srn: e.target.value })}
                        placeholder="Enter SRN or Student ID"
                        required
                        className="mt-2"
                    />
                </div>

                {/* Phone */}
                <div>
                    <Label htmlFor={`${prefix}-phone`}>
                        Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id={`${prefix}-phone`}
                        type="tel"
                        value={member.phone}
                        onChange={(e) => setMember({ ...member, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="mt-2"
                    />
                </div>

                {/* Coding Profiles Divider */}
                <div className="flex items-center gap-3 pt-2">
                    <Code2 className="h-5 w-5 text-[rgb(255,102,0)]" />
                    <span className="text-sm font-bold uppercase tracking-wider text-[rgb(255,102,0)]">
                        Coding Profiles
                    </span>
                    <div className="flex-1 h-px bg-zinc-700" />
                </div>

                {/* LeetCode */}
                <div>
                    <Label htmlFor={`${prefix}-leetcode`}>
                        LeetCode Profile <span className="text-zinc-400"></span>
                    </Label>
                    <Input
                        id={`${prefix}-leetcode`}
                        type="url"
                        value={member.leetcode}
                        onChange={(e) => setMember({ ...member, leetcode: e.target.value })}
                        placeholder="https://leetcode.com/u/yourusername"
                        className="mt-2"
                    />
                </div>

                {/* Codeforces */}
                <div>
                    <Label htmlFor={`${prefix}-codeforces`}>
                        Codeforces Profile <span className="text-zinc-400"></span>
                    </Label>
                    <Input
                        id={`${prefix}-codeforces`}
                        type="url"
                        value={member.codeforces}
                        onChange={(e) => setMember({ ...member, codeforces: e.target.value })}
                        placeholder="https://codeforces.com/profile/yourusername"
                        className="mt-2"
                    />
                </div>

                {/* CodeChef */}
                <div>
                    <Label htmlFor={`${prefix}-codechef`}>
                        CodeChef Profile <span className="text-zinc-400"></span>
                    </Label>
                    <Input
                        id={`${prefix}-codechef`}
                        type="url"
                        value={member.codechef}
                        onChange={(e) => setMember({ ...member, codechef: e.target.value })}
                        placeholder="https://www.codechef.com/users/yourusername"
                        className="mt-2"
                    />
                </div>

                {/* PESU Hostellite checkbox */}
                <div className="flex items-center space-x-3 pt-2">
                    <Checkbox
                        id={`${prefix}-hostellite`}
                        checked={member.isPesuHostellite}
                        onCheckedChange={(checked) =>
                            setMember({ ...member, isPesuHostellite: checked as boolean })
                        }
                    />
                    <Label
                        htmlFor={`${prefix}-hostellite`}
                        className="text-sm font-medium leading-none cursor-pointer"
                    >
                        Please check the box if this member is a PESU Hostellite.
                    </Label>
                </div>
            </div>
        </div>
    )

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 md:ml-64">
                <div className="min-h-screen bg-black">
                    {/* Header */}
                    <section className="border-b-4 border-white">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="flex items-center gap-4 mb-6">
                                <Users className="h-12 w-12 text-[rgb(255,102,0)]" />
                                <h1 className="text-5xl font-bold uppercase tracking-tight text-white lg:text-6xl">
                                    Algomania
                                </h1>
                            </div>
                            <p className="max-w-3xl text-lg font-mono leading-relaxed text-white mb-8">
                                Register your team for Algomania — the ultimate competitive programming showdown!
                            </p>

                            {/* Important Notes */}
                            <div className="rounded-none border-2 border-[rgb(255,102,0)] bg-zinc-950 p-8 shadow-[8px_8px_0px_0px_rgba(255,102,0,0.3)]">
                                <h2 className="text-2xl font-bold uppercase tracking-tight text-[rgb(255,102,0)] mb-6">
                                    Important Notes
                                </h2>
                                <ul className="space-y-3 font-mono text-sm text-white leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                                        <span>Teams must have <strong>exactly 3 members</strong> — 1 Team Leader and 2 Team Members. No more, no less.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                                        <span>Please complete all the information for your team. Ensure all members submit accurate details.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                                        <span>All further communication will happen via the Team Leader's email.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                                        <span>
                                            Feel free to reach out for queries:{" "}
                                            <a
                                                href="mailto:pesu.encodeai@gmail.com"
                                                className="text-[rgb(255,102,0)] hover:underline"
                                            >
                                                pesu.encodeai@gmail.com
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Registration Form */}
                    <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            {/* Team Name */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-1 w-12 bg-[rgb(255,102,0)]"></div>
                                    <h2 className="text-3xl font-bold uppercase tracking-tight text-white">
                                        Team Details
                                    </h2>
                                </div>
                                <div>
                                    <Label htmlFor="team-name">
                                        Team Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="team-name"
                                        value={teamName}
                                        onChange={(e) => setTeamName(e.target.value)}
                                        placeholder="Enter your team name"
                                        required
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            {/* Team Leader */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-12 bg-[rgb(255,102,0)]"></div>
                                    <h2 className="text-3xl font-bold uppercase tracking-tight text-white">
                                        Team Leader
                                    </h2>
                                </div>
                                {renderMemberForm(
                                    teamLeader,
                                    setTeamLeader as React.Dispatch<React.SetStateAction<TeamMember>>,
                                    "Team Leader",
                                    "leader",
                                    {
                                        value: teamLeader.email,
                                        onChange: (v) => setTeamLeader({ ...teamLeader, email: v }),
                                    }
                                )}
                            </div>

                            {/* Team Members */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-12 bg-[rgb(255,102,0)]"></div>
                                    <h2 className="text-3xl font-bold uppercase tracking-tight text-white">
                                        Team Members
                                    </h2>
                                </div>
                                {renderMemberForm(member1, setMember1, "Member 1", "member1")}
                                {renderMemberForm(member2, setMember2, "Member 2", "member2")}
                            </div>

                            {/* Submit */}
                            <div className="flex justify-center pt-8">
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="min-w-[200px]"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Registration"}
                                </Button>
                            </div>
                        </form>
                    </section>

                    {/* Error Modal */}
                    {showErrorModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                            <div className="mx-4 max-w-md rounded-none border-4 border-white bg-black p-8 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
                                <div className="mb-6 flex justify-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-red-500 bg-red-500/20">
                                        <svg
                                            className="h-10 w-10 text-red-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mb-8 text-center font-mono text-lg leading-relaxed text-white">
                                    {errorMessage}
                                </p>
                                <Button
                                    onClick={() => setShowErrorModal(false)}
                                    className="w-full"
                                    size="lg"
                                >
                                    OK
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Success Modal */}
                    {showSuccessModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                            <div className="mx-4 max-w-md rounded-none border-4 border-white bg-black p-8 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
                                <div className="mb-6 flex justify-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[rgb(255,102,0)] bg-[rgb(255,102,0)]/20">
                                        <svg
                                            className="h-10 w-10 text-[rgb(255,102,0)]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="mb-4 text-center text-3xl font-bold uppercase text-white">
                                    Registration Submitted!
                                </h2>
                                <p className="mb-8 text-center font-mono text-sm leading-relaxed text-white">
                                    Your team has been registered for Algomania. We'll reach out via the Team Leader's email.
                                </p>
                                <Button
                                    onClick={() => setShowSuccessModal(false)}
                                    className="w-full"
                                    size="lg"
                                >
                                    OK
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    <footer className="border-t-4 border-white">
                        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/logo.png"
                                        alt="Encode AI"
                                        className="h-8 w-8 rounded-none border-2 border-white"
                                    />
                                    <span className="text-xl font-bold uppercase tracking-tight text-white">
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

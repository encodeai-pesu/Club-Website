"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Users, FileText, ExternalLink, Download } from "lucide-react"
import { useUploadThing } from "@/lib/uploadthing"

interface TeamMember {
  name: string
  college: string
  srn: string
  phone: string
  linkedin: string
  github: string
  isPesuHostellite: boolean
}

export default function AgentathonRegistration() {
  const [teamName, setTeamName] = useState("")
  const [teamLeader, setTeamLeader] = useState<TeamMember & { email: string }>({
    name: "",
    email: "",
    college: "",
    srn: "",
    phone: "",
    linkedin: "",
    github: "",
    isPesuHostellite: false
  })
  const [teammate1, setTeammate1] = useState<TeamMember>({
    name: "",
    college: "",
    srn: "",
    phone: "",
    linkedin: "",
    github: "",
    isPesuHostellite: false
  })
  const [teammate2, setTeammate2] = useState<TeamMember>({
    name: "",
    college: "",
    srn: "",
    phone: "",
    linkedin: "",
    github: "",
    isPesuHostellite: false
  })
  const [teammate3, setTeammate3] = useState<TeamMember>({
    name: "",
    college: "",
    srn: "",
    phone: "",
    linkedin: "",
    github: "",
    isPesuHostellite: false
  })
  const [track, setTrack] = useState("")
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const { startUpload } = useUploadThing("pdfUploader")

  const showError = (message: string) => {
    setErrorMessage(message)
    setShowErrorModal(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type !== "application/pdf") {
        showError("Please upload a PDF file only")
        return
      }
      if (file.size > 10 * 1024 * 1024) {
        showError("File size must be less than 10MB")
        return
      }
      setPdfFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSubmitting(true)

    // Validate required fields
    if (!teamName || !teamLeader.name || !teamLeader.email || !teamLeader.college || 
        !teamLeader.srn || !teamLeader.phone || !teamLeader.linkedin || !teamLeader.github) {
      showError("Please fill in all team leader details")
      setIsSubmitting(false)
      return
    }

    if (!teammate1.name || !teammate1.college || !teammate1.srn || !teammate1.phone || 
        !teammate1.linkedin || !teammate1.github) {
      showError("Please fill in all Member 1 details")
      setIsSubmitting(false)
      return
    }

    if (!teammate2.name || !teammate2.college || !teammate2.srn || !teammate2.phone || 
        !teammate2.linkedin || !teammate2.github) {
      showError("Please fill in all Member 2 details")
      setIsSubmitting(false)
      return
    }

    if (!track) {
      showError("Please select a track")
      setIsSubmitting(false)
      return
    }

    if (!pdfFile) {
      showError("Please upload your presentation PDF")
      setIsSubmitting(false)
      return
    }

    try {
      // Upload PDF first
      setIsUploading(true)
      const uploadedFiles = await startUpload([pdfFile])
      setIsUploading(false)

      if (!uploadedFiles || uploadedFiles.length === 0) {
        showError("Failed to upload PDF. Please try again.")
        setIsSubmitting(false)
        return
      }

      const uploadedFile = uploadedFiles[0]

      // Submit registration with PDF URL
      const formData = new FormData()
      formData.append("teamName", teamName)
      formData.append("teamLeader", JSON.stringify(teamLeader))
      formData.append("teammate1", JSON.stringify(teammate1))
      formData.append("teammate2", JSON.stringify(teammate2))
      formData.append("teammate3", JSON.stringify(teammate3))
      formData.append("track", track)
      formData.append("pdfUrl", uploadedFile.url)
      formData.append("pdfFileName", pdfFile.name)
      formData.append("pdfFileSize", pdfFile.size.toString())

      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setShowSuccessModal(true)
        // Reset form
        setTeamName("")
        setTeamLeader({ name: "", email: "", college: "", srn: "", phone: "", linkedin: "", github: "", isPesuHostellite: false })
        setTeammate1({ name: "", college: "", srn: "", phone: "", linkedin: "", github: "", isPesuHostellite: false })
        setTeammate2({ name: "", college: "", srn: "", phone: "", linkedin: "", github: "", isPesuHostellite: false })
        setTeammate3({ name: "", college: "", srn: "", phone: "", linkedin: "", github: "", isPesuHostellite: false })
        setTrack("")
        setPdfFile(null)
      } else {
        showError("Failed to submit registration. Please try again.")
      }
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
    required: boolean = false,
    includeEmail: boolean = false
  ) => (
    <div className="space-y-6 rounded-none border-2 border-white bg-zinc-950 p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
      <h3 className="text-xl font-bold uppercase tracking-tight text-[rgb(255,102,0)]">
        {title} {required && <span className="text-red-500">*</span>}
      </h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor={`${prefix}-name`}>{prefix === "leader" ? "Name" : "Full Name"} {required && <span className="text-red-500">*</span>}</Label>
          <Input
            id={`${prefix}-name`}
            value={member.name}
            onChange={(e) => setMember({ ...member, name: e.target.value })}
            placeholder="Enter full name"
            required={required}
            className="mt-2"
          />
        </div>

        {includeEmail && (
          <div>
            <Label htmlFor={`${prefix}-email`}>Email ID <span className="text-red-500">*</span></Label>
            <Input
              id={`${prefix}-email`}
              type="email"
              value={(member as any).email}
              onChange={(e) => setMember({ ...member, email: e.target.value } as any)}
              placeholder="email@example.com"
              required
              className="mt-2"
            />
          </div>
        )}

        <div>
          <Label htmlFor={`${prefix}-college`}>College Name {required && <span className="text-red-500">*</span>}</Label>
          <Input
            id={`${prefix}-college`}
            value={member.college}
            onChange={(e) => setMember({ ...member, college: e.target.value })}
            placeholder="Enter college name"
            required={required}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor={`${prefix}-srn`}>SRN / Student ID {required && <span className="text-red-500">*</span>}</Label>
          <Input
            id={`${prefix}-srn`}
            value={member.srn}
            onChange={(e) => setMember({ ...member, srn: e.target.value })}
            placeholder="Enter SRN or Student ID"
            required={required}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor={`${prefix}-phone`}>Phone Number {required && <span className="text-red-500">*</span>}</Label>
          <Input
            id={`${prefix}-phone`}
            type="tel"
            value={member.phone}
            onChange={(e) => setMember({ ...member, phone: e.target.value })}
            placeholder="+91 XXXXX XXXXX"
            required={required}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor={`${prefix}-linkedin`}>LinkedIn Profile {required && <span className="text-red-500">*</span>}</Label>
          <Input
            id={`${prefix}-linkedin`}
            type="url"
            value={member.linkedin}
            onChange={(e) => setMember({ ...member, linkedin: e.target.value })}
            placeholder="https://linkedin.com/in/yourprofile"
            required={required}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor={`${prefix}-github`}>GitHub Profile {required && <span className="text-red-500">*</span>}</Label>
          <Input
            id={`${prefix}-github`}
            type="url"
            value={member.github}
            onChange={(e) => setMember({ ...member, github: e.target.value })}
            placeholder="https://github.com/yourusername"
            required={required}
            className="mt-2"
          />
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <Checkbox
            id={`${prefix}-hostellite`}
            checked={member.isPesuHostellite}
            onCheckedChange={(checked) => setMember({ ...member, isPesuHostellite: checked as boolean })}
          />
          <Label 
            htmlFor={`${prefix}-hostellite`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            Please check the box if this member is a PESU Hostellite.          </Label>
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
                  Agentathon 2026
                </h1>
              </div>
              <p className="max-w-3xl text-lg font-mono leading-relaxed text-white mb-8">
                Welcome to the Agentathon 2026!
              </p>
              
              {/* Important Notes */}
              <div className="rounded-none border-2 border-[rgb(255,102,0)] bg-zinc-950 p-8 shadow-[8px_8px_0px_0px_rgba(255,102,0,0.3)]">
                <h2 className="text-2xl font-bold uppercase tracking-tight text-[rgb(255,102,0)] mb-6">
                  Important Notes
                </h2>
                <ul className="space-y-3 font-mono text-sm text-white leading-relaxed">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <span>Please complete all the information for your team. Ensure that all the members submit accurate details.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <span>Winners will be chosen from all shortlisted teams, rather than by individual track.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <span>A registration fee of ₹600 will be applied to the teams that are shortlisted.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <span>Please adhere to the instructions meticulously.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <span>Upon being shortlisted, all further communication will happen via the Team Leader's email.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-none bg-[rgb(255,102,0)]" />
                    <span>Feel free to reach out to us on our email for queries, rules and further communications: <a href="mailto:pesu.encodeai@gmail.com" className="text-[rgb(255,102,0)] hover:underline">pesu.encodeai@gmail.com</a></span>
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
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Team Details</h2>
                </div>
                <div>
                  <Label htmlFor="team-name">Team Name <span className="text-red-500">*</span></Label>
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
              {renderMemberForm(teamLeader, setTeamLeader as any, "Team Leader", "leader", true, true)}

              {/* Team Members */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-[rgb(255,102,0)]"></div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Team Members</h2>
                </div>
                {renderMemberForm(teammate1, setTeammate1, "Member 1", "member1", true, false)}
                {renderMemberForm(teammate2, setTeammate2, "Member 2", "member2", true, false)}
                {renderMemberForm(teammate3, setTeammate3, "Member 3", "member3", false, false)}
              </div>

              {/* Track Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-[rgb(255,102,0)]"></div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Track Selection</h2>
                </div>
                <div>
                  <Label htmlFor="track">Choose your track <span className="text-red-500">*</span></Label>
                  <p className="text-sm font-mono text-zinc-400 mt-1 mb-3">
                    Select the track your team wants to participate in
                  </p>
                  <Select value={track} onValueChange={setTrack} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Education & Knowledge Management</SelectItem>
                      <SelectItem value="finance">Finance & Personal/Business Financial Tools</SelectItem>
                      <SelectItem value="developer">Developer Productivity & Tooling</SelectItem>
                      <SelectItem value="social">Social Impact & Community Services</SelectItem>
                      <SelectItem value="wellness">Personal Wellness & Lifestyle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Presentation Upload */}
              <div className="space-y-6 rounded-none border-2 border-white bg-zinc-950 p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-[rgb(255,102,0)] mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                        PPT Submission <span className="text-red-500">*</span>
                      </h3>
                      <a
                        href="/Encode.AI-Agentathon.pptx"
                        download
                        className="flex items-center gap-2 rounded-none border-2 border-[rgb(255,102,0)] bg-black px-4 py-2 text-sm font-bold uppercase text-[rgb(255,102,0)] transition-all hover:bg-[rgb(255,102,0)] hover:text-black shadow-[4px_4px_0px_0px_rgba(255,102,0,0.3)]"
                      >
                        <Download className="h-4 w-4" />
                        Download Template
                      </a>
                    </div>
                    <p className="text-sm font-mono text-zinc-400 mb-4 leading-relaxed">
                      Please upload your presentation as per the requirements in .pdf format.
                    </p>
                    <p className="text-sm font-mono text-zinc-400 mb-4 leading-relaxed">
                      <span className="text-[rgb(255,102,0)] font-bold">Important:</span> Name your PDF file with your team name (e.g., TeamName.pdf)
                    </p>
                    <p className="text-sm font-mono text-zinc-400 mb-4 leading-relaxed">
                      Follow us on Instagram for further updates, as selected teams will be declared on our page.
                    </p>
                   

                    <div className="mt-4">
                      <Label htmlFor="pdf-upload" className="mb-2 block">
                        Upload your Presentation (PDF, max 10MB)
                      </Label>
                      <div className="mt-2">
                        <label
                          htmlFor="pdf-upload"
                          className="flex cursor-pointer items-center justify-center gap-3 rounded-none border-2 border-dashed border-white bg-black px-6 py-8 text-white transition-all hover:border-[rgb(255,102,0)] hover:bg-zinc-950"
                        >
                          <Upload className="h-6 w-6 text-[rgb(255,102,0)]" />
                          <div className="text-center">
                            {pdfFile ? (
                              <div>
                                <p className="font-mono text-sm text-[rgb(255,102,0)]">{pdfFile.name}</p>
                                <p className="font-mono text-xs text-zinc-500 mt-1">
                                  {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            ) : (
                              <div>
                                <p className="font-bold uppercase">Click to upload</p>
                                <p className="font-mono text-xs text-zinc-500 mt-1">PDF only, up to 10MB</p>
                              </div>
                            )}
                          </div>
                        </label>
                        <input
                          id="pdf-upload"
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || isUploading}
                  className="min-w-[200px]"
                >
                  {isUploading ? "Uploading PDF..." : isSubmitting ? "Submitting..." : "Submit Registration"}
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
                    <svg className="h-10 w-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
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
                    <svg className="h-10 w-10 text-[rgb(255,102,0)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="mb-4 text-center text-3xl font-bold uppercase text-white">
                  Registration Submitted!
                </h2>
                <p className="mb-8 text-center font-mono text-sm leading-relaxed text-white">
                  We'll contact you soon via the Team Leader's email.
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

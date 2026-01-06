"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Users, FileText, ExternalLink } from "lucide-react"
import { useUploadThing } from "@/lib/uploadthing"

interface TeamMember {
  name: string
  contact: string
  email: string
  college: string
  isPES: boolean
  pesType: "day-scholar" | "hostelite" | "pg" | ""
}

export default function AgentathonRegistration() {
  const [teamName, setTeamName] = useState("")
  const [teamLeader, setTeamLeader] = useState<TeamMember>({
    name: "",
    contact: "",
    email: "",
    college: "",
    isPES: false,
    pesType: ""
  })
  const [teammate1, setTeammate1] = useState<TeamMember>({
    name: "",
    contact: "",
    email: "",
    college: "",
    isPES: false,
    pesType: ""
  })
  const [teammate2, setTeammate2] = useState<TeamMember>({
    name: "",
    contact: "",
    email: "",
    college: "",
    isPES: false,
    pesType: ""
  })
  const [teammate3, setTeammate3] = useState<TeamMember>({
    name: "",
    contact: "",
    email: "",
    college: "",
    isPES: false,
    pesType: ""
  })
  const [domain, setDomain] = useState("")
  const [projectIdea, setProjectIdea] = useState("")
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [queries, setQueries] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const { startUpload } = useUploadThing("pdfUploader")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file only")
        return
      }
      if (file.size > 25 * 1024 * 1024) {
        alert("File size must be less than 25MB")
        return
      }
      setPdfFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate required fields
    if (!teamName || !teamLeader.name || !teamLeader.email || !teamLeader.contact || !teamLeader.college) {
      alert("Please fill in all team leader details")
      setIsSubmitting(false)
      return
    }

    if (!domain || !projectIdea) {
      alert("Please select a domain and provide your project idea")
      setIsSubmitting(false)
      return
    }

    if (!pdfFile) {
      alert("Please upload your project proposal PDF")
      setIsSubmitting(false)
      return
    }

    try {
      // Upload PDF first
      setIsUploading(true)
      const uploadedFiles = await startUpload([pdfFile])
      setIsUploading(false)

      if (!uploadedFiles || uploadedFiles.length === 0) {
        alert("Failed to upload PDF. Please try again.")
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
      formData.append("domain", domain)
      formData.append("projectIdea", projectIdea)
      formData.append("pdfUrl", uploadedFile.url)
      formData.append("pdfFileName", pdfFile.name)
      formData.append("pdfFileSize", pdfFile.size.toString())
      formData.append("queries", queries)

      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        alert("Registration submitted successfully! We'll contact you soon.")
        // Reset form
        setTeamName("")
        setTeamLeader({ name: "", contact: "", email: "", college: "", isPES: false, pesType: "" })
        setTeammate1({ name: "", contact: "", email: "", college: "", isPES: false, pesType: "" })
        setTeammate2({ name: "", contact: "", email: "", college: "", isPES: false, pesType: "" })
        setTeammate3({ name: "", contact: "", email: "", college: "", isPES: false, pesType: "" })
        setDomain("")
        setProjectIdea("")
        setPdfFile(null)
        setQueries("")
      } else {
        alert("Failed to submit registration. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderMemberForm = (
    member: TeamMember,
    setMember: React.Dispatch<React.SetStateAction<TeamMember>>,
    title: string,
    required: boolean = false
  ) => (
    <div className="space-y-6 rounded-none border-2 border-white bg-zinc-950 p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
      <h3 className="text-xl font-bold uppercase tracking-tight text-[rgb(255,102,0)]">
        {title} {required && <span className="text-red-500">*</span>}
      </h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor={`${title}-name`}>Name {required && <span className="text-red-500">*</span>}</Label>
          <Input
            id={`${title}-name`}
            value={member.name}
            onChange={(e) => setMember({ ...member, name: e.target.value })}
            placeholder="Enter full name"
            required={required}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor={`${title}-contact`}>Contact {required && <span className="text-red-500">*</span>}</Label>
          <Input
            id={`${title}-contact`}
            type="tel"
            value={member.contact}
            onChange={(e) => setMember({ ...member, contact: e.target.value })}
            placeholder="+91 XXXXX XXXXX"
            required={required}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor={`${title}-email`}>Email {required && <span className="text-red-500">*</span>}</Label>
          <Input
            id={`${title}-email`}
            type="email"
            value={member.email}
            onChange={(e) => setMember({ ...member, email: e.target.value })}
            placeholder="email@example.com"
            required={required}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor={`${title}-college`}>College {required && <span className="text-red-500">*</span>}</Label>
          <Input
            id={`${title}-college`}
            value={member.college}
            onChange={(e) => setMember({ ...member, college: e.target.value })}
            placeholder="Enter college name"
            required={required}
            className="mt-2"
          />
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <Checkbox
            id={`${title}-isPES`}
            checked={member.isPES}
            onCheckedChange={(checked) => 
              setMember({ ...member, isPES: checked as boolean, pesType: checked ? member.pesType : "" })
            }
          />
          <Label htmlFor={`${title}-isPES`} className="cursor-pointer">
            Are you from PES University?
          </Label>
        </div>

        {member.isPES && (
          <div className="space-y-3 pt-2">
            <Label>Accommodation Type</Label>
            <RadioGroup
              value={member.pesType}
              onValueChange={(value) => setMember({ ...member, pesType: value as TeamMember["pesType"] })}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="day-scholar" id={`${title}-day-scholar`} />
                <Label htmlFor={`${title}-day-scholar`} className="cursor-pointer font-normal">
                  Day Scholar
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="hostelite" id={`${title}-hostelite`} />
                <Label htmlFor={`${title}-hostelite`} className="cursor-pointer font-normal">
                  Hostelite
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="pg" id={`${title}-pg`} />
                <Label htmlFor={`${title}-pg`} className="cursor-pointer font-normal">
                  PG/Other
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}
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
                  Agentathon Registration
                </h1>
              </div>
              <p className="max-w-2xl text-lg font-mono leading-relaxed text-white">
                24-hour hackathon focused on building innovative AI solutions. Register your team below.
              </p>
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
              {renderMemberForm(teamLeader, setTeamLeader, "Team Leader", true)}

              {/* Team Members */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-[rgb(255,102,0)]"></div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Team Members</h2>
                </div>
                {renderMemberForm(teammate1, setTeammate1, "Team Member 1", true)}
                {renderMemberForm(teammate2, setTeammate2, "Team Member 2", true)}
                {renderMemberForm(teammate3, setTeammate3, "Team Member 3")}
              </div>

              {/* Domain Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-[rgb(255,102,0)]"></div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Project Details</h2>
                </div>
                <div>
                  <Label htmlFor="domain">Domain <span className="text-red-500">*</span></Label>
                  <Select value={domain} onValueChange={setDomain} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a domain" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-ml">Artificial Intelligence & Machine Learning</SelectItem>
                      <SelectItem value="web-dev">Web Development</SelectItem>
                      <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                      <SelectItem value="blockchain">Blockchain & Web3</SelectItem>
                      <SelectItem value="iot">Internet of Things (IoT)</SelectItem>
                      <SelectItem value="ar-vr">AR/VR & Metaverse</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="data-science">Data Science & Analytics</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Project Idea */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="project-idea">Project Idea <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="project-idea"
                    value={projectIdea}
                    onChange={(e) => setProjectIdea(e.target.value)}
                    placeholder="Describe your project idea in detail..."
                    required
                    className="mt-2 min-h-[200px]"
                  />
                </div>
              </div>

              {/* Project Proposal Upload */}
              <div className="space-y-6 rounded-none border-2 border-white bg-zinc-950 p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-[rgb(255,102,0)] mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">
                      Project Proposal <span className="text-red-500">*</span>
                    </h3>
                    <p className="text-sm font-mono text-zinc-400 mb-4 leading-relaxed">
                      Please review the template and guidelines before creating your proposal:
                    </p>
                    <a
                      href="https://docs.google.com/presentation/d/1IJUD9H-3gHvkC-M6lj91FE-aCWkTajc0/edit?slide=id.p1#slide=id.p1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[rgb(255,102,0)] font-mono text-sm hover:underline mb-6"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Proposal Template & Guidelines
                    </a>

                    <div className="mt-4">
                      <Label htmlFor="pdf-upload" className="mb-2 block">
                        Upload Proposal (PDF, max 25MB)
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
                                <p className="font-mono text-xs text-zinc-500 mt-1">PDF only, up to 25MB</p>
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

              {/* Queries */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="queries">Any Queries or Special Requirements?</Label>
                  <Textarea
                    id="queries"
                    value={queries}
                    onChange={(e) => setQueries(e.target.value)}
                    placeholder="Let us know if you have any questions or special requirements..."
                    className="mt-2"
                  />
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

          {/* Footer */}
          <footer className="border-t-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="font-mono text-sm text-white">
                  © 2025 Encode.AI. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <a href="#" className="font-mono text-sm text-white hover:text-[rgb(255,102,0)]">
                    Privacy Policy
                  </a>
                  <a href="#" className="font-mono text-sm text-white hover:text-[rgb(255,102,0)]">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

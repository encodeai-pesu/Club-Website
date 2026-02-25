import { NextRequest, NextResponse } from "next/server"

const WEBHOOK_URL =
    "https://script.google.com/macros/s/AKfycbwoMB9s4i_a0gZKGADRaDcO3gjplMQ_kAyv_Ta7ZM-ICD2R5D93zyextBrmWf4K8iCrkw/exec"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        // Server-side POST with JSON — no CORS issues, Apps Script reads e.postData.contents
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            redirect: "follow",
        })

        const text = await response.text()
        console.log("Apps Script response:", text)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("API route error:", error)
        return NextResponse.json({ success: false, error: "Internal error" }, { status: 500 })
    }
}

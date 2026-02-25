import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Agentathon registration is closed
  return NextResponse.json(
    { 
      success: false, 
      message: 'Registration is closed. Agentathon was held on January 31, 2026.' 
    },
    { status: 403 }
  )
}

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { 
      success: false, 
      message: 'Registration is closed. Agentathon was held on January 31, 2026.' 
    },
    { status: 403 }
  )
}

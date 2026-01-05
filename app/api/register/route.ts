import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { UTApi } from 'uploadthing/server'

const utapi = new UTApi()

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const teamName = formData.get('teamName')
    const teamLeader = JSON.parse(formData.get('teamLeader') as string)
    const teammate1 = JSON.parse(formData.get('teammate1') as string)
    const teammate2 = JSON.parse(formData.get('teammate2') as string)
    const teammate3 = JSON.parse(formData.get('teammate3') as string)
    const domain = formData.get('domain')
    const projectIdea = formData.get('projectIdea')
    const pdfUrl = formData.get('pdfUrl') as string // Now coming from client-side upload
    const pdfFileName = formData.get('pdfFileName') as string
    const pdfFileSize = formData.get('pdfFileSize') as string
    const queries = formData.get('queries')

    // Validate required fields
    if (!teamName || !teamLeader || !domain || !projectIdea || !pdfUrl) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Missing required fields' 
        },
        { status: 400 }
      )
    }

    // Save to MongoDB
    try {
      const db = await getDatabase()
      const registrationsCollection = db.collection('agentathon_registrations')
      
      const registration = {
        teamName,
        teamLeader,
        teammates: [
          teammate1.name ? teammate1 : null,
          teammate2.name ? teammate2 : null,
          teammate3.name ? teammate3 : null,
        ].filter(Boolean), // Remove empty teammates
        domain,
        projectIdea,
        proposalPdf: {
          url: pdfUrl,
          fileName: pdfFileName,
          fileSize: parseInt(pdfFileSize || '0'),
        },
        queries: queries || '',
        status: 'pending', // pending, approved, rejected
        submittedAt: new Date(),
        updatedAt: new Date(),
      }

      const result = await registrationsCollection.insertOne(registration)
      
      console.log('Registration saved to MongoDB:', result.insertedId)

      // TODO: Send confirmation email
      // await sendConfirmationEmail(teamLeader.email, teamName)

      return NextResponse.json(
        { 
          success: true, 
          message: 'Registration submitted successfully!',
          registrationId: result.insertedId.toString(),
        },
        { status: 200 }
      )
    } catch (dbError) {
      console.error('MongoDB error:', dbError)
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to save registration. Please try again.' 
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again.' 
      },
      { status: 500 }
    )
  }
}

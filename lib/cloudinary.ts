import { v2 as cloudinary } from 'cloudinary'

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error('Please add CLOUDINARY_CLOUD_NAME to .env.local')
}

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error('Please add CLOUDINARY_API_KEY to .env.local')
}

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error('Please add CLOUDINARY_API_SECRET to .env.local')
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

/**
 * Upload a file buffer to Cloudinary using signed upload
 * @param fileBuffer - The file buffer to upload
 * @param fileName - Original file name
 * @param folder - Cloudinary folder to upload to
 * @returns Upload result with secure_url
 */
export async function uploadToCloudinary(
  fileBuffer: Buffer,
  fileName: string,
  folder: string = 'agentathon-proposals'
): Promise<{ secure_url: string; public_id: string }> {
  try {
    // Generate a unique public ID
    const timestamp = Date.now()
    const publicId = `${folder}/${timestamp}-${fileName.replace(/\s+/g, '_')}`
    
    // Convert buffer to base64
    const base64File = `data:application/pdf;base64,${fileBuffer.toString('base64')}`
    
    // Upload with explicit options using the upload preset
    const uploadResult = await cloudinary.uploader.upload(base64File, {
      resource_type: 'raw',
      public_id: publicId,
      overwrite: true,
      invalidate: true,
      upload_preset: 'ml_default', // Use your Cloudinary upload preset
    })
    
    console.log('Cloudinary upload result:', {
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
      bytes: uploadResult.bytes,
      format: uploadResult.format,
      resource_type: uploadResult.resource_type,
    })
    
    return {
      secure_url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    }
  } catch (error: any) {
    console.error('Cloudinary upload failed:', {
      message: error.message,
      error: error.error,
      http_code: error.http_code,
    })
    throw error
  }
}

export default cloudinary

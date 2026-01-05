import { createUploadthing, type FileRouter } from "uploadthing/next"

const f = createUploadthing()

export const ourFileRouter = {
  pdfUploader: f({ 
    pdf: { 
      maxFileSize: "8MB", 
      maxFileCount: 1 
    } 
  })
    .onUploadComplete(async ({ file }) => {
      const fileUrl = file.url || file.ufsUrl
      console.log("Upload complete:", fileUrl)
      return { url: fileUrl }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter

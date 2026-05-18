import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "resume_pdf",
    "laravel-starter.zip"
  );

  try {
    // Check if the file exists on the server
    if (!fs.existsSync(filePath)) {
      return new NextResponse("File not found", { status: 404 });
    }

    // Read the file buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Return the file with headers to trigger automatic download
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="laravel-starter.zip"',
      },
    });
  } catch (error) {
    console.error("Error downloading laravel-starter.zip:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

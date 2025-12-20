import { NextResponse } from "next/server"

/**
 * Health check endpoint for container health monitoring
 * Used by Docker/Podman health checks and load balancers
 */
export async function GET() {
  try {
    // Basic health check - return 200 if the app is running
    return NextResponse.json(
      {
        status: "ok",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      },
      { status: 200 },
    )
  } catch (error) {
    // If something goes wrong, return 503 Service Unavailable
    return NextResponse.json(
      {
        status: "error",
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 503 },
    )
  }
}

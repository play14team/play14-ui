"use client" // Error components must be Client Components

import ErrorMessage from "@/components/layout/error-message"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string; cause?: Error & { code?: string } }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  // Detect connection errors
  const isConnectionError =
    error.message.includes("fetch failed") ||
    error.cause?.code === "ECONNRESET" ||
    error.message.includes("ECONNREFUSED") ||
    error.message.includes("ECONNABORTED")

  return (
    <div className="pt-70">
      <ErrorMessage
        title={
          isConnectionError
            ? "Unable to connect to server"
            : "Something went wrong"
        }
        message={
          isConnectionError
            ? "The content server is currently unavailable. This usually means your Strapi backend is not running or not reachable."
            : error.message || "An unexpected error occurred."
        }
        details={
          process.env.NODE_ENV === "development"
            ? `${error.message}\n${error.stack || ""}`
            : undefined
        }
        onRetry={reset}
      />
    </div>
  )
}

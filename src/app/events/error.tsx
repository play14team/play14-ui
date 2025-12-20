"use client" // Error components must be Client Components

import ErrorMessage from "@/components/layout/error-message"
import Page from "@/components/layout/page"
import { useEffect } from "react"

export default function EventsError({
  error,
  reset,
}: {
  error: Error & { digest?: string; cause?: Error & { code?: string } }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Events page error:", error)
  }, [error])

  // Detect connection errors
  const isConnectionError =
    error.message.includes("fetch failed") ||
    error.cause?.code === "ECONNRESET" ||
    error.message.includes("ECONNREFUSED") ||
    error.message.includes("ECONNABORTED")

  return (
    <Page name="Events">
      <ErrorMessage
        title={
          isConnectionError ? "Unable to load events" : "Error loading events"
        }
        message={
          isConnectionError
            ? "We couldn't connect to the #play14 events server. Please check that your backend is running or try again later."
            : error.message || "An error occurred while loading the events."
        }
        details={
          process.env.NODE_ENV === "development"
            ? `${error.message}\n${error.stack || ""}`
            : undefined
        }
        onRetry={reset}
      />
    </Page>
  )
}

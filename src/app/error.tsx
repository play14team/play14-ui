"use client" // Error components must be Client Components

import { Metadata } from "next"
import { useEffect } from "react"

export const metadata: Metadata = {
  title: "Error",
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="pt-70">
      <h2>Something went wrong!</h2>
      <p style={{ color: "red" }}>{error.message}</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

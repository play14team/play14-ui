"use client"

interface ErrorMessageProps {
  title?: string
  message: string
  details?: string
  showReload?: boolean
  onRetry?: () => void
}

export default function ErrorMessage({
  title = "Something went wrong",
  message,
  details,
  showReload = true,
  onRetry,
}: ErrorMessageProps) {
  const handleRetry = () => {
    if (onRetry) {
      onRetry()
    } else {
      window.location.reload()
    }
  }

  return (
    <div className="container py-5">
      <div
        className="error-alert"
        role="alert"
        style={{
          padding: "1.5rem",
          borderRadius: "8px",
          backgroundColor: "var(--color-bg-elevated)",
          border: "1px solid var(--color-red)",
        }}
      >
        <h4 style={{ color: "var(--color-red)", marginBottom: "0.75rem" }}>
          {title}
        </h4>
        <p style={{ color: "var(--color-text)", marginBottom: "1rem" }}>
          {message}
        </p>
        {details && (
          <div style={{ color: "var(--color-text-secondary)" }}>
            <pre
              style={{
                margin: 0,
                fontSize: "0.875rem",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {details}
            </pre>
          </div>
        )}
        {showReload && (
          <div style={{ marginTop: "1.5rem" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleRetry}
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

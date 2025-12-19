"use client"

interface ErrorMessageProps {
  title?: string
  message: string
  details?: string
  showReload?: boolean
}

export default function ErrorMessage({
  title = "Something went wrong",
  message,
  details,
  showReload = true,
}: ErrorMessageProps) {
  return (
    <div className="container py-5">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">{title}</h4>
        <p className="mb-3">{message}</p>
        {details && (
          <div className="small text-muted">
            <pre className="mb-0">{details}</pre>
          </div>
        )}
        {showReload && (
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

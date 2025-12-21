"use client"

import { useState, useTransition } from "react"
import { Testimonial } from "@/models/strapi"
import TestimonialItem from "@/components/events/testimonial"
import { getRandomTestimonials } from "./get.action"
import { HOME_TESTIMONIALS_COUNT } from "./constants"

interface TestimonialsRefreshProps {
  initialTestimonials: Testimonial[]
}

const TestimonialsRefresh = ({
  initialTestimonials,
}: TestimonialsRefreshProps) => {
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [isPending, startTransition] = useTransition()

  const handleRefresh = () => {
    startTransition(async () => {
      try {
        const newTestimonials = await getRandomTestimonials(
          HOME_TESTIMONIALS_COUNT,
        )
        if (newTestimonials.length > 0) {
          setTestimonials(newTestimonials)
        }
      } catch (error) {
        console.error("Failed to refresh testimonials:", error)
        // Keep existing testimonials on error
      }
    })
  }

  return (
    <>
      <div
        className="testimonials-area pt-70 pb-70 bg-f1f8fb"
        style={{ position: "relative" }}
      >
        <button
          onClick={handleRefresh}
          disabled={isPending}
          className="testimonials-refresh-button"
          aria-label="Show different testimonials"
          title="Show different testimonials"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              animation: isPending ? "spin 1s linear infinite" : "none",
            }}
          >
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        </button>

        <div className="container">
          <div className="row">
            {testimonials.map((testimonial) => (
              <TestimonialItem
                key={testimonial.documentId}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .testimonials-refresh-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 10;
          width: 40px;
          height: 40px;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .testimonials-refresh-button svg {
          color: #111827;
          transition: color 0.2s ease;
        }

        .testimonials-refresh-button:hover {
          background: #f3f4f6;
          border-color: #00a0dc;
        }

        .testimonials-refresh-button:hover svg {
          color: #00a0dc;
        }

        .testimonials-refresh-button:active {
          transform: scale(0.95);
        }

        .testimonials-refresh-button:focus {
          outline: none;
          border-color: #00a0dc;
          box-shadow: 0 0 0 3px rgba(0, 160, 220, 0.1);
        }

        .testimonials-refresh-button:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .testimonials-refresh-button:disabled:hover {
          background: white;
          border-color: #e5e7eb;
        }

        .testimonials-refresh-button:disabled:hover svg {
          color: #111827;
        }

        :global([data-theme="dark"]) .testimonials-refresh-button {
          background: #1f2937;
          border-color: #374151;
        }

        :global([data-theme="dark"]) .testimonials-refresh-button svg {
          color: #f3f4f6;
        }

        :global([data-theme="dark"]) .testimonials-refresh-button:hover {
          background: #374151;
          border-color: #00a0dc;
        }

        :global([data-theme="dark"]) .testimonials-refresh-button:hover svg {
          color: #00a0dc;
        }

        :global([data-theme="dark"])
          .testimonials-refresh-button:disabled:hover {
          background: #1f2937;
          border-color: #374151;
        }

        :global([data-theme="dark"])
          .testimonials-refresh-button:disabled:hover
          svg {
          color: #f3f4f6;
        }
      `}</style>
    </>
  )
}

export default TestimonialsRefresh

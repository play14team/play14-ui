"use client"

import { Event } from "@/models/graphql"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SocialLinks({ event }: { event: Event }) {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : ""
  const url = `${origin}${usePathname()}`

  const eventName = encodeURI(event.name!)
  const text = encodeURI("Take a look at #play14 ") + eventName

  return (
    <ul className="social-link">
      <li>
        <Link
          href={`http://www.facebook.com/sharer.php?u=${url}&p[title]=${text}`}
          target="_blank"
          rel="noopener"
          className="d-block"
        >
          <i className="bx bxl-facebook"></i>
        </Link>
      </li>
      <li>
        <Link
          href={`http://twitter.com/share?url=${url}&text=${text}`}
          target="_blank"
          rel="noopener"
          className="d-block"
        >
          <i className="bx bxl-twitter"></i>
        </Link>
      </li>
      <li>
        <Link
          href={`http://pinterest.com/pin/create/button/?url=${url}&description=${text}`}
          target="_blank"
          rel="noopener"
          className="d-block"
        >
          <i className="bx bxl-pinterest"></i>
        </Link>
      </li>
      <li>
        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${text}`}
          target="_blank"
          rel="noopener"
          className="d-block"
        >
          <i className="bx bxl-linkedin"></i>
        </Link>
      </li>
    </ul>
  )
}

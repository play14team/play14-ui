"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SocialLinks({
  text,
  className,
}: {
  text: string
  className: string
}) {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : ""
  const url = `${origin}${usePathname()}`

  return (
    <ul className={className}>
      <li key="facebook">
        <Link
          href={`http://www.facebook.com/sharer.php?u=${url}&p[title]=${text}`}
          target="_blank"
          rel="noopener"
          className="d-block"
        >
          <i className="bx bxl-facebook"></i>
        </Link>
      </li>
      <li key="twitter">
        <Link
          href={`http://twitter.com/share?url=${url}&text=${text}`}
          target="_blank"
          rel="noopener"
          className="d-block"
        >
          <i className="bx bxl-twitter"></i>
        </Link>
      </li>
      <li key="pinterest">
        <Link
          href={`http://pinterest.com/pin/create/button/?url=${url}&description=${text}`}
          target="_blank"
          rel="noopener"
          className="d-block"
        >
          <i className="bx bxl-pinterest"></i>
        </Link>
      </li>
      <li key="linkedin">
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

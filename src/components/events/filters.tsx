import Link from "next/link"
import { ReactNode } from "react"
import Collapsible from "../layout/collapsible"

export default function Filters({ name }: { name: ReactNode }) {
  return (
    <div className="blog-details-desc pb-5">
      <Collapsible name={name}>
        <div className="article-footer">
          <div className="article-tags">
            <span>
              <i className="bx bx-map-pin"></i>
            </span>
            <Link href="/events/countries">Countries</Link>
          </div>
          <div className="article-tags">
            <span>
              <i className="bx bx-calendar"></i>
            </span>
            <Link href="/events/statuses">Statuses</Link>
          </div>
          <div className="article-tags">
            <span>
              <i className="bx bx-location-plus"></i>
            </span>
            <Link href="/events/locations">Locations</Link>
          </div>
        </div>
      </Collapsible>
    </div>
  )
}

import Link from "next/link"
import Collapsible from "../layout/collapsible"

export default function Filters({ name }: { name: string }) {
  return (
    <div className="blog-details-desc pb-5">
      <Collapsible name={name}>
        <div className="article-footer">
          <div className="article-tags">
            <span>
              <i className="bx bx-user-pin"></i>
            </span>
            <Link href="/players/positions">Position</Link>
          </div>
        </div>
      </Collapsible>
    </div>
  )
}

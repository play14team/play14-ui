import Link from "next/link"
import Collapsible from "../layout/collapsible"

export default function Filters({ name }: { name: string }) {
  return (
    <div className="blog-details-desc pb-5">
      <Collapsible name={name}>
        <h5 className="pt-5">Filter by</h5>
        <div className="article-footer">
          <div className="article-tags">
            <span>
              <i className="bx bx-folder-open"></i>
            </span>
            <Link href="/games/categories">Category</Link>
          </div>
          <div className="article-tags">
            <span>
              <i className="bx bx-purchase-tag"></i>
            </span>
            <Link href="/games/tags">Tags</Link>
          </div>
        </div>
      </Collapsible>
    </div>
  )
}

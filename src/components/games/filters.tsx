import Link from "next/link"
import Collapsible from "../layout/collapsible"

export default function Filters({ name }: { name: string }) {
  return (
    <div className="blog-details-desc pb-5">
      <Collapsible name={name}>
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

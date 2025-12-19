import { deduplicate } from "@/libs/arrays"
import Link from "next/link"
import { getArticleNav } from "./get.action"

export default async function Tags() {
  const articles = await getArticleNav()

  const tags = deduplicate(
    articles.flatMap((a) => a.tags?.map((t) => t?.value.toLowerCase())),
  )

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {tags.sort().map((tag, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-purchase-tag"></i>
            </span>

            <Link href={`/articles/tags/${tag}`}>{tag}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

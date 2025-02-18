import { dataAsArrayOf, query } from "@/libs/apollo-client"
import { deduplicate } from "@/libs/arrays"
import { ArticleEntity, ArticleNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Tags() {
  const response = await query({ query: ArticleNavDocument })
  const articles = dataAsArrayOf<ArticleEntity>(
    response.articles || { data: [] },
  )

  const tags = deduplicate(
    articles.flatMap((a) =>
      a.attributes?.tags?.data.map((t) => t?.attributes?.value.toLowerCase()),
    ),
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

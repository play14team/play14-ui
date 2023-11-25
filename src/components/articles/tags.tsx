import { getClient } from "@/libs/apollo-client"
import { ArticleEntity, ArticleNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Tags() {
  const { data } = await getClient().query({ query: ArticleNavDocument })
  const articles = data.articles?.data as ArticleEntity[]

  const tags = [
    ...new Set(
      articles.flatMap(
        (g) =>
          g.attributes?.tags?.data.map(
            (t) => t?.attributes?.value.toLowerCase(),
          ),
      ),
    ),
  ]

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {tags.map((tag, index) => (
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

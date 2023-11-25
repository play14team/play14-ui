import { getClient } from "@/libs/apollo-client"
import { ArticleEntity, ArticleNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Categories() {
  const { data } = await getClient().query({ query: ArticleNavDocument })
  const articles = data.articles?.data as ArticleEntity[]

  const categories = [
    ...new Set(articles.map((a) => a.attributes?.category?.toLowerCase())),
  ]

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {categories.map((cat, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-folder"></i>
            </span>

            <Link href={`/articles/categories/${cat}`}>{cat}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

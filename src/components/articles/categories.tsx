import { dataAsArrayOf, query } from "@/libs/apollo-client"
import { capitalizeFirstLetter } from "@/libs/utils"
import {
  ArticleEntity,
  ArticleEntityResponseCollection,
  ArticleNavDocument,
} from "@/models/graphql"
import Link from "next/link"

export default async function Categories() {
  const response = (await query({ query: ArticleNavDocument })) as {
    articles?: ArticleEntityResponseCollection
  }
  const articles = dataAsArrayOf<ArticleEntity>(
    response?.articles || { data: [] },
  )

  const categories = [
    ...new Set(articles.map((a) => a.attributes?.category?.toLowerCase())),
  ]

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {categories.sort().map((cat, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-folder"></i>
            </span>

            <Link href={`/articles/categories/${cat}`}>
              {capitalizeFirstLetter(cat)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

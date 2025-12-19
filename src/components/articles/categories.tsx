import { capitalizeFirstLetter } from "@/libs/utils"
import Link from "next/link"
import { getArticleNav } from "./get.action"

export default async function Categories() {
  const articles = await getArticleNav()

  const categories = [
    ...new Set(articles.map((a) => a.category?.toLowerCase())),
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

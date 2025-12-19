import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { Article } from "@/models/strapi"
import { getArticleSidebar } from "./get.action"

const ArticleSidebar = async () => {
  const response = await getArticleSidebar()

  const latest = (response.latest?.nodes || []) as Article[]
  const categories = (response.categories || []) as Article[]

  const categoryCount = categories.reduce(
    (groups, item) => {
      if (item.category) {
        groups[item.category] = (groups[item.category] || 0) + 1
      }
      return groups
    },
    {} as { [key: string]: number },
  )

  const tags = (response.tags || []) as Article[]
  const tagsCount = tags.reduce(
    (groups, item) => {
      const articleTags = item.tags
      articleTags?.forEach((tag) => {
        if (tag && tag.value) {
          groups[tag.value] = groups[tag.value] + 1 || 1
        }
      })
      return groups
    },
    {} as { [key: string]: number },
  )

  return (
    <aside className="widget-area">
      <div className="widget widget_tracer_posts_thumb">
        <h3 className="widget-title">Latest Articles</h3>

        {latest &&
          latest.map((article) => (
            <article key={article.documentId} className="item">
              <Link href={`/articles/${article.slug}`} className="thumb">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100px",
                  }}
                >
                  <Image
                    src={article.defaultImage?.url || "#"}
                    alt={article.defaultImage?.name || ""}
                    sizes="100vw"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
              </Link>
              <div className="info">
                <span>
                  {moment(article.publishedAt).format("MMM Do, YYYY")}{" "}
                </span>
                <h4 className="title usmall">
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          ))}
      </div>

      <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>

        <ul>
          {categoryCount &&
            Object.keys(categoryCount).map((category) => (
              <li key={category}>
                <Link href={`/articles/categories/${category.toLowerCase()}`}>
                  {category}
                  <span className="post-count">
                    ({categoryCount[category]})
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Tags</h3>

        <div className="tagcloud">
          {tagsCount &&
            Object.keys(tagsCount).map((tag) => (
              <Link key={tag} href={`/articles/tags/${tag}`}>
                {tag} <span className="tag-link-count">({tagsCount[tag]})</span>
              </Link>
            ))}
        </div>
      </div>
    </aside>
  )
}

export default ArticleSidebar

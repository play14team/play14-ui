import { dataAsArrayOf, query } from "@/libs/apollo-client"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import {
  ArticleEntity,
  ArticleEntityResponseCollection,
  ArticleSidebarDocument,
} from "../../models/graphql"

const ArticleSidebar = async () => {
  const response = (await query({ query: ArticleSidebarDocument })) as {
    latest?: ArticleEntityResponseCollection
    categories?: ArticleEntityResponseCollection
    tags?: ArticleEntityResponseCollection
  }
  const latest = dataAsArrayOf<ArticleEntity>(response.latest || { data: [] })
  const categories = dataAsArrayOf<ArticleEntity>(
    response.categories || { data: [] },
  )
  const categoryCount = categories.reduce(
    (groups, item) => {
      if (item.attributes && item.attributes.category) {
        groups[item.attributes.category] =
          (groups[item.attributes.category] || 0) + 1
      }
      return groups
    },
    {} as { [key: string]: number },
  )

  const tags = dataAsArrayOf<ArticleEntity>(response.tags || { data: [] })
  const tagsCount = tags.reduce(
    (groups, item) => {
      const tags = item.attributes?.tags?.data
      tags?.map((tag) => {
        if (tag.attributes) {
          groups[tag.attributes.value] = groups[tag.attributes.value] + 1 || 1
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
            <article key={article.id} className="item">
              <Link
                href={`/articles/${article.attributes?.slug}`}
                className="thumb"
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100px",
                  }}
                >
                  <Image
                    src={
                      article.attributes?.defaultImage?.data?.attributes?.url ||
                      "#"
                    }
                    alt={
                      article.attributes?.defaultImage?.data?.attributes
                        ?.name || ""
                    }
                    sizes="100vw"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
              </Link>
              <div className="info">
                <span>
                  {moment(article.attributes?.publishedAt).format(
                    "MMM Do, YYYY",
                  )}{" "}
                </span>
                <h4 className="title usmall">
                  <Link href="/blog-details">{article.attributes?.title}</Link>
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

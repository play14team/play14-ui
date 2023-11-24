import article1 from "@/styles/images/gallery/gallery5.jpg"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { Article } from "../../models/graphql"

const ArticleCard = ({ article }: { article: Article }) => {
  const url = `/articles/${encodeURIComponent(article.slug!)}`
  const image = article.defaultImage.data?.attributes
  const author = article.author?.data?.attributes
  const avatar = author && author.avatar?.data?.attributes

  return (
    <article
      id={article.title}
      key={article.title}
      className="col-lg-4 col-md-6"
    >
      <div className="single-blog-post bg-fffbf5">
        <div className="post-image">
          <Link href={url} className="d-block image">
            <Image
              src={(image && image.url) || article1}
              alt={(image && image.name) || "image"}
              width={400}
              height={400}
              priority
              placeholder="blur"
              blurDataURL={(image && image.blurhash) || undefined}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
              }}
              unoptimized
            />
          </Link>
        </div>

        <div className="post-content">
          <ul className="post-meta d-flex justify-content-between align-items-center">
            <li>
              <div className="post-author d-flex align-items-center">
                {author && avatar && (
                  <Image
                    src={avatar.url || "#"}
                    width={75}
                    height={75}
                    priority
                    className="rounded-circle"
                    alt={author.name}
                    unoptimized
                  />
                )}
                {author && <span>{author.name}</span>}
              </div>
            </li>
            <li>
              <i className="flaticon-calendar"></i>
              {moment(article.publishedAt).format("MMM Do, YYYY")}
            </li>
          </ul>
          <h3>
            <Link href={url}>{article.title}</Link>
          </h3>
          <p>
            {article.summary && article.summary.length > 200
              ? article.summary
                  .substring(0, article.summary.indexOf(" ", 200))
                  .concat("...")
              : article.summary}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ArticleCard

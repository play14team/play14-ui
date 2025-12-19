import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { Article, UploadFile } from "@/models/strapi"
import Gallery from "../layout/gallery"
import HtmlContent from "../layout/html-content"
import SocialLinks from "../layout/social-links"
import ArticlesNavigator from "./nav"
import ArticleSidebar from "./sidebar"

const ArticleDetails = ({ article }: { article: Article }) => {
  const image = article.defaultImage as UploadFile
  const author = article.author
  const text = encodeURI("Take a look at this #play14 article")

  return (
    <div className="blog-details-area pb-100">
      <ArticlesNavigator current={article.slug!} />
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                <Image
                  src={image.url || "#"}
                  alt={image.name}
                  width={400}
                  height={400}
                  priority
                  placeholder="blur"
                  blurDataURL={
                    (image as { blurhash?: string }).blurhash ||
                    process.env.DEFAULT_BLURHASH
                  }
                  className="shadow"
                  style={{
                    maxWidth: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  unoptimized
                />
              </div>

              <div className="article-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="bx bx-folder-open"></i>
                      <span>Category</span>
                      <Link href={`/articles/categories/${article.category}`}>
                        {article.category}
                      </Link>
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i>
                      <span>Last Updated</span>
                      <Link href="#">
                        {moment(article.updatedAt).format("MMM Do, YYYY")}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="bx bx-purchase-tag"></i>
                    </span>

                    {article.tags?.filter(Boolean)?.map((tag) => {
                      const t = tag as { id: string; value: string }
                      return (
                        <Link key={t.id} href={`/articles/tags/${t.value}`}>
                          {t.value}
                        </Link>
                      )
                    })}
                  </div>

                  <div className="article-share">
                    <SocialLinks text={text} className="social" />
                  </div>
                </div>

                <div className="pt-4">
                  <HtmlContent>{article.content!}</HtmlContent>
                </div>

                {author && (
                  <div className=" pt-70">
                    <div className="article-author">
                      <div className="author-profile-header"></div>
                      <div className="author-profile">
                        <div className="author-profile-title">
                          <Image
                            src={author.avatar?.url || "#"}
                            className="shadow-sm"
                            alt={author.name}
                            width={200}
                            height={200}
                            unoptimized
                          />
                          <Link href={`/players/${author.slug}`}>
                            <h4>{author && author.name}</h4>
                          </Link>
                          <span className="d-block">
                            {author && author.position}
                          </span>
                          <p>{author && author.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  {article.images && (
                    <Gallery
                      images={
                        article.images.filter(Boolean) as Array<{
                          url: string
                          name?: string | null
                        }>
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <ArticleSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetails

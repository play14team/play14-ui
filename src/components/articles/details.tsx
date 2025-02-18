import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { Article, UploadFile } from "../../models/graphql"
import Gallery from "../layout/gallery"
import HtmlContent from "../layout/html-content"
import SocialLinks from "../layout/social-links"
import ArticlesNavigator from "./nav"
import ArticleSidebar from "./sidebar"

const ArticleDetails = ({ article }: { article: Article }) => {
  const image = article.defaultImage?.data?.attributes as UploadFile
  const author = article.author?.data?.attributes
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
                  blurDataURL={(image && image.blurhash) || undefined}
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

                    {article.tags?.data.map((tag) => (
                      <Link
                        key={tag.id}
                        href={`/articles/tags/${tag.attributes?.value}`}
                      >
                        {tag.attributes?.value}
                      </Link>
                    ))}
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
                            src={author.avatar?.data?.attributes?.url || "#"}
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
                  {article.images && <Gallery images={article.images.data} />}
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

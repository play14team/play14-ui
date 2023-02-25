import Head from "next/head";
import Image from "next/image";
import { FragmentType, useFragment } from "../../models";
import {
  Article,
  ArticleDetailsFragmentDoc,
  UploadFile,
} from "../../models/graphql";
import ArticleSidebar from "./sidebar";
import Html from "../layout/html";
import ArticlesNavigator from "./detailsnav";
import Gallery from "../layout/gallery";
import Link from "next/link";
import Moment from "react-moment";

const ArticleDetails = (props: {
  article: FragmentType<typeof ArticleDetailsFragmentDoc>;
}) => {
  const article = useFragment(
    ArticleDetailsFragmentDoc,
    props.article
  ) as Article;
  const image = article.defaultImage?.data?.attributes as UploadFile;
  const author = article.author?.data?.attributes;
  const url = encodeURI(window.location.href);
  const text = encodeURI("Take a look at this #play14 article");

  return (
    <>
      <Head>
        <title>#play14 - {article && article.title}</title>
        <meta name="description" content={article.summary} />
      </Head>

      <section className="blog-details-area pt-70 pb-100">
        <h1>{article.title}</h1>

        <ArticlesNavigator current={article.slug} />

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
                    style={{
                      maxWidth: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="bx bx-folder-open"></i>
                        <span>Category</span>
                        <Link href="#">{article.category}</Link>
                      </li>
                      <li>
                        <i className="bx bx-calendar"></i>
                        <span>Last Updated</span>
                        <Link href="#">
                          <Moment format="MMM Do, YYYY">
                            {article.updatedAt}
                          </Moment>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Html>{article.content}</Html>
                  </div>

                  <div className="pt-4">
                    {article.images && <Gallery images={article.images.data} />}
                  </div>
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
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <Link
                          href={`http://www.facebook.com/sharer.php?u=${url}&p[title]=${text}`}
                          className="facebook"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`http://twitter.com/share?url=${url}&text=${text}`}
                          className="twitter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`http://pinterest.com/pin/create/button/?url=${url}&description=${text}`}
                          className="linkedin"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-pinterest"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${text}`}
                          className="instagram"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {author && (
                  <div className="article-author">
                    <div className="author-profile-header"></div>
                    <div className="author-profile">
                      <div className="author-profile-title">
                        <Image
                          src={author.avatar?.data?.attributes?.url}
                          className="shadow-sm"
                          alt={author.name}
                          width={200}
                          height={200}
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
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <ArticleSidebar article={article} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleDetails;

import { useQuery } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { ArticleEntity, ArticleNavDocument } from "../../models/graphql";
import Moment from "react-moment";

const ArticlesNavigator = (props: { current: string }) => {
  const { data, loading } = useQuery(ArticleNavDocument);
  const { current } = props;

  if (loading) return;

  const articles = data.articles?.data;
  const index = articles.findIndex((a) => a.attributes?.slug == current);
  console.log(index);
  const previous = index > 0 ? articles[index - 1] : null;
  const next = index < articles.length - 1 ? articles[index + 1] : null;

  return (
    <>
      <div className="tracer-post-navigation">
        {previous && (
          <div className="prev-link-wrapper">
            <div className="info-prev-link-wrapper">
              <Link href={`/articles/${previous.attributes?.slug}`}>
                <span className="image-prev">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100px",
                    }}
                  >
                    <Image
                      src={
                        previous.attributes?.defaultImage.data?.attributes?.url
                      }
                      alt={
                        previous.attributes?.defaultImage.data?.attributes?.name
                      }
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <span className="post-nav-title">Prev</span>
                </span>

                <span className="prev-link-info-wrapper">
                  <span className="prev-title">
                    {previous.attributes?.title}
                  </span>
                  <span className="meta-wrapper">
                    <span className="date-post">
                      <Moment format="MMM Do, YYYY">
                        {previous.attributes?.publishedAt}
                      </Moment>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        )}
        {!previous && <p> </p>}

        {next && (
          <div className="next-link-wrapper" style={{ flex: "none" }}>
            <div className="info-next-link-wrapper">
              <Link href={`/articles/${next.attributes?.slug}`}>
                <span className="next-link-info-wrapper">
                  <span className="next-title">{next.attributes?.title}</span>
                  <span className="meta-wrapper">
                    <span className="date-post">
                      <Moment format="MMM Do, YYYY">
                        {next.attributes?.publishedAt}
                      </Moment>
                    </span>
                  </span>
                </span>

                <span className="image-next">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100px",
                    }}
                  >
                    <Image
                      src={next.attributes?.defaultImage.data?.attributes?.url}
                      alt={next.attributes?.defaultImage.data?.attributes?.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <span className="post-nav-title">Next</span>
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ArticlesNavigator;

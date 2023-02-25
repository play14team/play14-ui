import Link from "next/link";
import Image from "next/image";
import { FragmentType, useFragment } from "../../models";
import { ArticleItemFragmentDoc } from "../../models/graphql";
import article1 from "/styles/images/gallery/gallery5.jpg";
import Moment from "react-moment";

const ArticleCard = (props: {
  article: FragmentType<typeof ArticleItemFragmentDoc>;
}) => {
  const article = useFragment(ArticleItemFragmentDoc, props.article);
  const url = `/articles/${encodeURIComponent(article.slug)}`;
  const image = article.defaultImage.data?.attributes;
  const author = article.author?.data?.attributes;
  const avatar = author && author.avatar?.data?.attributes;

  return (
    <div className="col-lg-4 col-md-6">
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
                  />
                )}
                {author && <span>{author.name}</span>}
              </div>
            </li>
            <li>
              <i className="flaticon-calendar"></i>
              <Moment format="MMM Do, YYYY">{article.publishedAt}</Moment>
            </li>
          </ul>
          <h3>
            <Link href={url}>{article.title}</Link>
          </h3>
          <p>
            {article.summary.length > 200
              ? article.summary
                  .substring(0, article.summary.indexOf(" ", 200))
                  .concat("...")
              : article.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

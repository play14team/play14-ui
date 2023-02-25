import Link from "next/link";
import Image from "next/image";
import { ArticleSidebarDocument } from "../../models/graphql";
import { useQuery } from "@apollo/client";
import Moment from "react-moment";

const ArticleSidebar = () => {
  const { data, loading } = useQuery(ArticleSidebarDocument);

  if (loading) return;

  const latest = data.latest?.data;
  const categories = data.categories?.data;
  const categoryCount = categories.reduce((groups, item) => {
    groups[item.attributes.category] =
      groups[item.attributes.category] + 1 || 1;
    return groups;
  }, {});

  const tags = data.tags?.data;
  const tagsCount = tags.reduce((groups, item) => {
    const tags = item.attributes.tags.data;
    tags.map((tag) => {
      groups[tag.attributes.value] = groups[tag.attributes.value] + 1 || 1;
    });
    return groups;
  }, {});

  return (
    <aside className="widget-area">
      <div className="widget widget_tracer_posts_thumb">
        <h3 className="widget-title">Latest Articles</h3>

        {latest &&
          latest.map((article) => (
            <article key={article.id} className="item">
              <Link
                href={`/articles/${article.attributes.slug}`}
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
                    src={article.attributes.defaultImage.data.attributes.url}
                    alt={article.attributes.defaultImage.data.attributes.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>
              <div className="info">
                <span>
                  <Moment format="MMM Do, YYYY">
                    {article.attributes.publishedAt}
                  </Moment>{" "}
                </span>
                <h4 className="title usmall">
                  <Link href="/blog-details">{article.attributes.title}</Link>
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
                <Link href={`/articles/categories/${category}`}>
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
  );
};

export default ArticleSidebar;

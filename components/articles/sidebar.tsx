import Link from "next/link";
import Image from "next/image";
import { Article } from "../../models/graphql";
import Moment from "react-moment";
import Ratings from "../layout/ratings";

const ArticleSidebar = (props: { article: Article }) => {
  const { article } = props;

  return (
    <aside className="widget-area">
      <div className="widget widget_tracer_posts_thumb">
        <h3 className="widget-title">Popular Posts</h3>

        <article className="item">
          <Link href="/blog-details" className="thumb">
            <span className="fullimage cover bg1" role="img"></span>
          </Link>
          <div className="info">
            <span>June 10, 2020</span>
            <h4 className="title usmall">
              <Link href="/blog-details">
                The Data Surrounding Higher Education
              </Link>
            </h4>
          </div>

          <div className="clear"></div>
        </article>

        <article className="item">
          <Link href="/blog-details" className="thumb">
            <span className="fullimage cover bg2" role="img"></span>
          </Link>
          <div className="info">
            <span>June 21, 2020</span>
            <h4 className="title usmall">
              <Link href="/blog-details">
                Conversion Rate the Sales Funnel Optimization
              </Link>
            </h4>
          </div>

          <div className="clear"></div>
        </article>

        <article className="item">
          <Link href="/blog-details" className="thumb">
            <span className="fullimage cover bg3" role="img"></span>
          </Link>
          <div className="info">
            <span>June 30, 2020</span>
            <h4 className="title usmall">
              <Link href="/blog-details">
                Business Data is changing the world’s Energy
              </Link>
            </h4>
          </div>

          <div className="clear"></div>
        </article>
      </div>

      <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>

        <ul>
          <li>
            <Link href="/blog">
              Design <span className="post-count">(03)</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Lifestyle <span className="post-count">(05)</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Script <span className="post-count">(10)</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Device <span className="post-count">(08)</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Tips <span className="post-count">(01)</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Popular Tags</h3>

        <div className="tagcloud">
          <Link href="/blog">
            Business <span className="tag-link-count">(3)</span>
          </Link>
          <Link href="/blog">
            Design <span className="tag-link-count">(3)</span>
          </Link>
          <Link href="/blog">
            Braike <span className="tag-link-count">(2)</span>
          </Link>
          <Link href="/blog">
            Fashion <span className="tag-link-count">(2)</span>
          </Link>
          <Link href="/blog">
            Travel <span className="tag-link-count">(1)</span>
          </Link>
          <Link href="/blog">
            Smart <span className="tag-link-count">(1)</span>
          </Link>
          <Link href="/blog">
            Marketing <span className="tag-link-count">(1)</span>
          </Link>
          <Link href="/blog">
            Tips <span className="tag-link-count">(2)</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ArticleSidebar;

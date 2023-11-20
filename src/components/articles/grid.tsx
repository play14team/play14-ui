import { ArticleEntity } from "../../models/graphql"
import ArticleCard from "./card"

const ArticleGrid = (props: { articles: ArticleEntity[] }) => {
  const { articles } = props

  return (
    <div className="blog-area ptb-70">
      <div className="container">
        <div className="row">
          {articles &&
            articles.map(
              (article: any) =>
                article.attributes && (
                  <ArticleCard key={article.id} article={article.attributes} />
                ),
            )}
        </div>
      </div>
    </div>
  )
}

export default ArticleGrid

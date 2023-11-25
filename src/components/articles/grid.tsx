import { ArticleEntity } from "../../models/graphql"
import ArticleCard from "./card"

const ArticleGrid = ({ articles }: { articles: ArticleEntity[] }) => {
  return (
    <div className="blog-area ptb-70">
      <div className="container">
        <div className="row">
          {articles &&
            articles.map((article) => (
              <ArticleCard key={article.id} article={article.attributes!} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleGrid

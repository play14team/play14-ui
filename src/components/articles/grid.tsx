import { Article } from "@/models/strapi"
import ArticleCard from "./card"

const ArticleGrid = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="blog-area ptb-70">
      <div className="container">
        <div className="row">
          {articles &&
            articles.map((article) => (
              <ArticleCard key={article.documentId} article={article} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleGrid

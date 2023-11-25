import { getClient } from "@/libs/apollo-client"
import { GameEntity, GameNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Categories() {
  const { data } = await getClient().query({ query: GameNavDocument })
  const games = data.games?.data as GameEntity[]

  const categories = [
    ...new Set(games.map((g) => g.attributes?.category.toLowerCase())),
  ]

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {categories.map((cat, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-folder"></i>
            </span>

            <Link href={`/games/categories/${cat}`}>{cat}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

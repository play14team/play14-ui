import { query } from "@/libs/apollo-client"
import { deduplicate } from "@/libs/arrays"
import { capitalizeFirstLetter } from "@/libs/utils"
import { Game, GameNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Categories() {
  const response = await query({ query: GameNavDocument })
  const games = (response.games || []) as Game[]
  const categories = deduplicate(games.map((g) => g.category.toLowerCase()))

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {categories.sort().map((category, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-folder"></i>
            </span>

            <Link href={`/games/categories/${category}`}>
              {capitalizeFirstLetter(category)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

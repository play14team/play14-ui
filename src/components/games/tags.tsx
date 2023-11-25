import { getClient } from "@/libs/apollo-client"
import { GameEntity, GameNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Tags() {
  const { data } = await getClient().query({ query: GameNavDocument })
  const games = data.games?.data as GameEntity[]

  const tags = [
    ...new Set(
      games.flatMap(
        (g) => g.attributes?.tags?.map((t) => t?.value.toLowerCase()),
      ),
    ),
  ]

  return (
    <div className="blog-details-desc">
      <div className="article-footer">
        {tags.map((tag, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-purchase-tag"></i>
            </span>

            <Link href={`/games/tags/${tag}`}>{tag}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

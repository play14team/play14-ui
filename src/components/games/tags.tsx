import { query } from "@/libs/apollo-client"
import { deduplicate } from "@/libs/arrays"
import { Game, GameNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Tags() {
  const response = await query({ query: GameNavDocument })
  const games = (response.games || []) as Game[]
  const tags = deduplicate(
    games.flatMap((g) => g.tags?.map((t) => t?.value.trim().toLowerCase())),
  )

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {tags.sort().map((tag, index) => (
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

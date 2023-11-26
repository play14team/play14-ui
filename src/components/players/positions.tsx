import { dataAsArrayOf, query } from "@/libs/apollo-client"
import { deduplicate } from "@/libs/arrays"
import { PlayerEntity, PlayerNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Positions() {
  const response = await query({ query: PlayerNavDocument })
  const players = dataAsArrayOf<PlayerEntity>(response.players)
  const positions = deduplicate(
    players.map((i) => i.attributes?.position.toLowerCase()),
  )

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {positions.map((position, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-user-pin"></i>
            </span>

            <Link href={`/players/positions/${position}`}>{position}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

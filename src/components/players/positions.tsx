import { getClient } from "@/libs/apollo-client"
import { PlayerEntity, PlayerNavDocument } from "@/models/graphql"
import Link from "next/link"

export default async function Positions() {
  const { data } = await getClient().query({ query: PlayerNavDocument })
  const players = data.players?.data as PlayerEntity[]

  const positions = [
    ...new Set(players.map((i) => i.attributes?.position.toLowerCase())),
  ]

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

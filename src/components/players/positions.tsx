import { deduplicate } from "@/libs/arrays"
import { capitalizeFirstLetter } from "@/libs/utils"
import Link from "next/link"
import { getPlayerNav } from "./get.action"

export default async function Positions() {
  const players = await getPlayerNav()
  const positions = deduplicate(
    players.filter((i) => i.position).map((i) => i.position!.toLowerCase()),
  )

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {positions.map((position, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-user-pin"></i>
            </span>

            <Link href={`/players/positions/${position}`}>
              {capitalizeFirstLetter(position)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

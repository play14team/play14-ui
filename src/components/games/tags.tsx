import { deduplicate } from "@/libs/arrays"
import Link from "next/link"
import { getGameNav } from "./get.action"

export default async function Tags() {
  const games = await getGameNav()
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

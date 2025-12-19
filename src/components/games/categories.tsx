import { deduplicate } from "@/libs/arrays"
import { capitalizeFirstLetter } from "@/libs/utils"
import Link from "next/link"
import { getGameNav } from "./get.action"

export default async function Categories() {
  const games = await getGameNav()
  const categories = deduplicate(
    games.filter((g) => g.category).map((g) => g.category!.toLowerCase()),
  )

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

import Image from "next/image"
import Link from "next/link"
import { Game } from "@/models/strapi"
import Ratings from "../layout/ratings"

const GameSidebar = (props: { game: Game }) => {
  const { game } = props

  return (
    <aside className="services-details-info" style={{ marginTop: "15px" }}>
      <div className="services-contact-info" style={{ borderRadius: "10px" }}>
        <ul>
          <li>
            <div className="icon">
              <i className="bx bx-time"></i>
            </div>
            <span>Timebox</span>
            {game.timebox}
          </li>
          <li>
            <div className="icon">
              <i className="bx bx-user-circle"></i>
            </div>
            <span>Scale</span>
            {game.scale}
          </li>

          {game.ratings && game.ratings.energy && (
            <li>
              <div className="icon">
                <i className="bx bx-star"></i>
              </div>
              <span>Ratings</span>
              {game.ratings.energy != undefined && (
                <Ratings name="Energy" value={game.ratings.energy} />
              )}
              {game.ratings.connection != undefined && (
                <Ratings name="Connection" value={game.ratings.connection} />
              )}
              {game.ratings.silliness != undefined && (
                <Ratings name="Silliness" value={game.ratings.silliness} />
              )}
            </li>
          )}

          {game.firstPlayedAt && (
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>First played</span>
              <Link href={`/events/${game.firstPlayedAt?.slug}`}>
                {game.firstPlayedAt.name}
              </Link>
            </li>
          )}

          {game.credits && (
            <li>
              <div className="icon">
                <i className="bx bx-award"></i>
              </div>
              <span>Credits</span>
              {game.credits}
            </li>
          )}

          {game.proposedBy && (
            <li>
              <div className="icon">
                <i className="bx bx-bulb"></i>
              </div>
              <span>Proposed by</span>
              <Link
                href={`/players/${game.proposedBy.slug}`}
                className="centered pt-3"
              >
                <Image
                  src={game.proposedBy.avatar?.url || "#"}
                  alt={game.proposedBy.avatar?.name || "avatar"}
                  width={200}
                  height={200}
                  priority
                  unoptimized
                />
                <h5 className="centered pt-2">{game.proposedBy.name}</h5>
              </Link>
            </li>
          )}

          {game.documentedBy && (
            <li>
              <div className="icon">
                <i className="bx bx-edit"></i>
              </div>
              <span>Documented by</span>
              <Link
                href={`/players/${game.documentedBy.slug}`}
                className="centered pt-3"
              >
                <Image
                  src={game.documentedBy.avatar?.url || "#"}
                  alt={game.documentedBy.avatar?.name || "avatar"}
                  width={200}
                  height={200}
                  priority
                  unoptimized
                />
                <h5 className="centered pt-2">{game.documentedBy.name}</h5>
              </Link>
            </li>
          )}
        </ul>
      </div>

      {game.resources && game.resources.length > 0 && (
        <div className="download-file">
          <h3>Resources</h3>

          <ul>
            {game.resources?.map((r) => {
              if (!r) return null
              const icon = `bx bxs-file-${r.ext}`
              return (
                <li key={r.id}>
                  <a href={r.url} target="_blank" rel="noreferrer">
                    {r.name} <i className={icon}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </aside>
  )
}

export default GameSidebar

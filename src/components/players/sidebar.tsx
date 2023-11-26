import Link from "next/link"
import { Player } from "../../models/graphql"

const PlayerSidebar = (props: { player: Player }) => {
  const { player } = props

  return (
    <aside className="case-studies-sidebar-sticky">
      <div className="case-studies-details-info">
        <ul>
          <li>
            <div className="icon">
              <i className="bx bx-message"></i>
            </div>
            <span>Occupation</span>
            {player.tagline}
          </li>
          <li>
            <div className="icon">
              <i className="bx bx-user-pin"></i>
            </div>
            <span>Position</span>
            {player.position}
          </li>
          {player.company && (
            <li>
              <div className="icon">
                <i className="bx bx-building"></i>
              </div>
              <span>Company</span>
              {player.company}
            </li>
          )}

          {player.website && (
            <li>
              <div className="icon">
                <i className="bx bx-globe"></i>
              </div>
              <span>Website:</span>
              <Link
                href={player.website || "#"}
                target="_blank"
                rel="noreferrer"
              >
                {player.website}
              </Link>
            </li>
          )}

          {player.location && (
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>Location</span>
              {player.location.place_name}
            </li>
          )}
        </ul>
      </div>
    </aside>
  )
}

export default PlayerSidebar

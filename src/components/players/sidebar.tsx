import Link from "next/link"
import { GeoLocation, Player } from "@/models/strapi"

// Helper to get location display name from string or GeoLocation
function getLocationName(
  location: string | GeoLocation | undefined,
): string | null {
  if (!location) return null
  if (typeof location === "string") return location
  // GeoLocation object - extract place_name
  if ("place_name" in location && location.place_name) {
    return location.place_name
  }
  return null
}

const PlayerSidebar = (props: { player: Player }) => {
  const { player } = props
  const locationName = getLocationName(player.location)

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

          {locationName && (
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>Location</span>
              {locationName}
            </li>
          )}
        </ul>
      </div>
    </aside>
  )
}

export default PlayerSidebar

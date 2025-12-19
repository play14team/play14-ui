import Image from "next/image"
import { GeoLocation, Player, UploadFile } from "@/models/strapi"
import SocialNetworks from "../layout/socialnetworks"
import Map from "../map"
import PlayersNavigator from "./nav"
import PlayerSidebar from "./sidebar"
import PlayerTabs from "./tabs"

// Helper to check if location is a GeoLocation object (has coordinates)
function isGeoLocation(
  location: string | GeoLocation | undefined,
): location is GeoLocation {
  if (!location || typeof location === "string") return false
  return "geometry" in location || ("lat" in location && "lng" in location)
}

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

const PlayerDetails = ({ player }: { player: Player }) => {
  const avatar = player.avatar as UploadFile
  const locationName = getLocationName(player.location)
  const hasGeoLocation = isGeoLocation(player.location)

  return (
    <div className="case-studies-details-area pb-100">
      <PlayersNavigator current={player.slug} />
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="single-scientist-box">
              {avatar && (
                <Image
                  src={avatar.url}
                  alt={avatar.name}
                  width={350}
                  height={350}
                  priority
                  className="shadow"
                  style={{
                    borderRadius: "10px",
                    width: "100%",
                    height: "auto",
                    maxHeight: "450px",
                    objectFit: "cover",
                  }}
                  unoptimized
                />
              )}
              {!avatar && (
                <Image
                  src={"/default-player.png"}
                  alt={"default player image"}
                  width={350}
                  height={350}
                  priority
                  className="shadow"
                  style={{
                    borderRadius: "10px",
                    width: "100%",
                    height: "auto",
                    maxHeight: "450px",
                    objectFit: "cover",
                  }}
                  unoptimized
                />
              )}
              <div className="content">
                {player.socialNetworks && (
                  <SocialNetworks socialNetworks={player.socialNetworks} />
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 px-4">
            <div className="events-details-location">
              <Map
                location={
                  hasGeoLocation ? (player.location as GeoLocation) : undefined
                }
                height={"450px"}
                zoom={hasGeoLocation ? 10 : undefined}
              />
              {locationName && !hasGeoLocation && (
                <p className="pt-2">
                  <i className="bx bx-map"></i> {locationName}
                </p>
              )}
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <PlayerSidebar player={player} />
          </div>
        </div>

        <PlayerTabs player={player} />
      </div>
    </div>
  )
}

export default PlayerDetails

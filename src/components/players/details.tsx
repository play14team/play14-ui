import Image from "next/image"
import { Player, UploadFile } from "../../models/graphql"
import SocialNetworks from "../layout/socialnetworks"
import Map from "../map"
import PlayersNavigator from "./nav"
import PlayerSidebar from "./sidebar"
import PlayerTabs from "./tabs"

const PlayerDetails = ({ player }: { player: Player }) => {
  const avatar = player.avatar?.data?.attributes as UploadFile

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
                  style={{ borderRadius: "10px" }}
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
                  style={{ borderRadius: "10px" }}
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
              <Map location={player.location} height={"450px"} zoom={10} />
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

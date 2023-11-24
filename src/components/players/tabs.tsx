import { Player } from "@/models/graphql"
import EventGrid from "../events/grid"
import HtmlContent from "../layout/html-content"
import TabHeaders from "./tab-headers"

export default function PlayerTabs({ player }: { player: Player }) {
  const attended = player.attended?.data
  const hosted = player.hosted?.data
  const mentored = player.mentored?.data

  return (
    <div className="courses-details-desc">
      <TabHeaders
        attendedCount={attended?.length}
        hostedCount={hosted?.length}
        mentoredCount={mentored?.length}
      />

      <div className="tab-content" style={{ minHeight: "650px" }}>
        {/* tab1 */}
        <div id="tab1" className="tab-pane tabs_item">
          {(player.bio && <HtmlContent>{player.bio}</HtmlContent>) || (
            <p>This player is pretty shy with their life story!</p>
          )}
        </div>

        {/* tab2 */}
        <div id="tab2" className="tab-pane tabs_item">
          {(attended && attended.length > 0 && (
            <EventGrid events={attended} />
          )) || <p>This player has not attended any event yet</p>}
        </div>

        {/* tab3 */}
        <div id="tab3" className="tab-pane tabs_item">
          {(hosted && hosted.length > 0 && <EventGrid events={hosted} />) || (
            <p>This player has not hosted any event yet</p>
          )}
        </div>

        {/* tab4 */}
        <div id="tab4" className="tab-pane tabs_item">
          {(mentored && mentored.length > 0 && (
            <EventGrid events={mentored} />
          )) || <p>This player has not mentored any event yet</p>}
        </div>
      </div>
      <hr />
    </div>
  )
}

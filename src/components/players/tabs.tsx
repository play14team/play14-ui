import { Event as EventType, Player } from "@/models/strapi"
import EventGrid from "../events/grid"
import HtmlContent from "../layout/html-content"
import TabHeaders from "./tab-headers"

export default function PlayerTabs({ player }: { player: Player }) {
  const hosted = player.hosted || []
  const mentored = player.mentored || []
  const rawAttended = player.attended || []

  // Merge attended + hosted + mentored, removing duplicates by slug
  const seen = new Set<string>()
  const attended = [...rawAttended, ...hosted, ...mentored]
    .filter((e): e is EventType => {
      if (!e || seen.has(e.slug)) return false
      seen.add(e.slug)
      return true
    })
    .sort((a, b) => {
      const dateA = a.start ? new Date(a.start).getTime() : 0
      const dateB = b.start ? new Date(b.start).getTime() : 0
      return dateB - dateA // Most recent first
    })

  return (
    <div className="courses-details-desc">
      <TabHeaders
        attendedCount={attended.length}
        hostedCount={hosted.length}
        mentoredCount={mentored.length}
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
            <EventGrid events={attended.filter(Boolean) as EventType[]} />
          )) || <p>This player has not attended any event yet</p>}
        </div>

        {/* tab3 */}
        <div id="tab3" className="tab-pane tabs_item">
          {(hosted && hosted.length > 0 && (
            <EventGrid events={hosted.filter(Boolean) as EventType[]} />
          )) || <p>This player has not hosted any event yet</p>}
        </div>

        {/* tab4 */}
        <div id="tab4" className="tab-pane tabs_item">
          {(mentored && mentored.length > 0 && (
            <EventGrid events={mentored.filter(Boolean) as EventType[]} />
          )) || <p>This player has not mentored any event yet</p>}
        </div>
      </div>
      <hr />
    </div>
  )
}

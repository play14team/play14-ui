import {
  ComponentEventsSponsorship,
  ComponentEventsTimetable,
  Event,
  Maybe,
  Player,
} from "@/models/strapi"
import Gallery from "../layout/gallery"
import HtmlContent from "../layout/html-content"
import PlayerGrid from "../players/grid"
import EventDescription from "./description"
import EventSchedule from "./schedule"
import EventSponsorships from "./sponsorships"
import TabHeaders from "./tab-headers"

export default function EventTabs({
  event,
  participants,
}: {
  event: Event
  participants: Player[]
}) {
  const timetable = event.timetable as Array<Maybe<ComponentEventsTimetable>>
  const players = (event.players || []) as Player[]
  const hosts = (event.hosts || []) as Player[]
  const mentors = (event.mentors || []) as Player[]

  return (
    <>
      <TabHeaders event={event} participantCount={participants.length} />
      <div className="tab-content">
        {/* Overview */}
        <div id="overviewTab" className="tab-pane tabs_item">
          {event.description && (
            <EventDescription description={event.description} />
          )}
          {hosts && <PlayerGrid title="Team" players={hosts} />}
          {mentors && <PlayerGrid title="Mentors" players={mentors} />}
          {event.sponsorships && (
            <EventSponsorships
              sponsorships={
                event.sponsorships as Array<ComponentEventsSponsorship>
              }
            />
          )}
        </div>

        {/* Schedule */}
        <div id="scheduleTab" className="tab-pane tabs_item">
          {timetable && <EventSchedule timetable={timetable} />}
        </div>

        {/* Players */}
        <div id="playersTab" className="tab-pane tabs_item">
          {players && <PlayerGrid title="Players" players={participants} />}
        </div>

        {/* Photos */}
        <div id="photosTab" className="tab-pane tabs_item">
          {event.images && (
            <Gallery
              images={
                event.images.filter(Boolean) as Array<{
                  url: string
                  name?: string | null
                }>
              }
            />
          )}
        </div>

        {/* Registration */}
        <div id="registrationTab" className="tab-pane tabs_item">
          <HtmlContent>{event.registration?.widgetCode || ""}</HtmlContent>
        </div>
      </div>
    </>
  )
}

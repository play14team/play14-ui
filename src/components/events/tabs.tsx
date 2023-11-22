import {
  ComponentEventsSponsorship,
  ComponentEventsTimetable,
  Event,
  Maybe,
  PlayerEntity,
} from "@/models/graphql"
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
  participants: PlayerEntity[]
}) {
  const timetable = event.timetable as Array<Maybe<ComponentEventsTimetable>>
  const players = event.players?.data as PlayerEntity[]
  const hosts = event.hosts?.data as PlayerEntity[]
  const mentors = event.mentors?.data as PlayerEntity[]

  // const participants = concatWithoutDuplicates(
  //   players,
  //   concatWithoutDuplicates(hosts, mentors),
  // )

  return (
    <div className="row">
      <div className="courses-details-desc">
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
            {event.images && <Gallery images={event.images.data} />}
          </div>

          {/* Registration */}
          <div id="registrationTab" className="tab-pane tabs_item">
            <HtmlContent>{event.registration?.widgetCode!}</HtmlContent>
          </div>
        </div>
      </div>
    </div>
  )
}

// function concatWithoutDuplicates(
//   arr1: PlayerEntity[],
//   arr2: PlayerEntity[],
// ): PlayerEntity[] {
//   const newArray: PlayerEntity[] = [...arr1]

//   arr2.map((i) => {
//     if (
//       newArray.findIndex(
//         (player) => player.attributes?.name == i.attributes?.name,
//       ) < 0
//     ) {
//       newArray.push(i)
//     }
//   })

//   return newArray.sort((a, b) => {
//     const name1 = a.attributes?.name!
//     const name2 = b.attributes?.name!
//     return name1.localeCompare(name2)
//   })
// }

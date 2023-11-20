import { EventEntity } from "../../models/graphql"
import EventCard from "./card"

const EventGrid = (props: { events: EventEntity[] }) => {
  const { events } = props

  return (
    <div className="events-area ptb-70">
      <div className="container">
        <div className="row">
          {events &&
            events.map(
              (event: any) =>
                event.attributes && (
                  <EventCard key={event.id} event={event.attributes} />
                ),
            )}
        </div>
      </div>
    </div>
  )
}

export default EventGrid

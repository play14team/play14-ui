import { EventEntity } from "../../models/graphql"
import EventCard from "./card"

const EventGrid = ({ events }: { events: EventEntity[] }) => {
  return (
    <div className="events-area">
      <div className="container">
        <div className="row">
          {events.map((event) => (
            <EventCard key={event.id} event={event.attributes!} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventGrid

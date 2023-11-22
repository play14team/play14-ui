import { EventEntity } from "../../models/graphql"
import EventCard from "./card"

const EventGrid = ({ events }: { events: EventEntity[] }) => {
  return (
    <div className="events-area ptb-70">
      <div className="container">
        <div className="row">
          {events.map((e) => {
            return <EventCard key={e.id} event={e.attributes!} />
          })}
        </div>
      </div>
    </div>
  )
}

export default EventGrid

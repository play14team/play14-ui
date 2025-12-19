import { Event } from "@/models/strapi"
import EventCard from "./card"

const EventGrid = ({ events }: { events: Event[] }) => {
  return (
    <div className="events-area">
      <div className="container">
        <div className="row">
          {events.map((event) => (
            <EventCard key={event.documentId} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventGrid

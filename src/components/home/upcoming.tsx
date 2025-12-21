import moment from "moment"
import { Event } from "@/models/strapi"
import EventGrid from "../events/grid"
import { getUpcomingEvents } from "./get.action"

const UpcomingEvents = async () => {
  const today = moment().format()
  const events = (await getUpcomingEvents(today)) as Event[]

  return (
    <div className="pt-100">
      <h3 className="pb-3">Our upcoming events</h3>
      <p>
        Ready to play? Join our <strong>upcoming events</strong> and be part of
        a vibrant community that’s shaping the future through play. Your next
        breakthrough might just be one game away!
      </p>
      <div className="pt-5 pb-70">
        {events && <EventGrid events={events} />}
      </div>
    </div>
  )
}

export default UpcomingEvents

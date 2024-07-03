import { dataAsArrayOf } from "@/libs/apollo-client"
import moment from "moment"
import { EventEntity } from "../../models/graphql"
import EventGrid from "../events/grid"
import { getUpcomingEvents } from "./get-upcoming-events.action"

const UpcomingEvents = async () => {
  const today = moment().format()
  const response = await getUpcomingEvents({ today })
  const events = dataAsArrayOf<EventEntity>(response?.data?.events)

  return (
    <div className="pt-100">
      <h3>Upcoming events</h3>
      <div className="pt-5 pb-70">
        {events && <EventGrid events={events} />}
      </div>
    </div>
  )
}

export default UpcomingEvents

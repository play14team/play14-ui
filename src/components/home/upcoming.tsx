import moment from "moment"
import { EventEntity } from "../../models/graphql"
import EventGrid from "../events/grid"
import { getUpcomingEvents } from "./get-upcoming-events.action"

const UpcomingEvents = async () => {
  const today = moment().format()
  const { data } = await getUpcomingEvents({ today })
  const events = data?.events?.data as EventEntity[]

  return (
    <div className="pt-100">
      <h3>Upcoming events</h3>
      {events && <EventGrid events={events} />}
    </div>
  )
}

export default UpcomingEvents

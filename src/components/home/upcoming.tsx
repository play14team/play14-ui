import { dataAsArrayOf } from "@/libs/apollo-client"
import moment from "moment"
import { EventEntity } from "../../models/graphql"
import EventGrid from "../events/grid"
import { getUpcomingEvents } from "./get-upcoming-events.action"

const UpcomingEvents = async () => {
  const today = moment().format()
  const response = await getUpcomingEvents({ today })
  const events = dataAsArrayOf<EventEntity>(
    response?.data?.events || { data: [] },
  )

  return (
    <div className="pt-100">
      <h3 className="pb-3">Get involved</h3>
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

import moment from "moment"
import "moment-timezone"

const EventTime = ({ time, timezone }: { time: Date; timezone: string }) => {
  return <>{moment(time).tz(timezone).format("ddd, MMM Do - HH:mm")}</>
}

export default EventTime

import moment from "moment-timezone"

const EventTime = ({ time, timezone }: { time: Date; timezone: string }) => {
  const mommentInTime = moment(time)
  const format = "ddd, MMM Do - HH:mm"

  if (timezone) return mommentInTime.tz(timezone).format(format)

  return mommentInTime.format(format)
}

export default EventTime

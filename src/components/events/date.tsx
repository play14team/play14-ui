import Moment from "react-moment"
import "moment-timezone"

interface EventDatesProps {
  start: Date
  end: Date
  timezone?: string
  displayYear?: boolean
}

const EventDate = ({ start, end, timezone, displayYear }: EventDatesProps) => {
  const firstFormat = "MMMM DD"
  const secondFormat = `${
    new Date(start).getMonth() != new Date(end).getMonth() ? "MMMM " : ""
  }DD ${displayYear ? "YYYY" : ""}`

  return (
    <>
      <Moment tz={timezone || "UTC"} format={firstFormat}>
        {start}
      </Moment>
      -
      <Moment tz={timezone || "UTC"} format={secondFormat}>
        {end}
      </Moment>
    </>
  )
}

export default EventDate

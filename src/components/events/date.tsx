import { formatDate } from "@/libs/dates"
import { Maybe } from "@/models/graphql"

interface EventDatesProps {
  start: Date
  end: Date
  timezone: Maybe<string> | undefined
  displayYear?: boolean
}

const EventDate = ({ start, end, timezone, displayYear }: EventDatesProps) => {
  return <>{formatDate(start, end, timezone, displayYear)}</>
}

export default EventDate

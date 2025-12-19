import { formatDate } from "@/libs/dates"
import { Maybe } from "@/models/strapi"

interface EventDatesProps {
  start: Date | string
  end: Date | string
  timezone: Maybe<string> | undefined
  displayYear?: boolean
}

const EventDate = ({ start, end, timezone, displayYear }: EventDatesProps) => {
  return <>{formatDate(start, end, timezone, displayYear)}</>
}

export default EventDate

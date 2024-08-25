import { Maybe } from "@/models/graphql"
import moment from "moment-timezone"

export function formatDate(
  start: Date,
  end: Date,
  timezone: Maybe<string> | undefined,
  displayYear?: boolean,
) {
  const firstFormat = "MMMM DD"
  const secondFormat = `${
    new Date(start).getMonth() != new Date(end).getMonth() ? "MMMM " : ""
  }DD ${displayYear ? "YYYY" : ""}`
  const tz = timezone || "UTC"

  return `${moment(start).tz(tz).format(firstFormat)}-${moment(end).tz(tz).format(secondFormat)}`
}

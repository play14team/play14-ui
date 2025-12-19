import { Maybe } from "@/models/strapi"
import moment from "moment-timezone"

export function formatDate(
  start: Date | string,
  end: Date | string,
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

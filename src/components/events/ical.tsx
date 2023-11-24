"use client"

import { Enum_Event_Status, Event } from "@/models/graphql"
import { EventAttributes, createEvent } from "ics"
import Link from "next/link"

const ICalendar = ({ event }: { event: Event }) => {
  const start = new Date(event.start)
  const end = new Date(event.end)

  const evt: EventAttributes = {
    start: [
      start.getFullYear(),
      start.getMonth() + 1,
      start.getDate(),
      start.getHours(),
      start.getMinutes(),
    ],
    startInputType: "utc",
    end: [
      end.getFullYear(),
      end.getMonth() + 1,
      end.getDate(),
      end.getHours(),
      end.getMinutes(),
    ],
    endInputType: "utc",
    title: `#play14 - ${event.name!}`,
    htmlContent: event.description!,
    location: getLocation(event),
    url: getUrl(event),
    categories: ["play", "learning by doing", "unconference"],
    status: getStatus(event),
  }

  const geoJSON = event.venue?.data?.attributes?.location
  if (geoJSON) {
    const longitude = geoJSON.geometry.coordinates[0]
    const latitude = geoJSON.geometry.coordinates[1]
    evt.geo = { lat: latitude, lon: longitude }
  }
  if (event.contactEmail) {
    evt.organizer = { name: `#play14 ${event.name}`, email: event.contactEmail }
  }

  function getLocation(event: Event) {
    return event.venue?.data?.attributes
      ? `${event.venue.data.attributes.name}${
          event.venue.data.attributes.location ? " - " : ""
        }${
          event.venue.data.attributes.location
            ? event.venue.data.attributes.location.place_name
            : ""
        }`
      : "No venue yet"
  }

  function getUrl(event: Event) {
    return event.venue?.data?.attributes
      ? event.venue.data.attributes.website!
      : ""
  }

  function getStatus(event: Event) {
    return event.status == Enum_Event_Status.Cancelled
      ? "CANCELLED"
      : event.status == Enum_Event_Status.Announced
        ? "TENTATIVE"
        : "CONFIRMED"
  }

  async function handleDownload() {
    const filename = `${event.name}.ics`
    const file: File = await new Promise((resolve, reject) => {
      createEvent(evt, (error, value) => {
        if (error) {
          reject(error)
        }

        resolve(new File([value], filename, { type: "text/calendar" }))
      })
    })
    const url = URL.createObjectURL(file)

    // trying to assign the file URL to a window could cause cross-site
    // issues so this is a workaround using HTML5
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = filename

    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)

    URL.revokeObjectURL(url)
  }

  return (
    <Link href="#" onClick={handleDownload}>
      <i
        className="bx bx-calendar"
        title="Add to your calendar"
        style={{ fontSize: "25px" }}
      ></i>
    </Link>
  )
}

export default ICalendar

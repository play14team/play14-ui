"use client"

import openTabSection from "@/libs/tabs"
import { Enum_Event_Eventstatus, Event } from "@/models/strapi"

export default function TabHeaders({
  event,
  participantCount,
}: {
  event: Event
  participantCount?: number
}) {
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      {/* Overview */}
      <li
        className="current"
        onClick={(e) => openTabSection(e, "overviewTab")}
        aria-hidden="true"
      >
        Overview
      </li>

      {/* Registration */}
      {event.eventStatus == Enum_Event_Eventstatus.Open &&
        event.registration &&
        event.registration.widgetCode && (
          <li
            onClick={(e) => openTabSection(e, "registrationTab")}
            aria-hidden="true"
          >
            Registration
          </li>
        )}

      {/* Schedule */}
      <li onClick={(e) => openTabSection(e, "scheduleTab")} aria-hidden="true">
        Schedule
      </li>

      {/* Players */}
      <li onClick={(e) => openTabSection(e, "playersTab")} aria-hidden="true">
        Players{" "}
        {participantCount && participantCount > 0
          ? `(${participantCount})`
          : ""}
      </li>

      {/* Photos */}
      <li onClick={(e) => openTabSection(e, "photosTab")} aria-hidden="true">
        Photos{" "}
        {event.images && event.images.length > 0
          ? `(${event.images.length})`
          : ""}
      </li>
    </ul>
  )
}

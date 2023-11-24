"use client"

import openTabSection from "@/libs/tabs"
import { Enum_Event_Status, Event } from "@/models/graphql"

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
      <li className="current" onClick={(e) => openTabSection(e, "overviewTab")}>
        Overview
      </li>

      {/* Registration */}
      {event.status == Enum_Event_Status.Open &&
        event.registration &&
        event.registration.widgetCode && (
          <li onClick={(e) => openTabSection(e, "registrationTab")}>
            Registration
          </li>
        )}

      {/* Schedule */}
      <li onClick={(e) => openTabSection(e, "scheduleTab")}>Schedule</li>

      {/* Players */}
      <li onClick={(e) => openTabSection(e, "playersTab")}>
        Players{" "}
        {participantCount && participantCount > 0
          ? `(${participantCount})`
          : ""}
      </li>

      {/* Photos */}
      <li onClick={(e) => openTabSection(e, "photosTab")}>
        Photos{" "}
        {event.images && event.images.data.length > 0
          ? `(${event.images.data.length})`
          : ""}
      </li>
    </ul>
  )
}

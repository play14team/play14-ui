"use client"

import openTabSection from "@/libs/tabs"

export default function TabHeaders({
  attendedCount,
  hostedCount,
  mentoredCount,
}: {
  attendedCount?: number
  hostedCount?: number
  mentoredCount?: number
}) {
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li
        onClick={(e) => openTabSection(e, "tab1")}
        className="current"
        aria-hidden="true"
      >
        Biography
      </li>
      <li onClick={(e) => openTabSection(e, "tab2")} aria-hidden="true">
        Attended{" "}
        {attendedCount && attendedCount > 0 ? `(${attendedCount})` : ""}
      </li>
      <li onClick={(e) => openTabSection(e, "tab3")} aria-hidden="true">
        Hosted {hostedCount && hostedCount > 0 ? `(${hostedCount})` : ""}
      </li>
      <li onClick={(e) => openTabSection(e, "tab4")} aria-hidden="true">
        Mentored{" "}
        {mentoredCount && mentoredCount > 0 ? `(${mentoredCount})` : ""}
      </li>
    </ul>
  )
}

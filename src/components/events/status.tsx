import { Enum_Event_Eventstatus } from "@/models/strapi"

const icons: Record<string, string> = {
  Announced: "calendar-plus",
  Open: "calendar-edit",
  Over: "calendar-check",
  Cancelled: "calendar-x",
}

const EventStatus = (props: { status: Enum_Event_Eventstatus | string }) => {
  const { status } = props
  const icon = icons[status] || "calendar"

  return (
    <>
      <i className={`bx bx-${icon}`}></i> {status}
    </>
  )
}

export default EventStatus

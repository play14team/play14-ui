import { Enum_Event_Eventstatus } from "../../models/graphql"

const icons = {
  Announced: "calendar-plus",
  Cancelled: "calendar-x",
  Open: "calendar-edit",
  Over: "calendar-check",
}

const EventStatus = (props: { status: Enum_Event_Eventstatus }) => {
  const { status } = props

  return (
    <>
      <i className={`bx bx-${icons[status]}`}></i> {status}
    </>
  )
}

export default EventStatus

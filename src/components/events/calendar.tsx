"use client"

import moment from "moment"
import { useRouter } from "next/navigation"
import { useState, useCallback } from "react"
import {
  Calendar,
  Event,
  Views,
  momentLocalizer,
  NavigateAction,
} from "react-big-calendar"

const localizer = momentLocalizer(moment)

interface EventCalendarProps {
  events: CalendarEvent[]
}

export interface CalendarEvent extends Event {
  slug: string
  tooltip: string
}

export default function EventCalendar({ events }: EventCalendarProps) {
  const router = useRouter()
  const [date, setDate] = useState(new Date())
  const views = [Views.MONTH]

  const onDoubleClickEvent = (event: { slug: string }) => {
    router.push("/events/" + event.slug)
  }

  const onNavigate = useCallback(
    (newDate: Date, _view: string, _action: NavigateAction) => {
      setDate(newDate)
    },
    [],
  )

  return (
    <div className="pt-70 pb-100">
      <h1>Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        date={date}
        onNavigate={onNavigate}
        defaultView="month"
        views={views}
        startAccessor="start"
        endAccessor="end"
        tooltipAccessor="tooltip"
        onDoubleClickEvent={onDoubleClickEvent}
        style={{ height: 700 }}
      />
    </div>
  )
}

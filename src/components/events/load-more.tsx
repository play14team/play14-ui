"use client"

import { useIntersection } from "@/hooks/useIntersection"
import { Event, Pagination } from "@/models/strapi"
import { RefObject, useCallback, useEffect, useRef, useState } from "react"
import Loader from "../layout/loader"
import { getEvents } from "./get.action"
import EventGrid from "./grid"

export default function LoadMore({ pagination }: { pagination: Pagination }) {
  const [events, setEvents] = useState<Event[]>([])
  const triggerRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersection(
    triggerRef as RefObject<HTMLDivElement>,
    "0px",
  )
  const callback = useCallback(loadMore, [pagination.page, pagination.pageSize])

  useEffect(() => {
    if (isVisible) {
      callback()
    }
  }, [callback, isVisible])

  function loadMore() {
    getEvents(pagination.page + 1, pagination.pageSize).then((res) => {
      // In Strapi 5, events_connection returns nodes
      const events = (res.events_connection?.nodes || []) as Event[]
      console.log(events)
      setEvents(events)
    })
  }

  if (pagination.page === pagination.pageCount) return

  if (events.length == 0)
    return (
      <div>
        <div ref={triggerRef}></div>
        <Loader />
      </div>
    )

  const newPagination = { ...pagination, page: pagination.page + 1 }

  return (
    <>
      <EventGrid events={events} />
      <LoadMore pagination={newPagination} />
    </>
  )
}

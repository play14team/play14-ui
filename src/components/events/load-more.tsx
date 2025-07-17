"use client"

import { useIntersection } from "@/hooks/useIntersection"
import { EventEntity, Pagination } from "@/models/graphql"
import { RefObject, useCallback, useEffect, useRef, useState } from "react"
import Loader from "../layout/loader"
import { getEvents } from "./get.action"
import EventGrid from "./grid"

export default function LoadMore({ pagination }: { pagination: Pagination }) {
  const [events, setEvents] = useState<EventEntity[]>([])
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
      const events = res.events?.data as EventEntity[]
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

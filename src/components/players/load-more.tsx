"use client"

import { useIntersection } from "@/hooks/useIntersection"
import { Pagination, PlayerEntity } from "@/models/graphql"
import { RefObject, useCallback, useEffect, useRef, useState } from "react"
import Loader from "../layout/loader"
import { getPlayers } from "./get.action"
import PlayerGrid from "./grid"

export default function LoadMore({ pagination }: { pagination: Pagination }) {
  const [players, setPlayers] = useState<PlayerEntity[]>([])
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
    getPlayers(pagination.page + 1, pagination.pageSize).then((res) => {
      const players = res.players?.data as PlayerEntity[]
      setPlayers(players)
    })
  }

  if (pagination.page === pagination.pageCount) return

  if (players.length == 0)
    return (
      <div>
        <div ref={triggerRef}></div>
        <Loader />
      </div>
    )

  const newPagination = { ...pagination, page: pagination.page + 1 }

  return (
    <>
      <PlayerGrid players={players} />
      <LoadMore pagination={newPagination} />
    </>
  )
}

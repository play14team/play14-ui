"use client"

import { useIntersection } from "@/hooks/useIntersection"
import { GameEntity, Pagination } from "@/models/graphql"
import { RefObject, useCallback, useEffect, useRef, useState } from "react"
import Loader from "../layout/loader"
import { getGames } from "./get.action"
import GameGrid from "./grid"

export default function LoadMore({ pagination }: { pagination: Pagination }) {
  const [games, setGames] = useState<GameEntity[]>([])
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
    getGames(pagination.page + 1, pagination.pageSize).then((res) => {
      const games = res.games?.data as GameEntity[]
      setGames(games)
    })
  }

  if (pagination.page === pagination.pageCount) return

  if (games.length == 0)
    return (
      <div>
        <div ref={triggerRef}></div>
        <Loader />
      </div>
    )

  const newPagination = { ...pagination, page: pagination.page + 1 }

  return (
    <>
      <GameGrid games={games} />
      <LoadMore pagination={newPagination} />
    </>
  )
}

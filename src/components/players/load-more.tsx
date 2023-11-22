"use client"

import { Pagination, PlayerEntity } from "@/models/graphql"
import { useState } from "react"
import { getPlayers } from "./get-players.action"
import PlayerGrid from "./grid"

export default function LoadMore({ pagination }: { pagination: Pagination }) {
  const [players, setPlayers] = useState<PlayerEntity[]>([])

  if (pagination.page === pagination.pageCount)
    return (
      <h5>
        {pagination.total} / {pagination.total}
      </h5>
    )

  function loadMore() {
    getPlayers(pagination.page + 1, pagination.pageSize).then((res) => {
      const players = res.data.players?.data as PlayerEntity[]
      setPlayers(players)
    })
  }

  if (players.length == 0)
    return (
      <div>
        <h5>
          {pagination.page * pagination.pageSize} / {pagination.total}
        </h5>
        <button onClick={loadMore} className="default-btn">
          <i className="flaticon-refresh"></i>
          Load more
        </button>
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

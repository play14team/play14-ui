"use client"

import { useIntersection } from "@/hooks/useIntersection"
import { ArticleEntity, Pagination } from "@/models/graphql"
import { RefObject, useCallback, useEffect, useRef, useState } from "react"
import Loader from "../layout/loader"
import { getArticles } from "./get.action"
import ArticleGrid from "./grid"

export default function LoadMore({ pagination }: { pagination: Pagination }) {
  const [articles, setArticles] = useState<ArticleEntity[]>([])
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
    getArticles(pagination.page + 1, pagination.pageSize).then((res) => {
      const articles = res.articles?.data as ArticleEntity[]
      setArticles(articles)
    })
  }

  if (pagination.page === pagination.pageCount) return

  if (articles.length == 0)
    return (
      <div>
        <div ref={triggerRef}></div>
        <Loader />
      </div>
    )

  const newPagination = { ...pagination, page: pagination.page + 1 }

  return (
    <>
      <ArticleGrid articles={articles} />
      <LoadMore pagination={newPagination} />
    </>
  )
}

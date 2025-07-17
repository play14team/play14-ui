"use client"

import { Pagination } from "@/models/graphql"
import { PropsWithChildren } from "react"
import Paging from "../layout/paging"

interface PaginationProps extends PropsWithChildren {
  pagination: Pagination
}

export default function PagingProvider({
  pagination,
  children,
}: PaginationProps) {
  return (
    <>
      <Paging pagination={pagination} onNextPage={() => {}} />
      {children}
      <Paging pagination={pagination} onNextPage={() => {}} />
    </>
  )
}

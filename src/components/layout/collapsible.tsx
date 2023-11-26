"use client"

import { PropsWithChildren, ReactNode } from "react"
import { useCollapse } from "react-collapsed"
import "./collapsible.module.scss"

interface CollapsibleProps extends PropsWithChildren {
  name: ReactNode
}

export default function Collapsible({ name, children }: CollapsibleProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        <h1 style={{ display: "inline" }}>{name}</h1>
        <h4 style={{ display: "inline", paddingLeft: "10px" }}>
          {isExpanded ? (
            <i className="bx bx-filter"></i>
          ) : (
            <i className="bx bx-filter-alt"></i>
          )}
        </h4>
      </div>
      <div {...getCollapseProps()}>
        <div className="content pb-70">{children}</div>
      </div>
    </div>
  )
}

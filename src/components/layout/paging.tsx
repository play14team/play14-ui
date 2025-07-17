import Link from "next/link"
import { Pagination } from "../../models/graphql"

interface PagingProps {
  pagination: Pagination
  onNextPage: (page: number) => void
}

const Paging = ({ pagination, onNextPage }: PagingProps) => {
  const items = []

  for (let index = 1; index < pagination.pageCount + 1; index++) {
    items.push(
      isCurrentPage(pagination, index) ? (
        <span
          id={`page-${index}`}
          className="page-numbers current"
          aria-current="page"
        >
          {index}
        </span>
      ) : (
        <Link
          id={`page-${index}`}
          href="#"
          className="page-numbers"
          onClick={() => onNextPage(index)}
        >
          {index}
        </Link>
      ),
    )
  }

  const itemMin = (pagination.page - 1) * pagination.pageSize + 1
  const itemMax =
    pagination.page == pagination.pageCount
      ? pagination.total
      : pagination.page * pagination.pageSize

  return (
    <div className="row">
      <div className="col-lg-12 col-sm-12 col-md-12">
        <div className="pagination-area text-center">
          {pagination.page == 1 ? (
            <span
              id="prev"
              className="page-numbers isDisabled"
              aria-current="page"
            >
              <i className="bx bx-chevrons-left"></i>
            </span>
          ) : (
            <Link
              id="prev"
              href="#"
              className="prev page-numbers"
              onClick={() => {
                onNextPage(pagination.page - 1)
              }}
            >
              <i className="bx bx-chevrons-left"></i>
            </Link>
          )}

          {items}

          {pagination.page == pagination.pageCount ? (
            <span
              id="next"
              className="page-numbers isDisabled"
              aria-current="page"
            >
              <i className="bx bx-chevrons-right"></i>
            </span>
          ) : (
            <Link
              id="next"
              href="#"
              className="next page-numbers"
              onClick={() => {
                onNextPage(pagination.page + 1)
              }}
            >
              <i className="bx bx-chevrons-right"></i>
            </Link>
          )}
        </div>
      </div>
      <div className="col-lg-12 col-sm-12 col-md-12 text-center pt-1">
        {itemMin} to {itemMax} of {pagination.total}
      </div>
    </div>
  )
}

export default Paging

function isCurrentPage(pagination: Pagination, index: number) {
  return pagination.page == index
}

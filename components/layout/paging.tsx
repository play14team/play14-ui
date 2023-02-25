import Link from "next/link";
import { Pagination } from "../../models/graphql";

const Paging = (props: {
  pagination: Pagination;
  onNextPage: (nextPage: number) => void;
}) => {
  const { pagination, onNextPage } = props;
  const color = "#ff5200";

  const items = [];

  for (let index = 1; index < pagination.pageCount + 1; index++) {
    items.push(
      isCurrentPage(pagination, index) ? (
        <span className="page-numbers current" aria-current="page">
          {index}
        </span>
      ) : (
        <Link
          href="#"
          className="page-numbers"
          onClick={(e) => onNextPage(index)}
        >
          {index}
        </Link>
      )
    );
  }

  const itemMin = (pagination.page - 1) * pagination.pageSize + 1;
  const itemMax =
    pagination.page == pagination.pageCount
      ? pagination.total
      : pagination.page * pagination.pageSize;

  return (
    <div className="row">
      <div className="col-lg-12 col-sm-12 col-md-12">
        <div className="pagination-area text-center">
          {pagination.page == 1 ? (
            <span className="page-numbers isDisabled" aria-current="page">
              <i className="bx bx-chevrons-left"></i>
            </span>
          ) : (
            <Link
              href="#"
              className="prev page-numbers"
              onClick={(e) => {
                onNextPage(pagination.page - 1);
              }}
            >
              <i className="bx bx-chevrons-left"></i>
            </Link>
          )}

          {items}

          {pagination.page == pagination.pageCount ? (
            <span className="page-numbers isDisabled" aria-current="page">
              <i className="bx bx-chevrons-right"></i>
            </span>
          ) : (
            <Link
              href="#"
              className="next page-numbers"
              onClick={(e) => {
                onNextPage(pagination.page + 1);
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
  );
};

export default Paging;
function isCurrentPage(pagination: Pagination, index: number) {
  return pagination.page == index;
}

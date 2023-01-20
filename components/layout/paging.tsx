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
      <li
        className={`page-item ${
          isCurrentPage(pagination, index) ? "active" : ""
        }`}
        style={{ backgroundColor: color, borderColor: "ff5200" }}
      >
        <Link className="page-link" onClick={(e) => onNextPage(index)} href="#">
          <span
            style={{
              color: isCurrentPage(pagination, index) ? "#ffffff" : color,
            }}
          >
            {index}
          </span>
        </Link>
      </li>
    );
  }

  const itemMin = (pagination.page - 1) * pagination.pageSize + 1;
  const itemMax =
    pagination.page == pagination.pageCount
      ? pagination.total
      : pagination.page * pagination.pageSize;

  return (
    <nav aria-label="pagination" style={{ paddingTop: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <ul className="pagination pagination-sm">
              <li
                className={`page-item ${
                  pagination.page == 1 ? "disabled" : ""
                }`}
              >
                <Link
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={(e) => {
                    onNextPage(pagination.page - 1);
                  }}
                  style={{ color: color }}
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>

              {items}

              <li
                className={`page-item ${
                  pagination.page == pagination.pageCount ? "disabled" : ""
                }`}
              >
                <Link
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={(e) => {
                    onNextPage(pagination.page + 1);
                  }}
                  style={{ color: color }}
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6 float-end">
            <span className="float-end">
              {itemMin} {"->"} {itemMax} / {pagination.total}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Paging;
function isCurrentPage(pagination: Pagination, index: number) {
  return pagination.page == index;
}

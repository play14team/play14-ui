import Link from "next/link";

const DetailsNavigator = (props: {
  current: string;
  slugs: string[] | undefined;
  listUrl: string;
}) => {
  const { current, slugs, listUrl } = props;
  if (!slugs) return <></>;

  const index = slugs.indexOf(current) || 0;
  const previous = index > 0 ? slugs[index - 1] : "#";
  const next = index < slugs.length - 1 ? slugs[index + 1] : "#";

  return (
    <nav aria-label="pagination" style={{ paddingTop: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <ul className="pagination pagination-sm">
              <li className={`page-item ${previous == "#" ? "disabled" : ""}`}>
                <Link
                  className="page-link orange"
                  href={previous}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>

              <li className="page-item">
                <Link
                  className="page-link orange"
                  href={listUrl}
                  aria-label="Grid"
                >
                  <i
                    className="bx bx-grid-alt"
                    style={{ verticalAlign: "middle" }}
                  ></i>
                </Link>
              </li>

              <li className={`page-item ${next == "#" ? "disabled" : ""}`}>
                <Link
                  className="page-link orange"
                  href={next}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DetailsNavigator;

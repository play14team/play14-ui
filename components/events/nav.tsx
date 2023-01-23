import Link from "next/link";
import { useQuery } from "@apollo/client";
import { graphql } from "../../models";

const EventNavigatorQuery = graphql(`
  query EventNavigator {
    events(sort: "start:desc", pagination: { limit: 10000 }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`);

const EventNavigator = (props: { current: string }) => {
  const { data } = useQuery(EventNavigatorQuery);
  const slugs = data?.events?.data.map((i) => i.attributes?.slug as string);
  if (!slugs) return <></>;

  const index = slugs.indexOf(props.current) || 0;
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

              <li className={`page-item ${previous == "#" ? "disabled" : ""}`}>
                <Link
                  className="page-link orange"
                  href="/events"
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

    // <div className="d-flex list-unstyled justify-content-start">
    //   <li>
    //     <Link href={previous} className={previous == "#" ? "isDisabled" : ""}>
    //       <i
    //         className="bx bx-chevron-left-circle"
    //         style={{ fontSize: "25px" }}
    //       ></i>
    //     </Link>
    //   </li>
    //   <li>
    //     <Link href={"/events"}>
    //       <i className="bx bx-grid" style={{ fontSize: "25px" }}></i>
    //     </Link>
    //   </li>
    //   <li>
    //     <Link href={next} className={next == "#" ? "isDisabled" : ""}>
    //       <i
    //         className="bx bx-chevron-right-circle"
    //         style={{ fontSize: "25px" }}
    //       ></i>
    //     </Link>
    //   </li>
    // </div>
  );
};

export default EventNavigator;

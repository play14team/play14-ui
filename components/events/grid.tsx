import EventCard from "./card";
import { useQuery } from "@apollo/client";
import { graphql } from "../../models";
import Loader from "../layout/loader";
import Error from "../layout/error";
import { useState } from "react";
import Paging from "../layout/paging";

const EventsQuery = graphql(`
  query Events($page: Int!, $pageSize: Int!) {
    events(
      sort: "start:desc"
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          ...EventItem
        }
      }
      meta {
        pagination {
          page
          pageSize
          total
          pageCount
        }
      }
    }
  }
`);

const EventGrid = (props: { pageSize: number; paging: boolean }) => {
  const [pageSize] = useState(props.pageSize);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(EventsQuery, {
    variables: { page: page, pageSize: pageSize },
  });

  if (loading) return <Loader />;
  if (error) return <Error message={error.message} />;

  const pagination = data?.events?.meta.pagination;

  return (
    <>
      <div style={{ paddingTop: "20px" }}>
        {props.paging && pagination && (
          <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          />
        )}
      </div>
      <div className="events-area pt-70 pb-70">
        <div className="container">
          <div className="row">
            {data &&
              data.events?.data.map(
                (event) =>
                  event.attributes && (
                    <EventCard key={event.id} event={event.attributes} />
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventGrid;

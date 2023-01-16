import type { NextPage } from "next";
import Head from "next/head";
import { graphql } from "../../models";

const PlayersQuery = graphql(`
  query Players {
    players(sort: "name:asc", pagination: { limit: 9 }) {
      data {
        id
        attributes {
          slug
          name
          position
          company
          tagline
          bio
          country
          avatar {
            data {
              attributes {
                name
                url
              }
            }
          }
          socialNetworks {
            url
            type
          }
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`);

const Players: NextPage = () => {
  return (
    <section id="players">
      <Head>
        <title>#play14 - Players</title>
      </Head>
      <h1>Players coming soon</h1>
    </section>
  );
};

export default Players;

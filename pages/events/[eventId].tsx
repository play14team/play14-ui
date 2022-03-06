import type { NextPage } from "next";
import Layout from "../../components/layout";
import Head from "next/head";
import Container from "../../components/container";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";

const EventDetails: NextPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;

  return (
    <Layout>
      <Head>
        <title>#play14 - Event Details</title>
      </Head>
      <Container>
        <div className={styles.container}>
          <h1>Event details for {eventId} coming soon</h1>
        </div>
      </Container>
    </Layout>
  );
};

export default EventDetails;

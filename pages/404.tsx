import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import notound from "/public/play14_broken.png";

const NotFoundPage = () => (
  <Layout>
    <Head>
      <title>Page not found</title>
    </Head>
    <h1>404: Not Found</h1>
    <p>You just hit a page that doesn&#39;t exist...</p>
    <p>
      Please, stop playing with our URLs and{" "}
      <b>
        <Link href={"/"} className="orange">
          go back home
        </Link>
      </b>
    </p>
    <Image
      src={notound}
      alt="#play14 404"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
);

export default NotFoundPage;

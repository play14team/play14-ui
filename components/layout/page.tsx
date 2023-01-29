import { ApolloError } from "@apollo/client";
import Head from "next/head";
import ErrorMessage from "./error";
import Loader from "./loader";

type PageProps = {
  pageName: string;
  description?: string | undefined;
  loading?: boolean | undefined;
  error?: ApolloError | undefined;
  children: React.ReactNode;
};

const Page = (props: PageProps) => {
  const { pageName, description, loading, error, children } = props;
  return (
    <section id={pageName}>
      <Head>
        <title>#play14 - {pageName}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <h1 className="pt-5">{pageName}</h1>
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {children && children}
      {!children && <p>Nothing there yet!</p>}
    </section>
  );
};

export default Page;

import type { NextPage } from "next";
import { client } from "../../graphql/apollo";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Html from "../../components/layout/html";
import { Hosting, HostingDocument } from "../../models/graphql";
import Page from "../../components/layout/page";

export const getStaticProps: GetStaticProps<{ hosting: Hosting }> = async (
  context
) => {
  const { data } = await client.query({ query: HostingDocument });

  return {
    props: { hosting: data.hosting?.data?.attributes },
  };
};

const Organizing: NextPage = ({
  hosting,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page name="All you need to know about hosting a #play14 event">
      <div className="pt-100 pb-70">
        <div className="container">
          <Html>{hosting.content}</Html>
        </div>
      </div>
    </Page>
  );
};

export default Organizing;

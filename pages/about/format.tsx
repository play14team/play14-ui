import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import Page from "../../components/layout/page";
import { Enum_Expectation_Type } from "../../models/graphql";
import Expectations from "../../components/home/expectations";
import { client } from "../../graphql/apollo";
import { gql } from "@apollo/client";
import Html from "../../components/layout/html";

export const getStaticProps: GetStaticProps<{
  openspace: string;
  lawOfTwoFeet: string;
  butterfly: string;
  bumblebee: string;
  schedule: string;
}> = async (context) => {
  const { data } = await client.query({
    query: gql`
      query {
        format {
          data {
            attributes {
              openspace
              lawOfTwoFeet
              butterfly
              bumblebee
              schedule
            }
          }
        }
      }
    `,
  });

  return {
    props: { ...data.format.data.attributes },
  };
};

const Format: NextPage = ({
  openspace,
  lawOfTwoFeet,
  butterfly,
  bumblebee,
  schedule,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page name="Our format">
      <section id="open space" className="container pt-70">
        <Html>{openspace}</Html>

        <div className="pt-70">
          <h3>The Law of Two Feet</h3>
          <div className="row">
            <div className="col-lg-6 col-md-12 pt-5">
              <Html>{lawOfTwoFeet}</Html>
            </div>
            <div className="col-lg-6 col-md-12 pt-5">
              <Image
                src="/openspace/two-feet.png"
                alt="law of two feet"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="container pt-70">
          <h3>Bumblebees and Butterflies</h3>
          <div className="row">
            <div className="col-lg-4 col-md-12 pt-5">
              <Image
                src="/openspace/bumblebee.png"
                alt="Bumblebee"
                width={400}
                height={400}
              />
              <Html>{bumblebee}</Html>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 col-md-12 pt-5">
              <Html>{butterfly}</Html>
              <Image
                src="/openspace/butterfly.png"
                alt="Butterfly"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace">
        <div className="container pt-100">
          <Html>{schedule}</Html>
          <Expectations type={Enum_Expectation_Type.Secondary} />
        </div>
      </section>
    </Page>
  );
};

export default Format;

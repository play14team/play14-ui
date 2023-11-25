import Expectations from "@/components/home/expectations"
import HtmlContent from "@/components/layout/html-content"
import Page from "@/components/layout/page"
import { getClient } from "@/libs/apollo-client"
import { Enum_Expectation_Type, FormatDocument } from "@/models/graphql"
import { Metadata } from "next"
import Image from "next/image"
import bumblebeeImage from "public/openspace/bumblebee.png"
import butterflyImage from "public/openspace/butterfly.png"
import lawOfTwoFeetImage from "public/openspace/two-feet.png"

export const metadata: Metadata = {
  title: "About | Our format",
}

export default async function Format() {
  const { data } = await getClient().query({ query: FormatDocument })
  const { openspace, bumblebee, butterfly, lawOfTwoFeet, schedule } =
    data.format?.data?.attributes!

  return (
    <Page name="Our format">
      <section id="open space" className="container pt-70">
        <HtmlContent>{openspace!}</HtmlContent>
        <div className="pt-70">
          <h3>The Law of Two Feet</h3>
          <div className="row">
            <div className="col-lg-6 col-md-12 pt-5">
              <HtmlContent>{lawOfTwoFeet!}</HtmlContent>
            </div>
            <div className="col-lg-6 col-md-12 pt-5">
              <Image
                src={lawOfTwoFeetImage}
                alt="law of two feet"
                style={{
                  borderRadius: "10px",
                  boxShadow: "5px 5px #eee",
                }}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="container pt-70">
          <h3>Bumblebees and Butterflies</h3>
          <div className="row">
            <div className="col-lg-4 col-md-12 pt-5">
              <Image
                src={bumblebeeImage}
                alt="Bumblebee"
                style={{
                  borderRadius: "10px",
                  boxShadow: "5px 5px #eee",
                }}
                unoptimized
              />
              <HtmlContent>{bumblebee!}</HtmlContent>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 col-md-12 pt-5">
              <HtmlContent>{butterfly!}</HtmlContent>
              <Image
                src={butterflyImage}
                alt="Butterfly"
                style={{
                  borderRadius: "10px",
                  boxShadow: "5px 5px #eee",
                }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace">
        <div className="container pt-100">
          <HtmlContent>{schedule!}</HtmlContent>
          <Expectations type={Enum_Expectation_Type.Secondary} />
        </div>
      </section>
    </Page>
  )
}

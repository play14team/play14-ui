import Expectations from "@/components/home/expectations"
import HtmlContent from "@/components/layout/html-content"
import Page from "@/components/layout/page"
import { getClient } from "@/libs/apollo-client"
import { Enum_Expectation_Type, FormatDocument } from "@/models/graphql"
import Image from "next/image"

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
                src="/openspace/two-feet.png"
                alt="law of two feet"
                width={400}
                height={400}
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
                src="/openspace/bumblebee.png"
                alt="Bumblebee"
                width={400}
                height={400}
                unoptimized
              />
              <HtmlContent>{bumblebee!}</HtmlContent>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 col-md-12 pt-5">
              <HtmlContent>{butterfly!}</HtmlContent>
              <Image
                src="/openspace/butterfly.png"
                alt="Butterfly"
                width={400}
                height={400}
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
